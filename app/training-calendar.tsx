import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type PlannedWorkoutMap = Record<string, string[]>;
type TrainingDayType = "pushA" | "pushB" | "pushC" | "pushD" | "legsCore" | "pullA" | "pullB" | "pullC" | "pullD" | "activeRest";

const STORAGE_KEY = "training.calendar.plans.v1";

const DAY_TYPE_LABELS: Record<TrainingDayType, string> = {
  pushA: "Push A",
  pushB: "Push B",
  pushC: "Push C",
  pushD: "Push D",
  legsCore: "Láb / Core",
  pullA: "Pull A",
  pullB: "Pull B",
  pullC: "Pull C",
  pullD: "Pull D",
  activeRest: "Active Rest",
};

function getTrainingDayType(trainingDayIndex: number): TrainingDayType {
  const zeroBased = trainingDayIndex - 1;
  const dayInCycle = zeroBased % 4;

  if (dayInCycle === 0) {
    const pushIndex = Math.floor(zeroBased / 4) % 4;
    if (pushIndex === 0) return "pushA";
    if (pushIndex === 1) return "pushB";
    if (pushIndex === 2) return "pushC";
    return "pushD";
  }

  if (dayInCycle === 1) return "legsCore";

  if (dayInCycle === 2) {
    const pullIndex = Math.floor(zeroBased / 4) % 4;
    if (pullIndex === 0) return "pullA";
    if (pullIndex === 1) return "pullB";
    if (pullIndex === 2) return "pullC";
    return "pullD";
  }

  return "activeRest";
}

function dateKey(year: number, monthIndex: number, day: number) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function TrainingCalendarScreen() {
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  });
  const [newPlanText, setNewPlanText] = useState("");
  const [selectedTrainingDayIndex, setSelectedTrainingDayIndex] = useState(1);
  const [plannedMap, setPlannedMap] = useState<PlannedWorkoutMap>({});

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (!raw || !mounted) return;
        const parsed = JSON.parse(raw) as PlannedWorkoutMap;
        if (parsed && typeof parsed === "object") setPlannedMap(parsed);
      } catch {
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(plannedMap)).catch(() => {});
  }, [plannedMap]);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const monthName = cursor.toLocaleDateString("hu-HU", { year: "numeric", month: "long" });
  const monthFirstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const selectedPlans = useMemo(() => plannedMap[selectedDate] ?? [], [plannedMap, selectedDate]);
  const selectedTrainingDayType = useMemo(
    () => getTrainingDayType(selectedTrainingDayIndex),
    [selectedTrainingDayIndex]
  );
  const selectedTrainingDayLabel = `${selectedTrainingDayIndex}. nap - ${DAY_TYPE_LABELS[selectedTrainingDayType]}`;

  function prevMonth() {
    setCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }

  function nextMonth() {
    setCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }

  function addPlan() {
    const value = newPlanText.trim();
    if (!value) return;

    setPlannedMap((prev) => {
      const current = prev[selectedDate] ?? [];
      return {
        ...prev,
        [selectedDate]: [value, ...current],
      };
    });
    setNewPlanText("");
  }

  function addTrainingDayTemplate() {
    const value = selectedTrainingDayLabel;
    setPlannedMap((prev) => {
      const current = prev[selectedDate] ?? [];
      return {
        ...prev,
        [selectedDate]: [value, ...current],
      };
    });
  }

  function deletePlan(index: number) {
    setPlannedMap((prev) => {
      const current = [...(prev[selectedDate] ?? [])];
      current.splice(index, 1);

      if (current.length === 0) {
        const copy = { ...prev };
        delete copy[selectedDate];
        return copy;
      }

      return {
        ...prev,
        [selectedDate]: current,
      };
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Vissza</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Edzésnaptár</Text>
        <Text style={styles.subtitle}>Itt előre megtervezheted az edzésnapokat.</Text>

        <View style={styles.monthHeader}>
          <TouchableOpacity style={styles.navButton} onPress={prevMonth}>
            <Text style={styles.navButtonText}>◀</Text>
          </TouchableOpacity>
          <Text style={styles.monthTitle}>{monthName}</Text>
          <TouchableOpacity style={styles.navButton} onPress={nextMonth}>
            <Text style={styles.navButtonText}>▶</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.weekdays}>
          <Text style={styles.weekday}>H</Text>
          <Text style={styles.weekday}>K</Text>
          <Text style={styles.weekday}>Sze</Text>
          <Text style={styles.weekday}>Cs</Text>
          <Text style={styles.weekday}>P</Text>
          <Text style={styles.weekday}>Szo</Text>
          <Text style={styles.weekday}>V</Text>
        </View>

        <View style={styles.grid}>
          {Array.from({ length: monthFirstWeekday }).map((_, index) => (
            <View key={`empty-${index}`} style={[styles.dayCell, styles.emptyCell]} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const key = dateKey(year, month, day);
            const hasPlan = (plannedMap[key] ?? []).length > 0;
            const isSelected = key === selectedDate;

            return (
              <TouchableOpacity
                key={key}
                style={[styles.dayCell, isSelected ? styles.dayCellSelected : null]}
                onPress={() => setSelectedDate(key)}
              >
                <Text style={[styles.dayText, isSelected ? styles.dayTextSelected : null]}>{day}</Text>
                {hasPlan ? <View style={styles.planDot} /> : null}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.planCard}>
          <Text style={styles.planTitle}>Kiválasztott nap: {selectedDate}</Text>

          <View style={styles.addRow}>
            <TextInput
              style={styles.input}
              placeholder="Pl. Push A / Fekvenyomás fókusz"
              placeholderTextColor="#94a3b8"
              value={newPlanText}
              onChangeText={setNewPlanText}
            />
            <TouchableOpacity style={styles.addButton} onPress={addPlan}>
              <Text style={styles.addButtonText}>Hozzáadás</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.templateSection}>
            <Text style={styles.templateTitle}>Választás az edzésnapló 32 napjából</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.templateChipsRow}>
              {Array.from({ length: 32 }).map((_, index) => {
                const dayIndex = index + 1;
                const dayType = getTrainingDayType(dayIndex);
                const isSelected = selectedTrainingDayIndex === dayIndex;
                return (
                  <TouchableOpacity
                    key={`template-${dayIndex}`}
                    style={[styles.templateChip, isSelected ? styles.templateChipSelected : null]}
                    onPress={() => setSelectedTrainingDayIndex(dayIndex)}
                  >
                    <Text style={[styles.templateChipText, isSelected ? styles.templateChipTextSelected : null]}>
                      {dayIndex}. {DAY_TYPE_LABELS[dayType]}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <Text style={styles.templateSelectedText}>Kiválasztott: {selectedTrainingDayLabel}</Text>

            <TouchableOpacity style={styles.addTemplateButton} onPress={addTrainingDayTemplate}>
              <Text style={styles.addButtonText}>Kiválasztott edzésnap hozzáadása</Text>
            </TouchableOpacity>
          </View>

          {selectedPlans.length === 0 ? (
            <Text style={styles.emptyText}>Erre a napra még nincs tervezett edzés.</Text>
          ) : (
            selectedPlans.map((item, index) => (
              <View key={`${selectedDate}-${index}-${item}`} style={styles.planItem}>
                <Text style={styles.planItemText}>{item}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => deletePlan(index)}>
                  <Text style={styles.deleteButtonText}>Törlés</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
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
    color: "#111827",
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#e5e7eb",
    marginBottom: 6,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginBottom: 14,
  },
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  navButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e293b",
  },
  navButtonText: {
    color: "#e5e7eb",
    fontSize: 15,
    fontWeight: "800",
  },
  monthTitle: {
    color: "#e5e7eb",
    fontWeight: "800",
    fontSize: 17,
  },
  weekdays: {
    flexDirection: "row",
    marginBottom: 6,
  },
  weekday: {
    width: `${100 / 7}%`,
    textAlign: "center",
    color: "#94a3b8",
    fontWeight: "700",
    fontSize: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 14,
  },
  dayCell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    padding: 4,
    borderWidth: 1,
    borderColor: "#1e293b",
    backgroundColor: "#0b1220",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCell: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  dayCellSelected: {
    borderColor: "#38bdf8",
    backgroundColor: "#0f172a",
  },
  dayText: {
    color: "#cbd5f5",
    fontWeight: "700",
  },
  dayTextSelected: {
    color: "#7dd3fc",
  },
  planDot: {
    marginTop: 5,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22c55e",
  },
  planCard: {
    backgroundColor: "#0b1220",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 12,
  },
  planTitle: {
    color: "#e5e7eb",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 10,
  },
  addRow: {
    gap: 8,
    marginBottom: 10,
  },
  templateSection: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#020617",
  },
  templateTitle: {
    color: "#cbd5f5",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
  },
  templateChipsRow: {
    gap: 8,
    paddingVertical: 2,
  },
  templateChip: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: "#0b1220",
  },
  templateChipSelected: {
    borderColor: "#38bdf8",
    backgroundColor: "#0f172a",
  },
  templateChipText: {
    color: "#cbd5f5",
    fontSize: 12,
    fontWeight: "700",
  },
  templateChipTextSelected: {
    color: "#7dd3fc",
  },
  templateSelectedText: {
    marginTop: 8,
    marginBottom: 8,
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
  },
  addTemplateButton: {
    backgroundColor: "#1d4ed8",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#e5e7eb",
    backgroundColor: "#020617",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#059669",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#ecfeff",
    fontWeight: "800",
  },
  emptyText: {
    color: "#94a3b8",
    fontSize: 13,
  },
  planItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    backgroundColor: "#020617",
  },
  planItemText: {
    color: "#e5e7eb",
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
  },
  deleteButton: {
    backgroundColor: "#7f1d1d",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  deleteButtonText: {
    color: "#fee2e2",
    fontSize: 12,
    fontWeight: "700",
  },
});
