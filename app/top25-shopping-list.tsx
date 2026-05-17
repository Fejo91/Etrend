import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TOP_MEAL_INGREDIENT_PLANS } from "../features/diet/data/topMealIngredients";
import {
    TOP25_SLOT_FILTERS,
    TOP25_SLOT_ORDER,
    buildCustomTop25ShoppingList,
    buildTop25ShoppingList,
    type AggregatedShoppingItem,
    type ShoppingDayMode,
    type ShoppingSlotFilter,
} from "../features/diet/utils/top25ShoppingList";

type ScreenMode = "quick" | "custom";
type SlotName = Exclude<ShoppingSlotFilter, "Mind">;

function formatAmount(value: number): string {
  if (Number.isInteger(value)) {
    return `${value}`;
  }

  return Number(value.toFixed(2)).toString();
}

function formatSourceMeals(sourceMeals: string[]): string {
  if (sourceMeals.length <= 3) {
    return sourceMeals.join(", ");
  }

  return `${sourceMeals.slice(0, 3).join(", ")} +${sourceMeals.length - 3} további`;
}

function formatShortList(values: string[], max = 2): string {
  if (values.length <= max) {
    return values.join(" | ");
  }

  return `${values.slice(0, max).join(" | ")} +${values.length - max} további`;
}

function ShoppingItemCard({
  item,
  isPortion,
  showMealCount = true,
}: {
  item: AggregatedShoppingItem;
  isPortion: boolean;
  showMealCount?: boolean;
}) {
  return (
    <View style={styles.itemCard}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAmount}>
        {isPortion ? `Összesen: ${formatAmount(item.totalAmount)} adag` : `${formatAmount(item.totalAmount)} ${item.unit}`}
      </Text>
      {showMealCount ? (
        <Text style={styles.itemMeta}>{item.mealCount} ételben</Text>
      ) : null}
      <Text style={styles.itemMeta}>Forrás: {formatSourceMeals(item.sourceMeals)}</Text>
      {item.kitchenAmounts.length > 0 ? (
        <Text style={styles.itemSubMeta}>Konyhai mennyiség: {formatShortList(item.kitchenAmounts)}</Text>
      ) : null}
      {item.notes.length > 0 ? (
        <Text style={styles.itemSubMeta}>Megjegyzés: {formatShortList(item.notes, 2)}</Text>
      ) : null}
    </View>
  );
}

function ShoppingResultBlocks({
  measuredItems,
  portionItems,
  showMealCount,
}: {
  measuredItems: AggregatedShoppingItem[];
  portionItems: AggregatedShoppingItem[];
  showMealCount: boolean;
}) {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.blockTitle}>Mért alapanyagok</Text>
        {measuredItems.length === 0 ? (
          <Text style={styles.emptyInnerText}>Nincs mért alapanyag ebben a szűrésben.</Text>
        ) : (
          measuredItems.map((item) => (
            <ShoppingItemCard key={item.key} item={item} isPortion={false} showMealCount={showMealCount} />
          ))
        )}
      </View>
      <View style={styles.card}>
        <Text style={styles.blockTitle}>Ízesítők / adag jellegű tételek</Text>
        {portionItems.length === 0 ? (
          <Text style={styles.emptyInnerText}>Nincs adag jellegű tétel ebben a szűrésben.</Text>
        ) : (
          portionItems.map((item) => (
            <ShoppingItemCard key={item.key} item={item} isPortion showMealCount={showMealCount} />
          ))
        )}
      </View>
    </>
  );
}

export default function Top25ShoppingListScreen() {
  const [screenMode, setScreenMode] = useState<ScreenMode>("quick");
  const [slotFilter, setSlotFilter] = useState<ShoppingSlotFilter>("Mind");
  const [dayMode, setDayMode] = useState<ShoppingDayMode>("workout");
  const [selectedCounts, setSelectedCounts] = useState<Record<string, number>>({});

  const plansBySlot = useMemo(() => {
    const result = {} as Record<SlotName, typeof TOP_MEAL_INGREDIENT_PLANS>;

    for (const slot of TOP25_SLOT_ORDER) {
      result[slot] = TOP_MEAL_INGREDIENT_PLANS
        .filter((p) => p.slot === slot)
        .slice()
        .sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999));
    }

    return result;
  }, []);

  const quickResult = useMemo(
    () => buildTop25ShoppingList({ slotFilter, dayMode }),
    [slotFilter, dayMode],
  );

  const customResult = useMemo(
    () => buildCustomTop25ShoppingList({ selectedCounts, dayMode }),
    [selectedCounts, dayMode],
  );

  const slotCounts = useMemo(() => {
    const counts: Record<SlotName, number> = {
      Reggeli: 0, Tízórai: 0, Ebéd: 0, Uzsonna: 0, Vacsora: 0,
    };

    TOP_MEAL_INGREDIENT_PLANS.forEach((plan) => {
      const c = selectedCounts[plan.mealVariantId] ?? 0;
      const slot = plan.slot as SlotName | undefined;

      if (slot && c > 0) {
        counts[slot] += c;
      }
    });

    return counts;
  }, [selectedCounts]);

  const hasCustomSelection = customResult.totalMeals > 0;

  function adjustCount(id: string, delta: number) {
    setSelectedCounts((prev) => {
      const current = prev[id] ?? 0;
      const next = Math.max(0, current + delta);

      if (next === 0) {
        const updated = { ...prev };
        delete updated[id];

        return updated;
      }

      return { ...prev, [id]: next };
    });
  }

  function clearSelection() {
    setSelectedCounts({});
  }

  const DayModeToggle = (
    <View style={styles.toggleRow}>
      <TouchableOpacity
        style={[styles.toggleButton, dayMode === "workout" && styles.toggleButtonActive]}
        onPress={() => setDayMode("workout")}
      >
        <Text style={[styles.toggleButtonText, dayMode === "workout" && styles.toggleButtonTextActive]}>
          Edzésnap
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.toggleButton, dayMode === "rest" && styles.toggleButtonActive]}
        onPress={() => setDayMode("rest")}
      >
        <Text style={[styles.toggleButtonText, dayMode === "rest" && styles.toggleButtonTextActive]}>
          Pihenőnap
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Top25 bevásárlólista</Text>
        <Text style={styles.subtitle}>Összesített alapanyagok a Top25 hozzávaló-adagokból</Text>

        {/* Módválasztó */}
        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[styles.modeButton, screenMode === "quick" && styles.modeButtonActive]}
            onPress={() => setScreenMode("quick")}
          >
            <Text style={[styles.modeButtonText, screenMode === "quick" && styles.modeButtonTextActive]}>
              Gyors szűrő
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, screenMode === "custom" && styles.modeButtonActive]}
            onPress={() => setScreenMode("custom")}
          >
            <Text style={[styles.modeButtonText, screenMode === "custom" && styles.modeButtonTextActive]}>
              Saját válogatás
            </Text>
          </TouchableOpacity>
        </View>

        {screenMode === "quick" ? (
          <>
            <View style={styles.slotRow}>
              {TOP25_SLOT_FILTERS.map((slot) => (
                <TouchableOpacity
                  key={slot}
                  style={[styles.slotButton, slotFilter === slot && styles.slotButtonActive]}
                  onPress={() => setSlotFilter(slot)}
                >
                  <Text
                    style={[
                      styles.slotButtonText,
                      slotFilter === slot && styles.slotButtonTextActive,
                    ]}
                  >
                    {slot}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {DayModeToggle}

            <View style={styles.summaryCard}>
              <Text style={styles.summaryText}>Érintett ételek: {quickResult.totalMeals} db</Text>
              <Text style={styles.summaryText}>Mért alapanyagok: {quickResult.measuredItems.length} db</Text>
              <Text style={styles.summaryText}>
                Ízesítők / adag jellegű tételek: {quickResult.portionItems.length} db
              </Text>
            </View>

            {quickResult.measuredItems.length === 0 && quickResult.portionItems.length === 0 ? (
              <View style={styles.card}>
                <Text style={styles.emptyText}>Nincs bevásárlólista-adat ehhez a szűréshez.</Text>
              </View>
            ) : (
              <ShoppingResultBlocks
                measuredItems={quickResult.measuredItems}
                portionItems={quickResult.portionItems}
                showMealCount
              />
            )}
          </>
        ) : (
          <>
            {DayModeToggle}

            {TOP25_SLOT_ORDER.map((slot) => (
              <View key={slot} style={styles.card}>
                <Text style={styles.slotSectionTitle}>{slot}</Text>
                {plansBySlot[slot].map((plan) => {
                  const count = selectedCounts[plan.mealVariantId] ?? 0;

                  return (
                    <View key={plan.mealVariantId} style={styles.mealSelectRow}>
                      <View style={styles.mealSelectInfo}>
                        <Text style={styles.mealSelectName}>
                          #{plan.rank ?? "?"} {plan.displayName ?? plan.mealVariantId}
                        </Text>
                        <Text style={styles.mealSelectId}>{plan.mealVariantId}</Text>
                      </View>
                      <View style={styles.stepperRow}>
                        <TouchableOpacity
                          style={[styles.stepperButton, count === 0 && styles.stepperButtonDisabled]}
                          onPress={() => adjustCount(plan.mealVariantId, -1)}
                        >
                          <Text style={styles.stepperButtonText}>&#8722;</Text>
                        </TouchableOpacity>
                        <Text style={styles.stepperCount}>{count}</Text>
                        <TouchableOpacity
                          style={styles.stepperButton}
                          onPress={() => adjustCount(plan.mealVariantId, 1)}
                        >
                          <Text style={styles.stepperButtonText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            ))}

            <TouchableOpacity style={styles.clearButton} onPress={clearSelection}>
              <Text style={styles.clearButtonText}>Válogatás törlése</Text>
            </TouchableOpacity>

            {hasCustomSelection ? (
              <View style={styles.summaryCard}>
                <Text style={styles.summaryText}>Kiválasztott étel-adagok: {customResult.totalMeals} db</Text>
                <Text style={styles.summaryText}>Mért alapanyagok: {customResult.measuredItems.length} db</Text>
                <Text style={styles.summaryText}>
                  Ízesítők / adag jellegű tételek: {customResult.portionItems.length} db
                </Text>
                <Text style={styles.summarySlotRow}>
                  {TOP25_SLOT_ORDER.map((s, idx) =>
                    `${idx > 0 ? " | " : ""}${s}: ${slotCounts[s]}`
                  ).join("")}
                </Text>
              </View>
            ) : null}

            {!hasCustomSelection ? (
              <View style={styles.card}>
                <Text style={styles.emptyText}>
                  Válassz legalább egy Top25 ételt a bevásárlólista összeállításához.
                </Text>
              </View>
            ) : (
              <ShoppingResultBlocks
                measuredItems={customResult.measuredItems}
                portionItems={customResult.portionItems}
                showMealCount={false}
              />
            )}
          </>
        )}

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Vissza a főmenübe</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617" },
  scrollView: { flex: 1 },
  content: { padding: 20, paddingTop: 56, paddingBottom: 32 },
  title: { color: "#e5e7eb", fontSize: 28, fontWeight: "700", textAlign: "center" },
  subtitle: { color: "#94a3b8", fontSize: 15, marginTop: 8, marginBottom: 20, textAlign: "center" },
  modeRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  modeButton: { flex: 1, borderRadius: 12, borderWidth: 1, borderColor: "#334155", backgroundColor: "#0f172a", paddingVertical: 10, alignItems: "center" },
  modeButtonActive: { borderColor: "#38bdf8", backgroundColor: "#0c4a6e" },
  modeButtonText: { color: "#cbd5e1", fontWeight: "600", fontSize: 14 },
  modeButtonTextActive: { color: "#e0f2fe" },
  slotRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 14 },
  slotButton: { borderRadius: 999, borderWidth: 1, borderColor: "#334155", backgroundColor: "#0f172a", paddingHorizontal: 12, paddingVertical: 8 },
  slotButtonActive: { backgroundColor: "#334155", borderColor: "#93c5fd" },
  slotButtonText: { color: "#cbd5e1", fontSize: 13, fontWeight: "600" },
  slotButtonTextActive: { color: "#eff6ff" },
  toggleRow: { flexDirection: "row", gap: 10, marginBottom: 14 },
  toggleButton: { flex: 1, borderRadius: 12, borderWidth: 1, borderColor: "#334155", backgroundColor: "#0f172a", paddingVertical: 10, alignItems: "center" },
  toggleButtonActive: { borderColor: "#60a5fa", backgroundColor: "#1e3a8a" },
  toggleButtonText: { color: "#cbd5e1", fontWeight: "600" },
  toggleButtonTextActive: { color: "#eff6ff" },
  summaryCard: { borderRadius: 14, borderWidth: 1, borderColor: "#334155", backgroundColor: "#0b1220", padding: 14, marginBottom: 14, gap: 4 },
  summaryText: { color: "#cbd5e1", fontSize: 14 },
  summarySlotRow: { color: "#94a3b8", fontSize: 13, marginTop: 4 },
  card: { borderRadius: 14, borderWidth: 1, borderColor: "#334155", backgroundColor: "#0b1220", padding: 12, marginBottom: 14, gap: 10 },
  slotSectionTitle: { color: "#38bdf8", fontSize: 16, fontWeight: "700", marginBottom: 4 },
  mealSelectRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 10, borderWidth: 1, borderColor: "#334155", backgroundColor: "#111827", paddingHorizontal: 10, paddingVertical: 8 },
  mealSelectInfo: { flex: 1, marginRight: 10 },
  mealSelectName: { color: "#e2e8f0", fontSize: 13, fontWeight: "600" },
  mealSelectId: { color: "#475569", fontSize: 11, marginTop: 2 },
  stepperRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  stepperButton: { width: 30, height: 30, borderRadius: 8, borderWidth: 1, borderColor: "#334155", backgroundColor: "#1e293b", alignItems: "center", justifyContent: "center" },
  stepperButtonDisabled: { opacity: 0.35 },
  stepperButtonText: { color: "#e2e8f0", fontSize: 18, fontWeight: "600", lineHeight: 22 },
  stepperCount: { color: "#f8fafc", fontSize: 16, fontWeight: "700", minWidth: 24, textAlign: "center" },
  clearButton: { borderRadius: 12, borderWidth: 1, borderColor: "#ef4444", backgroundColor: "#450a0a", paddingVertical: 10, alignItems: "center", marginBottom: 14 },
  clearButtonText: { color: "#fca5a5", fontWeight: "700", fontSize: 13 },
  blockTitle: { color: "#f8fafc", fontSize: 16, fontWeight: "700", marginBottom: 2 },
  itemCard: { borderRadius: 10, borderWidth: 1, borderColor: "#334155", backgroundColor: "#111827", padding: 10, gap: 4 },
  itemName: { color: "#e2e8f0", fontSize: 15, fontWeight: "700" },
  itemAmount: { color: "#bae6fd", fontSize: 14, fontWeight: "700" },
  itemMeta: { color: "#cbd5e1", fontSize: 13 },
  itemSubMeta: { color: "#94a3b8", fontSize: 12 },
  emptyText: { color: "#94a3b8", textAlign: "center", fontSize: 14 },
  emptyInnerText: { color: "#94a3b8", fontSize: 13 },
  backButton: { borderRadius: 12, borderWidth: 1, borderColor: "#38bdf8", backgroundColor: "#0c4a6e", paddingVertical: 12, alignItems: "center" },
  backButtonText: { color: "#e0f2fe", fontWeight: "700", fontSize: 14 },
});

