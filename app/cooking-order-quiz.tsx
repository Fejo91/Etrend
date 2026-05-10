import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { type Top25Pool } from "../constants/topMeals";
import CookingOrderQuizScreen from "./CookingOrderQuizScreen";

export default function CookingOrderQuizRoute() {
  const params = useLocalSearchParams<{
    autoStart?: string;
    pool?: string;
    mealId?: string;
  }>();

  const initialQuestionPool: Top25Pool = params.pool === "top25" ? "top25" : "all";
  const initialMealId = typeof params.mealId === "string" ? params.mealId : undefined;
  const autoStart = params.autoStart === "1";

  return (
    <CookingOrderQuizScreen
      onBack={() => router.back()}
      initialQuestionPool={initialQuestionPool}
      initialMealId={initialMealId}
      autoStart={autoStart}
    />
  );
}
