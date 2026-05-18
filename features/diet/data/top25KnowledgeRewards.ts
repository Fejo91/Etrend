/**
 * Pilot: Knowledge rewards for the Top25 "Mi jön ezután?" quiz.
 * Lookup key: `${mealId}:${correctNextStep}`
 *
 * These rewards are shown AFTER a correct answer — never before.
 */

export type Top25KnowledgeRewardCategory =
  | "kitchen_logic"
  | "common_mistake"
  | "fitness_logic"
  | "memory_trick";

export type Top25KnowledgeReward = {
  title: string;
  body: string;
  category: Top25KnowledgeRewardCategory;
};

/**
 * Maps `${mealId}:${correctNextStep}` to a knowledge reward.
 * quizSteps for 5-R-gyors-alap (6 lépés):
 *  [0] "Mérd ki a görög joghurtot egy tálba."
 *  [1] "Szórd rá a zabpelyhet."
 *  [2] "Add hozzá a bogyós gyümölcsöket."
 *  [3] "Keverd össze óvatosan a joghurtot, zabot és gyümölcsöt."
 *  [4] "Csorgasd a tetejére a mézet."
 *  [5] "Hagyd pár percig állni, hogy a zab kissé megpuhuljon."
 */
export const TOP25_KNOWLEDGE_REWARDS: Record<string, Top25KnowledgeReward> = {
  // Transition 0→1: joghurt alap → zab
  "5-R-gyors-alap:Szórd rá a zabpelyhet.": {
    category: "kitchen_logic",
    title: "Miért a zab jön az alap után?",
    body: "A görög joghurt adja a krémes fehérjebázist, a zab pedig a lassabb szénhidrátot. Ha korán belekerül, pár perc alatt kicsit megszívja magát, és egységesebb lesz az állag.",
  },

  // Transition 1→2: zab → bogyós
  "5-R-gyors-alap:Add hozzá a bogyós gyümölcsöket.": {
    category: "kitchen_logic",
    title: "Miért a gyümölcs megy a tetejére?",
    body: "A bogyós gyümölcs feltétként frissebb marad, és jobban érezni az ízét. Ha teljesen szétkevered, könnyebben elveszik az állaga.",
  },

  // Transition 2→3: bogyós → keverés
  "5-R-gyors-alap:Keverd össze óvatosan a joghurtot, zabot és gyümölcsöt.": {
    category: "kitchen_logic",
    title: "Miért érdemes összekeverni a joghurtot és a zabot?",
    body: "Így a zab nem száraz rétegként ül a tetején, hanem egyenletesen eloszlik a joghurtban. Ettől kanalazhatóbb és krémesebb lesz a reggeli.",
  },

  // Transition 3→4: keverés → méz
  "5-R-gyors-alap:Csorgasd a tetejére a mézet.": {
    category: "fitness_logic",
    title: "Miért csak kevés méz kell?",
    body: "A méz itt nem fő szénhidrátforrás, hanem finomhangoló édesítés. A bogyós gyümölcs már önmagában is ad természetes édességet, ezért kevés méz is elég.",
  },

  // Transition 4→5: méz → állni hagyás
  "5-R-gyors-alap:Hagyd pár percig állni, hogy a zab kissé megpuhuljon.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a sorrendet?",
    body: "Gondolj erre a sorrendre: alap → zab → gyümölcs → keverés → édesítés → állni hagyás. Így könnyebb megjegyezni, mit mi után érdemes hozzáadni.",
  },
};

export function getKnowledgeReward(
  mealId: string,
  correctNextStep: string
): Top25KnowledgeReward | undefined {
  return TOP25_KNOWLEDGE_REWARDS[`${mealId}:${correctNextStep}`];
}

export const CATEGORY_LABELS: Record<Top25KnowledgeRewardCategory, string> = {
  kitchen_logic: "Konyhai logika",
  common_mistake: "Gyakori hiba",
  fitness_logic: "Fitnesz-logika",
  memory_trick: "Memória-trükk",
};
