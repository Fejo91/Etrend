/**
 * Smoke test: Top25 Knowledge Rewards — Top5 reggeli
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

// ── Top5 reggeli elvárt kulcsok ───────────────────────────────────────────────
const EXPECTED_KEYS: Record<string, string[]> = {
  "5-R-gyors-alap": [
    "Szórd rá a zabpelyhet.",
    "Add hozzá a bogyós gyümölcsöket.",
    "Keverd össze óvatosan a joghurtot, zabot és gyümölcsöt.",
    "Csorgasd a tetejére a mézet.",
    "Hagyd pár percig állni, hogy a zab kissé megpuhuljon.",
  ],
  "1-R-overnight": [
    "Öntsd rá a folyadékot, majd szórd bele a fahéjat.",
    "Keverd össze alaposan, hogy minden zabpelyhet érjen a folyadék.",
    "Zárd le a dobozt vagy üveget, és tedd a hűtőbe egy éjszakára.",
    "Reggel vedd ki a hűtőből, keverd át, és ellenőrizd az állagát.",
    "Add hozzá a fehérjeport, majd keverd simára.",
    "Karikázd fel a banánt, majd add a zabos alaphoz.",
    "Állítsd be az állagát kevés tejjel vagy vízzel, ha szükséges.",
  ],
  "1-R-mikros": [
    "Öntsd rá a folyadékot, majd keverd át.",
    "Mikrózd rövid szakaszokban, közben időnként állítsd meg és keverd át.",
    "Vedd ki, majd hagyd 1–2 percig sűrűsödni és hűlni.",
    "Add hozzá a fehérjeport, majd keverd csomómentesre.",
    "Állítsd be az állagát kevés vízzel vagy tejjel, ha szükséges.",
  ],
  "3-R-klasszikus": [
    "Vágd fel a paradicsomot és az uborkát falatnyi darabokra.",
    "Mérd ki a cottage cheese-t egy tálba.",
    "Sózd, borsozd, majd keverd át a cottage cheese-t snidlinggel vagy újhagymával, ha használsz.",
    "Állítsd össze a cottage cheese-t és a felvágott zöldségeket egy tányéron vagy tálban.",
    "Tedd mellé a puffasztott rizst vagy abonettet.",
  ],
  "6-R-alap": [
    "Add hozzá a fehérjeport.",
    "Szórd meg fahéjjal.",
    "Adj hozzá kevés vizet vagy joghurtot a krémesítéshez.",
    "Keverd krémes állagúra a túrós keveréket.",
    "Készítsd elő mellé a teljes kiőrlésű pirítóst vagy abonettet, majd tálald.",
  ],
};

const TOP5_MEAL_IDS = Object.keys(EXPECTED_KEYS);
const ALL_EXPECTED_REWARD_KEYS = TOP5_MEAL_IDS.flatMap((mealId) =>
  EXPECTED_KEYS[mealId].map((step) => `${mealId}:${step}`)
);

const validCategories: Top25KnowledgeRewardCategory[] = [
  "kitchen_logic",
  "common_mistake",
  "fitness_logic",
  "memory_trick",
];

// ── 1. Kulcsok teljessége ──────────────────────────────────────────────────
console.log("\n[1] TOP25_KNOWLEDGE_REWARDS — összes elvárt kulcs");

for (const key of ALL_EXPECTED_REWARD_KEYS) {
  assert(`Kulcs létezik: "${key.slice(0, 60)}"`, key in TOP25_KNOWLEDGE_REWARDS);
}

// ── 2. Reward mezők validálása ────────────────────────────────────────────────
console.log("\n[2] Reward mezők — title / body / category");

for (const [key, reward] of Object.entries(TOP25_KNOWLEDGE_REWARDS)) {
  const shortKey = key.split(":")[1].slice(0, 35);
  assert(
    `title nem üres: ${shortKey}`,
    typeof reward.title === "string" && reward.title.length > 0
  );
  assert(
    `body nem üres: ${shortKey}`,
    typeof reward.body === "string" && reward.body.length > 0
  );
  assert(
    `érvényes kategória (${reward.category}): ${shortKey}`,
    validCategories.includes(reward.category),
    `ismeretlen: ${reward.category}`
  );
}

// ── 3. getKnowledgeReward() helper ────────────────────────────────────────────
console.log("\n[3] getKnowledgeReward() helper");

// Pozitív eset minden Top5 ételnél (első kulcs)
for (const mealId of TOP5_MEAL_IDS) {
  const firstStep = EXPECTED_KEYS[mealId][0];
  const r = getKnowledgeReward(mealId, firstStep);
  assert(`${mealId}: első lépésre visszaad rewardot`, r !== undefined);
  assert(
    `${mealId}: reward title nem üres`,
    r !== undefined && r.title.length > 0
  );
}

// Negatív esetek
assert(
  "Ismeretlen step → undefined",
  getKnowledgeReward("5-R-gyors-alap", "Nem létező lépés.") === undefined
);
assert(
  "Reward nélküli mealId → undefined",
  getKnowledgeReward("99-X-ismeretlen", "Szórd rá a zabpelyhet.") === undefined
);

// ── 4. CATEGORY_LABELS teljessége ─────────────────────────────────────────────
console.log("\n[4] CATEGORY_LABELS");
for (const cat of validCategories) {
  assert(
    `Label létezik és nem üres: ${cat}`,
    typeof CATEGORY_LABELS[cat] === "string" && CATEGORY_LABELS[cat].length > 0
  );
}

// ── 5. buildTop25NextStepQuestion integráció (150 kérdés) ─────────────────────
console.log("\n[5] buildTop25NextStepQuestion integráció (150 kérdés)");

const rewardHitsByMeal: Record<string, number> = {};
const falsePositives: string[] = [];
const TRIALS = 150;

for (let i = 0; i < TRIALS; i++) {
  const q = buildTop25NextStepQuestion({ slotFilter: "Reggeli" });
  if (!q) continue;

  const expectedKey = `${q.mealId}:${q.correctNextStep}`;
  const shouldHaveReward = expectedKey in TOP25_KNOWLEDGE_REWARDS;

  if (q.knowledgeReward !== undefined) {
    if (!shouldHaveReward) {
      falsePositives.push(`mealId=${q.mealId}, step="${q.correctNextStep}"`);
    } else {
      rewardHitsByMeal[q.mealId] = (rewardHitsByMeal[q.mealId] ?? 0) + 1;
    }
  } else if (shouldHaveReward) {
    // reward-os kulcsnál nem szabad hiányozni a rewardnak
    console.error(
      `  ❌ Hiányzó reward bekötés: mealId=${q.mealId}, step="${q.correctNextStep}"`
    );
    failed++;
  }
}

assert("Nincs fals pozitív (reward nem-Top5 ételnél)", falsePositives.length === 0,
  falsePositives.join("; "));

// Minden Top5 ételnél legalább 1 reward-os találat elvárható 150 próbából
// (nem kritikus, ha egy étkezés nagyon ritka a poolban — csak warningként logoljuk)
let allMealsHit = true;
for (const mealId of TOP5_MEAL_IDS) {
  const hits = rewardHitsByMeal[mealId] ?? 0;
  if (hits === 0) {
    console.warn(
      `  ⚠️  ${mealId}: 0 reward-os találat ${TRIALS} kérdés alatt — lehet, hogy ritka a poolban`
    );
    allMealsHit = false;
  }
}
assert(
  `Legalább 1 Top5 etelnél jött reward-os kérdés ${TRIALS} próbából`,
  Object.keys(rewardHitsByMeal).length > 0
);

console.log(`\n  Reward-os találatok:`);
for (const mealId of TOP5_MEAL_IDS) {
  console.log(`    ${mealId}: ${rewardHitsByMeal[mealId] ?? 0} / ${TRIALS}`);
}
if (!allMealsHit) {
  console.log(
    "  (⚠️ Egyes ételeknél 0 találat — ez nem hiba, csak alacsony valószínűség)"
  );
}

// ── 6. Összesítő ──────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(55)}`);
console.log(`Összesítő: ${passed} átment, ${failed} sikertelen`);
if (failed === 0) {
  console.log("✅ Minden smoke teszt OK");
  process.exit(0);
} else {
  console.error("❌ Vannak sikertelen tesztek!");
  process.exit(1);
}
