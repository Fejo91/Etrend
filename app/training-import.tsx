import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TrainingImportScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Vissza</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Import (betöltés)</Text>
        <Text style={styles.body}>Ide jön majd az edzés adatok import / visszatöltés funkció.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617" },
  content: { flex: 1, padding: 16, justifyContent: "center" },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    marginBottom: 12,
  },
  backButtonText: { fontSize: 14, color: "#111827" },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 24,
  },
  body: { fontSize: 14, color: "#cbd5f5", marginTop: 12 },
});
