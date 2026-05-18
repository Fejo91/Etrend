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
    buildTop25NextStepQuestion,
    sanitizeDifficulty,
    sanitizeMode,
    sanitizeSlotFilter,
    TOP25_DIFFICULTY_LABELS,
    TOP25_MODE_LABELS,
    type Top25NextStepQuestion,
} from "../features/diet/utils/top25QuizData";
import { CATEGORY_LABELS } from "../features/diet/data/top25KnowledgeRewards";

type AnswerState = "idle" | "correct" | "incorrect";

type QuizState = {
  question: Top25NextStepQuestion;
  selectedAnswer: string | null;
  answerState: AnswerState;
};

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default function Top25NextStepQuizScreen() {
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

  const [quiz, setQuiz] = useState<QuizState | null>(() => {
    const q = buildTop25NextStepQuestion({ slotFilter, difficulty });
    return q
      ? {
          question: q,
          selectedAnswer: null,
          answerState: "idle",
        }
      : null;
  });

  const loadNewQuestion = useCallback(() => {
    const q = buildTop25NextStepQuestion({ slotFilter, difficulty });
    setQuiz(
      q
        ? {
            question: q,
            selectedAnswer: null,
            answerState: "idle",
          }
        : null
    );
  }, [slotFilter, difficulty]);

  const handleAnswerPress = useCallback(
    (answer: string) => {
      setQuiz((prev) => {
        if (!prev) return prev;
        if (prev.answerState === "correct") return prev;
        // Exam mode: lock after first attempt regardless of result
        if (mode === "exam" && prev.answerState !== "idle") return prev;
        const isCorrect = answer === prev.question.correctNextStep;
        return {
          ...prev,
          selectedAnswer: answer,
          answerState: isCorrect ? "correct" : "incorrect",
        };
      });
    },
    [mode]
  );

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

  const { question, selectedAnswer, answerState } = quiz;
  const isAnswered = answerState !== "idle";
  const isCorrect = answerState === "correct";
  const isLocked = isCorrect || (mode === "exam" && isAnswered);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.screenTitle}>Top25 — Mi jön ezután?</Text>

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
              Vizsga mód: a válasz az első választás után rögzül.
            </Text>
          </View>
        )}

        {/* Question card */}
        <View style={styles.questionCard}>
          <Text style={styles.mealName}>{question.mealName}</Text>
          <Text style={styles.mealId}>{question.mealId}</Text>
          <View style={styles.separator} />
          <Text style={styles.label}>Aktuális lépés:</Text>
          <Text style={styles.stepText}>{question.currentStep}</Text>
          <Text style={[styles.label, styles.labelTop]}>Mi jön ezután?</Text>
        </View>

        {/* Answer options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isAnswerCorrect = isCorrect && isSelected;
            const isAnswerWrong = answerState === "incorrect" && isSelected;

            let buttonStyle = [styles.optionButton];
            if (isAnswerCorrect) {
              buttonStyle.push(styles.optionButtonCorrect);
            } else if (isAnswerWrong) {
              buttonStyle.push(styles.optionButtonWrong);
            } else if (isLocked && !isSelected) {
              buttonStyle.push(styles.optionButtonDisabled);
            }

            const labels = ["A", "B", "C", "D"];

            return (
              <TouchableOpacity
                key={`${idx}-${option.slice(0, 20)}`}
                style={buttonStyle}
                onPress={() => handleAnswerPress(option)}
                disabled={isLocked}
                activeOpacity={isLocked ? 1 : 0.7}
              >
                <Text style={styles.optionLabel}>{labels[idx]}.</Text>
                <Text style={styles.optionText}>{option}</Text>
                {isAnswerCorrect && (
                  <Text style={styles.checkmark}>✅</Text>
                )}
                {isAnswerWrong && (
                  <Text style={styles.crossmark}>✗</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback */}
        {isAnswered && (
          <View
            style={[
              styles.feedbackBox,
              isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
            ]}
          >
            <Text style={styles.feedbackText}>
              {isCorrect
                ? "Helyes válasz ✅"
                : "Nem ez a következő lépés 🔁"}
            </Text>
          </View>
        )}

        {/* Knowledge Reward — only on correct answer */}
        {isCorrect && question.knowledgeReward && (
          <View style={styles.rewardBlock}>
            <Text style={styles.rewardHeader}>Tudásjutalom 🧠</Text>
            <View style={styles.rewardCategoryBadge}>
              <Text style={styles.rewardCategoryText}>
                {CATEGORY_LABELS[question.knowledgeReward.category]}
              </Text>
            </View>
            <Text style={styles.rewardTitle}>{question.knowledgeReward.title}</Text>
            <Text style={styles.rewardBody}>{question.knowledgeReward.body}</Text>
          </View>
        )}

        {/* Action buttons */}
        <View style={styles.actionRow}>
          {(isCorrect || (mode === "exam" && isAnswered)) && (
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
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94a3b8",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  labelTop: {
    marginTop: 12,
  },
  stepText: {
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
    backgroundColor: "#0f172a",
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#38bdf8",
  },
  optionsContainer: {
    marginBottom: 20,
    gap: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#1e293b",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#334155",
    gap: 10,
  },
  optionButtonCorrect: {
    backgroundColor: "#064e3b",
    borderColor: "#10b981",
  },
  optionButtonWrong: {
    backgroundColor: "#1e1b4b",
    borderColor: "#6366f1",
  },
  optionButtonDisabled: {
    opacity: 0.5,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#38bdf8",
    minWidth: 24,
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
  },
  checkmark: {
    fontSize: 18,
    color: "#10b981",
  },
  crossmark: {
    fontSize: 18,
    color: "#ef4444",
    fontWeight: "bold",
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
  rewardBlock: {
    backgroundColor: "#0f2a1f",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#10b981",
  },
  rewardHeader: {
    fontSize: 15,
    fontWeight: "700",
    color: "#6ee7b7",
    marginBottom: 8,
  },
  rewardCategoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#064e3b",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#10b981",
  },
  rewardCategoryText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#a7f3d0",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 6,
  },
  rewardBody: {
    fontSize: 13,
    color: "#cbd5e1",
    lineHeight: 19,
  },
});
