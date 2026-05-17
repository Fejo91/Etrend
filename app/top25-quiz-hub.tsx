import { router } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Top25QuizHubScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Top25 kvízek</Text>
        <Text style={styles.subtitle}>
          Gyakorlás a Top25 ételek elkészítésével és alapanyagaival
        </Text>

        {/* 1. Lépéssorrend */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/top25-order-quiz")}
          activeOpacity={0.75}
        >
          <Text style={styles.cardTitle}>Lépéssorrend</Text>
          <Text style={styles.cardDescription}>
            Rendezd helyes sorrendbe a tisztított elkészítési lépéseket.
          </Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>Játssz most →</Text>
          </View>
        </TouchableOpacity>

        {/* 2. Mi jön ezután? — hamarosan */}
        <View style={[styles.card, styles.cardDisabled]}>
          <Text style={[styles.cardTitle, styles.textDisabled]}>
            Mi jön ezután?
          </Text>
          <Text style={[styles.cardDescription, styles.textDisabled]}>
            4 válasz közül kell majd kiválasztani a következő lépést.
          </Text>
          <View style={styles.soonBadge}>
            <Text style={styles.soonBadgeText}>Hamarosan</Text>
          </View>
        </View>

        {/* 3. Alapanyag felismerő — hamarosan */}
        <View style={[styles.card, styles.cardDisabled]}>
          <Text style={[styles.cardTitle, styles.textDisabled]}>
            Alapanyag felismerő
          </Text>
          <Text style={[styles.cardDescription, styles.textDisabled]}>
            Találd ki, mely alapanyagok kellenek az adott Top25 ételhez.
          </Text>
          <View style={styles.soonBadge}>
            <Text style={styles.soonBadgeText}>Hamarosan</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.75}
        >
          <Text style={styles.backButtonText}>← Vissza a főmenübe</Text>
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
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#38bdf8",
  },
  cardDisabled: {
    borderColor: "#334155",
    opacity: 0.55,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 20,
    marginBottom: 14,
  },
  textDisabled: {
    color: "#64748b",
  },
  activeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#0ea5e9",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  activeBadgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  soonBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#334155",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  soonBadgeText: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "600",
  },
  backButton: {
    marginTop: 12,
    alignItems: "center",
    paddingVertical: 14,
  },
  backButtonText: {
    color: "#38bdf8",
    fontSize: 15,
    fontWeight: "600",
  },
});
