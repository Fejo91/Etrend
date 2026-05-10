import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import MEALS from "../types/meals";
import COOKING_INSTRUCTIONS from "../types/preparations";
import { QuizMode, QuizScore } from "../types/quiz";
import {
  filterMealsByTop25Pool,
  matchesTop25Pool,
  type Top25Pool,
} from "../constants/topMeals";

interface NextStepQuestion {
  mealId: string;
  mealName: string;
  currentStepIndex: number;
  currentStep: string;
  correctNextStep: string;
  allSteps: string[];
  options: string[]; // 3 opció: a helyes + 2 random
}

interface NextStepQuizScreenProps {
  onBack: () => void;
}

export default function NextStepQuizScreen({
  onBack,
}: NextStepQuizScreenProps) {
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [questionPool, setQuestionPool] = useState<Top25Pool>("all");
  const [currentQuestion, setCurrentQuestion] = useState<NextStepQuestion | null>(null);
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentScore, setCurrentScore] = useState<QuizScore | null>(null);
  const [userGuess, setUserGuess] = useState("");
  const [showCustomGuessInput, setShowCustomGuessInput] = useState(false);
  const [revealedPreviousStep, setRevealedPreviousStep] = useState(false);

  const loadQuestion = (mealId?: string) => {
    let meal = null;

    if (mealId) {
      // Ugyanaz az étel következő lépése
      meal = MEALS.find((m) => m.id === mealId);
    } else {
      // Új véletlenszerű étel
      const mealsWithInstructions = filterMealsByTop25Pool(MEALS, questionPool).filter((m) => {
        const instructions = COOKING_INSTRUCTIONS.find(
          (ci) => ci.mealId === m.id
        );
        return instructions && instructions.steps.length >= 3;
      });

      if (mealsWithInstructions.length === 0) {
        Alert.alert("Hiba", "Nincs elérhető kérdés");
        return;
      }

      meal =
        mealsWithInstructions[
          Math.floor(Math.random() * mealsWithInstructions.length)
        ];
    }

    if (!meal) return;

    const instructions = COOKING_INSTRUCTIONS.find(
      (ci) => ci.mealId === meal!.id
    )!;

    if (instructions.steps.length < 2) {
      loadQuestion(); // Próbáljon egy másik ételt
      return;
    }

    // Random lépés kiválasztása (de nem az utolsó)
    const currentStepIndex = Math.floor(
      Math.random() * (instructions.steps.length - 1)
    );
    const currentStep = instructions.steps[currentStepIndex];
    const correctNextStep = instructions.steps[currentStepIndex + 1];

    // 2 random rossz opció (más ételekből vagy más lépésekből)
    const wrongOptions: Set<string> = new Set();
    const sourceMeals = filterMealsByTop25Pool(MEALS, questionPool);

    const allOtherSteps = sourceMeals.flatMap((m) => {
      const instrs = COOKING_INSTRUCTIONS.find((ci) => ci.mealId === m.id);
      return instrs ? instrs.steps : [];
    }).filter((step) => step !== correctNextStep && step !== currentStep);

    while (wrongOptions.size < 2 && allOtherSteps.length > 0) {
      const randomWrong =
        allOtherSteps[Math.floor(Math.random() * allOtherSteps.length)];
      wrongOptions.add(randomWrong);
      allOtherSteps.splice(allOtherSteps.indexOf(randomWrong), 1);
    }

    const options = [correctNextStep, ...Array.from(wrongOptions)];
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    const question: NextStepQuestion = {
      mealId: meal.id,
      mealName: meal.name,
      currentStepIndex,
      currentStep,
      correctNextStep,
      allSteps: instructions.steps,
      options: shuffledOptions,
    };

    setCurrentQuestion(question);
    setHintsUsedCount(0);
    setAttemptCount(0);
    setStartTime(Date.now());
    setRevealedPreviousStep(false);
    setUserGuess("");
    setShowCustomGuessInput(false);
    setCurrentScore(null);
  };

  const startQuiz = (selectedMode: QuizMode) => {
    const availableMeals = MEALS.filter((m) => {
      if (!matchesTop25Pool(m.id, questionPool)) {
        return false;
      }

      const instructions = COOKING_INSTRUCTIONS.find((ci) => ci.mealId === m.id);
      return Boolean(instructions && instructions.steps.length >= 3);
    });

    setMode(selectedMode);
    setQuestionsAnswered(0);
    setCurrentScore(null);
    setTotalQuestions(Math.min(10, availableMeals.length));
    loadQuestion();
  };

  const submitAnswer = (selectedOption: string | null) => {
    if (!currentQuestion || currentScore) {
      return;
    }

    const isCorrect = selectedOption === currentQuestion.correctNextStep;

    const newAttemptCount = attemptCount + 1;
    setAttemptCount(newAttemptCount);

    if (isCorrect) {
      const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
      const calculatedScore =
        100 -
        hintsUsedCount * 15 -
        (newAttemptCount - 1) * 10 -
        Math.floor(timeElapsed / 30);
      const finalScore = Math.max(0, calculatedScore);

      const quizScore: QuizScore = {
        mode,
        mealId: currentQuestion.mealId,
        mealName: currentQuestion.mealName,
        correctOnFirstTry: newAttemptCount === 1,
        attempts: newAttemptCount,
        timeSeconds: timeElapsed,
        hintsUsed: revealedPreviousStep ? ["first_step"] : ["none"],
        score: finalScore,
        timestamp: new Date(),
      };

      setCurrentScore(quizScore);
      setQuestionsAnswered((previous) => previous + 1);
    } else {
      Alert.alert("Helytelen", "Sajnos nem ez a következő lépés. Próbáld újra!");
    }
  };

  const nextQuestion = () => {
    loadQuestion();
  };

  const revealPreviousStep = () => {
    if (revealedPreviousStep || hintsUsedCount >= 2) return;
    setRevealedPreviousStep(true);
    setHintsUsedCount(hintsUsedCount + 1);
  };

  if (!mode) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mi jön ezután?</Text>
          <Text style={styles.subtitle}>
            Recept közben - mi a következő lépés?
          </Text>
        </View>

        <View style={styles.modesContainer}>
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
            <Text style={styles.modeButtonText}>Gyakorlás</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modeButton, styles.rankedButton]}
            onPress={() => startQuiz("ranked")}
          >
            <Text style={styles.modeButtonText}>Verseny</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Vissza</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!currentQuestion) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Betöltés...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mi jön ezután?</Text>
        <Text style={styles.modeIndicator}>
          {mode === "practice" ? "Gyakorlás" : "Verseny"} • {questionsAnswered}/
          {totalQuestions}
        </Text>
        <Text style={styles.poolIndicator}>
          Kérdéskör: {questionPool === "top25" ? "Top 25" : "Összes"}
        </Text>
      </View>

      {/* Étel név */}
      <View style={styles.mealCard}>
        <Text style={styles.mealName}>{currentQuestion.mealName}</Text>
      </View>

      {/* Aktuális lépés */}
      <View style={styles.stepCard}>
        <Text style={styles.stepLabel}>Aktuális lépés:</Text>
        <Text style={styles.stepText}>{currentQuestion.currentStep}</Text>
        <Text style={styles.stepPosition}>
          (Lépés {currentQuestion.currentStepIndex + 1}. az {currentQuestion.allSteps.length} közül)
        </Text>
      </View>

      {/* Előző lépés hint */}
      {revealedPreviousStep && currentQuestion.currentStepIndex > 0 && (
        <View style={styles.hintCard}>
          <Text style={styles.hintLabel}>💡 Előző lépés:</Text>
          <Text style={styles.hintText}>
            {currentQuestion.allSteps[currentQuestion.currentStepIndex - 1]}
          </Text>
        </View>
      )}

      {/* Kérdés */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>Szerinted mi jön ezután?</Text>
      </View>

      {/* 3 opció */}
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            activeOpacity={0.7}
            onPress={() => submitAnswer(option)}
            disabled={Boolean(currentScore)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom tipp */}
      <TouchableOpacity
        style={styles.customGuessButton}
        onPress={() => setShowCustomGuessInput(!showCustomGuessInput)}
      >
        <Text style={styles.customGuessButtonText}>
          {showCustomGuessInput ? "Mégse" : "Saját tipp beírása"}
        </Text>
      </TouchableOpacity>

      {showCustomGuessInput && (
        <View style={styles.customGuessInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Írja be a tippét..."
            placeholderTextColor="#666"
            value={userGuess}
            onChangeText={setUserGuess}
          />
          <TouchableOpacity
            style={styles.submitGuessButton}
            onPress={() => submitAnswer(userGuess)}
            disabled={Boolean(currentScore)}
          >
            <Text style={styles.submitGuessButtonText}>Küldés</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Hint gombok */}
      {hintsUsedCount < 2 && (
        <View style={styles.hintsContainer}>
          {!revealedPreviousStep && currentQuestion.currentStepIndex > 0 && (
            <TouchableOpacity
              style={styles.hintButton}
              onPress={revealPreviousStep}
            >
              <Text style={styles.hintButtonText}>
                💡 Előző lépés mutatása
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Pont info */}
      <View style={styles.scoreInfo}>
        <Text style={styles.scoreLabel}>Szerzett pontok:</Text>
        <Text style={styles.scoreValue}>
          100 - {hintsUsedCount} × 15 - {attemptCount > 0 ? (attemptCount - 1) * 10 : 0} = ?
        </Text>
      </View>

      {currentScore && (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Eredmény</Text>
          <Text style={styles.resultLine}>Étel: {currentScore.mealName}</Text>
          <Text style={styles.resultLine}>Pontszám: {currentScore.score}</Text>
          <Text style={styles.resultLine}>Próbálkozások: {currentScore.attempts}</Text>
          <Text style={styles.resultLine}>Idő: {currentScore.timeSeconds} mp</Text>
          <Text style={styles.resultLine}>Segítségek: {hintsUsedCount}</Text>

          <TouchableOpacity style={styles.nextQuestionButton} onPress={nextQuestion}>
            <Text style={styles.nextQuestionButtonText}>Következő kérdés</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Vissza</Text>
      </TouchableOpacity>

      <View style={styles.spacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#9ca3af",
  },
  modeIndicator: {
    fontSize: 12,
    color: "#38bdf8",
    marginTop: 8,
  },
  poolIndicator: {
    fontSize: 12,
    color: "#cbd5e1",
    marginTop: 6,
  },
  modesContainer: {
    gap: 12,
    marginBottom: 24,
  },
  poolLabel: {
    fontSize: 13,
    color: "#cbd5e1",
    fontWeight: "700",
    marginBottom: 2,
  },
  poolSelectorRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
  } as any,
  poolSelectorButton: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
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
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#1f2937",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#38bdf8",
    alignItems: "center",
  },
  rankedButton: {
    borderColor: "#f59e0b",
  },
  modeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e5e7eb",
  },
  mealCard: {
    backgroundColor: "#1f2937",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#38bdf8",
  },
  mealName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38bdf8",
  },
  stepCard: {
    backgroundColor: "#1f2937",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  stepLabel: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 4,
  },
  stepText: {
    fontSize: 16,
    color: "#e5e7eb",
    fontWeight: "500",
    marginBottom: 4,
  },
  stepPosition: {
    fontSize: 11,
    color: "#6b7280",
  },
  hintCard: {
    backgroundColor: "#065f46",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#10b981",
  },
  hintLabel: {
    fontSize: 12,
    color: "#10b981",
    marginBottom: 4,
    fontWeight: "600",
  },
  hintText: {
    fontSize: 14,
    color: "#d1fae5",
  },
  questionCard: {
    backgroundColor: "#1f2937",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderTopWidth: 2,
    borderTopColor: "#38bdf8",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e5e7eb",
    textAlign: "center",
  },
  optionsContainer: {
    gap: 10,
    marginBottom: 16,
  },
  optionButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#1f2937",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#374151",
  },
  optionText: {
    fontSize: 14,
    color: "#e5e7eb",
    textAlign: "center",
  },
  customGuessButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#6b7280",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  customGuessButtonText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#000",
  },
  customGuessInput: {
    marginBottom: 16,
    gap: 8,
  },
  textInput: {
    backgroundColor: "#1f2937",
    borderWidth: 1,
    borderColor: "#38bdf8",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#e5e7eb",
    fontSize: 14,
  },
  submitGuessButton: {
    paddingVertical: 10,
    backgroundColor: "#38bdf8",
    borderRadius: 6,
    alignItems: "center",
  },
  submitGuessButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#020617",
  },
  hintsContainer: {
    marginBottom: 16,
    gap: 8,
  },
  hintButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#065f46",
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#10b981",
  },
  hintButtonText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#10b981",
  },
  scoreInfo: {
    backgroundColor: "#1f2937",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  scoreLabel: {
    fontSize: 11,
    color: "#9ca3af",
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 13,
    color: "#e5e7eb",
    fontFamily: "monospace",
  },
  resultCard: {
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#38bdf8",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    gap: 4,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#38bdf8",
    marginBottom: 4,
  },
  resultLine: {
    fontSize: 13,
    color: "#e5e7eb",
  },
  nextQuestionButton: {
    marginTop: 8,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#38bdf8",
    alignItems: "center",
  },
  nextQuestionButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a",
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#374151",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#e5e7eb",
  },
  spacing: {
    height: 20,
  },
  errorText: {
    color: "#ef4444",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
