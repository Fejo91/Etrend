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
import COOKING_INSTRUCTIONS from "../types/preparations";
import { HintType, QuizMode, QuizScore } from "../types/quiz";
import { matchesTop25Pool, type Top25Pool } from "../constants/topMeals";

interface Question {
  mealId: string;
  mealName: string;
  correctOrder: string[];
}

interface CookingOrderQuizScreenProps {
  onBack: () => void;
  initialQuestionPool?: Top25Pool;
  initialMode?: QuizMode;
  initialMealId?: string;
  autoStart?: boolean;
}

export default function CookingOrderQuizScreen({
  onBack,
  initialQuestionPool,
  initialMode,
  initialMealId,
  autoStart = false,
}: CookingOrderQuizScreenProps) {
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [questionPool, setQuestionPool] = useState<Top25Pool>(
    initialQuestionPool ?? "all"
  );
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [score, setScore] = useState<QuizScore | null>(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
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
      return instructions && instructions.steps.length >= 4;
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

    // Lépésszám: 4-7 között, de maximum az összes lépés száma
    const stepCount = Math.min(
      Math.floor(Math.random() * 4) + 4,
      instructions.steps.length
    );
    
    // Random kezdőpont: az utolsó (stepCount) lépésig lehet kezdeni
    const maxStartIndex = Math.max(0, instructions.steps.length - stepCount);
    const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
    
    // Összefüggő szekvencia kiválasztása a random pontból
    const selectedSteps = instructions.steps.slice(startIndex, startIndex + stepCount);

    const question: Question = {
      mealId: randomMeal.id,
      mealName: randomMeal.name,
      correctOrder: selectedSteps,
    };

    setCurrentQuestion(question);
    setUserOrder(shuffleArray(selectedSteps));
    setHintsUsedCount(0);
    setAttemptCount(0);
    setStartTime(Date.now());
    setRevealedFirstStep(false);
    setHighlightedWrongSteps(new Set());
  };

  const startQuiz = (selectedMode: QuizMode, forcedMealId?: string) => {
    setMode(selectedMode);
    setQuestionsAnswered(0);
    setScore(null);
    loadQuestion(forcedMealId);
  };

  useEffect(() => {
    if (!autoStart || hasAutoStarted || mode || currentQuestion) {
      return;
    }

    const selectedPool = initialQuestionPool ?? "top25";
    const selectedMode = initialMode ?? "practice";

    setQuestionPool(selectedPool);
    setMode(selectedMode);
    setQuestionsAnswered(0);
    setScore(null);
    loadQuestion(initialMealId, selectedPool);
    setHasAutoStarted(true);
  }, [
    autoStart,
    hasAutoStarted,
    mode,
    currentQuestion,
    initialQuestionPool,
    initialMode,
    initialMealId,
  ]);

  const moveStep = (fromIndex: number, direction: "up" | "down") => {
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
    if (!currentQuestion) return;

    const isCorrect =
      JSON.stringify(userOrder) === JSON.stringify(currentQuestion.correctOrder);

    const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
    const newAttemptCount = attemptCount + 1;
    setAttemptCount(newAttemptCount);

    if (isCorrect) {
      const calculatedScore =
        100 -
        hintsUsedCount * 15 -
        (newAttemptCount - 1) * 10 -
        Math.floor(timeElapsed / 30);
      const finalScore = Math.max(0, calculatedScore);

      const hintsUsed: HintType[] = [];
      if (revealedFirstStep) hintsUsed.push("first_step");
      if (highlightedWrongSteps.size > 0) hintsUsed.push("wrong_steps");

      const quizScore: QuizScore = {
        mode: mode!,
        mealId: currentQuestion.mealId,
        mealName: currentQuestion.mealName,
        correctOnFirstTry: newAttemptCount === 1,
        attempts: newAttemptCount,
        timeSeconds: timeElapsed,
        hintsUsed: hintsUsed,
        score: finalScore,
        timestamp: new Date(),
      };

      setScore(quizScore);
      setQuestionsAnswered(questionsAnswered + 1);
    } else {
      Alert.alert("Helytelen", "Próbáld újra!");
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
    setScore(null);
    loadQuestion();
  };

  const exitQuiz = () => {
    setMode(null);
    setCurrentQuestion(null);
    setScore(null);
    setQuestionsAnswered(0);
  };

  if (!mode) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.title}>Elkészítés Sorrend Kvíz</Text>
          <Text style={styles.description}>
            Válaszd ki a módot, amelyben játszani szeretnél
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
            onPress={() => startQuiz("practice")}
          >
            <Text style={styles.modeButtonTitle}>Gyakorló mód</Text>
            <Text style={styles.modeButtonDescription}>
              Gyakorolj nyomás nélkül, nincsenek következmények
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modeButton, styles.rankedButton]}
            onPress={() => startQuiz("ranked")}
          >
            <Text style={styles.modeButtonTitle}>Ranglista mód</Text>
            <Text style={styles.modeButtonDescription}>
              Az eredményeid mentésre kerülnek a ranglistán
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>Vissza a főmenübe</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  if (score) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.title}>
            {score.correctOnFirstTry ? "Tökéletes! 🎉" : "Helyes! ✓"}
          </Text>

          <View style={styles.scoreCard}>
            <Text style={styles.scoreMealName}>{score.mealName}</Text>

            <View style={styles.scoreRow}>
              <Text style={styles.scoreLabel}>Pontszám:</Text>
              <Text style={styles.scoreValue}>{score.score}</Text>
            </View>

            <View style={styles.scoreRow}>
              <Text style={styles.scoreLabel}>Próbálkozások:</Text>
              <Text style={styles.scoreValue}>{score.attempts}</Text>
            </View>

            <View style={styles.scoreRow}>
              <Text style={styles.scoreLabel}>Idő:</Text>
              <Text style={styles.scoreValue}>{score.timeSeconds} mp</Text>
            </View>

            <View style={styles.scoreRow}>
              <Text style={styles.scoreLabel}>Segítségek:</Text>
              <Text style={styles.scoreValue}>{score.hintsUsed.length}/2</Text>
            </View>

            {mode === "ranked" && (
              <Text style={styles.rankedNote}>
                Az eredményed mentésre került a ranglistán
              </Text>
            )}
          </View>

          <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
            <Text style={styles.nextButtonText}>Következő kérdés</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={exitQuiz}>
            <Text style={styles.backButtonText}>Kilépés a kvízből</Text>
          </TouchableOpacity>

          <Text style={styles.questionsCount}>
            Megválaszolt kérdések: {questionsAnswered}
          </Text>
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
        <View style={styles.header}>
          <Text style={styles.modeLabel}>
            {mode === "practice" ? "Gyakorló mód" : "Ranglista mód"}
          </Text>
          <Text style={styles.questionCount}>
            Kérdés #{questionsAnswered + 1}
          </Text>
        </View>

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
                  disabled={index === 0}
                >
                  <Text style={styles.moveButtonText}>↑</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.moveButton,
                    index === userOrder.length - 1 && styles.disabledButton,
                  ]}
                  onPress={() => moveStep(index, "down")}
                  disabled={index === userOrder.length - 1}
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
            disabled={hintsUsedCount >= 2}
          >
            <Text style={styles.hintButtonText}>
              Segítség ({hintsUsedCount}/2)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={submitAnswer}>
            <Text style={styles.submitButtonText}>Ellenőrzés</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.exitButton} onPress={exitQuiz}>
          <Text style={styles.exitButtonText}>Kilépés</Text>
        </TouchableOpacity>

        {attemptCount > 0 && (
          <Text style={styles.attemptText}>
            Próbálkozások: {attemptCount}
          </Text>
        )}
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
