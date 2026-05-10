// app/extra.tsx
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
  getDailySupplementPlan,
  SUPPLEMENTS,
  SUPPLEMENT_TIME_SLOT_LABELS,
  type CyclePhase,
  type SupplementTimeSlot,
  type TrainingKind,
} from "../types/supplements";

type QuizScenario = {
  cyclePhase: CyclePhase;
  trainingKind: TrainingKind;
  isBeresDay: boolean;
};

type QuizQuestion = {
  scenario: QuizScenario;
  slot: SupplementTimeSlot;
};

function createRandomScenario(): QuizScenario {
  return {
    cyclePhase: Math.random() < 0.5 ? "light" : "heavy",
    trainingKind: Math.random() < 0.5 ? "weights" : "cardio_rest",
    isBeresDay: Math.random() < 0.5,
  };
}

function pickRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function createRandomQuestion(): QuizQuestion {
  for (let attempt = 0; attempt < 24; attempt += 1) {
    const scenario = createRandomScenario();
    const rules = getDailySupplementPlan({
      cyclePhase: scenario.cyclePhase,
      trainingKind: scenario.trainingKind,
      isBeresDay: scenario.isBeresDay,
    });

    const availableSlots = Array.from(
      new Set(rules.map((rule) => rule.timeSlot))
    );

    if (availableSlots.length > 0) {
      return {
        scenario,
        slot: pickRandomItem(availableSlots),
      };
    }
  }

  return {
    scenario: { cyclePhase: "light", trainingKind: "cardio_rest", isBeresDay: false },
    slot: "after_breakfast",
  };
}

function scenarioLabel(scenario: QuizScenario) {
  const phaseLabel = scenario.cyclePhase === "light" ? "Light" : "Heavy";
  const dayLabel =
    scenario.trainingKind === "weights" ? "Edzésnap" : "Pihenőnap";
  const beresLabel = scenario.isBeresDay ? "Béres nap" : "Nem Béres nap";
  return `${phaseLabel} • ${dayLabel} • ${beresLabel}`;
}

export default function ExtraRoute() {
  const [question, setQuestion] = useState<QuizQuestion>(() =>
    createRandomQuestion()
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { scenario, slot } = question;

  const correctIds = useMemo(() => {
    const rules = getDailySupplementPlan({
      cyclePhase: scenario.cyclePhase,
      trainingKind: scenario.trainingKind,
      isBeresDay: scenario.isBeresDay,
    });

    return Array.from(
      new Set(
        rules
          .filter((rule) => rule.timeSlot === slot)
          .map((rule) => rule.supplementId)
      )
    );
  }, [scenario, slot]);

  const correctSet = useMemo(() => new Set(correctIds), [correctIds]);
  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const hitCount = useMemo(
    () => selectedIds.filter((id) => correctSet.has(id)).length,
    [selectedIds, correctSet]
  );
  const missCount = useMemo(
    () => selectedIds.filter((id) => !correctSet.has(id)).length,
    [selectedIds, correctSet]
  );
  const missingCount = useMemo(
    () => correctIds.filter((id) => !selectedSet.has(id)).length,
    [correctIds, selectedSet]
  );

  const maxScore = correctIds.length;
  const score = Math.max(0, hitCount - missCount);
  const phaseLabel = scenario.cyclePhase === "light" ? "Light" : "Heavy";
  const dayLabel =
    scenario.trainingKind === "weights" ? "Edzésnap" : "Pihenőnap";

  function toggleSelection(id: string) {
    setSubmitted(false);
    setSelectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function nextQuestion() {
    setQuestion(createRandomQuestion());
    setSelectedIds([]);
    setSubmitted(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.menuContainer}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Vissza a főmenübe</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Táplálékkiegészítő Kvíz</Text>
        <View style={styles.questionCard}>
          <Text style={styles.questionTitle}>Kérdés paraméterei</Text>
          <View style={styles.questionChipsRow}>
            <View style={[styles.questionChip, styles.slotChip]}>
              <Text style={styles.questionChipText}>
                {SUPPLEMENT_TIME_SLOT_LABELS[slot]}
              </Text>
            </View>
            <View style={styles.questionChip}>
              <Text style={styles.questionChipText}>{dayLabel}</Text>
            </View>
            <View style={styles.questionChip}>
              <Text style={styles.questionChipText}>{phaseLabel}</Text>
            </View>
          </View>
          <Text style={styles.infoText}>
            Válaszd ki az összes helyes kiegészítőt a fenti feltételekhez.
          </Text>
        </View>

        <View style={styles.choiceList}>
          {SUPPLEMENTS.map((supplement) => {
            const selected = selectedSet.has(supplement.id);
            const isCorrect = correctSet.has(supplement.id);

            const showCorrect = submitted && isCorrect;
            const showWrong = submitted && selected && !isCorrect;

            return (
              <TouchableOpacity
                key={supplement.id}
                onPress={() => toggleSelection(supplement.id)}
                style={[
                  styles.choiceItem,
                  selected && styles.choiceItemSelected,
                  showCorrect && styles.choiceItemCorrect,
                  showWrong && styles.choiceItemWrong,
                ]}
              >
                <Text style={styles.choiceTitle}>{supplement.name}</Text>
                {supplement.description ? (
                  <Text style={styles.choiceSubtitle}>{supplement.description}</Text>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>

        {!submitted ? (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setSubmitted(true)}
          >
            <Text style={styles.primaryButtonText}>Ellenőrzés</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Eredmény</Text>
            <Text style={styles.resultLine}>Pont: {score} / {maxScore}</Text>
            <Text style={styles.resultLine}>Találat: {hitCount}</Text>
            <Text style={styles.resultLine}>Hibás jelölés: {missCount}</Text>
            <Text style={styles.resultLine}>Kihagyott helyes: {missingCount}</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={nextQuestion}>
              <Text style={styles.primaryButtonText}>Új kérdés</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
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
  menuContainer: {
    paddingBottom: 24,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 24,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    marginBottom: 12,
  },
  backButtonText: {
    fontSize: 14,
    color: "#111827",
  },
  infoText: {
    fontSize: 14,
    color: "#cbd5f5",
    marginTop: 8,
  },
  questionCard: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#0f172a",
  },
  questionTitle: {
    color: "#e2e8f0",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },
  questionChipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  questionChip: {
    borderWidth: 1,
    borderColor: "#475569",
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#1e293b",
  },
  slotChip: {
    borderColor: "#f59e0b",
    backgroundColor: "#78350f",
  },
  questionChipText: {
    color: "#e2e8f0",
    fontSize: 12,
    fontWeight: "700",
  },
  slotHighlight: {
    color: "#fde68a",
    fontWeight: "700",
  },
  choiceList: {
    marginTop: 14,
    gap: 8,
  },
  choiceItem: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#0f172a",
  },
  choiceItemSelected: {
    borderColor: "#38bdf8",
    backgroundColor: "#082f49",
  },
  choiceItemCorrect: {
    borderColor: "#22c55e",
    backgroundColor: "#052e16",
  },
  choiceItemWrong: {
    borderColor: "#ef4444",
    backgroundColor: "#450a0a",
  },
  choiceTitle: {
    color: "#e2e8f0",
    fontWeight: "700",
    fontSize: 14,
  },
  choiceSubtitle: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 3,
  },
  primaryButton: {
    marginTop: 14,
    backgroundColor: "#38bdf8",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#082f49",
    fontWeight: "800",
    fontSize: 15,
  },
  resultBox: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#111827",
  },
  resultTitle: {
    color: "#f8fafc",
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 6,
  },
  resultLine: {
    color: "#cbd5e1",
    fontSize: 13,
    marginBottom: 2,
  },
});
