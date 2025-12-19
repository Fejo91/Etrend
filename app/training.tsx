// app/training.tsx
import { router } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import TrainingProgressionScreen from "./TrainingProgressionScreen";

export default function TrainingRoute() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>← Vissza a menübe</Text>
      </TouchableOpacity>

      <TrainingProgressionScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1120",
  },
  backButton: {
    padding: 8,
    margin: 8,
    borderRadius: 999,
    backgroundColor: "#111827",
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#e5e7eb",
    paddingHorizontal: 8,
  },
});
