import Constants from "expo-constants";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setupQuizReminderNotificationResponseHandler } from "../features/notifications/quizReminderNotifications";
import { isTop25Meal, TOP_25_SHOPPING_MEAL_IDS } from "../constants/topMeals";
import MEALS from "../types/meals";
import COOKING_INSTRUCTIONS from "../types/preparations";

const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;
const SCHEDULED_HALF_HOURS_AHEAD = 48;
const TOP25_NOTIFICATION_TYPE = "top25-hourly-quiz";

const getTop25MealsWithEnoughSteps = () =>
  MEALS.filter((meal) => {
    if (!isTop25Meal(meal.id)) {
      return false;
    }

    const instructions = COOKING_INSTRUCTIONS.find((item) => item.mealId === meal.id);
    return !!instructions && instructions.steps.length >= 4;
  });

const pickRandomMeal = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const formatShoppingMealName = (mealId: string) =>
  mealId
    .split("-")
    .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1)}` : part))
    .join(" ");

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = "#020617";
      document.documentElement.style.backgroundColor = "#020617";
    }
  }, []);

  useEffect(() => {
    let cleanup = () => {
      // noop
    };

    setupQuizReminderNotificationResponseHandler((targetRoute) => {
      if (targetRoute === "/random-quiz") {
        router.push("/random-quiz");
      }
    })
      .then((nextCleanup) => {
        cleanup = nextCleanup;
      })
      .catch(() => {
        // noop
      });

    return () => {
      cleanup();
    };
  }, [router]);

  useEffect(() => {
    let responseSubscription: { remove: () => void } | null = null;

    const setupNotifications = async () => {
      if (Platform.OS !== "android") {
        return;
      }

      if (Constants.appOwnership === "expo") {
        return;
      }

      const Notifications = await import("expo-notifications");

      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowBanner: true,
          shouldShowList: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });

      const existingPermission = await Notifications.getPermissionsAsync();
      let finalStatus = existingPermission.status;

      if (finalStatus !== "granted") {
        const requested = await Notifications.requestPermissionsAsync();
        finalStatus = requested.status;
      }

      if (finalStatus !== "granted") {
        return;
      }

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("top25-hourly", {
          name: "Top25 emlékeztetők",
          importance: Notifications.AndroidImportance.HIGH,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#38bdf8",
        });
      }

      const top25QuizMeals = getTop25MealsWithEnoughSteps();
      const top25ShoppingMealIds = Array.from(TOP_25_SHOPPING_MEAL_IDS);

      if (top25QuizMeals.length === 0 && top25ShoppingMealIds.length === 0) {
        return;
      }

      const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
      const ownNotifications = scheduledNotifications.filter((notification) => {
        const data = notification.content.data as Record<string, unknown> | undefined;
        return data?.type === TOP25_NOTIFICATION_TYPE;
      });

      await Promise.all(
        ownNotifications.map((notification) =>
          Notifications.cancelScheduledNotificationAsync(notification.identifier)
        )
      );

      for (let offset = 1; offset <= SCHEDULED_HALF_HOURS_AHEAD; offset += 1) {
        const pickQuiz =
          top25QuizMeals.length > 0 &&
          (top25ShoppingMealIds.length === 0 || Math.random() < 0.5);

        if (pickQuiz) {
          const selectedMeal = pickRandomMeal(top25QuizMeals);

          await Notifications.scheduleNotificationAsync({
            content: {
              title: "2a. Kérdés–Válasz kvíz",
              body: `Top25 étel: ${selectedMeal.name}`,
              data: {
                type: TOP25_NOTIFICATION_TYPE,
                target: "cooking-order-quiz",
                mealId: selectedMeal.id,
                mode: "practice",
                pool: "top25",
                autoStart: true,
              },
              ...(Platform.OS === "android" ? { channelId: "top25-hourly" } : {}),
            },
            trigger: new Date(Date.now() + offset * THIRTY_MINUTES_IN_MS),
          });

          continue;
        }

        const selectedShoppingMealId = pickRandomMeal(top25ShoppingMealIds);
        const selectedShoppingMealName = formatShoppingMealName(selectedShoppingMealId);

        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Top25 bevásárlókocsi",
            body: `Top25 étel: ${selectedShoppingMealName}`,
            data: {
              type: TOP25_NOTIFICATION_TYPE,
              target: "shopping-cart",
              mealId: selectedShoppingMealId,
            },
            ...(Platform.OS === "android" ? { channelId: "top25-hourly" } : {}),
          },
          trigger: new Date(Date.now() + offset * THIRTY_MINUTES_IN_MS),
        });
      }
    };

    const navigateFromData = (data: unknown) => {
      if (!data || typeof data !== "object") {
        return;
      }

      const payload = data as Record<string, unknown>;
      const target = typeof payload.target === "string" ? payload.target : undefined;
      const mealId = typeof payload.mealId === "string" ? payload.mealId : undefined;

      if (target === "cooking-order-quiz") {
        router.push({
          pathname: "/cooking-order-quiz",
          params: {
            autoStart: "1",
            pool: "top25",
            mode: "practice",
            ...(mealId ? { mealId } : {}),
          },
        });
        return;
      }

      if (target === "shopping-cart") {
        router.push({
          pathname: "/shopping-cart",
          params: {
            ...(mealId ? { mealId } : {}),
          },
        });
      }
    };

    setupNotifications()
      .then(async () => {
        if (Platform.OS !== "android" || Constants.appOwnership === "expo") {
          return;
        }

        const Notifications = await import("expo-notifications");

        responseSubscription = Notifications.addNotificationResponseReceivedListener(
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
      })
      .catch(() => {
        // noop
      });

    return () => {
      responseSubscription?.remove();
    };
  }, [router]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#020617" } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="etrend" />
        <Stack.Screen name="quiz" />
        <Stack.Screen name="cooking-order-quiz" />
        <Stack.Screen name="next-step-quiz" />
        <Stack.Screen name="extra" />
        <Stack.Screen name="random-quiz" />
        <Stack.Screen name="training" />
        <Stack.Screen name="modal" />
        <Stack.Screen name="shopping-cart" />
        <Stack.Screen name="top25-shopping-list" />
        <Stack.Screen name="top25-quiz-hub" />
        <Stack.Screen name="top25-order-quiz" />
        <Stack.Screen name="top25-next-step-quiz" />
        <Stack.Screen name="top25-ingredient-quiz" />
      </Stack>
    </GestureHandlerRootView>
  );
}
