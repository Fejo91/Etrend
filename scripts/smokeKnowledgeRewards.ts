/**
 * Smoke test: Top25 Knowledge Rewards bekötés ellenőrzése
 * Futtatás: npx tsx scripts/smokeKnowledgeRewards.ts
 */

import {
  TOP25_KNOWLEDGE_REWARDS,
  getKnowledgeReward,
  CATEGORY_LABELS,
  type Top25KnowledgeRewardCategory,
} from "../features/diet/data/top25KnowledgeRewards";
import { buildTop25NextStepQuestion } from "../features/diet/utils/top25QuizData";

let passed = 0;
let failed = 0;

function assert(label: string, condition: boolean, detail?: string) {
  if (condition) {
    console.log(`  ✅ ${label}`);
    passed++;
  } else {
    console.error(`  ❌ ${label}${detail ? ` — ${detail}` : ""}`);
    failed++;
  }
}

// ── 1. Reward adatok teljessége ──────────────────────────────────────────────
console.log("\n[1] TOP25_KNOWLEDGE_REWARDS kulcsok");

const EXPECTED_KEYS = [
  "5-R-gyors-alap:Szórd rá a zabpelyhet.",
  "5-R-gyors-alap:Add hozzá a bogyós gyümölcsöket.",
  "5-R-gyors-alap:Keverd össze óvatosan a joghurtot, zabot és gyümölcsöt.",
  "5-R-gyors-alap:Csorgasd a tetejére a mézet.",
  "5-R-gyors-alap:Hagyd pár percig állni, hogy a zab kissé megpuhuljon.",
];

for (const key of EXPECTED_KEYS) {
  assert(`Kulcs létezik: "${key}"`, key in TOP25_KNOWLEDGE_REWARDS);
}

// ── 2. Minden reward kötelező mezővel rendelkezik ────────────────────────────
console.log("\n[2] Reward mezők validálása");
const validCategories: Top25KnowledgeRewardCategory[] = [
  "kitchen_logic",
  "common_mistake",
  "fitness_logic",
  "memory_trick",
];

for (const [key, reward] of Object.entries(TOP25_KNOWLEDGE_REWARDS)) {
  assert(
    `title nem üres: ${key.split(":")[1].slice(0, 30)}…`,
    typeof reward.title === "string" && reward.title.length > 0
  );
  assert(
    `body nem üres: ${key.split(":")[1].slice(0, 30)}…`,
    typeof reward.body === "string" && reward.body.length > 0
  );
  assert(
    `érvényes kategória: ${reward.category}`,
    validCategories.includes(reward.category),
    `ismeretlen: ${reward.category}`
  );
}

// ── 3. getKnowledgeReward() helper ──────────────────────────────────────────
console.log("\n[3] getKnowledgeReward() helperMűködés");

const r = getKnowledgeReward("5-R-gyors-alap", "Szórd rá a zabpelyhet.");
assert("Helyes mealId+step visszaad rewardot", r !== undefined);
assert(
  "Reward title nem üres",
  r !== undefined && r.title.length > 0
);

const noReward = getKnowledgeReward("5-R-gyors-alap", "Nem létező lépés.");
assert("Ismeretlen step → undefined", noReward === undefined);

const otherMeal = getKnowledgeReward("1-R-alap", "Szórd rá a zabpelyhet.");
assert("Más mealId → undefined", otherMeal === undefined);

// ── 4. CATEGORY_LABELS teljessége ────────────────────────────────────────────
console.log("\n[4] CATEGORY_LABELS");
for (const cat of validCategories) {
  assert(
    `Label létezik: ${cat}`,
    typeof CATEGORY_LABELS[cat] === "string" && CATEGORY_LABELS[cat].length > 0
  );
}

// ── 5. buildTop25NextStepQuestion bekötés ────────────────────────────────────
console.log("\n[5] buildTop25NextStepQuestion bekötés (50 kérdés)");

let rewardHit = 0;
let rewardWrongMeal = false;
const TRIALS = 50;

for (let i = 0; i < TRIALS; i++) {
  const q = buildTop25NextStepQuestion({ slotFilter: "Reggeli" });
  if (!q) continue;

  if (q.knowledgeReward !== undefined) {
    // Reward csak 5-R-gyors-alap-ra van definiálva
    if (q.mealId !== "5-R-gyors-alap") {
      rewardWrongMeal = true;
      console.error(
        `  ❌ Reward jelent meg nem-pilot ételnél: mealId=${q.mealId}, step="${q.correctNextStep}"`
      );
    } else {
      rewardHit++;
    }
  } else {
    // Ellenőrzés: ha 5-R-gyors-alap és a correctNextStep egy ismert kulcs, akkor muszáj lenne reward
    const expectedKey = `5-R-gyors-alap:${q.correctNextStep}`;
    if (q.mealId === "5-R-gyors-alap" && expectedKey in TOP25_KNOWLEDGE_REWARDS) {
      console.error(
        `  ❌ 5-R-gyors-alap kérdésnél hiányzik a reward! correctNextStep="${q.correctNextStep}"`
      );
      failed++;
    }
  }
}

assert("Nem jelent meg reward nem-pilot ételnél", !rewardWrongMeal);
assert(
  `Legalább 1 reward-os 5-R-gyors-alap kérdés jött ${TRIALS} próbából`,
  rewardHit > 0,
  `0 találat — lehetséges, ha az étrendalap nem Reggeli slotban van, növeld a TRIALS értéket`
);

console.log(`\n  (reward hit: ${rewardHit}/${TRIALS} kérdés volt 5-R-gyors-alap + ismert step)`);

// ── 6. Összesítő ─────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(50)}`);
console.log(`Összesítő: ${passed} átment, ${failed} sikertelen`);
if (failed === 0) {
  console.log("✅ Minden smoke teszt OK");
  process.exit(0);
} else {
  console.error("❌ Vannak sikertelen tesztek!");
  process.exit(1);
}
