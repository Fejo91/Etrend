// app/quiz.tsx
import { router } from "expo-router";
import React from "react";
import QuizScreen from "./QuizScreen";

export default function QuizRoute() {
  return (
    <QuizScreen onBack={() => router.back()} />
  );
}
