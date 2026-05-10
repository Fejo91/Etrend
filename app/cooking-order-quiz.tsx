import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { type Top25Pool } from "../constants/topMeals";
import { type QuizMode } from "../types/quiz";
import CookingOrderQuizScreen from "./CookingOrderQuizScreen";

export default function CookingOrderQuizRoute() {
  const params = useLocalSearchParams<{
    autoStart?: string;
    pool?: string;
    mode?: string;
    mealId?: string;
  }>();

  const initialQuestionPool: Top25Pool = params.pool === "top25" ? "top25" : "all";
  const initialMode: QuizMode | undefined =
    params.mode === "ranked"
      ? "ranked"
      : params.mode === "practice"
      ? "practice"
      : undefined;
  const initialMealId = typeof params.mealId === "string" ? params.mealId : undefined;
  const autoStart = params.autoStart === "1";

  return (
    <CookingOrderQuizScreen
      onBack={() => router.back()}
      initialQuestionPool={initialQuestionPool}
      initialMode={initialMode}
      initialMealId={initialMealId}
      autoStart={autoStart}
    />
  );
}
