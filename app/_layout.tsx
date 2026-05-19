import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setupQuizReminderNotificationResponseHandler } from "../features/notifications/quizReminderNotifications";

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
