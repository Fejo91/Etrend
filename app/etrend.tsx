// app/etrend.tsx
import { router } from "expo-router";
import React from "react";
import SajatEtrendScreen from "./SajatEtrendScreen";

export default function EtrendRoute() {
  return (
    <SajatEtrendScreen onBack={() => router.back()} />
  );
}
