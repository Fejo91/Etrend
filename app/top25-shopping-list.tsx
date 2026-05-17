import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
    TOP25_SLOT_FILTERS,
    buildTop25ShoppingList,
    type AggregatedShoppingItem,
    type ShoppingDayMode,
    type ShoppingSlotFilter,
} from "../features/diet/utils/top25ShoppingList";

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

function ShoppingItemCard({ item, isPortion }: { item: AggregatedShoppingItem; isPortion: boolean }) {
  return (
    <View style={styles.itemCard}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAmount}>
        {isPortion ? `Összesen: ${formatAmount(item.totalAmount)} adag` : `${formatAmount(item.totalAmount)} ${item.unit}`}
      </Text>
      <Text style={styles.itemMeta}>{item.mealCount} ételben</Text>
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

export default function Top25ShoppingListScreen() {
  const [slotFilter, setSlotFilter] = useState<ShoppingSlotFilter>("Mind");
  const [dayMode, setDayMode] = useState<ShoppingDayMode>("workout");

  const { measuredItems, portionItems, totalMeals } = useMemo(
    () => buildTop25ShoppingList({ slotFilter, dayMode }),
    [slotFilter, dayMode]
  );

  const hasAnyData = measuredItems.length > 0 || portionItems.length > 0;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Top25 bevásárlólista</Text>
        <Text style={styles.subtitle}>Összesített alapanyagok a Top25 hozzávaló-adagokból</Text>

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

        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleButton, dayMode === "workout" && styles.toggleButtonActive]}
            onPress={() => setDayMode("workout")}
          >
            <Text
              style={[
                styles.toggleButtonText,
                dayMode === "workout" && styles.toggleButtonTextActive,
              ]}
            >
              Edzésnap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, dayMode === "rest" && styles.toggleButtonActive]}
            onPress={() => setDayMode("rest")}
          >
            <Text
              style={[styles.toggleButtonText, dayMode === "rest" && styles.toggleButtonTextActive]}
            >
              Pihenőnap
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>Érintett ételek: {totalMeals} db</Text>
          <Text style={styles.summaryText}>Mért alapanyagok: {measuredItems.length} db</Text>
          <Text style={styles.summaryText}>
            Ízesítők / adag jellegű tételek: {portionItems.length} db
          </Text>
        </View>

        {!hasAnyData ? (
          <View style={styles.card}>
            <Text style={styles.emptyText}>Nincs bevásárlólista-adat ehhez a szűréshez.</Text>
          </View>
        ) : (
          <>
            <View style={styles.card}>
              <Text style={styles.blockTitle}>Mért alapanyagok</Text>
              {measuredItems.length === 0 ? (
                <Text style={styles.emptyInnerText}>Nincs mért alapanyag ebben a szűrésben.</Text>
              ) : (
                measuredItems.map((item) => (
                  <ShoppingItemCard key={item.key} item={item} isPortion={false} />
                ))
              )}
            </View>

            <View style={styles.card}>
              <Text style={styles.blockTitle}>Ízesítők / adag jellegű tételek</Text>
              {portionItems.length === 0 ? (
                <Text style={styles.emptyInnerText}>Nincs adag jellegű tétel ebben a szűrésben.</Text>
              ) : (
                portionItems.map((item) => (
                  <ShoppingItemCard key={item.key} item={item} isPortion />
                ))
              )}
            </View>
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
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 56,
    paddingBottom: 32,
  },
  title: {
    color: "#e5e7eb",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 15,
    marginTop: 8,
    marginBottom: 20,
    textAlign: "center",
  },
  slotRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },
  slotButton: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  slotButtonActive: {
    backgroundColor: "#334155",
    borderColor: "#93c5fd",
  },
  slotButtonText: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "600",
  },
  slotButtonTextActive: {
    color: "#eff6ff",
  },
  toggleRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  toggleButton: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
    paddingVertical: 10,
    alignItems: "center",
  },
  toggleButtonActive: {
    borderColor: "#60a5fa",
    backgroundColor: "#1e3a8a",
  },
  toggleButtonText: {
    color: "#cbd5e1",
    fontWeight: "600",
  },
  toggleButtonTextActive: {
    color: "#eff6ff",
  },
  summaryCard: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0b1220",
    padding: 14,
    marginBottom: 14,
    gap: 4,
  },
  summaryText: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0b1220",
    padding: 12,
    marginBottom: 14,
    gap: 10,
  },
  blockTitle: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  itemCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#111827",
    padding: 10,
    gap: 4,
  },
  itemName: {
    color: "#e2e8f0",
    fontSize: 15,
    fontWeight: "700",
  },
  itemAmount: {
    color: "#bae6fd",
    fontSize: 14,
    fontWeight: "700",
  },
  itemMeta: {
    color: "#cbd5e1",
    fontSize: 13,
  },
  itemSubMeta: {
    color: "#94a3b8",
    fontSize: 12,
  },
  emptyText: {
    color: "#94a3b8",
    textAlign: "center",
    fontSize: 14,
  },
  emptyInnerText: {
    color: "#94a3b8",
    fontSize: 13,
  },
  backButton: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#38bdf8",
    backgroundColor: "#0c4a6e",
    paddingVertical: 12,
    alignItems: "center",
  },
  backButtonText: {
    color: "#e0f2fe",
    fontWeight: "700",
    fontSize: 14,
  },
});
