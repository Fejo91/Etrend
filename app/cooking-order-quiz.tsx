import { router } from "expo-router";
import React from "react";
import CookingOrderQuizScreen from "./CookingOrderQuizScreen";

export default function CookingOrderQuizRoute() {
  return <CookingOrderQuizScreen onBack={() => router.back()} />;
}
