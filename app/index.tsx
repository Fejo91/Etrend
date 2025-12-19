import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Diéta App</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Étkezés</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/etrend")}
          >
            <Text style={styles.buttonText}>1a. Saját Étrend</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Kvíz</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/quiz")}
          >
            <Text style={styles.buttonText}>2a. Kérdés-Válasz kvíz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.newButton]}
            onPress={() => router.push("/cooking-order-quiz")}
          >
            <Text style={styles.buttonText}>2b. Elkészítés kvíz - ÚJ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Kvíz (Recept során)</Text>
          <TouchableOpacity
            style={[styles.button, styles.newButton]}
            onPress={() => router.push("/next-step-quiz")}
          >
            <Text style={styles.buttonText}>3a. Mi jön ezután? - ÚJ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Edzés</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/training")}
          >
            <Text style={styles.buttonText}>4a. Edzés előrehaladás</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Extra</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/extra")}
          >
            <Text style={styles.buttonText}>5a. Táplálékkiegészítők</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Bevásárlókocsi és hozzávalók</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/shopping-cart")}
          >
            <Text style={styles.buttonText}>6a. Bevásárlókocsi</Text>
          </TouchableOpacity>
        </View>
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
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e5e7eb",
    marginBottom: 40,
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },
  newButton: {
    borderColor: "#38bdf8",
    borderWidth: 2,
  },
  buttonText: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
  },
});
