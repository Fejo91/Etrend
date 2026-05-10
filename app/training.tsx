// app/training.tsx
import { router } from "expo-router";
import React from "react";
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function TrainingRoute() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Vissza a menübe</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Főmenü</Text>
        <Text style={styles.subtitle}>Legutóbb: —</Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/training-calendar")}>
            <Text style={styles.menuButtonText}>Edzésnaptár (tervezés)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/training-progression")}>
            <Text style={styles.menuButtonText}>Edzésnapló / Progresszió</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/execution")}>
            <Text style={styles.menuButtonText}>Gyakorlatok helyes végrehajtása</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/other-workouts")}>
            <Text style={styles.menuButtonText}>Egyéb edzések</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/training-export")}>
            <Text style={styles.menuButtonText}>Export (mentés)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/training-import")}>
            <Text style={styles.menuButtonText}>Import (betöltés)</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 28,
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  backButtonText: {
    color: "#111827",
    fontSize: 14,
  },
  title: {
    color: "#E5E7EB",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 10,
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 18,
  },
  buttons: {
    gap: 12,
  },
  menuButton: {
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
  },
  menuButtonText: {
    color: "#E5E7EB",
    fontSize: 16,
    fontWeight: "800",
  },
});
