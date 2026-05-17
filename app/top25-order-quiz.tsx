import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  getTop25QuizMealsWithSteps,
  shuffleArray,
  type Top25QuizMealSteps,
} from "../features/diet/utils/top25QuizData";

type StepItem = {
  key: string;
  text: string;
};

type QuizState = {
  meal: Top25QuizMealSteps;
  correctOrder: string[];
  items: StepItem[];
  checked: boolean;
  isCorrect: boolean;
};

function buildQuestion(): QuizState | null {
  const pool = getTop25QuizMealsWithSteps(4);
  if (pool.length === 0) {
    return null;
  }

  const meal = pool[Math.floor(Math.random() * pool.length)];
  const { steps } = meal;

  const stepCount = Math.min(Math.floor(Math.random() * 4) + 4, steps.length);
  const maxStartIndex = Math.max(0, steps.length - stepCount);
  const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
  const selectedSteps = steps.slice(startIndex, startIndex + stepCount);

  const correctOrder = [...selectedSteps];
  const shuffled = shuffleArray(selectedSteps);

  const items: StepItem[] = shuffled.map((text, idx) => ({
    key: `${idx}-${text.slice(0, 20)}`,
    text,
  }));

  return {
    meal,
    correctOrder,
    items,
    checked: false,
    isCorrect: false,
  };
}

export default function Top25OrderQuizScreen() {
  const [quiz, setQuiz] = useState<QuizState | null>(() => buildQuestion());

  const loadNewQuestion = useCallback(() => {
    setQuiz(buildQuestion());
  }, []);

  const moveStep = useCallback((fromIndex: number, toIndex: number) => {
    setQuiz((prev) => {
      if (!prev || prev.checked) {
        return prev;
      }
      const items = [...prev.items];
      if (toIndex < 0 || toIndex >= items.length) {
        return prev;
      }
      const [item] = items.splice(fromIndex, 1);
      items.splice(toIndex, 0, item);
      return { ...prev, items };
    });
  }, []);

  const checkAnswer = useCallback(() => {
    setQuiz((prev) => {
      if (!prev || prev.checked) {
        return prev;
      }
      const currentOrder = prev.items.map((s) => s.text);
      const isCorrect =
        currentOrder.length === prev.correctOrder.length &&
        currentOrder.every((t, i) => t === prev.correctOrder[i]);
      return { ...prev, checked: true, isCorrect };
    });
  }, []);

  if (!quiz) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyText}>
            Nincs elérhető Top25 lépéssorrend kérdés.
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

  const isFirst = (idx: number) => idx === 0;
  const isLast = (idx: number) => idx === quiz.items.length - 1;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.screenTitle}>Top25 lépéssorrend</Text>

        {/* Question card */}
        <View style={styles.questionCard}>
          <Text style={styles.mealName}>{quiz.meal.mealName}</Text>
          <Text style={styles.mealId}>{quiz.meal.mealId}</Text>
          <Text style={styles.instruction}>
            Rendezd helyes sorrendbe a lépéseket.
          </Text>
        </View>

        {/* Step cards */}
        {quiz.items.map((item, idx) => (
          <View key={item.key} style={styles.stepRow}>
            <View style={styles.stepCard}>
              <Text style={styles.stepText}>{item.text}</Text>
            </View>
            <View style={styles.arrowCol}>
              <TouchableOpacity
                style={[
                  styles.arrowBtn,
                  (isFirst(idx) || quiz.checked) && styles.arrowBtnDisabled,
                ]}
                onPress={() => moveStep(idx, idx - 1)}
                disabled={isFirst(idx) || quiz.checked}
                activeOpacity={0.6}
              >
                <Text style={styles.arrowText}>↑</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.arrowBtn,
                  (isLast(idx) || quiz.checked) && styles.arrowBtnDisabled,
                ]}
                onPress={() => moveStep(idx, idx + 1)}
                disabled={isLast(idx) || quiz.checked}
                activeOpacity={0.6}
              >
                <Text style={styles.arrowText}>↓</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Feedback */}
        {quiz.checked && (
          <View
            style={[
              styles.feedbackBox,
              quiz.isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
            ]}
          >
            <Text style={styles.feedbackText}>
              {quiz.isCorrect
                ? "Helyes sorrend ✅"
                : "Még nem jó a sorrend 🔁"}
            </Text>
          </View>
        )}

        {/* Action buttons */}
        <View style={styles.actionRow}>
          {!quiz.checked && (
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={checkAnswer}
              activeOpacity={0.75}
            >
              <Text style={styles.primaryBtnText}>Ellenőrzés</Text>
            </TouchableOpacity>
          )}
          {quiz.checked && quiz.isCorrect && (
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={loadNewQuestion}
              activeOpacity={0.75}
            >
              <Text style={styles.primaryBtnText}>Következő kérdés</Text>
            </TouchableOpacity>
          )}
          {quiz.checked && !quiz.isCorrect && (
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() =>
                setQuiz((prev) =>
                  prev ? { ...prev, checked: false, isCorrect: false } : prev
                )
              }
              activeOpacity={0.75}
            >
              <Text style={styles.secondaryBtnText}>Próbálom újra</Text>
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
    marginBottom: 20,
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
    marginBottom: 10,
    fontFamily: "monospace",
  },
  instruction: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 20,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
  stepCard: {
    flex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#334155",
  },
  stepText: {
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
  },
  arrowCol: {
    flexDirection: "column",
    gap: 4,
  },
  arrowBtn: {
    backgroundColor: "#334155",
    borderRadius: 8,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowBtnDisabled: {
    opacity: 0.3,
  },
  arrowText: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "700",
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
});
