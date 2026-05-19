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

type DayProfile = {
  id: "light_weights" | "light_rest" | "heavy_weights" | "heavy_rest";
  label: "Light edzős" | "Light pihenő" | "Heavy edzős" | "Heavy pihenő";
  description: string;
  cyclePhase: CyclePhase;
  trainingKind: TrainingKind;
};

type QuizQuestion = {
  scenario: QuizScenario;
  slot: SupplementTimeSlot;
};

const DAY_PROFILES: DayProfile[] = [
  {
    id: "light_weights",
    label: "Light edzős",
    description: "Könnyebb súlyzós nap, mérsékeltebb edzésstack.",
    cyclePhase: "light",
    trainingKind: "weights",
  },
  {
    id: "light_rest",
    label: "Light pihenő",
    description: "Könnyebb ciklus, nincs edzés előtti/utáni stack.",
    cyclePhase: "light",
    trainingKind: "cardio_rest",
  },
  {
    id: "heavy_weights",
    label: "Heavy edzős",
    description: "Erősebb súlyzós nap, teljesebb edzésstack.",
    cyclePhase: "heavy",
    trainingKind: "weights",
  },
  {
    id: "heavy_rest",
    label: "Heavy pihenő",
    description: "Erősebb ciklus pihenőnapja, edzésstack nélkül.",
    cyclePhase: "heavy",
    trainingKind: "cardio_rest",
  },
];

const TIME_SLOT_ORDER: SupplementTimeSlot[] = [
  "after_breakfast",
  "after_lunch",
  "pre_workout",
  "post_workout",
  "with_dinner",
  "after_dinner",
];

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

function getDayProfileLabel(
  cyclePhase: CyclePhase,
  trainingKind: TrainingKind
): DayProfile["label"] {
  if (cyclePhase === "light" && trainingKind === "weights") {
    return "Light edzős";
  }
  if (cyclePhase === "light" && trainingKind === "cardio_rest") {
    return "Light pihenő";
  }
  if (cyclePhase === "heavy" && trainingKind === "weights") {
    return "Heavy edzős";
  }
  return "Heavy pihenő";
}

export default function ExtraRoute() {
  const [selectedProfileId, setSelectedProfileId] =
    useState<DayProfile["id"]>("light_weights");
  const [isPlanBeresDay, setIsPlanBeresDay] = useState(false);

  const [question, setQuestion] = useState<QuizQuestion>(() =>
    createRandomQuestion()
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { scenario, slot } = question;

  const selectedProfile =
    DAY_PROFILES.find((profile) => profile.id === selectedProfileId) ??
    DAY_PROFILES[0];

  const supplementsById = useMemo(() => {
    return new Map(SUPPLEMENTS.map((supplement) => [supplement.id, supplement]));
  }, []);

  const dailyPlanRules = useMemo(() => {
    return getDailySupplementPlan({
      cyclePhase: selectedProfile.cyclePhase,
      trainingKind: selectedProfile.trainingKind,
      isBeresDay: isPlanBeresDay,
    });
  }, [selectedProfile, isPlanBeresDay]);

  const groupedDailyPlan = useMemo(() => {
    return TIME_SLOT_ORDER.map((timeSlot) => {
      const items = dailyPlanRules
        .filter((rule) => rule.timeSlot === timeSlot)
        .map((rule) => {
          const supplement = supplementsById.get(rule.supplementId);
          return {
            id: rule.id,
            name: supplement?.name ?? rule.supplementId,
            dose: rule.dose,
            description: supplement?.description,
          };
        });

      return {
        timeSlot,
        items,
      };
    }).filter((section) => section.items.length > 0);
  }, [dailyPlanRules, supplementsById]);

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
  const quizProfileLabel = getDayProfileLabel(
    scenario.cyclePhase,
    scenario.trainingKind
  );
  const quizBeresLabel = scenario.isBeresDay ? "Béres nap" : "Nem Béres nap";

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

        <View style={styles.planCard}>
          <Text style={styles.planTitle}>Mai kiegészítő terv</Text>

          <View style={styles.profileRow}>
            {DAY_PROFILES.map((profile) => {
              const active = profile.id === selectedProfile.id;
              return (
                <TouchableOpacity
                  key={profile.id}
                  style={[styles.profileChip, active && styles.profileChipActive]}
                  onPress={() => setSelectedProfileId(profile.id)}
                >
                  <Text
                    style={[
                      styles.profileChipText,
                      active && styles.profileChipTextActive,
                    ]}
                  >
                    {profile.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.planDescription}>{selectedProfile.description}</Text>

          <View style={styles.beresRow}>
            <TouchableOpacity
              style={[
                styles.beresChip,
                isPlanBeresDay && styles.beresChipActive,
              ]}
              onPress={() => setIsPlanBeresDay(true)}
            >
              <Text
                style={[
                  styles.beresChipText,
                  isPlanBeresDay && styles.beresChipTextActive,
                ]}
              >
                Béres nap
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.beresChip,
                !isPlanBeresDay && styles.beresChipActive,
              ]}
              onPress={() => setIsPlanBeresDay(false)}
            >
              <Text
                style={[
                  styles.beresChipText,
                  !isPlanBeresDay && styles.beresChipTextActive,
                ]}
              >
                Nem Béres nap
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.planSectionsWrap}>
            {groupedDailyPlan.map((section) => (
              <View key={section.timeSlot} style={styles.planSectionCard}>
                <Text style={styles.planSectionTitle}>
                  {SUPPLEMENT_TIME_SLOT_LABELS[section.timeSlot]}
                </Text>
                {section.items.map((item) => (
                  <View key={item.id} style={styles.planSupplementItem}>
                    <Text style={styles.planSupplementName}>
                      {item.name} — {item.dose}
                    </Text>
                    {item.description ? (
                      <Text style={styles.planSupplementDescription}>
                        {item.description}
                      </Text>
                    ) : null}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.title}>Táplálékkiegészítő Kvíz</Text>
        <View style={styles.questionCard}>
          <Text style={styles.questionTitle}>Kvíz paraméterei</Text>
          <View style={styles.questionChipsRow}>
            <View style={[styles.questionChip, styles.slotChip]}>
              <Text style={styles.questionChipText}>
                {SUPPLEMENT_TIME_SLOT_LABELS[slot]}
              </Text>
            </View>
            <View style={styles.questionChip}>
              <Text style={styles.questionChipText}>{quizProfileLabel}</Text>
            </View>
            <View style={styles.questionChip}>
              <Text style={styles.questionChipText}>{quizBeresLabel}</Text>
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
  planCard: {
    marginTop: 2,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#0f172a",
  },
  planTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 10,
  },
  profileRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  profileChip: {
    borderWidth: 1,
    borderColor: "#475569",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 11,
    backgroundColor: "#1e293b",
  },
  profileChipActive: {
    borderColor: "#38bdf8",
    backgroundColor: "#0c4a6e",
  },
  profileChipText: {
    color: "#e2e8f0",
    fontSize: 12,
    fontWeight: "700",
  },
  profileChipTextActive: {
    color: "#e0f2fe",
  },
  planDescription: {
    marginTop: 10,
    color: "#cbd5e1",
    fontSize: 13,
    lineHeight: 18,
  },
  beresRow: {
    marginTop: 10,
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  beresChip: {
    borderWidth: 1,
    borderColor: "#475569",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 11,
    backgroundColor: "#1e293b",
  },
  beresChipActive: {
    borderColor: "#22c55e",
    backgroundColor: "#14532d",
  },
  beresChipText: {
    color: "#e2e8f0",
    fontSize: 12,
    fontWeight: "700",
  },
  beresChipTextActive: {
    color: "#dcfce7",
  },
  planSectionsWrap: {
    marginTop: 12,
    gap: 10,
  },
  planSectionCard: {
    borderWidth: 1,
    borderColor: "#1e293b",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#111827",
  },
  planSectionTitle: {
    color: "#f8fafc",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
  },
  planSupplementItem: {
    marginBottom: 6,
  },
  planSupplementName: {
    color: "#e2e8f0",
    fontSize: 13,
    fontWeight: "700",
  },
  planSupplementDescription: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 2,
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
