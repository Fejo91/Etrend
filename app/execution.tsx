import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

type ExerciseCard = {
  id: string;
  name: string;
  description: string;
  imageUri: string | null;
};

const STORAGE_KEY = "training.execution.manualExercises.v1";

export default function ExecutionScreen() {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [exerciseImageUri, setExerciseImageUri] = useState<string | null>(null);
  const [cards, setCards] = useState<ExerciseCard[]>([]);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImageUri, setEditImageUri] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (!raw || !mounted) return;
        const parsed = JSON.parse(raw) as ExerciseCard[];
        if (Array.isArray(parsed)) setCards(parsed);
      } catch {
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cards)).catch(() => {});
  }, [cards]);

  useEffect(() => {
    if (!activeCardId) return;
    const selected = cards.find((item) => item.id === activeCardId);
    if (!selected) {
      setActiveCardId(null);
      return;
    }
    setEditName(selected.name);
    setEditDescription(selected.description);
    setEditImageUri(selected.imageUri);
  }, [activeCardId, cards]);

  async function pickExerciseImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Nincs jogosultság", "A képkiválasztáshoz engedélyezni kell a galéria elérését.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.9,
    });

    if (result.canceled || result.assets.length === 0) return;
    setExerciseImageUri(result.assets[0].uri);
  }

  async function pickEditImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Nincs jogosultság", "A képkiválasztáshoz engedélyezni kell a galéria elérését.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.9,
    });

    if (result.canceled || result.assets.length === 0) return;
    setEditImageUri(result.assets[0].uri);
  }

  function resetForm() {
    setExerciseName("");
    setExerciseDescription("");
    setExerciseImageUri(null);
  }

  function addExerciseCard() {
    const name = exerciseName.trim();
    const description = exerciseDescription.trim();

    if (!name) {
      Alert.alert("Hiányzó név", "Adj meg egy gyakorlat nevet.");
      return;
    }

    const newCard: ExerciseCard = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name,
      description,
      imageUri: exerciseImageUri,
    };

    setCards((prev) => [newCard, ...prev]);
    resetForm();
  }

  function deleteExerciseCard(id: string) {
    setCards((prev) => prev.filter((item) => item.id !== id));
    if (activeCardId === id) {
      setActiveCardId(null);
    }
  }

  function saveEditedCard() {
    if (!activeCardId) return;
    const trimmedName = editName.trim();
    if (!trimmedName) {
      Alert.alert("Hiányzó név", "Adj meg egy gyakorlat nevet.");
      return;
    }

    setCards((prev) =>
      prev.map((item) =>
        item.id === activeCardId
          ? {
              ...item,
              name: trimmedName,
              description: editDescription.trim(),
              imageUri: editImageUri,
            }
          : item
      )
    );
    Alert.alert("Mentve", "A gyakorlat módosításai elmentve.");
  }

  const cardsCountText = useMemo(() => `${cards.length} db gyakorlat`, [cards.length]);
  const activeCard = useMemo(
    () => (activeCardId ? cards.find((item) => item.id === activeCardId) ?? null : null),
    [activeCardId, cards]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Vissza</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Gyakorlatok helyes végrehajtása</Text>
        <Text style={styles.body}>Manuálisan felvehető gyakorlatok képpel. A kártyák balról jobbra rendeződnek, majd új sorban folytatódnak.</Text>

        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Gyakorlat neve (pl. Fekvenyomás)"
            placeholderTextColor="#94a3b8"
            value={exerciseName}
            onChangeText={setExerciseName}
          />

          <TextInput
            style={[styles.input, styles.multilineInput]}
            multiline
            numberOfLines={3}
            placeholder="Rövid leírás / technikai kulcspontok"
            placeholderTextColor="#94a3b8"
            value={exerciseDescription}
            onChangeText={setExerciseDescription}
          />

          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.secondaryButton} onPress={pickExerciseImage}>
              <Text style={styles.secondaryButtonText}>{exerciseImageUri ? "Kép cseréje" : "Kép kiválasztása"}</Text>
            </TouchableOpacity>

            {exerciseImageUri ? (
              <TouchableOpacity style={styles.ghostButton} onPress={() => setExerciseImageUri(null)}>
                <Text style={styles.ghostButtonText}>Kép törlése</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {exerciseImageUri ? <Image source={{ uri: exerciseImageUri }} style={styles.previewImage} resizeMode="cover" /> : null}

          <TouchableOpacity style={styles.addButton} onPress={addExerciseCard}>
            <Text style={styles.addButtonText}>+ Gyakorlat hozzáadása</Text>
          </TouchableOpacity>
        </View>

        {!activeCard && (
          <>
            <Text style={styles.counter}>{cardsCountText}</Text>

            <View style={styles.cardsWrap}>
              {cards.map((card) => (
                <TouchableOpacity key={card.id} style={styles.exerciseCard} onPress={() => setActiveCardId(card.id)}>
                  {card.imageUri ? <Image source={{ uri: card.imageUri }} style={styles.cardImage} resizeMode="contain" /> : null}
                  <Text style={styles.cardTitle}>{card.name}</Text>
                  {card.description ? <Text style={styles.cardDescription}>{card.description}</Text> : null}
                  <Text style={styles.openHint}>Megnyitás ↗</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {activeCard && (
          <View style={styles.folderView}>
            <TouchableOpacity style={styles.folderBackButton} onPress={() => setActiveCardId(null)}>
              <Text style={styles.folderBackButtonText}>← Vissza a kártyákhoz</Text>
            </TouchableOpacity>

            <Text style={styles.folderTitle}>📁 {activeCard.name}</Text>
            <Text style={styles.folderSubtitle}>Itt szerkesztheted a kiválasztott gyakorlatot.</Text>

            <TextInput
              style={styles.input}
              placeholder="Gyakorlat neve"
              placeholderTextColor="#94a3b8"
              value={editName}
              onChangeText={setEditName}
            />

            <TextInput
              style={[styles.input, styles.multilineInput]}
              multiline
              numberOfLines={3}
              placeholder="Leírás"
              placeholderTextColor="#94a3b8"
              value={editDescription}
              onChangeText={setEditDescription}
            />

            <View style={styles.imageRow}>
              <TouchableOpacity style={styles.secondaryButton} onPress={pickEditImage}>
                <Text style={styles.secondaryButtonText}>{editImageUri ? "Kép cseréje" : "Kép kiválasztása"}</Text>
              </TouchableOpacity>

              {editImageUri ? (
                <TouchableOpacity style={styles.ghostButton} onPress={() => setEditImageUri(null)}>
                  <Text style={styles.ghostButtonText}>Kép törlése</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {editImageUri ? <Image source={{ uri: editImageUri }} style={styles.previewImage} resizeMode="contain" /> : null}

            <TouchableOpacity style={styles.addButton} onPress={saveEditedCard}>
              <Text style={styles.addButtonText}>Mentés</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteExerciseCard(activeCard.id)}>
              <Text style={styles.deleteButtonText}>Gyakorlat törlése</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617" },
  content: { padding: 16, paddingBottom: 34 },
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
    fontSize: 22,
    fontWeight: "800",
    color: "#e5e7eb",
    marginBottom: 10,
  },
  body: { fontSize: 14, color: "#cbd5f5", marginBottom: 16 },
  formCard: {
    backgroundColor: "#0b1220",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
    padding: 12,
    marginBottom: 14,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#e5e7eb",
    backgroundColor: "#020617",
    fontSize: 14,
  },
  multilineInput: {
    minHeight: 82,
    textAlignVertical: "top",
  },
  imageRow: {
    flexDirection: "row",
    gap: 10,
  },
  secondaryButton: {
    backgroundColor: "#1d4ed8",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  secondaryButtonText: {
    color: "#e5e7eb",
    fontWeight: "700",
  },
  ghostButton: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  ghostButtonText: {
    color: "#cbd5f5",
    fontWeight: "700",
  },
  previewImage: {
    width: "100%",
    height: 170,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },
  addButton: {
    backgroundColor: "#059669",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#ecfeff",
    fontWeight: "800",
    fontSize: 15,
  },
  counter: {
    color: "#94a3b8",
    marginBottom: 8,
    fontWeight: "700",
  },
  cardsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "flex-start",
  },
  exerciseCard: {
    width: "31%",
    minWidth: 180,
    maxWidth: 220,
    backgroundColor: "#0b1220",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
    padding: 10,
    gap: 8,
  },
  openHint: {
    marginTop: 4,
    color: "#7dd3fc",
    fontWeight: "700",
    fontSize: 12,
  },
  folderView: {
    marginTop: 8,
    backgroundColor: "#0b1220",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 12,
    gap: 10,
  },
  folderBackButton: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  folderBackButtonText: {
    color: "#cbd5f5",
    fontSize: 13,
    fontWeight: "700",
  },
  folderTitle: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "800",
  },
  folderSubtitle: {
    color: "#94a3b8",
    fontSize: 13,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    backgroundColor: "#020617",
  },
  cardTitle: {
    color: "#e5e7eb",
    fontWeight: "800",
    fontSize: 15,
  },
  cardDescription: {
    color: "#cbd5f5",
    fontSize: 13,
    lineHeight: 18,
  },
  deleteButton: {
    marginTop: 6,
    backgroundColor: "#7f1d1d",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fee2e2",
    fontWeight: "700",
    fontSize: 13,
  },
});
