import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MEALS from "../types/meals";
import type { MacroTotals } from "../types/nutrition";

import type { CookingInstruction } from "../types/preparations";
import COOKING_INSTRUCTIONS from "../types/preparations";

import {
  EMPTY_TOTALS,
  addMacroTotals,
  macrosFromMeal,
} from "../features/diet/utils/macroTotals";

import {
  TOP_BREAKFAST_RANKS,
  TOP_TIZORAI_RANKS,
  TOP_LUNCH_RANKS,
  TOP_UZSONNA_RANKS,
  TOP_DINNER_RANKS,
  getTopMealBadge,
} from "../features/diet/constants/topMealRanks";

import { useTopMealFilters } from "../features/diet/hooks/useTopMealFilters";

import {
  buildShoppingList,
  buildShoppingListByMeal,
} from "../features/diet/utils/shoppingList";
import { groupSupplementsByTimeSlot } from "../features/diet/utils/supplementGrouping";

import {
  SUPPLEMENTS,
  SUPPLEMENT_TIME_SLOT_LABELS,
  getDailySupplementPlan,
  type CyclePhase,
  type SupplementTimeSlot,
  type TrainingKind,
} from "../types/supplements";

// ---- PROPS ----
type SajatEtrendScreenProps = {
  onBack?: () => void;
};

// ---- HELYI TÍPUSOK ----
type SlotType = "Reggeli" | "Tízorai" | "Ebéd" | "Uzsonna" | "Vacsora";

const SLOTS: SlotType[] = ["Reggeli", "Tízorai", "Ebéd", "Uzsonna", "Vacsora"];
const SAVED_DAILY_PLAN_STORAGE_KEY = "@sajat_etrend_saved_daily_plan_v1";

type SavedDailyPlan = {
  day: number;
  isWorkoutDay: boolean;
  cyclePhase: CyclePhase;
  selectedMealsBySlot: Record<SlotType, string | null>;
  selectedSlot: SlotType | null;
  selectedMealId: string | null;
};

const isSlotType = (value: unknown): value is SlotType =>
  typeof value === "string" && SLOTS.includes(value as SlotType);

export default function SajatEtrendScreen({ onBack }: SajatEtrendScreenProps) {
  const [day, setDay] = useState<number>(1);
  const [isWorkoutDay, setIsWorkoutDay] = useState<boolean>(true);
  const [selectedMealId, setSelectedMealId] = useState<string | null>(null);

  const {
    showTopBreakfastOnly,
    setShowTopBreakfastOnly,
    showTopTizoraiOnly,
    setShowTopTizoraiOnly,
    showTopLunchOnly,
    setShowTopLunchOnly,
    showTopUzsonnaOnly,
    setShowTopUzsonnaOnly,
    showTopDinnerOnly,
    setShowTopDinnerOnly,
  } = useTopMealFilters();

  // --- ÚJ: cycle phase + Béres nap + training kind ---
  const [cyclePhase, setCyclePhase] = useState<CyclePhase>("light");

  // pl. 1., 3. és 5. nap legyen Béres nap
  const isBeresDay = useMemo(() => [1, 3, 5].includes(day), [day]);

  // súlyzós vs pihenős/kardiós logikai flag
  const trainingKind: TrainingKind = isWorkoutDay ? "weights" : "cardio_rest";

  // adott nap ételei
  const mealsForDay = useMemo(() => {
    return MEALS.filter((meal) => meal.day === day);
  }, [day]);

  const [selectedSlot, setSelectedSlot] = useState<SlotType | null>(null);

  const getMealsForSlot = (slot: SlotType) => {
    const slotMeals = mealsForDay.filter((meal) => meal.slot === slot);
    if (slot === "Reggeli" && showTopBreakfastOnly) {
      return slotMeals.filter((meal) => TOP_BREAKFAST_RANKS[meal.id]);
    }
    if (slot === "Tízorai" && showTopTizoraiOnly) {
      return slotMeals.filter((meal) => TOP_TIZORAI_RANKS[meal.id]);
    }
    if (slot === "Ebéd" && showTopLunchOnly) {
      return slotMeals.filter((meal) => TOP_LUNCH_RANKS[meal.id]);
    }
    if (slot === "Uzsonna" && showTopUzsonnaOnly) {
      return slotMeals.filter((meal) => TOP_UZSONNA_RANKS[meal.id]);
    }
    if (slot === "Vacsora" && showTopDinnerOnly) {
      return slotMeals.filter((meal) => TOP_DINNER_RANKS[meal.id]);
    }
    return slotMeals;
  };

  // kezdeti napszak beállítása
  useEffect(() => {
    const available = SLOTS.filter((slot) => getMealsForSlot(slot).length > 0);
    setSelectedSlot((prev) =>
      prev && available.includes(prev) ? prev : available[0] ?? null
    );
  }, [
    mealsForDay,
    showTopBreakfastOnly,
    showTopTizoraiOnly,
    showTopLunchOnly,
    showTopUzsonnaOnly,
    showTopDinnerOnly,
  ]);

  // slotonként kiválasztott étel
  const [selectedMealsBySlot, setSelectedMealsBySlot] = useState<
    Record<SlotType, string | null>
  >(() => {
    const init = {} as Record<SlotType, string | null>;
    SLOTS.forEach((s) => (init[s] = null));
    return init;
  });

  const handleSaveDailyPlan = async () => {
    const payload: SavedDailyPlan = {
      day,
      isWorkoutDay,
      cyclePhase,
      selectedMealsBySlot,
      selectedSlot,
      selectedMealId,
    };

    try {
      await AsyncStorage.setItem(
        SAVED_DAILY_PLAN_STORAGE_KEY,
        JSON.stringify(payload)
      );
      Alert.alert("Siker", "Napi terv elmentve.");
    } catch {
      Alert.alert("Hiba", "Nem sikerült a napi terv mentése.");
    }
  };

  const handleLoadDailyPlan = async () => {
    try {
      const raw = await AsyncStorage.getItem(SAVED_DAILY_PLAN_STORAGE_KEY);

      if (!raw) {
        Alert.alert("Nincs mentett terv", "Még nincs elmentett napi terved.");
        return;
      }

      const parsed = JSON.parse(raw) as Partial<SavedDailyPlan>;

      const restoredSelectedMealsBySlot: Record<SlotType, string | null> = {
        Reggeli: selectedMealsBySlot.Reggeli,
        Tízorai: selectedMealsBySlot.Tízorai,
        Ebéd: selectedMealsBySlot.Ebéd,
        Uzsonna: selectedMealsBySlot.Uzsonna,
        Vacsora: selectedMealsBySlot.Vacsora,
      };

      if (
        parsed.selectedMealsBySlot &&
        typeof parsed.selectedMealsBySlot === "object"
      ) {
        SLOTS.forEach((slot) => {
          const value = parsed.selectedMealsBySlot?.[slot];
          if (typeof value === "string" || value === null) {
            restoredSelectedMealsBySlot[slot] = value;
          }
        });
      }

      setDay(
        typeof parsed.day === "number" && parsed.day >= 1 && parsed.day <= 7
          ? parsed.day
          : day
      );
      setIsWorkoutDay(
        typeof parsed.isWorkoutDay === "boolean"
          ? parsed.isWorkoutDay
          : isWorkoutDay
      );
      setCyclePhase(
        parsed.cyclePhase === "light" || parsed.cyclePhase === "heavy"
          ? parsed.cyclePhase
          : cyclePhase
      );
      setSelectedMealsBySlot(restoredSelectedMealsBySlot);
      setSelectedSlot(
        parsed.selectedSlot === null || isSlotType(parsed.selectedSlot)
          ? parsed.selectedSlot
          : selectedSlot
      );
      setSelectedMealId(
        typeof parsed.selectedMealId === "string" || parsed.selectedMealId === null
          ? parsed.selectedMealId
          : selectedMealId
      );

      Alert.alert("Siker", "Mentett napi terv betöltve.");
    } catch {
      Alert.alert("Hiba", "Nem sikerült betölteni a mentett napi tervet.");
    }
  };

  // nap léptetése (1–7 között körbe)
  const changeDay = (dir: -1 | 1) => {
    setDay((prev) => {
      const next = prev + dir;
      if (next < 1) return 7;
      if (next > 7) return 1;
      return next;
    });
  };

  // adott slotban lépkedés a variációk között
  const changeSlotSelection = (slot: SlotType, dir: -1 | 1) => {
    const items = getMealsForSlot(slot);
    if (items.length === 0) return;
    const currentId = selectedMealsBySlot[slot];
    const idx = items.findIndex((i) => i.id === currentId);
    const start = idx === -1 ? 0 : idx;
    const next = (start + dir + items.length) % items.length;
    const nextId = items[next].id;
    setSelectedMealsBySlot((prev) => ({ ...prev, [slot]: nextId }));
    setSelectedMealId(nextId);
  };

  // aktuálisan kijelölt étel
  const currentMeal = useMemo(
    () => {
      const pool = selectedSlot ? getMealsForSlot(selectedSlot) : mealsForDay;
      return pool.find((m) => m.id === selectedMealId) ?? pool[0] ?? null;
    },
    [
      mealsForDay,
      selectedMealId,
      selectedSlot,
      showTopBreakfastOnly,
      showTopTizoraiOnly,
      showTopLunchOnly,
      showTopUzsonnaOnly,
      showTopDinnerOnly,
    ]
  );

  const currentMacros = useMemo(
    () =>
      currentMeal
        ? macrosFromMeal(currentMeal, isWorkoutDay)
        : { ...EMPTY_TOTALS },
    [currentMeal, isWorkoutDay]
  );

  const currentCookingInstruction = useMemo<CookingInstruction | null>(
    () =>
      currentMeal
        ? COOKING_INSTRUCTIONS.find((c) => c.id === currentMeal.id) ?? null
        : null,
    [currentMeal]
  );

  // slotonként kiválasztott ételek listája
  const selectedMealsList = useMemo(() => {
    return SLOTS.map(
      (slot) =>
        getMealsForSlot(slot).find((m) => m.id === selectedMealsBySlot[slot]) ??
        getMealsForSlot(slot)[0] ??
        null
    );
  }, [
    mealsForDay,
    selectedMealsBySlot,
    showTopBreakfastOnly,
    showTopTizoraiOnly,
    showTopLunchOnly,
    showTopUzsonnaOnly,
    showTopDinnerOnly,
  ]);

  // teljes napi makrók a kiválasztott ételekre
  const selectedTotals = useMemo(() => {
    return selectedMealsList.reduce<MacroTotals>((acc, meal) => {
      if (!meal) return acc;
      return addMacroTotals(acc, macrosFromMeal(meal, isWorkoutDay));
    }, { ...EMPTY_TOTALS });
  }, [selectedMealsList, isWorkoutDay]);

  const shoppingList = useMemo(
    () => buildShoppingList(selectedMealsList, isWorkoutDay),
    [selectedMealsList, isWorkoutDay]
  );

  const shoppingListByMeal = useMemo(
    () => buildShoppingListByMeal(selectedMealsList, isWorkoutDay),
    [selectedMealsList, isWorkoutDay]
  );

  // --- NAPI KIEGÉSZÍTŐK ---
  const dailySupplements = useMemo(
    () =>
      getDailySupplementPlan({
        cyclePhase,
        trainingKind,
        isBeresDay,
      }),
    [cyclePhase, trainingKind, isBeresDay]
  );

  const groupedSupplements = useMemo(
    () => groupSupplementsByTimeSlot(dailySupplements),
    [dailySupplements]
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* KERET: FELÜL FIX HEADER, ALUL GÖRGETHETŐ TARTALOM */}
      <View style={{ flex: 1 }}>
        {/* ---------- FIXEN MARADÓ HEADER ---------- */}
        <View style={styles.headerFixed}>
          {/* VISSZA GOMB + CÍM */}
          <View style={{ marginBottom: 8, flexDirection: "row", alignItems: "center" }}>
            {onBack && (
              <TouchableOpacity
                onPress={onBack}
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  borderRadius: 999,
                  backgroundColor: "#e5e7eb",
                  marginRight: 8,
                }}
              >
                <Text style={{ fontSize: 14 }}>← Főmenü</Text>
              </TouchableOpacity>
            )}
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#111827" }}>
              Saját étrend
            </Text>
          </View>

          {/* EDZÉSNAP / PIHENŐNAP VÁLASZTÓ */}
          <View style={styles.workoutToggleRow}>
            <Text style={styles.workoutToggleLabel}>
              {isWorkoutDay ? "Edzésnap" : "Pihenőnap"}
            </Text>

            <View style={styles.workoutToggleSwitchRow}>
              <Text
                style={[
                  styles.workoutToggleOption,
                  isWorkoutDay && styles.workoutToggleOptionActive,
                ]}
              >
                Edzésnap
              </Text>

              <Switch value={isWorkoutDay} onValueChange={setIsWorkoutDay} />

              <Text
                style={[
                  styles.workoutToggleOption,
                  !isWorkoutDay && styles.workoutToggleOptionActive,
                ]}
              >
                Pihenőnap
              </Text>
            </View>
          </View>

          {/* LIGHT / HEAVY FÁZIS VÁLASZTÓ */}
          <View style={styles.phaseToggleRow}>
            <Text style={styles.phaseToggleLabel}>Fázis</Text>
            <View style={styles.phaseToggleButtons}>
              <TouchableOpacity
                onPress={() => setCyclePhase("light")}
                style={[
                  styles.phaseToggleButton,
                  cyclePhase === "light" && styles.phaseToggleButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.phaseToggleButtonText,
                    cyclePhase === "light" &&
                      styles.phaseToggleButtonTextActive,
                  ]}
                >
                  Light
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setCyclePhase("heavy")}
                style={[
                  styles.phaseToggleButton,
                  cyclePhase === "heavy" && styles.phaseToggleButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.phaseToggleButtonText,
                    cyclePhase === "heavy" &&
                      styles.phaseToggleButtonTextActive,
                  ]}
                >
                  Heavy
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.planActionsRow}>
            <TouchableOpacity
              onPress={handleSaveDailyPlan}
              style={styles.planActionButton}
            >
              <Text style={styles.planActionButtonText}>Napi terv mentése</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLoadDailyPlan}
              style={styles.planActionButton}
            >
              <Text style={styles.planActionButtonText}>Mentett terv betöltése</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.topFiltersWrap}>
            <View style={styles.topBreakfastFilterRow}>
              <Text style={styles.topBreakfastFilterLabel}>Top reggeli szűrő</Text>
              <TouchableOpacity
                onPress={() => setShowTopBreakfastOnly((prev) => !prev)}
                style={[
                  styles.topBreakfastFilterButton,
                  showTopBreakfastOnly && styles.topBreakfastFilterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.topBreakfastFilterButtonText,
                    showTopBreakfastOnly && styles.topBreakfastFilterButtonTextActive,
                  ]}
                >
                  {showTopBreakfastOnly ? "Csak Top 5" : "Összes reggeli"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.topBreakfastFilterRow}>
              <Text style={styles.topBreakfastFilterLabel}>Top tízórai szűrő</Text>
              <TouchableOpacity
                onPress={() => setShowTopTizoraiOnly((prev) => !prev)}
                style={[
                  styles.topBreakfastFilterButton,
                  showTopTizoraiOnly && styles.topBreakfastFilterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.topBreakfastFilterButtonText,
                    showTopTizoraiOnly && styles.topBreakfastFilterButtonTextActive,
                  ]}
                >
                  {showTopTizoraiOnly ? "Csak Top 5" : "Összes tízórai"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.topBreakfastFilterRow}>
              <Text style={styles.topBreakfastFilterLabel}>Top ebéd szűrő</Text>
              <TouchableOpacity
                onPress={() => setShowTopLunchOnly((prev) => !prev)}
                style={[
                  styles.topBreakfastFilterButton,
                  showTopLunchOnly && styles.topBreakfastFilterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.topBreakfastFilterButtonText,
                    showTopLunchOnly && styles.topBreakfastFilterButtonTextActive,
                  ]}
                >
                  {showTopLunchOnly ? "Csak Top 5" : "Összes ebéd"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.topBreakfastFilterRow}>
              <Text style={styles.topBreakfastFilterLabel}>Top uzsonna szűrő</Text>
              <TouchableOpacity
                onPress={() => setShowTopUzsonnaOnly((prev) => !prev)}
                style={[
                  styles.topBreakfastFilterButton,
                  showTopUzsonnaOnly && styles.topBreakfastFilterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.topBreakfastFilterButtonText,
                    showTopUzsonnaOnly && styles.topBreakfastFilterButtonTextActive,
                  ]}
                >
                  {showTopUzsonnaOnly ? "Csak Top 5" : "Összes uzsonna"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.topBreakfastFilterRow}>
              <Text style={styles.topBreakfastFilterLabel}>Top vacsora szűrő</Text>
              <TouchableOpacity
                onPress={() => setShowTopDinnerOnly((prev) => !prev)}
                style={[
                  styles.topBreakfastFilterButton,
                  showTopDinnerOnly && styles.topBreakfastFilterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.topBreakfastFilterButtonText,
                    showTopDinnerOnly && styles.topBreakfastFilterButtonTextActive,
                  ]}
                >
                  {showTopDinnerOnly ? "Csak Top 5" : "Összes vacsora"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* NAPSZAK VÁLASZTÓ – EZ MARADJON FIXEN FELÜL */}
          <View style={styles.slotSelectorRow}>
            {SLOTS.map((slot) => {
              const count = getMealsForSlot(slot).length;
              const disabled = count === 0;
              const active = selectedSlot === slot;
              return (
                <TouchableOpacity
                  key={slot}
                  onPress={() => !disabled && setSelectedSlot(slot)}
                  activeOpacity={disabled ? 1 : 0.85}
                  style={[
                    styles.slotButton,
                    active && styles.slotButtonActive,
                    disabled && styles.slotButtonDisabled,
                  ]}
                >
                  <Text
                    style={[
                      styles.slotButtonText,
                      active && styles.slotButtonTextActive,
                      disabled && styles.slotButtonTextDisabled,
                    ]}
                  >
                    {slot}
                    {count > 0 ? ` (${count})` : ""}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* NAPI SOR: 5 slot-kártya + jobbra makrók - ÚJ: FIXEN */}
          <View style={styles.daySlotsRowContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.slotCardsScroller}
              contentContainerStyle={styles.slotCardsRow}
            >
              {SLOTS.map((slot) => {
                const items = getMealsForSlot(slot);
                const selectedId = selectedMealsBySlot[slot];
                const selectedIndex = items.findIndex(
                  (m) => m.id === selectedId
                );
                const currentIndex = selectedIndex === -1 ? 0 : selectedIndex;
                const currentSlotMeal = items[currentIndex] ?? null;
                const topMealBadge = getTopMealBadge(currentSlotMeal);

                return (
                  <View key={slot} style={styles.slotCard}>
                    <Text style={styles.slotCardTitle}>{slot}</Text>

                    <View style={styles.slotDayRow}>
                      <TouchableOpacity
                        onPress={() => changeDay(-1)}
                        style={styles.navButtonSmall}
                      >
                        <Text style={styles.navButtonText}>‹</Text>
                      </TouchableOpacity>

                      <Text style={styles.slotDayText}>{day}. nap</Text>

                      <TouchableOpacity
                        onPress={() => changeDay(1)}
                        style={styles.navButtonSmall}
                      >
                        <Text style={styles.navButtonText}>›</Text>
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.slotCardName} numberOfLines={2}>
                      {items[currentIndex]?.name ?? "—"}
                    </Text>

                    {topMealBadge && (
                      <View style={styles.topBreakfastBadge}>
                        <Text style={styles.topBreakfastBadgeText}>
                          {topMealBadge}
                        </Text>
                      </View>
                    )}

                    <View style={styles.slotNavRow}>
                      <TouchableOpacity
                        onPress={() => changeSlotSelection(slot, -1)}
                        disabled={items.length === 0}
                        style={[
                          styles.navButton,
                          items.length === 0 && styles.navButtonDisabled,
                        ]}
                      >
                        <Text style={styles.navButtonText}>‹</Text>
                      </TouchableOpacity>
                      <Text style={styles.slotCountText}>
                        {items.length > 0
                          ? `${currentIndex + 1}/${items.length}`
                          : "0"}
                      </Text>
                      <TouchableOpacity
                        onPress={() => changeSlotSelection(slot, 1)}
                        disabled={items.length === 0}
                        style={[
                          styles.navButton,
                          items.length === 0 && styles.navButtonDisabled,
                        ]}
                      >
                        <Text style={styles.navButtonText}>›</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>

            <View style={styles.dailyTotalsBox}>
              <Text style={styles.dailyTotalsTitle}>Kiválasztott makrók</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Kcal:</Text>
                <Text style={styles.summaryValue}>
                  {selectedTotals.kcal} kcal
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Fehérje:</Text>
                <Text style={styles.summaryValue}>
                  {selectedTotals.protein} g
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Szénhidrát:</Text>
                <Text style={styles.summaryValue}>
                  {selectedTotals.carbs} g
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Zsír:</Text>
                <Text style={styles.summaryValue}>
                  {selectedTotals.fat} g
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* headerFixed vége */}

        {/* ScrollView kezdete */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* TÖRÖLD INNEN A daySlotsRowContainer BLOKKOT */}

          {/* ---- MAI KIEGÉSZÍTŐK ---- */}
          <View style={styles.supplementContainer}>
            <Text style={styles.supplementTitle}>Mai kiegészítők</Text>
            <Text style={styles.supplementSubtitle}>
              {cyclePhase === "light"
                ? isWorkoutDay
                  ? "Light súlyzós nap"
                  : "Light pihenős / kardiós nap"
                : isWorkoutDay
                ? "Heavy súlyzós nap"
                : "Heavy pihenős / kardiós nap"}
              {"  •  "}
              {isBeresDay ? "Béres nap" : "Nem Béres nap"}
            </Text>

            {(
              [
                "after_breakfast",
                "after_lunch",
                "pre_workout",
                "post_workout",
                "with_dinner",
                "after_dinner",
              ] as SupplementTimeSlot[]
            ).map((slot) => {
              const rules = groupedSupplements[slot];
              if (!rules || rules.length === 0) return null;

              return (
                <View key={slot} style={styles.supplementSlotGroup}>
                  <Text style={styles.supplementSlotTitle}>
                    {SUPPLEMENT_TIME_SLOT_LABELS[slot]}
                  </Text>
                  {rules.map((rule) => {
                    const sup = SUPPLEMENTS.find(
                      (s) => s.id === rule.supplementId
                    );
                    
                    const isHighlighted = sup?.isCore === true;
                    const isPreWorkout = sup?.isPreWorkout === true;

                    return (
                      <Text
                        key={rule.id}
                        style={[
                          styles.supplementItemText,
                          isHighlighted && styles.supplementItemTextHighlighted,
                          isPreWorkout && styles.supplementItemTextPreWorkout
                        ]}
                      >
                        • {sup?.name ?? rule.supplementId}: {rule.dose}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>

          {/* KIVÁLASZTOTT NAPSZAK ÉTELEI */}
          {selectedSlot && (
            <View style={{ marginTop: 8, marginBottom: 12 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.slotList}
              >
                {getMealsForSlot(selectedSlot)
                  .map((item) => {
                    const macros = isWorkoutDay ? item.workout : item.rest;
                    const isSelected = item.id === selectedMealId;
                    return (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => setSelectedMealId(item.id)}
                        activeOpacity={0.85}
                        style={[
                          styles.compactMealCard,
                          isSelected && styles.mealCardSelected,
                        ]}
                      >
                        <Text
                          style={styles.compactMealName}
                          numberOfLines={2}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={styles.compactMealTime}
                          numberOfLines={1}
                        >
                          {item.timeOfDay}
                        </Text>
                        <View style={styles.compactMacrosRow}>
                          <Text style={styles.compactMacroLabel}>
                            Fehérje
                          </Text>
                          <Text style={styles.compactMacroValue}>
                            {macros.protein} g
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
              </ScrollView>
            </View>
          )}

          {/* NAPI ÖSSZESÍTŐ */}
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Napi összesítő</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Kalória:</Text>
              <Text style={styles.summaryValue}>
                {currentMacros.kcal} kcal
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Fehérje:</Text>
              <Text style={styles.summaryValue}>
                {currentMacros.protein} g
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Szénhidrát:</Text>
              <Text style={styles.summaryValue}>
                {currentMacros.carbs} g
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Zsír:</Text>
              <Text style={styles.summaryValue}>
                {currentMacros.fat} g
              </Text>
            </View>
          </View>

          {/* ÉTEL RÉSZLETEI + ELKÉSZÍTÉS */}
          {currentMeal && (
            <View style={styles.mealDetailsContainer}>
              <Text style={styles.mealDetailsTitle}>
                {currentMeal.name}
              </Text>
              {getTopMealBadge(currentMeal) && (
                  <View style={styles.topBreakfastBadge}>
                    <Text style={styles.topBreakfastBadgeText}>
                      {getTopMealBadge(currentMeal)}
                    </Text>
                  </View>
                )}
              <Text style={styles.mealDetailsSubtitle}>
                {currentMeal.timeOfDay}
              </Text>

              <View style={styles.mealMacrosContainer}>
                <View style={styles.mealMacro}>
                  <Text style={styles.mealMacroLabel}>Kalória:</Text>
                  <Text style={styles.mealMacroValue}>
                    {isWorkoutDay
                      ? currentMeal.workout.kcal
                      : currentMeal.rest.kcal}{" "}
                    kcal
                  </Text>
                </View>

                <View style={styles.mealMacro}>
                  <Text style={styles.mealMacroLabel}>Fehérje:</Text>
                  <Text style={styles.mealMacroValue}>
                    {isWorkoutDay
                      ? currentMeal.workout.protein
                      : currentMeal.rest.protein}{" "}
                    g
                  </Text>
                </View>

                <View style={styles.mealMacro}>
                  <Text style={styles.mealMacroLabel}>Szénhidrát:</Text>
                  <Text style={styles.mealMacroValue}>
                    {isWorkoutDay
                      ? currentMeal.workout.carbs
                      : currentMeal.rest.carbs}{" "}
                    g
                  </Text>
                </View>

                <View style={styles.mealMacro}>
                  <Text style={styles.mealMacroLabel}>Zsír:</Text>
                  <Text style={styles.mealMacroValue}>
                    {isWorkoutDay
                      ? currentMeal.workout.fat
                      : currentMeal.rest.fat}{" "}
                    g
                  </Text>
                </View>
              </View>

              <Text style={styles.mealDetailsDescription}>
                {isWorkoutDay
                  ? currentMeal.workout.portion
                  : currentMeal.rest.portion}
              </Text>

              {currentCookingInstruction &&
                currentCookingInstruction.steps.length > 0 && (
                  <View style={styles.cookingContainer}>
                    <Text style={styles.cookingTitle}>
                      {currentCookingInstruction.title ??
                        "Elkészítés lépésről lépésre"}
                    </Text>
                    {currentCookingInstruction.steps.map((step, index) => (
                      <Text key={index} style={styles.cookingStep}>
                        {index + 1}. {step}
                      </Text>
                    ))}
                  </View>
                )}
            </View>
          )}

          <View style={styles.shoppingListContainer}>
            <Text style={styles.shoppingListTitle}>Napi bevásárlólista</Text>
            <Text style={styles.shoppingListSubtitle}>
              {isWorkoutDay ? "Edzésnap" : "Pihenőnap"} • {day}. nap
            </Text>

            {shoppingList.length === 0 ? (
              <Text style={styles.shoppingListEmpty}>Nincs megjeleníthető tétel.</Text>
            ) : (
              shoppingList.map((item, index) => (
                <View key={`${item.name}-${index}`} style={styles.shoppingListItemRow}>
                  <Text style={styles.shoppingListBullet}>•</Text>
                  <Text style={styles.shoppingListItemText}>
                    {item.name}
                    {item.amounts.size > 0
                      ? ` (${Array.from(item.amounts).join(" / ")})`
                      : ""}
                  </Text>
                </View>
              ))
            )}
          </View>

          <View style={styles.shoppingListContainer}>
            <Text style={styles.shoppingListTitle}>Ételenkénti bevásárlólista</Text>
            {shoppingListByMeal.length === 0 ? (
              <Text style={styles.shoppingListEmpty}>Nincs kiválasztott étel.</Text>
            ) : (
              shoppingListByMeal.map((mealList) => (
                <View key={mealList.mealId} style={styles.shoppingMealBlock}>
                  <Text style={styles.shoppingMealTitle}>
                    {mealList.slot} • {mealList.mealName}
                  </Text>

                  {mealList.items.length === 0 ? (
                    <Text style={styles.shoppingListEmpty}>Nincs megjeleníthető tétel.</Text>
                  ) : (
                    mealList.items.map((item, index) => (
                      <View
                        key={`${mealList.mealId}-${item.name}-${index}`}
                        style={styles.shoppingListItemRow}
                      >
                        <Text style={styles.shoppingListBullet}>•</Text>
                        <Text style={styles.shoppingListItemText}>
                          {item.name}
                          {item.amounts.size > 0
                            ? ` (${Array.from(item.amounts).join(" / ")})`
                            : ""}
                        </Text>
                      </View>
                    ))
                  )}
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  daySlotsRowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 16,
  },
  slotCardsScroller: {
    flex: 1,
    marginRight: 8,
  },
  slotCardsRow: {
    flexDirection: "row",
    paddingRight: 4,
  },
  slotCard: {
    width: 132,
    padding: 10,
    marginRight: 8,
    marginBottom: 1,
    backgroundColor: "#f2f4f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e6ef",
    alignItems: "center",
  },
  slotCardTitle: {
    fontSize: 12,
    color: "#666",
    fontWeight: "700",
    marginBottom: 6,
  },
  slotDayRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  slotDayText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#444",
    marginHorizontal: 6,
  },
  navButtonSmall: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#e6eef9",
  },
  slotCardName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 6,
  },
  topBreakfastBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "#fef3c7",
    borderWidth: 1,
    borderColor: "#f59e0b",
    marginBottom: 8,
  },
  topBreakfastBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#92400e",
  },
  slotNavRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  navButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#e6eef9",
    marginHorizontal: 6,
  },
  navButtonDisabled: { opacity: 0.45 },
  navButtonText: { fontSize: 18, color: "#007bff", fontWeight: "700" },
  slotCountText: { fontSize: 12, color: "#666" },
  dailyTotalsBox: {
    width: 160,
    marginLeft: 8,
    padding: 10,
    backgroundColor: "#fff8e6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffe8b5",
  },
  dailyTotalsTitle: { fontSize: 13, fontWeight: "700", marginBottom: 8 },
  dayRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    // display: "none" kivettük
  },
  dayButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  dayButtonActive: {
    backgroundColor: "#007bff",
  },
  dayButtonText: {
    fontSize: 16,
    color: "#333",
  },
  dayButtonTextActive: {
    color: "#fff",
  },
  slotSelectorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 4,
    display: "none", // ← ADD VISSZA ezt a sort
  },
  slotButton: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#1f2937",
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
  slotButtonActive: {
    backgroundColor: "#38bdf8",
    borderColor: "#38bdf8",
  },
  slotButtonDisabled: {
    opacity: 0.45,
  },
  slotButtonText: {
    fontSize: 12,
    color: "#9ca3af",
    fontWeight: "600",
  },
  slotButtonTextActive: {
    color: "#0f172a",
  },
  slotButtonTextDisabled: {
    color: "#6b7280",
  },
  slotList: {
    paddingLeft: 2,
    paddingRight: 8,
    display: "none", // elrejtve
  },
  compactMealCard: {
    width: 220,
    minHeight: 72,
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
    justifyContent: "space-between",
  },
  mealCardSelected: {
    borderColor: "#38bdf8",
    borderWidth: 2,
  },
  compactMealName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  compactMealTime: {
    fontSize: 11,
    color: "#9ca3af",
    marginBottom: 6,
  },
  compactMacrosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  compactMacroLabel: {
    fontSize: 11,
    color: "#9ca3af",
  },
  compactMacroValue: {
    fontSize: 13,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  summaryContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    marginBottom: 16,
    display: "none", // rejtett
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#333",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
  },
  mealDetailsContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  mealDetailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  mealDetailsSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  mealMacrosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  mealMacro: {
    flex: 1,
    alignItems: "center",
  },
  mealMacroLabel: {
    fontSize: 12,
    color: "#333",
  },
  mealMacroValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#007bff",
  },
  mealDetailsDescription: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  cookingContainer: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  cookingTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  cookingStep: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 4,
  },
  workoutToggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  workoutToggleLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  workoutToggleSwitchRow: {
    flexDirection: "row",
    alignItems: "center", // itt volt korábban a "Perfetto" 😅
  },
  workoutToggleOption: {
    fontSize: 13,
    color: "#6b7280",
    fontWeight: "500",
  },
  workoutToggleOptionActive: {
    color: "#0f172a",
    fontWeight: "700",
  },
  topFiltersWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  topBreakfastFilterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "49%",
    marginBottom: 6,
  },
  topBreakfastFilterLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
    marginRight: 6,
    flexShrink: 1,
  },
  topBreakfastFilterButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
  },
  topBreakfastFilterButtonActive: {
    backgroundColor: "#fef3c7",
    borderColor: "#f59e0b",
  },
  topBreakfastFilterButtonText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#374151",
  },
  topBreakfastFilterButtonTextActive: {
    color: "#92400e",
  },
  // --- phase toggle + supplement styles ---
  phaseToggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  phaseToggleLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  phaseToggleButtons: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    overflow: "hidden",
  },
  phaseToggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  phaseToggleButtonActive: {
    backgroundColor: "#38bdf8",
  },
  phaseToggleButtonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4b5563",
  },
  phaseToggleButtonTextActive: {
    color: "#0f172a",
  },
  planActionsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  planActionButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  planActionButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
  },
  supplementContainer: {
    marginTop: 8,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#ecfeff",
    borderWidth: 1,
    borderColor: "#7dd3fc",
  },
  supplementTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    color: "#0f172a",
  },
  supplementSubtitle: {
    fontSize: 12,
    color: "#4b5563",
    marginBottom: 6,
  },
  supplementSlotGroup: {
    marginTop: 4,
    marginBottom: 4,
  },
  supplementSlotTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 2,
  },
  supplementItemText: {
    fontSize: 12,
    color: "#1f2937",
  },
  supplementItemTextHighlighted: {
    fontWeight: "700",
    color: "#16a34a", // zöld szín
  },
  supplementItemTextPreWorkout: {
    fontWeight: "700",
    color: "#db2777", // sötét rózsaszín (dark pink)
  },
  shoppingListContainer: {
    marginTop: 12,
    marginBottom: 24,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  shoppingListTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  shoppingListSubtitle: {
    fontSize: 12,
    color: "#475569",
    marginBottom: 8,
  },
  shoppingListItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  shoppingListBullet: {
    marginRight: 6,
    fontSize: 14,
    color: "#0f172a",
    lineHeight: 20,
  },
  shoppingListItemText: {
    flex: 1,
    fontSize: 14,
    color: "#1e293b",
    lineHeight: 20,
  },
  shoppingListEmpty: {
    fontSize: 13,
    color: "#64748b",
  },
  shoppingMealBlock: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
  shoppingMealTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  headerFixed: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    backgroundColor: "#fff",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});
