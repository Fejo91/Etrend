import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TOP_MEAL_INGREDIENT_PLANS } from "../features/diet/data/topMealIngredients";

type DayMode = "workout" | "rest";

export default function TopMealIngredientsScreen() {
  const [dayMode, setDayMode] = useState<DayMode>("workout");

  const plan = useMemo(
    () =>
      TOP_MEAL_INGREDIENT_PLANS.find(
        (item) => item.mealVariantId === "5-R-gyors-alap"
      ),
    []
  );

  const ingredients = dayMode === "workout" ? plan?.workout : plan?.rest;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Top25 hozzávaló-adagok</Text>
        <Text style={styles.subtitle}>Pilot nézet - 5-R-gyors-alap</Text>

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
              style={[
                styles.toggleButtonText,
                dayMode === "rest" && styles.toggleButtonTextActive,
              ]}
            >
              Pihenőnap
            </Text>
          </TouchableOpacity>
        </View>

        {!plan || !ingredients ? (
          <View style={styles.card}>
            <Text style={styles.emptyText}>Nincs hozzávaló-adat ehhez az ételhez.</Text>
          </View>
        ) : (
          <>
            <View style={styles.card}>
              {ingredients.map((ingredient, index) => (
                <View
                  key={`${ingredient.name}-${index}`}
                  style={[
                    styles.ingredientRow,
                    index < ingredients.length - 1 && styles.ingredientDivider,
                  ]}
                >
                  <Text style={styles.ingredientName}>{ingredient.name}</Text>
                  <Text style={styles.ingredientAmount}>
                    {ingredient.amount} {ingredient.unit}
                  </Text>
                  {ingredient.kitchenAmount ? (
                    <Text style={styles.ingredientKitchen}>{ingredient.kitchenAmount}</Text>
                  ) : null}
                  {ingredient.note ? (
                    <Text style={styles.ingredientNote}>{ingredient.note}</Text>
                  ) : null}
                </View>
              ))}
            </View>

            {plan.audit ? (
              <View style={styles.card}>
                <Text style={styles.auditTitle}>Adaglogikai audit</Text>
                <Text
                  style={[
                    styles.auditStatus,
                    plan.audit.status === "PASS" ? styles.auditPass : styles.auditNeedsReview,
                  ]}
                >
                  {plan.audit.status}
                </Text>
                {plan.audit.notes.map((note, index) => (
                  <Text key={`audit-note-${index}`} style={styles.auditNote}>
                    - {note}
                  </Text>
                ))}
                {plan.audit.optionalSuggestion ? (
                  <View style={styles.suggestionBox}>
                    <Text style={styles.suggestionTitle}>Opcionális megjegyzés</Text>
                    <Text style={styles.suggestionText}>{plan.audit.optionalSuggestion}</Text>
                  </View>
                ) : null}
              </View>
            ) : null}
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
  toggleRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
    paddingVertical: 12,
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: "#1d4ed8",
    borderColor: "#60a5fa",
  },
  toggleButtonText: {
    color: "#e5e7eb",
    fontSize: 15,
    fontWeight: "600",
  },
  toggleButtonTextActive: {
    color: "#eff6ff",
  },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#111827",
    padding: 14,
    marginBottom: 14,
  },
  emptyText: {
    color: "#cbd5e1",
    fontSize: 15,
  },
  ingredientRow: {
    paddingVertical: 10,
  },
  ingredientDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  ingredientName: {
    color: "#f8fafc",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 4,
  },
  ingredientAmount: {
    color: "#93c5fd",
    fontSize: 15,
    fontWeight: "600",
  },
  ingredientKitchen: {
    color: "#cbd5e1",
    fontSize: 14,
    marginTop: 4,
  },
  ingredientNote: {
    color: "#9ca3af",
    fontSize: 13,
    marginTop: 4,
  },
  auditTitle: {
    color: "#e5e7eb",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
  },
  auditStatus: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  auditPass: {
    color: "#22c55e",
  },
  auditNeedsReview: {
    color: "#f59e0b",
  },
  auditNote: {
    color: "#cbd5e1",
    fontSize: 14,
    marginBottom: 5,
  },
  suggestionBox: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#1f2937",
    paddingTop: 10,
  },
  suggestionTitle: {
    color: "#fde68a",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
  },
  suggestionText: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
  },
  backButton: {
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#1e293b",
    paddingVertical: 14,
    alignItems: "center",
  },
  backButtonText: {
    color: "#e5e7eb",
    fontSize: 15,
    fontWeight: "600",
  },
});
