import React, { useCallback, useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {
    filterMealsByTop25Pool,
    type Top25Pool,
} from "../constants/topMeals";
import MEALS from "../types/meals";
import type { Meal } from "../types/nutrition";
import type { CookingInstruction } from "../types/preparations";
import COOKING_INSTRUCTIONS from "../types/preparations";

type QuizScreenProps = {
  onBack?: () => void;
};

type QuizItem = {
  key: string;
  text: string;
};

const getQuizSteps = (instruction: CookingInstruction): string[] => {
  if (instruction.quizSteps && instruction.quizSteps.length > 0) {
    return instruction.quizSteps;
  }

  return instruction.steps;
};

export default function QuizScreen({ onBack }: QuizScreenProps) {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [instruction, setInstruction] = useState<CookingInstruction | null>(
    null
  );
  const [originalSteps, setOriginalSteps] = useState<string[]>([]);
  const [steps, setSteps] = useState<QuizItem[]>([]);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [questionPool, setQuestionPool] = useState<Top25Pool>("all");

  const loadRandomQuestion = useCallback(() => {
    // csak olyan ételek, amelyekhez van elkészítés és legalább 2 lépés
    const candidates = filterMealsByTop25Pool(MEALS, questionPool).filter((m) => {
      const ci = COOKING_INSTRUCTIONS.find((c) => c.id === m.id);
      return ci && getQuizSteps(ci).length >= 2;
    });

    if (!candidates.length) {
      setMeal(null);
      setInstruction(null);
      setOriginalSteps([]);
      setSteps([]);
      return;
    }

    const randomMeal =
      candidates[Math.floor(Math.random() * candidates.length)];
    const ci = COOKING_INSTRUCTIONS.find((c) => c.id === randomMeal.id)!;

    const orig = getQuizSteps(ci);
    let shuffled = [...orig].sort(() => Math.random() - 0.5);

    // ha véletlen pont ugyanaz a sorrend, keverjük újra egyszer
    if (shuffled.every((t, i) => t === orig[i])) {
      shuffled = [...orig].sort(() => Math.random() - 0.5);
    }

    setMeal(randomMeal);
    setInstruction(ci);
    setOriginalSteps(orig);
    setSteps(
      shuffled.map((text, index) => ({
        key: `${index}-${text}`,
        text,
      }))
    );
    setResult(null);
  }, [questionPool]);

  useEffect(() => {
    loadRandomQuestion();
  }, [loadRandomQuestion]);

  // Lépés fel/le mozgatása (weben használjuk)
  const moveStep = (fromIndex: number, toIndex: number) => {
    setSteps((prev) => {
      const data = [...prev];
      if (toIndex < 0 || toIndex >= data.length) return data;
      const item = data[fromIndex];
      data.splice(fromIndex, 1);
      data.splice(toIndex, 0, item);
      return data;
    });
    setResult(null);
  };

  const checkAnswer = () => {
    const current = steps.map((s) => s.text);
    const ok =
      current.length === originalSteps.length &&
      current.every((t, i) => t === originalSteps[i]);

    setResult(ok ? "correct" : "incorrect");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* Fejléc fix */}
        <View style={styles.headerRow}>
          {onBack && (
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Főmenü</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.headerTitle}>Elkészítés kvíz</Text>
        </View>

        <View style={styles.poolRow}>
          <Text style={styles.poolLabel}>Kérdéskör:</Text>
          <View style={styles.poolButtonsRow}>
            <TouchableOpacity
              onPress={() => setQuestionPool("all")}
              style={[
                styles.poolButton,
                questionPool === "all" && styles.poolButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.poolButtonText,
                  questionPool === "all" && styles.poolButtonTextActive,
                ]}
              >
                Összes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setQuestionPool("top25")}
              style={[
                styles.poolButton,
                questionPool === "top25" && styles.poolButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.poolButtonText,
                  questionPool === "top25" && styles.poolButtonTextActive,
                ]}
              >
                Top 25
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {!meal || !instruction ? (
          <View style={styles.centerBox}>
            <Text style={styles.infoText}>
              Még nincs olyan étel, amihez találtam elkészítési lépéseket.
            </Text>
            <TouchableOpacity
              onPress={loadRandomQuestion}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>Új próbálkozás</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator
          >
            <View style={styles.mealInfoBox}>
              <Text style={styles.mealName}>{meal.name}</Text>
              <Text style={styles.mealMeta}>
                {meal.timeOfDay} • {meal.slot} • {meal.day}. nap
              </Text>
              <Text style={styles.mealSubtitle}>
                Állítsd jó sorrendbe az elkészítési lépéseket!
              </Text>
            </View>

            <Text style={styles.dragHintText}>
              Tipp: görgess simán, és a ▲ / ▼ gombokkal rendezd sorba a lépéseket.
            </Text>

            <View style={styles.listContainer}>
              {steps.map((item, index) => (
                <View key={item.key} style={styles.stepRow}>
                  <Text style={styles.stepIndex}>{index + 1}.</Text>
                  <Text style={styles.stepText}>{item.text}</Text>

                  <View style={styles.reorderButtons}>
                    <TouchableOpacity
                      onPress={() => moveStep(index, index - 1)}
                      disabled={index === 0}
                      style={[
                        styles.smallButton,
                        index === 0 && styles.smallButtonDisabled,
                      ]}
                    >
                      <Text style={styles.smallButtonText}>▲</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => moveStep(index, index + 1)}
                      disabled={index === steps.length - 1}
                      style={[
                        styles.smallButton,
                        index === steps.length - 1 &&
                          styles.smallButtonDisabled,
                      ]}
                    >
                      <Text style={styles.smallButtonText}>▼</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>

            {result === "correct" && (
              <Text style={styles.correctText}>
                Szuper! Minden lépés jó sorrendben van ✅
              </Text>
            )}
            {result === "incorrect" && (
              <Text style={styles.incorrectText}>
                Még nem jó a sorrend, próbáld átrendezni 🔁
              </Text>
            )}

            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={checkAnswer}
                style={styles.primaryButton}
              >
                <Text style={styles.primaryButtonText}>Ellenőrzés</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={loadRandomQuestion}
                style={styles.secondaryButton}
              >
                <Text style={styles.secondaryButtonText}>Új kérdés</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  backButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    marginRight: 8,
  },
  backButtonText: {
    fontSize: 14,
    color: "#111827",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#e5e7eb",
  },
  poolRow: {
    marginBottom: 10,
  },
  poolLabel: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },
  poolButtonsRow: {
    flexDirection: "row",
    gap: 8,
  } as any,
  poolButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
  },
  poolButtonActive: {
    borderColor: "#38bdf8",
    backgroundColor: "#38bdf8",
  },
  poolButtonText: {
    color: "#e5e7eb",
    fontWeight: "700",
    fontSize: 12,
  },
  poolButtonTextActive: {
    color: "#0f172a",
  },
  mealInfoBox: {
    backgroundColor: "#0b1120",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  mealName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  mealMeta: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 6,
  },
  mealSubtitle: {
    fontSize: 12,
    color: "#cbd5f5",
  },
  dragHintText: {
    fontSize: 12,
    color: "#93c5fd",
    marginBottom: 8,
  },
  listContainer: {
    marginBottom: 12,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    marginBottom: 8,
  },
  stepRowActive: {
    backgroundColor: "#1e293b",
    borderColor: "#38bdf8",
  },
  stepIndex: {
    fontSize: 14,
    fontWeight: "700",
    color: "#38bdf8",
    marginRight: 8,
    marginTop: 2,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: "#e5e7eb",
    marginRight: 8,
  },
  reorderButtons: {
    flexDirection: "row",
    marginLeft: 4,
  },
  smallButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#334155",
    marginLeft: 4,
  },
  smallButtonDisabled: {
    opacity: 0.3,
  },
  smallButtonText: {
    fontSize: 12,
    color: "#e5e7eb",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  } as any,
  primaryButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#38bdf8",
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f172a",
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#38bdf8",
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e5e7eb",
  },
  correctText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#22c55e",
    marginBottom: 8,
  },
  incorrectText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#f97316",
    marginBottom: 8,
  },
  centerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 12,
  },
});