import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {
    TOP25_DIFFICULTY_LABELS,
    TOP25_MODE_LABELS,
    TOP25_QUIZ_DIFFICULTIES,
    TOP25_QUIZ_MODES,
    TOP25_QUIZ_SLOT_FILTERS,
    Top25QuizDifficulty,
    Top25QuizMode,
    Top25QuizSlotFilter,
} from "../features/diet/utils/top25QuizData";
import {
  cancelQuizReminderNotifications,
  requestQuizReminderPermission,
  scheduleQuizReminderNotifications,
} from "../features/notifications/quizReminderNotifications";

type QuizReminderInterval = 30 | 60 | 120;

type QuizReminderSettings = {
  enabled: boolean;
  intervalMinutes: QuizReminderInterval | null;
};

const QUIZ_REMINDER_STORAGE_KEY = "@diet_app/quiz_reminder_settings";

const QUIZ_REMINDER_INTERVALS: QuizReminderInterval[] = [30, 60, 120];

type ChipProps<T extends string> = {
  label: string;
  value: T;
  selected: boolean;
  onPress: (v: T) => void;
};

function Chip<T extends string>({ label, value, selected, onPress }: ChipProps<T>) {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.chipSelected]}
      onPress={() => onPress(value)}
      activeOpacity={0.75}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function Top25QuizHubScreen() {
  const [slotFilter, setSlotFilter] = useState<Top25QuizSlotFilter>("Mind");
  const [difficulty, setDifficulty] = useState<Top25QuizDifficulty>("normal");
  const [mode, setMode] = useState<Top25QuizMode>("practice");
  const [reminderSettings, setReminderSettings] = useState<QuizReminderSettings>({
    enabled: false,
    intervalMinutes: null,
  });
  const [reminderBusy, setReminderBusy] = useState(false);
  const [reminderInfoText, setReminderInfoText] = useState<string>("");

  useEffect(() => {
    let active = true;

    AsyncStorage.getItem(QUIZ_REMINDER_STORAGE_KEY)
      .then((raw) => {
        if (!raw || !active) {
          return;
        }

        const parsed = JSON.parse(raw) as Partial<QuizReminderSettings>;
        const interval =
          parsed.intervalMinutes === 30 ||
          parsed.intervalMinutes === 60 ||
          parsed.intervalMinutes === 120
            ? parsed.intervalMinutes
            : null;

        setReminderSettings({
          enabled: Boolean(parsed.enabled) && interval !== null,
          intervalMinutes: interval,
        });
      })
      .catch(() => {
        // noop
      });

    return () => {
      active = false;
    };
  }, []);

  const reminderStatusLabel = useMemo(() => {
    if (!reminderSettings.enabled || !reminderSettings.intervalMinutes) {
      return "Kikapcsolva";
    }

    return `Bekapcsolva (${reminderSettings.intervalMinutes} percenként)`;
  }, [reminderSettings]);

  async function persistReminderSettings(nextSettings: QuizReminderSettings) {
    await AsyncStorage.setItem(QUIZ_REMINDER_STORAGE_KEY, JSON.stringify(nextSettings));
    setReminderSettings(nextSettings);
  }

  async function disableReminder() {
    setReminderBusy(true);
    setReminderInfoText("");

    try {
      await cancelQuizReminderNotifications();

      const nextSettings: QuizReminderSettings = {
        enabled: false,
        intervalMinutes: null,
      };

      await persistReminderSettings(nextSettings);
      setReminderInfoText("Kvíz emlékeztető kikapcsolva.");
    } catch {
      setReminderInfoText("Nem sikerült kikapcsolni az emlékeztetőt.");
    } finally {
      setReminderBusy(false);
    }
  }

  async function enableReminder(intervalMinutes: QuizReminderInterval) {
    setReminderBusy(true);
    setReminderInfoText("");

    try {
      const hasPermission = await requestQuizReminderPermission();
      if (!hasPermission) {
        setReminderInfoText("Az értesítési engedély nem érhető el vagy elutasítottad.");
        return;
      }

      const scheduled = await scheduleQuizReminderNotifications(intervalMinutes);
      if (!scheduled) {
        setReminderInfoText("Nem sikerült ütemezni az emlékeztetőt ezen az eszközön.");
        return;
      }

      const nextSettings: QuizReminderSettings = {
        enabled: true,
        intervalMinutes,
      };

      await persistReminderSettings(nextSettings);
      setReminderInfoText(`Kvíz emlékeztető beállítva: ${intervalMinutes} percenként.`);
    } catch {
      setReminderInfoText("Hiba történt az emlékeztető beállításakor.");
    } finally {
      setReminderBusy(false);
    }
  }

  const navigateToQuiz = (pathname: string) => {
    router.push({
      pathname: pathname as never,
      params: { slotFilter, difficulty, mode },
    });
  };

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

        {/* === Kvíz beállítások === */}
        <View style={styles.settingsBlock}>
          <Text style={styles.settingsTitle}>Kvíz beállítások</Text>

          <Text style={styles.settingsLabel}>Étkezési slot</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipRow}
          >
            {TOP25_QUIZ_SLOT_FILTERS.map((slot) => (
              <Chip
                key={slot}
                label={slot}
                value={slot}
                selected={slotFilter === slot}
                onPress={setSlotFilter}
              />
            ))}
          </ScrollView>

          <Text style={styles.settingsLabel}>Nehézség</Text>
          <View style={styles.chipRowWrap}>
            {TOP25_QUIZ_DIFFICULTIES.map((d) => (
              <Chip
                key={d}
                label={TOP25_DIFFICULTY_LABELS[d]}
                value={d}
                selected={difficulty === d}
                onPress={setDifficulty}
              />
            ))}
          </View>

          <Text style={styles.settingsLabel}>Mód</Text>
          <View style={styles.chipRowWrap}>
            {TOP25_QUIZ_MODES.map((m) => (
              <Chip
                key={m}
                label={TOP25_MODE_LABELS[m]}
                value={m}
                selected={mode === m}
                onPress={setMode}
              />
            ))}
          </View>

          <Text style={styles.settingsHint}>
            {mode === "exam"
              ? "Vizsga mód: a válasz az első próbálkozás után rögzül, nincs újrapróbálás."
              : "Gyakorlás mód: hibás válasz után újrapróbálhatod a kérdést."}
          </Text>
        </View>

        <View style={styles.reminderBlock}>
          <Text style={styles.reminderTitle}>Kvíz emlékeztető</Text>
          <Text style={styles.reminderStatus}>Állapot: {reminderStatusLabel}</Text>

          <View style={styles.chipRowWrap}>
            <TouchableOpacity
              style={[
                styles.reminderButton,
                !reminderSettings.enabled && styles.reminderButtonActive,
              ]}
              onPress={disableReminder}
              disabled={reminderBusy}
            >
              <Text
                style={[
                  styles.reminderButtonText,
                  !reminderSettings.enabled && styles.reminderButtonTextActive,
                ]}
              >
                Kikapcsolva
              </Text>
            </TouchableOpacity>

            {QUIZ_REMINDER_INTERVALS.map((interval) => {
              const active =
                reminderSettings.enabled && reminderSettings.intervalMinutes === interval;

              return (
                <TouchableOpacity
                  key={interval}
                  style={[styles.reminderButton, active && styles.reminderButtonActive]}
                  onPress={() => enableReminder(interval)}
                  disabled={reminderBusy}
                >
                  <Text
                    style={[
                      styles.reminderButtonText,
                      active && styles.reminderButtonTextActive,
                    ]}
                  >
                    {interval} percenként
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {reminderInfoText.length > 0 ? (
            <Text style={styles.reminderHint}>{reminderInfoText}</Text>
          ) : (
            <Text style={styles.reminderHint}>
              Androidon az értesítés ütemezése kb. időzítésű lehet.
            </Text>
          )}
        </View>

        {/* 1. Lépéssorrend */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateToQuiz("/top25-order-quiz")}
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

        {/* 2. Mi jön ezután? */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateToQuiz("/top25-next-step-quiz")}
          activeOpacity={0.75}
        >
          <Text style={styles.cardTitle}>Mi jön ezután?</Text>
          <Text style={styles.cardDescription}>
            4 válasz közül válaszd ki a következő tisztított elkészítési lépést.
          </Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>Játssz most →</Text>
          </View>
        </TouchableOpacity>

        {/* 3. Alapanyag felismerő */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateToQuiz("/top25-ingredient-quiz")}
          activeOpacity={0.75}
        >
          <Text style={styles.cardTitle}>Alapanyag felismerő</Text>
          <Text style={styles.cardDescription}>
            Válaszd ki, mely alapanyagok kellenek az adott Top25 ételhez.
          </Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>Játssz most →</Text>
          </View>
        </TouchableOpacity>

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
    marginBottom: 20,
    lineHeight: 20,
  },
  settingsBlock: {
    backgroundColor: "#0f172a",
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 12,
  },
  settingsLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#94a3b8",
    marginTop: 8,
    marginBottom: 6,
  },
  settingsHint: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 12,
    lineHeight: 16,
    fontStyle: "italic",
  },
  reminderBlock: {
    backgroundColor: "#0f172a",
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  reminderStatus: {
    fontSize: 13,
    color: "#cbd5e1",
    marginBottom: 10,
  },
  reminderButton: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 4,
  },
  reminderButtonActive: {
    backgroundColor: "#0ea5e9",
    borderColor: "#38bdf8",
  },
  reminderButtonText: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "600",
  },
  reminderButtonTextActive: {
    color: "#fff",
  },
  reminderHint: {
    marginTop: 10,
    fontSize: 12,
    color: "#64748b",
    lineHeight: 16,
    fontStyle: "italic",
  },
  chipRow: {
    flexDirection: "row",
    paddingVertical: 4,
  },
  chipRowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    marginRight: 8,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#334155",
  },
  chipSelected: {
    backgroundColor: "#0ea5e9",
    borderColor: "#38bdf8",
  },
  chipText: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "600",
  },
  chipTextSelected: {
    color: "#fff",
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
