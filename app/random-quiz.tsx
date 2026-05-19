import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type QuizRouteEntry =
  | {
      pathname: "/top25-order-quiz" | "/top25-next-step-quiz" | "/top25-ingredient-quiz";
      params: {
        slotFilter: "Mind";
        difficulty: "normal";
        mode: "practice";
      };
    }
  | {
      pathname: "/extra";
      params?: undefined;
    };

const QUIZ_ROUTE_POOL: QuizRouteEntry[] = [
  {
    pathname: "/top25-order-quiz",
    params: { slotFilter: "Mind", difficulty: "normal", mode: "practice" },
  },
  {
    pathname: "/top25-next-step-quiz",
    params: { slotFilter: "Mind", difficulty: "normal", mode: "practice" },
  },
  {
    pathname: "/top25-ingredient-quiz",
    params: { slotFilter: "Mind", difficulty: "normal", mode: "practice" },
  },
  {
    pathname: "/extra",
  },
];

function pickRandomQuizRoute(): QuizRouteEntry | null {
  if (QUIZ_ROUTE_POOL.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * QUIZ_ROUTE_POOL.length);
  return QUIZ_ROUTE_POOL[randomIndex] ?? null;
}

export default function RandomQuizRoute() {
  const [failed, setFailed] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);

  useEffect(() => {
    try {
      const selectedRoute = pickRandomQuizRoute();
      if (!selectedRoute) {
        setFailed(true);
        return;
      }

      if (selectedRoute.params) {
        const query = new URLSearchParams({
          slotFilter: selectedRoute.params.slotFilter,
          difficulty: selectedRoute.params.difficulty,
          mode: selectedRoute.params.mode,
        }).toString();

        setTargetHref(`${selectedRoute.pathname}?${query}`);
        return;
      }

      setTargetHref(selectedRoute.pathname);
    } catch {
      setFailed(true);
    }
  }, []);

  if (targetHref) {
    return <Redirect href={targetHref as never} />;
  }

  return (
    <View style={styles.container}>
      {failed ? (
        <Text style={styles.fallbackText}>Nem sikerült kvízt választani.</Text>
      ) : (
        <>
          <ActivityIndicator size="small" color="#38bdf8" />
          <Text style={styles.loadingText}>Kvíz kiválasztása...</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 10,
  },
  loadingText: {
    color: "#cbd5e1",
    fontSize: 14,
    fontWeight: "600",
  },
  fallbackText: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
