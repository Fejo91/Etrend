import { Platform } from "react-native";

const QUIZ_REMINDER_NOTIFICATION_TYPE = "quiz_reminder";
const QUIZ_REMINDER_CHANNEL_ID = "quiz-reminders";

type NotificationModule = typeof import("expo-notifications");

async function getNotificationsModule(): Promise<NotificationModule | null> {
  if (Platform.OS === "web") {
    return null;
  }

  try {
    return await import("expo-notifications");
  } catch {
    return null;
  }
}

async function ensureAndroidReminderChannel(
  Notifications: NotificationModule
): Promise<void> {
  if (Platform.OS !== "android") {
    return;
  }

  await Notifications.setNotificationChannelAsync(QUIZ_REMINDER_CHANNEL_ID, {
    name: "Kvíz emlékeztetők",
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: "#38bdf8",
  });
}

function isPermissionGranted(status: unknown): boolean {
  return status === "granted";
}

export async function requestQuizReminderPermission(): Promise<boolean> {
  const Notifications = await getNotificationsModule();
  if (!Notifications) {
    return false;
  }

  await ensureAndroidReminderChannel(Notifications);

  const existingPermission = await Notifications.getPermissionsAsync();
  let finalStatus = existingPermission.status;

  if (!isPermissionGranted(finalStatus)) {
    const requestedPermission = await Notifications.requestPermissionsAsync();
    finalStatus = requestedPermission.status;
  }

  return isPermissionGranted(finalStatus);
}

export async function cancelQuizReminderNotifications(): Promise<void> {
  const Notifications = await getNotificationsModule();
  if (!Notifications) {
    return;
  }

  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const reminderNotifications = scheduled.filter((notification) => {
    const data = notification.content.data as Record<string, unknown> | undefined;
    return (
      data?.type === QUIZ_REMINDER_NOTIFICATION_TYPE ||
      data?.targetRoute === "/random-quiz"
    );
  });

  await Promise.all(
    reminderNotifications.map((notification) =>
      Notifications.cancelScheduledNotificationAsync(notification.identifier)
    )
  );
}

export async function scheduleQuizReminderNotifications(
  intervalMinutes: number
): Promise<boolean> {
  const Notifications = await getNotificationsModule();
  if (!Notifications) {
    return false;
  }

  if (![30, 60, 120].includes(intervalMinutes)) {
    return false;
  }

  await ensureAndroidReminderChannel(Notifications);
  await cancelQuizReminderNotifications();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Kvízidő 🧠",
      body: "Csinálj egy gyors Top25 vagy kiegészítő kvízt.",
      data: {
        type: QUIZ_REMINDER_NOTIFICATION_TYPE,
        targetRoute: "/random-quiz",
      },
      ...(Platform.OS === "android" ? { channelId: QUIZ_REMINDER_CHANNEL_ID } : {}),
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: intervalMinutes * 60,
      repeats: true,
    },
  });

  return true;
}

export async function setupQuizReminderNotificationResponseHandler(
  onNavigate: (targetRoute: string) => void
): Promise<() => void> {
  const Notifications = await getNotificationsModule();
  if (!Notifications) {
    return () => {
      // noop
    };
  }

  const navigateFromData = (data: unknown) => {
    if (!data || typeof data !== "object") {
      return;
    }

    const payload = data as Record<string, unknown>;
    const targetRoute =
      typeof payload.targetRoute === "string" ? payload.targetRoute : undefined;

    if (targetRoute === "/random-quiz") {
      onNavigate(targetRoute);
    }
  };

  const responseSubscription = Notifications.addNotificationResponseReceivedListener(
    (response) => {
      navigateFromData(response.notification.request.content.data);
    }
  );

  Notifications.getLastNotificationResponseAsync()
    .then((response) => {
      if (response) {
        navigateFromData(response.notification.request.content.data);
      }
    })
    .catch(() => {
      // noop
    });

  return () => {
    responseSubscription.remove();
  };
}
