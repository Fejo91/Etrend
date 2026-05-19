import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    buildTop25IngredientQuestion,
    sanitizeDifficulty,
    sanitizeMode,
    sanitizeSlotFilter,
    TOP25_DIFFICULTY_LABELS,
    TOP25_MODE_LABELS,
    type Top25IngredientQuizQuestion,
} from "../features/diet/utils/top25QuizData";

type QuizState = "idle" | "correct" | "incorrect";

type IngredientQuizState = {
  question: Top25IngredientQuizQuestion;
  selectedIngredients: Set<string>;
  quizState: QuizState;
};

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default function Top25IngredientQuizScreen() {
  const params = useLocalSearchParams<{
    slotFilter?: string | string[];
    difficulty?: string | string[];
    mode?: string | string[];
  }>();

  const slotFilter = useMemo(
    () => sanitizeSlotFilter(firstParam(params.slotFilter)),
    [params.slotFilter]
  );
  const difficulty = useMemo(
    () => sanitizeDifficulty(firstParam(params.difficulty)),
    [params.difficulty]
  );
  const mode = useMemo(
    () => sanitizeMode(firstParam(params.mode)),
    [params.mode]
  );

  const [quiz, setQuiz] = useState<IngredientQuizState | null>(() => {
    const q = buildTop25IngredientQuestion({ slotFilter, difficulty });
    return q
      ? {
          question: q,
          selectedIngredients: new Set(),
          quizState: "idle",
        }
      : null;
  });

  const loadNewQuestion = useCallback(() => {
    const q = buildTop25IngredientQuestion({ slotFilter, difficulty });
    setQuiz(
      q
        ? {
            question: q,
            selectedIngredients: new Set(),
            quizState: "idle",
          }
        : null
    );
  }, [slotFilter, difficulty]);

  const toggleIngredient = useCallback(
    (ingredient: string) => {
      setQuiz((prev) => {
        if (!prev) return prev;
        if (prev.quizState === "correct") return prev;
        // Exam mode: once any check has been made (incorrect), lock selections
        if (mode === "exam" && prev.quizState === "incorrect") return prev;

        const newSelected = new Set(prev.selectedIngredients);
        if (newSelected.has(ingredient)) {
          newSelected.delete(ingredient);
        } else {
          newSelected.add(ingredient);
        }

        return {
          ...prev,
          selectedIngredients: newSelected,
          quizState: prev.quizState === "incorrect" ? "idle" : prev.quizState,
        };
      });
    },
    [mode]
  );

  const handleCheck = useCallback(() => {
    setQuiz((prev) => {
      if (!prev || prev.quizState === "correct") {
        return prev;
      }
      // Exam mode: also lock when already incorrect
      if (mode === "exam" && prev.quizState === "incorrect") {
        return prev;
      }

      const correctSet = new Set(prev.question.correctIngredients);
      const isCorrect =
        prev.selectedIngredients.size === correctSet.size &&
        Array.from(prev.selectedIngredients).every((ing) =>
          correctSet.has(ing)
        );

      return {
        ...prev,
        quizState: isCorrect ? "correct" : "incorrect",
      };
    });
  }, [mode]);

  if (!quiz) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyText}>
            Nincs elérhető Top25 kérdés ezekkel a beállításokkal.
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Vissza</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const { question, selectedIngredients, quizState } = quiz;
  const isCorrect = quizState === "correct";
  const isLocked = isCorrect || (mode === "exam" && quizState === "incorrect");

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.screenTitle}>Top25 — Alapanyag felismerő</Text>

        {/* Settings badge */}
        <View style={styles.settingsBadge}>
          <Text style={styles.settingsBadgeText}>
            {slotFilter} · {TOP25_DIFFICULTY_LABELS[difficulty]} ·{" "}
            {TOP25_MODE_LABELS[mode]}
          </Text>
        </View>

        {mode === "exam" && (
          <View style={styles.examBanner}>
            <Text style={styles.examBannerText}>
              Vizsga mód: az első ellenőrzés után a válasz rögzül.
            </Text>
          </View>
        )}

        {/* Question card */}
        <View style={styles.questionCard}>
          <Text style={styles.mealName}>{question.mealName}</Text>
          <Text style={styles.mealId}>{question.mealId}</Text>
          <View style={styles.separator} />
          <Text style={styles.questionText}>
            Mely alapanyagok kellenek ehhez az ételhez?
          </Text>
        </View>

        {/* Answer options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, idx) => {
            const isSelected = selectedIngredients.has(option);
            const isCorrectIngredient = question.correctIngredients.includes(
              option
            );
            const isAnswerWrong =
              quizState === "incorrect" &&
              isSelected &&
              !isCorrectIngredient;

            let containerStyle = [styles.optionContainer];
            if (isLocked) {
              containerStyle.push(styles.optionContainerLocked);
            }

            let checkboxStyle = [styles.checkbox];
            if (isSelected) {
              checkboxStyle.push(styles.checkboxSelected);
            }
            if (isCorrect && isCorrectIngredient) {
              checkboxStyle.push(styles.checkboxCorrect);
            } else if (isAnswerWrong) {
              checkboxStyle.push(styles.checkboxWrong);
            }

            return (
              <TouchableOpacity
                key={`${idx}-${option.slice(0, 20)}`}
                style={containerStyle}
                onPress={() => toggleIngredient(option)}
                disabled={isLocked}
                activeOpacity={isLocked ? 1 : 0.7}
              >
                <View style={checkboxStyle}>
                  {isSelected && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback */}
        {quizState !== "idle" && (
          <View
            style={[
              styles.feedbackBox,
              isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
            ]}
          >
            <Text style={styles.feedbackText}>
              {isCorrect
                ? "Helyes válasz ✅"
                : "Nem pontos a válasz 🔁"}
            </Text>
          </View>
        )}

        {/* Learning reward: reveal full ingredient list only after correct answer */}
        {isCorrect && question.allIngredientNames.length > 0 && (
          <View style={styles.fullIngredientsBox}>
            <Text style={styles.fullIngredientsTitle}>Teljes hozzávalólista 🧾</Text>
            <View style={styles.fullIngredientsList}>
              {question.allIngredientNames.map((ingredientName, idx) => (
                <Text key={`${idx}-${ingredientName}`} style={styles.fullIngredientsItem}>
                  • {ingredientName}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Action buttons */}
        <View style={styles.actionRow}>
          {!isLocked && (
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={handleCheck}
              activeOpacity={0.75}
            >
              <Text style={styles.primaryBtnText}>Ellenőrzés</Text>
            </TouchableOpacity>
          )}

          {isLocked && (
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={loadNewQuestion}
              activeOpacity={0.75}
            >
              <Text style={styles.primaryBtnText}>Következő kérdés</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={loadNewQuestion}
            activeOpacity={0.75}
          >
            <Text style={styles.secondaryBtnText}>Új kérdés</Text>
          </TouchableOpacity>
        </View>

        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.75}
        >
          <Text style={styles.backButtonText}>← Vissza a Top25 kvízekhez</Text>
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
    padding: 16,
    paddingTop: 56,
    paddingBottom: 40,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 20,
  },
  questionCard: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#38bdf8",
  },
  mealName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  mealId: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 12,
    fontFamily: "monospace",
  },
  separator: {
    height: 1,
    backgroundColor: "#334155",
    marginBottom: 12,
  },
  questionText: {
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
    fontWeight: "600",
  },
  optionsContainer: {
    marginBottom: 20,
    gap: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#334155",
    gap: 12,
  },
  optionContainerLocked: {
    opacity: 0.6,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
    flexShrink: 0,
  },
  checkboxSelected: {
    backgroundColor: "#0ea5e9",
    borderColor: "#38bdf8",
  },
  checkboxCorrect: {
    backgroundColor: "#10b981",
    borderColor: "#34d399",
  },
  checkboxWrong: {
    backgroundColor: "#ef4444",
    borderColor: "#fca5a5",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
  },
  feedbackBox: {
    borderRadius: 10,
    padding: 14,
    marginTop: 8,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 1,
  },
  feedbackCorrect: {
    backgroundColor: "#064e3b",
    borderColor: "#10b981",
  },
  feedbackWrong: {
    backgroundColor: "#1e1b4b",
    borderColor: "#6366f1",
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  fullIngredientsBox: {
    backgroundColor: "#0f172a",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  fullIngredientsTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 10,
  },
  fullIngredientsList: {
    gap: 6,
  },
  fullIngredientsItem: {
    fontSize: 14,
    lineHeight: 20,
    color: "#cbd5e1",
  },
  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  primaryBtn: {
    backgroundColor: "#0ea5e9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    minWidth: 140,
    alignItems: "center",
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryBtn: {
    backgroundColor: "#1e293b",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    minWidth: 140,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334155",
  },
  secondaryBtnText: {
    color: "#94a3b8",
    fontSize: 15,
    fontWeight: "600",
  },
  backButton: {
    alignItems: "center",
    paddingVertical: 14,
    marginTop: 4,
  },
  backButtonText: {
    color: "#38bdf8",
    fontSize: 15,
    fontWeight: "600",
  },
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  emptyText: {
    color: "#94a3b8",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },
  settingsBadge: {
    alignSelf: "center",
    backgroundColor: "#0f172a",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  settingsBadgeText: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "600",
  },
  examBanner: {
    backgroundColor: "#451a03",
    borderRadius: 10,
    padding: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#f59e0b",
  },
  examBannerText: {
    color: "#fde68a",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
