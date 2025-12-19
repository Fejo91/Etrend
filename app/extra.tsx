// app/extra.tsx
import { router } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ExtraRoute() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Vissza a főmenübe</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Harmadik képernyő</Text>
        <Text style={styles.infoText}>
          Ide jöhet majd pl. edzésnapló, bevásárlólista, jegyzetek stb.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  menuContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 24,
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
    fontSize: 14,
    color: "#111827",
  },
  infoText: {
    fontSize: 14,
    color: "#cbd5f5",
    marginTop: 12,
  },
});
