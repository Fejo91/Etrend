import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = "#020617";
      document.documentElement.style.backgroundColor = "#020617";
    }
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#020617" } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="etrend" />
      <Stack.Screen name="quiz" />
      <Stack.Screen name="cooking-order-quiz" />
      <Stack.Screen name="next-step-quiz" />
      <Stack.Screen name="extra" />
      <Stack.Screen name="training" />
      <Stack.Screen name="modal" />
      <Stack.Screen name="shopping-cart" />
    </Stack>
  );
}
