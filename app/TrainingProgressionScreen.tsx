import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ---- ALAP TÍPUSOK ----
type CyclePhase = "light" | "heavy";

type TrainingDayType =
  | "pushA"
  | "pushB"
  | "pushC"
  | "pushD"
  | "legsCore"
  | "pullA"
  | "pullB"
  | "pullC"
  | "pullD"
  | "activeRest";

type ExerciseCategory = "big" | "medium" | "isolation";

type RepRange = {
  min: number;
  max: number;
};

type PhaseConfig = {
  sets: number;
  reps: RepRange;
};

type TrainingExercise = {
  id: string;
  name: string;
  category: ExerciseCategory;
  light: PhaseConfig;
  heavy: PhaseConfig;
};

type TrainingDay = {
  id: TrainingDayType;
  label: string;
  exercises: TrainingExercise[];
};

type ExerciseLog = {
  weight: string;
  reps: string[];
  suggestedNextWeight?: number | null;
};

// ---- NAP TÍPUS CIKLUS ----

const DAY_TYPES_CYCLE: TrainingDayType[] = ["pushA", "legsCore", "pullA", "activeRest"];

// ---- GYAKORLATOK ----
const TRAINING_DAYS: TrainingDay[] = [
  {
    id: "pushA",
    label: "Push A – Erő + felső mell",
    exercises: [
      { id: "bench_press_pushA", name: "Fekvenyomás rúddal", category: "big", light: { sets: 4, reps: { min: 8, max: 10 } }, heavy: { sets: 5, reps: { min: 5, max: 6 } } },
      { id: "incline_press_pushA", name: "Döntött padon nyomás", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 6, max: 8 } } },
      { id: "incline_fly_pushA", name: "Tárogatás döntött padon", category: "isolation", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 3, reps: { min: 10, max: 12 } } },
      { id: "arnold_press_pushA", name: "Arnold press", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "lateral_raise_pushA", name: "Oldalemelés", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "face_pull_pushA", name: "Face pull (gumi)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "pullover_pushA", name: "Pullover", category: "isolation", light: { sets: 2, reps: { min: 15, max: 20 } }, heavy: { sets: 2, reps: { min: 12, max: 15 } } },
    ],
  },
  {
    id: "pushB",
    label: "Push B – Vízszintes nyomás + tricepsz",
    exercises: [
      { id: "bench_press_pushB", name: "Fekvenyomás rúddal (szűkebb)", category: "big", light: { sets: 4, reps: { min: 8, max: 10 } }, heavy: { sets: 5, reps: { min: 4, max: 6 } } },
      { id: "db_fly_pushB", name: "Tárogatás kézisúlyzóval", category: "isolation", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 3, reps: { min: 10, max: 12 } } },
      { id: "ohp_from_chest_pushB", name: "Állva nyomás mellről (rúd)", category: "big", light: { sets: 3, reps: { min: 8, max: 10 } }, heavy: { sets: 4, reps: { min: 6, max: 8 } } },
      { id: "lying_triceps_pushB", name: "Tricepsznyújtás fekve", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
      { id: "db_shoulder_press_pushB", name: "Vállból nyomás kézisúlyzóval", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "dips_pushB", name: "Tolódzkodás", category: "big", light: { sets: 3, reps: { min: 8, max: 12 } }, heavy: { sets: 3, reps: { min: 6, max: 10 } } },
      { id: "band_pressout_pushB", name: "Gumiköteles nyomás", category: "isolation", light: { sets: 2, reps: { min: 15, max: 25 } }, heavy: { sets: 2, reps: { min: 12, max: 20 } } },
    ],
  },
  {
    id: "pushC",
    label: "Push C – Oldalsó váll + tartás",
    exercises: [
      { id: "landmine_press_pushC", name: "Landmine press (térdelésben)", category: "big", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 6, max: 8 } } },
      { id: "arnold_press_pushC", name: "Arnold press", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "lateral_raise_pushC", name: "Oldalemelés", category: "isolation", light: { sets: 4, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "reverse_fly_pushC", name: "Reverse fly (hason fekve)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "band_pullapart_pushC", name: "Pull-apart (gumi)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 15, max: 20 } } },
      { id: "face_pull_pushC", name: "Face pull (gumi)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "pullover_pushC", name: "Pullover", category: "isolation", light: { sets: 2, reps: { min: 15, max: 20 } }, heavy: { sets: 2, reps: { min: 12, max: 15 } } },
    ],
  },
  {
    id: "pushD",
    label: "Push D – Stabilitás + core-integrált",
    exercises: [
      { id: "superman_pushD", name: "Superman (törzsaktiválás)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "landmine_press_pushD", name: "Landmine press (térdelve)", category: "big", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 6, max: 8 } } },
      { id: "ohp_pushD", name: "Állva nyomás rúddal", category: "big", light: { sets: 4, reps: { min: 8, max: 10 } }, heavy: { sets: 5, reps: { min: 5, max: 6 } } },
      { id: "pushup_pushD", name: "Fekvőtámasz (progresszív)", category: "medium", light: { sets: 3, reps: { min: 10, max: 20 } }, heavy: { sets: 3, reps: { min: 8, max: 15 } } },
      { id: "band_press_pushD", name: "Gumiköteles nyomás (mellkasból)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "face_pull_pushD", name: "Face pull (gumi)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "dips_pushD", name: "Tolódzkodás", category: "big", light: { sets: 3, reps: { min: 8, max: 12 } }, heavy: { sets: 3, reps: { min: 6, max: 10 } } },
    ],
  },

  { id: "legsCore", label: "Láb / Core nap (placeholder)", exercises: [] },

  {
    id: "pullA",
    label: "Pull A – Erő + hátvastagság",
    exercises: [
      { id: "pullup_neutral_pullA", name: "Húzódzkodás (párhuzamos fogás)", category: "big", light: { sets: 4, reps: { min: 6, max: 10 } }, heavy: { sets: 5, reps: { min: 5, max: 8 } } },
      { id: "prone_row_bar_pullA", name: "Evezés padon hason fekve (rúd)", category: "big", light: { sets: 3, reps: { min: 8, max: 12 } }, heavy: { sets: 4, reps: { min: 6, max: 8 } } },
      { id: "tbar_row_pullA", name: "T-bar evezés", category: "big", light: { sets: 3, reps: { min: 8, max: 10 } }, heavy: { sets: 4, reps: { min: 6, max: 8 } } },
      { id: "band_row_seated_pullA", name: "Gumiköteles evezés ülve", category: "medium", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 3, reps: { min: 10, max: 12 } } },
      { id: "ez_bar_curl_pullA", name: "Bicepszezés francia rúddal", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "face_pull_band_pullA", name: "Face pull (gumi)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "farmers_hold_pullA", name: "Farmer's hold", category: "isolation", light: { sets: 3, reps: { min: 20, max: 30 } }, heavy: { sets: 3, reps: { min: 30, max: 40 } } },
    ],
  },
  {
    id: "pullB",
    label: "Pull B – Bicepsz + hátsó delta",
    exercises: [
      { id: "pullup_wide_pullB", name: "Húzódzkodás (széles fogás)", category: "big", light: { sets: 4, reps: { min: 5, max: 8 } }, heavy: { sets: 5, reps: { min: 4, max: 6 } } },
      { id: "band_row_behind_pullB", name: "Gumiköteles evezés (hát mögül húzás)", category: "medium", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 3, reps: { min: 10, max: 12 } } },
      { id: "reverse_fly_prone_pullB", name: "Reverse fly (padon hason)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "db_curl_pullB", name: "Bicepsz egykezes súllyal", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
      { id: "concentration_curl_pullB", name: "Koncentrált bicepsz", category: "isolation", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "trow_hold_pullB", name: "T-row tartott helyzet", category: "medium", light: { sets: 3, reps: { min: 20, max: 30 } }, heavy: { sets: 3, reps: { min: 30, max: 40 } } },
      { id: "pull_apart_pullB", name: "Pull-apart (állva vagy ülve)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "zottman_curl_pullB", name: "Zottman curl (váltott)", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
    ],
  },
  {
    id: "pullC",
    label: "Pull C – Fogáserő + stabilitás",
    exercises: [
      { id: "pullup_underhand_pullC", name: "Húzódzkodás (alsó fogás)", category: "big", light: { sets: 4, reps: { min: 6, max: 10 } }, heavy: { sets: 5, reps: { min: 5, max: 8 } } },
      { id: "inverted_row_pullC", name: "Vízszintes húzódzkodás", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
      { id: "farmers_hold_pullC", name: "Farmer's hold", category: "isolation", light: { sets: 3, reps: { min: 20, max: 30 } }, heavy: { sets: 4, reps: { min: 30, max: 40 } } },
      { id: "superman_row_pullC", name: "Superman + evezés (karhúzással)", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "shrug_db_pullC", name: "Shrug (kézisúlyzó)", category: "medium", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
      { id: "reverse_plank_pullC", name: "Reverse plank tartás", category: "isolation", light: { sets: 3, reps: { min: 20, max: 30 } }, heavy: { sets: 3, reps: { min: 30, max: 40 } } },
    ],
  },
  {
    id: "pullD",
    label: "Pull D – Húzódzkodás variáció + pumpa",
    exercises: [
      { id: "pullup_combo_pullD", name: "Kombinált húzódzkodás (fogás variációk)", category: "big", light: { sets: 4, reps: { min: 6, max: 10 } }, heavy: { sets: 5, reps: { min: 4, max: 6 } } },
      { id: "inverted_row_bordasfal_pullD", name: "Inverz evezés (bordásfal / TRX)", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
      { id: "band_row_slow_pullD", name: "Gumiköteles evezés lassítva", category: "medium", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 3, reps: { min: 10, max: 12 } } },
      { id: "reverse_fly_band_pullD", name: "Reverse fly (gumival)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "face_pull_band_seated_pullD", name: "Face pull (ülve, gumival)", category: "isolation", light: { sets: 3, reps: { min: 15, max: 20 } }, heavy: { sets: 3, reps: { min: 12, max: 15 } } },
      { id: "db_alt_curl_pullD", name: "Bicepsz váltott kézisúlyzóval", category: "medium", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
      { id: "concentration_curl_pullD", name: "Koncentrált bicepsz", category: "isolation", light: { sets: 3, reps: { min: 10, max: 12 } }, heavy: { sets: 3, reps: { min: 8, max: 10 } } },
      { id: "superman_hold_pullD", name: "Superman tartás", category: "isolation", light: { sets: 3, reps: { min: 20, max: 30 } }, heavy: { sets: 4, reps: { min: 30, max: 40 } } },
      { id: "shrug_db_pullD", name: "Shrug", category: "medium", light: { sets: 3, reps: { min: 12, max: 15 } }, heavy: { sets: 4, reps: { min: 8, max: 10 } } },
    ],
  },

  { id: "activeRest", label: "Active rest nap (pl. súlyszán, core, mobilitás)", exercises: [] },
];

// Helpers
function findExerciseById(id: string): TrainingExercise | undefined {
  for (const day of TRAINING_DAYS) {
    const ex = day.exercises.find((e) => e.id === id);
    if (ex) return ex;
  }
  return undefined;
}

function calculateSuggestedNextWeight(
  exercise: TrainingExercise,
  phase: CyclePhase,
  weight: number,
  reps: number[]
): number | null {
  if (!weight || Number.isNaN(weight)) return null;
  const cfg = phase === "light" ? exercise.light : exercise.heavy;
  const target = cfg.reps;
  if (reps.length < cfg.sets) return null;
  const usedReps = reps.slice(0, cfg.sets);
  const reachedTop = usedReps.every((r) => r >= target.max);
  if (!reachedTop) return weight;

  let multiplier = 1;
  if (exercise.category === "big") {
    multiplier = phase === "light" ? 1.025 : 1.03;
  } else if (exercise.category === "medium") {
    multiplier = phase === "light" ? 1.02 : 1.025;
  } else {
    multiplier = 1.02;
  }
  const rawNext = weight * multiplier;
  return Math.round(rawNext * 2) / 2;
}

// ------------- FŐ KOMPONENS -------------
export default function TrainingProgressionScreen() {
  const [trainingDayIndex, setTrainingDayIndex] = useState<number>(1);
  const phase: CyclePhase = trainingDayIndex <= 16 ? "light" : "heavy";

  const dayType: TrainingDayType = useMemo(() => {
    const zeroBased = trainingDayIndex - 1;
    const dayInCycle = zeroBased % 4; // 0: push, 1: legs, 2: pull, 3: active rest

    if (dayInCycle === 0) {
      const pushIndex = Math.floor(zeroBased / 4) % 4; // 0..3
      if (pushIndex === 0) return "pushA";
      if (pushIndex === 1) return "pushB";
      if (pushIndex === 2) return "pushC";
      return "pushD";
    }

    if (dayInCycle === 1) return "legsCore";

    if (dayInCycle === 2) {
      const pullIndex = Math.floor(zeroBased / 4) % 4; // 0..3
      if (pullIndex === 0) return "pullA"; // 3., 19.
      if (pullIndex === 1) return "pullB"; // 7., 23.
      if (pullIndex === 2) return "pullC"; // 11., 27.
      return "pullD";                      // 15., 31.
    }

    return "activeRest";
  }, [trainingDayIndex]);

  const currentDay: TrainingDay | undefined = useMemo(
    () => TRAINING_DAYS.find((d) => d.id === dayType),
    [dayType]
  );

  const [logs, setLogs] = useState<Record<string, ExerciseLog>>({});

  const changeDay = (dir: -1 | 1) => {
    setTrainingDayIndex((prev) => {
      let next = prev + dir;
      if (next < 1) next = 32;
      if (next > 32) next = 1;
      return next;
    });
  };

  const updateLog = (exerciseId: string, updater: (prev: ExerciseLog) => ExerciseLog) => {
    setLogs((prev) => {
      const prevLog = prev[exerciseId] ?? { weight: "", reps: [] };
      const newLog = updater(prevLog);

      const exercise = findExerciseById(exerciseId);
      let suggested: number | null | undefined = null;

      if (exercise) {
        const numericWeight = parseFloat((newLog.weight || "").replace(",", "."));
        const numericReps = (newLog.reps || [])
          .map((r) => parseInt(r, 10))
          .filter((n) => !Number.isNaN(n));

        suggested = calculateSuggestedNextWeight(exercise, phase, numericWeight, numericReps);
      }

      return { ...prev, [exerciseId]: { ...newLog, suggestedNextWeight: suggested } };
    });
  };

  const handleWeightChange = (exerciseId: string, text: string) => {
    updateLog(exerciseId, (prev) => ({ ...prev, weight: text }));
  };

  const handleRepChange = (exerciseId: string, setIndex: number, text: string) => {
    updateLog(exerciseId, (prev) => {
      const reps = [...(prev.reps || [])];
      reps[setIndex] = text;
      return { ...prev, reps };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dayRow}>
          <TouchableOpacity onPress={() => changeDay(-1)} style={styles.navButton}>
            <Text style={styles.navButtonText}>‹</Text>
          </TouchableOpacity>

          <View style={styles.dayInfoBox}>
            <Text style={styles.dayTitle}>{trainingDayIndex}. nap</Text>
            <Text style={styles.daySubtitle}>
              Fázis: {phase === "light" ? "Light (1–16. nap)" : "Heavy (17–32. nap)"}
            </Text>
            <Text style={styles.daySubtitle}>Naptípus: {currentDay?.label ?? "—"}</Text>
          </View>

          <TouchableOpacity onPress={() => changeDay(1)} style={styles.navButton}>
            <Text style={styles.navButtonText}>›</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.helperText}>
          Töltsd ki a mai szériákat, a rendszer kiszámolja a következő edzés ajánlott súlyát.
        </Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {!currentDay || currentDay.exercises.length === 0 ? (
          <Text style={styles.emptyText}>
            Ehhez a naphoz még nincs edzés definiálva. (Láb / Pull napokat később feltöltjük.)
          </Text>
        ) : (
          currentDay.exercises.map((ex) => {
            const phaseCfg = phase === "light" ? ex.light : ex.heavy;
            const log = logs[ex.id] ?? { weight: "", reps: [] };
            const reps =
              log.reps && log.reps.length >= phaseCfg.sets
                ? log.reps.slice(0, phaseCfg.sets)
                : Array.from({ length: phaseCfg.sets }, (_, i) => log.reps?.[i] ?? "");

            const currentWeight = parseFloat((log.weight || "").replace(",", "."));
            const nextText =
              log.suggestedNextWeight == null
                ? "—"
                : log.suggestedNextWeight === currentWeight
                ? `Marad: ${log.suggestedNextWeight.toFixed(1)} kg`
                : `Emelés: ${log.suggestedNextWeight.toFixed(1)} kg`;

            return (
              <View key={ex.id} style={styles.exerciseCard}>
                <View style={styles.exerciseHeader}>
                  <Text style={styles.exerciseName}>{ex.name}</Text>
                  <Text style={styles.exerciseMeta}>
                    {phaseCfg.sets} × {phaseCfg.reps.min}–{phaseCfg.reps.max} ism.{"  •  "}
                    {ex.category === "big"
                      ? "Nagy alapgyakorlat"
                      : ex.category === "medium"
                      ? "Közepes összetett"
                      : "Izoláció / gumi"}
                  </Text>
                </View>

                <View style={styles.weightRow}>
                  <Text style={styles.weightLabel}>Aktuális súly (kg):</Text>
                  <TextInput
                    style={styles.weightInput}
                    keyboardType="numeric"
                    value={log.weight}
                    onChangeText={(text) => handleWeightChange(ex.id, text)}
                    placeholder="pl. 60"
                  />
                </View>

                <View style={styles.setsRow}>
                  {reps.map((value, index) => (
                    <View key={index} style={styles.setBox}>
                      <Text style={styles.setLabel}>{index + 1}. széria</Text>
                      <TextInput
                        style={styles.setInput}
                        keyboardType="numeric"
                        value={value}
                        onChangeText={(text) => handleRepChange(ex.id, index, text)}
                        placeholder="ism."
                      />
                    </View>
                  ))}
                </View>

                <View style={styles.nextWeightRow}>
                  <Text style={styles.nextWeightLabel}>Következő edzés ajánlott súlya:</Text>
                  <Text style={styles.nextWeightValue}>{nextText}</Text>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1120", padding: 12 },
  header: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#020617",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  dayRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  navButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonText: { fontSize: 20, color: "#e5e7eb", fontWeight: "700" },
  dayInfoBox: { flex: 1, marginHorizontal: 8 },
  dayTitle: { fontSize: 18, fontWeight: "700", color: "#e5e7eb" },
  daySubtitle: { fontSize: 12, color: "#9ca3af" },
  helperText: { fontSize: 12, color: "#9ca3af", marginTop: 4 },
  scroll: { flex: 1 },
  scrollContent: { paddingTop: 4, paddingBottom: 24 },
  emptyText: { color: "#e5e7eb", fontSize: 14, textAlign: "center", marginTop: 16 },
  exerciseCard: {
    backgroundColor: "#020617",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  exerciseHeader: { marginBottom: 8 },
  exerciseName: { fontSize: 16, fontWeight: "700", color: "#e5e7eb" },
  exerciseMeta: { fontSize: 12, color: "#9ca3af", marginTop: 2 },
  weightRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  weightLabel: { fontSize: 13, color: "#e5e7eb", marginRight: 8 },
  weightInput: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1f2937",
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
    color: "#e5e7eb",
    backgroundColor: "#020617",
  },
  setsRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 8 },
  setBox: {
    width: "23%",
    minWidth: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1f2937",
    padding: 6,
    backgroundColor: "#020617",
    marginRight: 4,
    marginBottom: 4,
  },
  setLabel: { fontSize: 11, color: "#9ca3af", marginBottom: 2 },
  setInput: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#1f2937",
    paddingHorizontal: 4,
    paddingVertical: 4,
    fontSize: 13,
    color: "#e5e7eb",
    backgroundColor: "#020617",
    textAlign: "center",
  },
  nextWeightRow: {
    marginTop: 4,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#111827",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nextWeightLabel: { fontSize: 12, color: "#9ca3af" },
  nextWeightValue: { fontSize: 13, color: "#22c55e", fontWeight: "700" },
});