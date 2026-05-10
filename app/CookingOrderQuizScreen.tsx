import React, { useEffect, useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import MEALS from "../types/meals";
import COOKING_INSTRUCTIONS, {
  type CookingInstruction,
} from "../types/preparations";
import { matchesTop25Pool, type Top25Pool } from "../constants/topMeals";

interface Question {
  mealId: string;
  mealName: string;
  correctOrder: string[];
}

interface CookingOrderQuizScreenProps {
  onBack: () => void;
  initialQuestionPool?: Top25Pool;
  initialMealId?: string;
  autoStart?: boolean;
}

export default function CookingOrderQuizScreen({
  onBack,
  initialQuestionPool,
  initialMealId,
  autoStart = false,
}: CookingOrderQuizScreenProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [questionPool, setQuestionPool] = useState<Top25Pool>(
    initialQuestionPool ?? "all"
  );
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [answerState, setAnswerState] = useState<"idle" | "correct" | "incorrect">("idle");
  const [revealedFirstStep, setRevealedFirstStep] = useState(false);
  const [highlightedWrongSteps, setHighlightedWrongSteps] = useState<
    Set<string>
  >(new Set());
  const [hasAutoStarted, setHasAutoStarted] = useState(false);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getQuizSteps = (instruction: CookingInstruction): string[] => {
    if (instruction.quizSteps && instruction.quizSteps.length > 0) {
      return instruction.quizSteps;
    }

    return instruction.steps;
  };

  const loadQuestion = (
    forcedMealId?: string,
    poolOverride?: Top25Pool
  ) => {
    const activePool = poolOverride ?? questionPool;

    const mealsWithInstructions = MEALS.filter((meal) => {
      if (!matchesTop25Pool(meal.id, activePool)) {
        return false;
      }

      const instructions = COOKING_INSTRUCTIONS.find(
        (ci) => ci.mealId === meal.id
      );
      return instructions && getQuizSteps(instructions).length >= 4;
    });

    if (mealsWithInstructions.length === 0) {
      Alert.alert("Hiba", "Nincs elérhető kérdés");
      return;
    }

    const forcedMeal = forcedMealId
      ? mealsWithInstructions.find((meal) => meal.id === forcedMealId)
      : undefined;
    const randomMeal =
      forcedMeal ??
      mealsWithInstructions[
        Math.floor(Math.random() * mealsWithInstructions.length)
      ];
    const instructions = COOKING_INSTRUCTIONS.find(
      (ci) => ci.mealId === randomMeal.id
    )!;
    const sourceSteps = getQuizSteps(instructions);

    // Lépésszám: 4-7 között, de maximum az összes lépés száma
    const stepCount = Math.min(
      Math.floor(Math.random() * 4) + 4,
      sourceSteps.length
    );
    
    // Random kezdőpont: az utolsó (stepCount) lépésig lehet kezdeni
    const maxStartIndex = Math.max(0, sourceSteps.length - stepCount);
    const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
    
    // Összefüggő szekvencia kiválasztása a random pontból
    const selectedSteps = sourceSteps.slice(startIndex, startIndex + stepCount);

    const question: Question = {
      mealId: randomMeal.id,
      mealName: randomMeal.name,
      correctOrder: selectedSteps,
    };

    setCurrentQuestion(question);
    setUserOrder(shuffleArray(selectedSteps));
    setAnswerState("idle");
    setHintsUsedCount(0);
    setRevealedFirstStep(false);
    setHighlightedWrongSteps(new Set());
  };

  const startQuiz = (forcedMealId?: string, poolOverride?: Top25Pool) => {
    setHasStarted(true);
    loadQuestion(forcedMealId, poolOverride);
  };

  useEffect(() => {
    if (!autoStart || hasAutoStarted || hasStarted || currentQuestion) {
      return;
    }

    const selectedPool = initialQuestionPool ?? "top25";

    setQuestionPool(selectedPool);
    startQuiz(initialMealId, selectedPool);
    setHasAutoStarted(true);
  }, [
    autoStart,
    hasAutoStarted,
    hasStarted,
    currentQuestion,
    initialQuestionPool,
    initialMealId,
  ]);

  const moveStep = (fromIndex: number, direction: "up" | "down") => {
    if (answerState === "correct") return;

    const newOrder = [...userOrder];
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;

    if (toIndex < 0 || toIndex >= newOrder.length) return;

    [newOrder[fromIndex], newOrder[toIndex]] = [
      newOrder[toIndex],
      newOrder[fromIndex],
    ];
    setUserOrder(newOrder);
  };

  const submitAnswer = () => {
    if (!currentQuestion || answerState === "correct") return;

    const isCorrect =
      JSON.stringify(userOrder) === JSON.stringify(currentQuestion.correctOrder);

    if (isCorrect) {
      setAnswerState("correct");
    } else {
      setAnswerState("incorrect");
    }
  };

  const getHint = () => {
    if (!currentQuestion) return;
    if (hintsUsedCount >= 2) {
      Alert.alert("Nincs több segítség", "Már felhasználtad a 2 segítséget");
      return;
    }

    if (hintsUsedCount === 0) {
      setRevealedFirstStep(true);
      setHintsUsedCount(1);
      Alert.alert(
        "Segítség 1/2",
        `Az első lépés: "${currentQuestion.correctOrder[0]}"`
      );
    } else if (hintsUsedCount === 1) {
      const wrongSteps = new Set<string>();
      userOrder.forEach((step, index) => {
        if (step !== currentQuestion.correctOrder[index]) {
          wrongSteps.add(step);
        }
      });
      setHighlightedWrongSteps(wrongSteps);
      setHintsUsedCount(2);
      Alert.alert("Segítség 2/2", "A rossz helyen lévő lépések pirossal vannak kiemelve");
    }
  };

  const nextQuestion = () => {
    loadQuestion();
  };

  const exitQuiz = () => {
    setHasStarted(false);
    setCurrentQuestion(null);
    setAnswerState("idle");
    setHintsUsedCount(0);
    setRevealedFirstStep(false);
    setHighlightedWrongSteps(new Set());
  };

  if (!hasStarted) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.title}>Elkészítés Sorrend Kvíz</Text>
          <Text style={styles.description}>
            Rendezd helyes sorrendbe az elkészítés lépéseit
          </Text>

          <Text style={styles.poolLabel}>Kérdéskör:</Text>
          <View style={styles.poolSelectorRow}>
            <TouchableOpacity
              style={[
                styles.poolSelectorButton,
                questionPool === "all" && styles.poolSelectorButtonActive,
              ]}
              onPress={() => setQuestionPool("all")}
            >
              <Text
                style={[
                  styles.poolSelectorButtonText,
                  questionPool === "all" && styles.poolSelectorButtonTextActive,
                ]}
              >
                Összes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.poolSelectorButton,
                questionPool === "top25" && styles.poolSelectorButtonActive,
              ]}
              onPress={() => setQuestionPool("top25")}
            >
              <Text
                style={[
                  styles.poolSelectorButtonText,
                  questionPool === "top25" && styles.poolSelectorButtonTextActive,
                ]}
              >
                Top 25
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.modeButton}
            onPress={() => startQuiz()}
          >
            <Text style={styles.modeButtonTitle}>Kvíz indítása</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>Vissza a főmenübe</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  if (!currentQuestion) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Kérdés betöltése...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.questionTitle}>{currentQuestion.mealName}</Text>
        <Text style={styles.instruction}>
          Rendezd helyes sorrendbe az elkészítés lépéseit!
        </Text>

        <View style={styles.stepsContainer}>
          {userOrder.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={styles.stepContent}>
                <Text style={styles.stepNumber}>{index + 1}.</Text>
                <Text
                  style={[
                    styles.stepText,
                    highlightedWrongSteps.has(step) && styles.wrongStepText,
                    revealedFirstStep &&
                      index === 0 &&
                      step === currentQuestion.correctOrder[0] &&
                      styles.correctStepText,
                  ]}
                >
                  {step}
                </Text>
              </View>

              <View style={styles.stepButtons}>
                <TouchableOpacity
                  style={[styles.moveButton, index === 0 && styles.disabledButton]}
                  onPress={() => moveStep(index, "up")}
                  disabled={index === 0 || answerState === "correct"}
                >
                  <Text style={styles.moveButtonText}>↑</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.moveButton,
                    index === userOrder.length - 1 && styles.disabledButton,
                    answerState === "correct" && styles.disabledButton,
                  ]}
                  onPress={() => moveStep(index, "down")}
                  disabled={index === userOrder.length - 1 || answerState === "correct"}
                >
                  <Text style={styles.moveButtonText}>↓</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.hintButton, hintsUsedCount >= 2 && styles.disabledButton]}
            onPress={getHint}
            disabled={hintsUsedCount >= 2 || answerState === "correct"}
          >
            <Text style={styles.hintButtonText}>
              Segítség ({hintsUsedCount}/2)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.submitButton, answerState === "correct" && styles.disabledButton]}
            onPress={submitAnswer}
            disabled={answerState === "correct"}
          >
            <Text style={styles.submitButtonText}>Ellenőrzés</Text>
          </TouchableOpacity>
        </View>

        {answerState !== "idle" && (
          <View style={styles.feedbackCard}>
            {answerState === "correct" ? (
              <>
                <Text style={styles.feedbackTitle}>Ügyes vagy! Jó sorrend. ✅</Text>
                <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
                  <Text style={styles.nextButtonText}>Következő kérdés</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.feedbackTitle}>Rossz sorrend. Javítsd ki. 🔁</Text>
            )}
          </View>
        )}

        <TouchableOpacity style={styles.exitButton} onPress={exitQuiz}>
          <Text style={styles.exitButtonText}>Kilépés</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#94a3b8",
    marginBottom: 30,
    textAlign: "center",
  },
  poolLabel: {
    fontSize: 13,
    color: "#cbd5e1",
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  poolSelectorRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  } as any,
  poolSelectorButton: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#0f172a",
  },
  poolSelectorButtonActive: {
    borderColor: "#38bdf8",
    backgroundColor: "#38bdf8",
  },
  poolSelectorButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  poolSelectorButtonTextActive: {
    color: "#0f172a",
  },
  modeButton: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#334155",
  },
  rankedButton: {
    borderColor: "#38bdf8",
    borderWidth: 2,
  },
  modeButtonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  modeButtonDescription: {
    fontSize: 14,
    color: "#94a3b8",
  },
  backButton: {
    backgroundColor: "#334155",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  backButtonText: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modeLabel: {
    fontSize: 14,
    color: "#38bdf8",
    fontWeight: "600",
  },
  questionCount: {
    fontSize: 14,
    color: "#94a3b8",
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 10,
  },
  instruction: {
    fontSize: 16,
    color: "#94a3b8",
    marginBottom: 30,
  },
  stepsContainer: {
    marginBottom: 30,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },
  stepContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#38bdf8",
    marginRight: 10,
    minWidth: 30,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: "#e5e7eb",
  },
  wrongStepText: {
    color: "#ef4444",
  },
  correctStepText: {
    color: "#22c55e",
  },
  stepButtons: {
    flexDirection: "column",
    gap: 5,
  },
  moveButton: {
    backgroundColor: "#334155",
    padding: 8,
    borderRadius: 8,
    width: 40,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#1e293b",
    opacity: 0.5,
  },
  moveButtonText: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  hintButton: {
    flex: 1,
    backgroundColor: "#334155",
    padding: 16,
    borderRadius: 12,
  },
  hintButtonText: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#38bdf8",
    padding: 16,
    borderRadius: 12,
  },
  submitButtonText: {
    color: "#020617",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  exitButton: {
    backgroundColor: "#334155",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  exitButtonText: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  attemptText: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 15,
  },
  loadingText: {
    fontSize: 18,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 100,
  },
  scoreCard: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#38bdf8",
  },
  scoreMealName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 20,
    textAlign: "center",
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  scoreLabel: {
    fontSize: 16,
    color: "#94a3b8",
  },
  scoreValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e5e7eb",
  },
  rankedNote: {
    fontSize: 14,
    color: "#38bdf8",
    textAlign: "center",
    marginTop: 15,
    fontStyle: "italic",
  },
  nextButton: {
    backgroundColor: "#38bdf8",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  nextButtonText: {
    color: "#020617",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionsCount: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 20,
  },
});
