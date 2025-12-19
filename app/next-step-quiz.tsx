// app/next-step-quiz.tsx
import { router } from "expo-router";
import React from "react";
import NextStepQuizScreen from "./NextStepQuizScreen";

export default function NextStepQuizRoute() {
  return (
    <NextStepQuizScreen onBack={() => router.back()} />
  );
}
