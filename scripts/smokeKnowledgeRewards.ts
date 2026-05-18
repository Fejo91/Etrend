/**
 * Smoke test: Top25 Knowledge Rewards — Top5 reggeli / tízórai / ebéd / uzsonna
 * Futtatás: npx tsx scripts/smokeKnowledgeRewards.ts
 */

import {
    CATEGORY_LABELS,
    TOP25_KNOWLEDGE_REWARDS,
    getKnowledgeReward,
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

type SlotLabel = "Reggeli" | "Tízórai" | "Ebéd" | "Uzsonna";

const EXPECTED_STEPS_BY_SLOT: Record<SlotLabel, Record<string, string[]>> = {
  Reggeli: {
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
  },
  Tízórai: {
    "1-T-klasszikus": [
      "Mosd meg a paprikát és az uborkát.",
      "Vágd fel a paprikát és az uborkát falatnyi darabokra.",
      "Sózd, borsozd, majd keverd át a cottage cheese-t.",
      "Tedd a zöldségeket a cottage cheese mellé vagy keverd hozzá.",
      "Készítsd elő mellé a teljes kiőrlésű kenyeret vagy abonettet, majd tálald.",
    ],
    "5-T-kremes-dio": [
      "Keverd át a joghurtot, hogy krémesebb állagú legyen.",
      "Vágd durvább darabokra a diót.",
      "Szórd a diót a joghurt tetejére.",
      "Keverd össze óvatosan, hogy a dió egyenletesen eloszoljon.",
      "Tálald azonnal, vagy tedd rövid időre hűtőbe, ha hidegebben szeretnéd enni.",
    ],
    "4-T-klasszikus": [
      "Szórd bele a kimért zabpelyhet.",
      "Keverd össze, hogy minden zabpelyhet érjen a kefir.",
      "Hagyd röviden állni, hogy a zab kissé megszívja magát.",
      "Hámozd meg és vágd fel a banánt.",
      "Add a banánt a kefires-zabos alaphoz.",
      "Szórd meg fahéjjal.",
      "Tálald a kefires-zabos banános tízórait.",
    ],
    "6-T-superfood": [
      "Mérd ki a mogyoróvajat, és kend el egyenletesen a rizsszeleteken.",
      "Hámozd meg és karikázd fel a banánt.",
      "Rendezd el a banánkarikákat a mogyoróvajas rizsszeleteken.",
      "Szórd meg a tetejét chia maggal.",
      "Tálald a mogyoróvajas-banános rizsszeleteket.",
    ],
    "3-T-bento": [
      "Rakd egymásra a pulykasonka-szeleteket, és vágd fel őket falatnyi darabokra.",
      "Mosd meg a répát, az uborkát és a paprikát.",
      "Vágd fel a répát, az uborkát és a paprikát hasábokra.",
      "Készítsd elő külön a teljes kiőrlésű kenyeret.",
      "Rendezd el külön részekbe a pulykasonkát, a zöldségeket és a kenyeret.",
      "Tálald vagy zárd le a bento dobozt.",
    ],
  },
  Uzsonna: {
    "1-U-feherjes": [
      "Add hozzá a fehérjeport.",
      "Adj hozzá kevés folyadékot, majd keverd krémesre a túrós-fehérjés alapot.",
      "Készítsd elő a gyümölcsöt falatnyi darabokra.",
      "Mérd ki és aprítsd fel a magvakat.",
      "Rétegezd a fehérjés túrót és a gyümölcsöt.",
      "Szórd a tetejére a magvakat, majd tálald.",
    ],
    "2-U-dietas": [
      "Mérd ki és add hozzá a whey-t.",
      "Mérd ki a bogyós gyümölcsöt, majd add a keverékhez.",
      "Turmixold vagy rázd össze csomómentesre.",
      "Állítsd be az állagát kevés vízzel, ha szükséges.",
      "Öntsd pohárba, és fogyaszd frissen.",
    ],
    "2-U-zabos": [
      "Mérd ki és add hozzá a zabpelyhet.",
      "Szórd bele a fehérjeport.",
      "Add hozzá a felaprított banánt.",
      "Turmixold simára a keveréket.",
      "Állítsd be az állagát kevés folyadékkal, ha szükséges.",
      "Öntsd pohárba, és tálald frissen.",
    ],
    "3-U-alap": [
      "Mérd ki a cottage cheese-t egy tálba.",
      "Ízesítsd, majd keverd át a cottage cheese-t.",
      "Készítsd elő az abonettet.",
      "Kend rá egyenletesen a cottage cheese-t az abonett lapokra.",
      "Tedd rá a zöldségszeleteket, majd tálald.",
    ],
    "5-U-fitnesz-alap": [
      "Hűtsd le, pucold meg, majd vágd félbe vagy cikkekre.",
      "Mosd meg a paprikát és az uborkát.",
      "Vágd hasábokra a zöldségeket.",
      "Rendezd tányérra a tojást és a zöldségeket.",
      "Ízesítsd sóval és borssal, majd tálald.",
    ],
  },
  Ebéd: {
    "1-E-alap": [
      "Mérd ki a barna rizst, majd öblítsd át folyó víz alatt.",
      "Tedd fel főni a barna rizst sós vízben, majd pihentesd lefedve.",
      "Mosd meg a brokkolit és a sárgarépát, majd darabold fel őket.",
      "Párold roppanós-puhára a brokkolit és a sárgarépát.",
      "Tisztítsd meg és fűszerezd be a csirkemellet mindkét oldalon.",
      "Süsd meg a csirkemellet grillserpenyőben vagy kontaktgrillen.",
      "Pihentesd a csirkét röviden, majd szeleteld fel.",
      "Tálald együtt a barna rizst, a párolt brokkolit-répát és a szeletelt csirkemellet.",
    ],
    "2-E-suto": [
      "Melegítsd elő a sütőt, és készíts elő egy sütőpapíros tepsit.",
      "Tisztítsd meg és fűszerezd be a pulykamellet.",
      "Hámozd meg, darabold fel és fűszerezd be az édesburgonyát.",
      "Rendezd tepsibe a pulykamellet és az édesburgonyát, majd indítsd az első sütést.",
      "Készítsd elő a zöldbabot, és fűszerezd enyhén.",
      "Az első sütés után forgasd át az édesburgonyát, majd add a tepsibe a zöldbabot.",
      "Süsd készre az egészet, amíg a pulykamell teljesen átsül.",
      "Tálald együtt a sült pulykamellet, édesburgonyát és zöldbabot.",
    ],
    "3-E-suto-egyben": [
      "Melegítsd elő a sütőt, és béleld ki a tepsit sütőpapírral.",
      "Hámozd meg és darabold fel az édesburgonyát.",
      "Készítsd elő a brokkolit, répát, cukkinit és lilahagymát.",
      "Fűszerezd és olajozd be az édesburgonya-zöldség keveréket.",
      "Tisztítsd meg és fűszerezd be a lazacfilét.",
      "Terítsd tepsibe az édesburgonya-zöldség keveréket, majd helyezd rá a lazacot.",
      "Süsd készre az egészet, amíg a lazac átsül és az édesburgonya megpuhul.",
      "Tálald a sült lazacot az édesburgonyás-zöldséges körettel.",
    ],
    "5-E-alap": [
      "Főzd keményre a tojásokat, majd hűtsd le és szeleteld fel őket.",
      "Vágd fel a paradicsomot, uborkát, paprikát, lilahagymát és a salátát.",
      "Csepegtesd le a tonhalat, majd lazítsd fel villával.",
      "Keverd ki az öntetet olívaolajjal, citromlével, sóval és borssal.",
      "Forgasd össze a felvágott zöldségeket a tonhallal.",
      "Öntsd rá az öntetet, majd keverd át a salátát.",
      "Tálald a tonhalsalátát a szeletelt főtt tojással.",
    ],
    "6-E-klasszikus": [
      "Mérd ki és öblítsd át a basmati rizst.",
      "Főzd meg a basmati rizst, majd pihentesd lefedve.",
      "Párold roppanós-puhára a borsó-répa keveréket.",
      "Tisztítsd meg és fűszerezd be a csirkemellet.",
      "Hevítsd fel a serpenyőt, majd süsd meg a csirkemellet mindkét oldalon.",
      "Pihentesd röviden a csirkét, majd szeleteld fel.",
      "Tálald együtt a basmati rizst, a párolt borsó-répát és a szeletelt csirkemellet.",
    ],
  },
};

const VALID_CATEGORIES: Top25KnowledgeRewardCategory[] = [
  "kitchen_logic",
  "common_mistake",
  "fitness_logic",
  "memory_trick",
];

const ALL_EXPECTED_REWARD_KEYS = Object.entries(EXPECTED_STEPS_BY_SLOT).flatMap(
  ([, meals]) =>
    Object.entries(meals).flatMap(([mealId, steps]) =>
      steps.map((step) => `${mealId}:${step}`)
    )
);

function runRewardStructureChecks() {
  console.log("\n[1] Reward kulcsok és mezők");
  for (const key of ALL_EXPECTED_REWARD_KEYS) {
    assert(`Kulcs létezik: ${key.slice(0, 70)}`, key in TOP25_KNOWLEDGE_REWARDS);
  }

  for (const [key, reward] of Object.entries(TOP25_KNOWLEDGE_REWARDS)) {
    const shortKey = key.split(":")[1].slice(0, 35);
    assert(
      `title nem üres: ${shortKey}`,
      typeof reward.title === "string" && reward.title.trim().length > 0
    );
    assert(
      `body nem üres: ${shortKey}`,
      typeof reward.body === "string" && reward.body.trim().length > 0
    );
    assert(
      `érvényes kategória (${reward.category}): ${shortKey}`,
      VALID_CATEGORIES.includes(reward.category),
      `ismeretlen: ${reward.category}`
    );
  }

  console.log(`\n  Reward kulcsok száma összesen: ${Object.keys(TOP25_KNOWLEDGE_REWARDS).length}`);
}

function runHelperChecks() {
  console.log("\n[2] getKnowledgeReward() helper");

  for (const [slot, meals] of Object.entries(EXPECTED_STEPS_BY_SLOT) as Array<
    [SlotLabel, Record<string, string[]>]
  >) {
    for (const [mealId, steps] of Object.entries(meals)) {
      const firstRewardStep = steps[0];
      const reward = getKnowledgeReward(mealId, firstRewardStep);
      assert(`${slot} ${mealId}: ismert kulcsra reward`, reward !== undefined);
      assert(
        `${slot} ${mealId}: reward title nem üres`,
        reward !== undefined && reward.title.trim().length > 0
      );
    }
  }

  assert(
    "Ismeretlen step → undefined",
    getKnowledgeReward("5-R-gyors-alap", "Nem létező lépés.") === undefined
  );
  assert(
    "Ismeretlen mealId → undefined",
    getKnowledgeReward("99-X-ismeretlen", "Szórd rá a zabpelyhet.") === undefined
  );

  console.log("\n[3] CATEGORY_LABELS");
  for (const category of VALID_CATEGORIES) {
    assert(
      `Label létezik és nem üres: ${category}`,
      typeof CATEGORY_LABELS[category] === "string" && CATEGORY_LABELS[category].length > 0
    );
  }
}

function runSlotIntegrationSmoke(slotFilter: SlotLabel, trials: number) {
  console.log(`\n[4] buildTop25NextStepQuestion integráció — ${slotFilter} (${trials} kérdés)`);

  const rewardHitsByMeal: Record<string, number> = {};
  const falsePositives: string[] = [];
  let nullQuestions = 0;

  for (let i = 0; i < trials; i++) {
    const question = buildTop25NextStepQuestion({ slotFilter });
    if (!question) {
      nullQuestions++;
      continue;
    }

    const expectedKey = `${question.mealId}:${question.correctNextStep}`;
    const shouldHaveReward = expectedKey in TOP25_KNOWLEDGE_REWARDS;

    if (question.knowledgeReward) {
      if (!shouldHaveReward) {
        falsePositives.push(`mealId=${question.mealId}, step="${question.correctNextStep}"`);
      } else {
        rewardHitsByMeal[question.mealId] = (rewardHitsByMeal[question.mealId] ?? 0) + 1;
      }
    } else if (shouldHaveReward) {
      console.error(
        `  ❌ Hiányzó reward bekötés: mealId=${question.mealId}, step="${question.correctNextStep}"`
      );
      failed++;
    }
  }

  assert(
    `${slotFilter}: nincs fals pozitív`,
    falsePositives.length === 0,
    falsePositives.join("; ")
  );

  const rewardHitCount = Object.values(rewardHitsByMeal).reduce((sum, count) => sum + count, 0);
  assert(`${slotFilter}: legalább 1 reward-os kérdés jött`, rewardHitCount > 0);

  console.log(`  Null kérdések: ${nullQuestions}`);
  console.log(`  Reward-os találatok összesen: ${rewardHitCount}`);
  for (const [mealId, count] of Object.entries(rewardHitsByMeal)) {
    console.log(`    ${mealId}: ${count} / ${trials}`);
  }
}

runRewardStructureChecks();
runHelperChecks();
runSlotIntegrationSmoke("Reggeli", 180);
runSlotIntegrationSmoke("Tízórai", 240);
runSlotIntegrationSmoke("Ebéd", 320);
runSlotIntegrationSmoke("Uzsonna", 320);

console.log(`\n${"─".repeat(55)}`);
console.log(`Összesítő: ${passed} átment, ${failed} sikertelen`);
if (failed === 0) {
  console.log("✅ Minden smoke teszt OK");
  process.exit(0);
} else {
  console.error("❌ Vannak sikertelen tesztek!");
  process.exit(1);
}
