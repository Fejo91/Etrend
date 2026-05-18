/**
 * Knowledge rewards for the Top25 "Mi jön ezután?" quiz.
 * Lookup key: `${mealId}:${correctNextStep}`
 *
 * These rewards are shown AFTER a correct answer — never before.
 * Covered meals (Top5 reggeli):
 *   5-R-gyors-alap  (5 rewards)
 *   1-R-overnight   (7 rewards)
 *   1-R-mikros      (5 rewards)
 *   3-R-klasszikus  (5 rewards)
 *   6-R-alap        (5 rewards)
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
 */
export const TOP25_KNOWLEDGE_REWARDS: Record<string, Top25KnowledgeReward> = {

  // ─── 5-R-gyors-alap ───────────────────────────────────────────────────────
  // quizSteps: joghurt → zab → bogyós → keverés → méz → állni hagyás

  "5-R-gyors-alap:Szórd rá a zabpelyhet.": {
    category: "kitchen_logic",
    title: "Miért a zab jön az alap után?",
    body: "A görög joghurt adja a krémes fehérjebázist, a zab pedig a lassabb szénhidrátot. Ha korán belekerül, pár perc alatt kicsit megszívja magát, és egységesebb lesz az állag.",
  },
  "5-R-gyors-alap:Add hozzá a bogyós gyümölcsöket.": {
    category: "kitchen_logic",
    title: "Miért a gyümölcs jön a joghurtos-zabos alap után?",
    body: "A bogyós gyümölcsöt érdemes a joghurtos-zabos alap után hozzáadni, hogy ne törjön teljesen szét. Az óvatos keverés segít, hogy az íze eloszoljon, de maradjon friss gyümölcsös állaga is.",
  },
  "5-R-gyors-alap:Keverd össze óvatosan a joghurtot, zabot és gyümölcsöt.": {
    category: "kitchen_logic",
    title: "Miért érdemes összekeverni a joghurtot és a zabot?",
    body: "Így a zab nem száraz rétegként ül a tetején, hanem egyenletesen eloszlik a joghurtban. Ettől kanalazhatóbb és krémesebb lesz a reggeli.",
  },
  "5-R-gyors-alap:Csorgasd a tetejére a mézet.": {
    category: "fitness_logic",
    title: "Miért csak kevés méz kell?",
    body: "A méz itt nem fő szénhidrátforrás, hanem finomhangoló édesítés. A bogyós gyümölcs már önmagában is ad természetes édességet, ezért kevés méz is elég.",
  },
  "5-R-gyors-alap:Hagyd pár percig állni, hogy a zab kissé megpuhuljon.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a sorrendet?",
    body: "Gondolj erre a sorrendre: alap → zab → gyümölcs → keverés → édesítés → állni hagyás. Így könnyebb megjegyezni, mit mi után érdemes hozzáadni.",
  },

  // ─── 1-R-overnight ────────────────────────────────────────────────────────
  // quizSteps: zab kimér → folyadék+fahéj → kever → hűtőbe → reggel kivesz →
  //            fehérje → banán → állag beállít

  "1-R-overnight:Öntsd rá a folyadékot, majd szórd bele a fahéjat.": {
    category: "kitchen_logic",
    title: "Miért a folyadék és fahéj jön a zabra?",
    body: "A zab csak akkor szívja magát meg teljesen, ha a folyadék rögtön körülveszi az összes pelyhét. A fahéj az áztatás során be is ivódik a zabba, nem csak a tetején marad.",
  },
  "1-R-overnight:Keverd össze alaposan, hogy minden zabpelyhet érjen a folyadék.": {
    category: "common_mistake",
    title: "Miért kell tényleg megkeverni?",
    body: "Ha nem kevered össze, a zab teteje puhul meg, az alja száraz marad. Ez a lépés garantálja az egyenletes, krémes állagot reggel.",
  },
  "1-R-overnight:Zárd le a dobozt vagy üveget, és tedd a hűtőbe egy éjszakára.": {
    category: "kitchen_logic",
    title: "Miért kell lezárni és hűtőbe tenni?",
    body: "A fedő megakadályozza, hogy a felszín kiszáradjon vagy idegen szagokat vegyen fel. A hideg lassú folyamat közben a zab textúrája krémesebb lesz, mint szobahőmérsékleten.",
  },
  "1-R-overnight:Reggel vedd ki a hűtőből, keverd át, és ellenőrizd az állagát.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a kétfázisos sorrendet?",
    body: "Este: zab + folyadék + keverés + hűtő. Reggel: ellenőrzés + fehérje + gyümölcs + állag. Gondolj rá úgy: este előkészítés, reggel befejezés.",
  },
  "1-R-overnight:Add hozzá a fehérjeport, majd keverd simára.": {
    category: "fitness_logic",
    title: "Miért reggel kerül bele a fehérjepor?",
    body: "Az éjszakai áztatás befolyásolhatja a fehérjepor állagát és ízét. Reggel adva frissebb ízt és simább textúrát kapsz, mint ha este kevernéd bele.",
  },
  "1-R-overnight:Karikázd fel a banánt, majd add a zabos alaphoz.": {
    category: "fitness_logic",
    title: "Miért a banán jön a fehérje után?",
    body: "A banán természetes gyors szénhidrátot ad, ami reggel és edzés előtt jól használható energiaforrás. A fehérje + zab + banán kombó teltséget és energiát ad egyszerre.",
  },
  "1-R-overnight:Állítsd be az állagát kevés tejjel vagy vízzel, ha szükséges.": {
    category: "kitchen_logic",
    title: "Miért az állag beállítása az utolsó lépés?",
    body: "Minden összetevő hozzáadása után tudod megítélni a végleges állagot. Egy kortytal az utolsó lépésben pontosan olyanná varázsolhatod, amilyet szeretsz.",
  },

  // ─── 1-R-mikros ───────────────────────────────────────────────────────────
  // quizSteps: zab kimér → folyadék+kever → mikróz szakaszokban →
  //            kivesz+sűrűsödni hagy → fehérje → állag beállít

  "1-R-mikros:Öntsd rá a folyadékot, majd keverd át.": {
    category: "kitchen_logic",
    title: "Miért kell azonnal átkevert a folyadék?",
    body: "Ha szárazon rakod be a zabot, a mikróban egyenetlenül sül meg. A folyadék és a keverés garantálja az egységes, nem csomós végeredményt.",
  },
  "1-R-mikros:Mikrózd rövid szakaszokban, közben időnként állítsd meg és keverd át.": {
    category: "common_mistake",
    title: "Miért nem szabad egyszerre mikrózni?",
    body: "Ha egyszerre mikrózod, a közepe nyers, a széle kiszárad és kifut. A rövid szakaszok és a közbeni keverés egységes, krémes zabot eredményez.",
  },
  "1-R-mikros:Vedd ki, majd hagyd 1–2 percig sűrűsödni és hűlni.": {
    category: "kitchen_logic",
    title: "Miért kell várni a fehérje előtt?",
    body: "A forrón adott fehérjepor csomós maradhat. Az 1–2 perc pihenő közben a zab tovább sűrűsödik saját gőzétől — nem megy el az idő feleslegesen.",
  },
  "1-R-mikros:Add hozzá a fehérjeport, majd keverd csomómentesre.": {
    category: "fitness_logic",
    title: "Miért nem mehet forróba a fehérjepor?",
    body: "A túl forró zabban a fehérjepor könnyebben csomósodik és kellemetlenebb állagú lehet. Kicsit hűlt alapba keverve simább, krémesebb végeredményt kapsz.",
  },
  "1-R-mikros:Állítsd be az állagát kevés vízzel vagy tejjel, ha szükséges.": {
    category: "kitchen_logic",
    title: "Miért az állag beállítása az utolsó lépés?",
    body: "Minden összetevő hozzáadása után tudod megítélni a végleges állagot. Egy kortytal az utolsó lépésben pontosan olyanná varázsolhatod, amilyet szeretsz.",
  },

  // ─── 3-R-klasszikus ───────────────────────────────────────────────────────
  // quizSteps: mosás → vágás → cottage kimér → ízesít+kever → összeállít → puffasztott rizs

  "3-R-klasszikus:Vágd fel a paradicsomot és az uborkát falatnyi darabokra.": {
    category: "kitchen_logic",
    title: "Miért fontos megmosás után vágni?",
    body: "Ha előbb vágod fel, az esetleges szennyeződések a vágott felületen maradnak. Egészben mosva, aztán vágva az összes nyersanyag tisztán kerül a tányérra.",
  },
  "3-R-klasszikus:Mérd ki a cottage cheese-t egy tálba.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a 3-R sorrendet?",
    body: "Gondolj rá úgy: először a zöldségek (mosás → vágás), aztán a cottage, végül összerakás. Zöldség-előkészítés → fehérjealap → kombináció.",
  },
  "3-R-klasszikus:Sózd, borsozd, majd keverd át a cottage cheese-t snidlinggel vagy újhagymával, ha használsz.": {
    category: "kitchen_logic",
    title: "Miért kell átkevert, fűszerezett cottage alap?",
    body: "A cottage cheese fűszerezve, majd átforgatva egyenletesen veszi fel a sót és zöldfűszert. Ha csak a tetejére szórsz, minden falat más ízű lesz.",
  },
  "3-R-klasszikus:Állítsd össze a cottage cheese-t és a felvágott zöldségeket egy tányéron vagy tálban.": {
    category: "kitchen_logic",
    title: "Miért előbb a cottage-ot ízesíted, aztán rakod össze?",
    body: "A cottage cheese-t érdemes külön ízesíteni, mert így egyenletesebb lesz az alap. A zöldségek utána frissebbek maradnak, és jobb lesz a kontraszt.",
  },
  "3-R-klasszikus:Tedd mellé a puffasztott rizst vagy abonettet.": {
    category: "fitness_logic",
    title: "Miért külön a puffasztott rizs?",
    body: "A puffasztott rizs mellé tálalva végig ropogós marad. Ha korán összekeverik a cottage-zöldség alappal, gyorsan megpuhul és elveszti a textúráját.",
  },

  // ─── 6-R-alap ─────────────────────────────────────────────────────────────
  // quizSteps: túró kimér → fehérjepor → fahéj → folyadék → krémes állag → pirítós+tálal

  "6-R-alap:Add hozzá a fehérjeport.": {
    category: "fitness_logic",
    title: "Miért kerül fehérjepor a túróba?",
    body: "A túró már önmagában jó fehérjeforrás, de a whey hozzáadásával nemcsak a fehérjetartalom nő, hanem a kész krém könnyebb, krémesebb állagú lesz, mint tiszta túróból.",
  },
  "6-R-alap:Szórd meg fahéjjal.": {
    category: "kitchen_logic",
    title: "Miért a keverés előtt jön a fahéj?",
    body: "Ha a fahéjt a keverés előtt szórod rá, egyenletesen beledolgozódik a krémbe. Utólag, felülről szórva csak a tetején marad, nem hatja át az egész állagot.",
  },
  "6-R-alap:Adj hozzá kevés vizet vagy joghurtot a krémesítéshez.": {
    category: "common_mistake",
    title: "Mi a leggyakoribb hiba itt?",
    body: "Sokan egyszerre töltenek hozzá túl sok folyadékot. Mindig csak 1–2 evőkanálanként adj hozzá, keverd el teljesen, és csak aztán döntsd el, kell-e még. Így nem lesz folyós a végeredmény.",
  },
  "6-R-alap:Keverd krémes állagúra a túrós keveréket.": {
    category: "kitchen_logic",
    title: "Mit jelent pontosan a krémes állag?",
    body: "Az ideális túrókrém kenhető, de nem folyós; kanállal emelhető, de nem morzsálódó. Ha a kanál nyomán megmarad a mélyedés, tökéletes az állag.",
  },
  "6-R-alap:Készítsd elő mellé a teljes kiőrlésű pirítóst vagy abonettet, majd tálald.": {
    category: "fitness_logic",
    title: "Miért teljes kiőrlésű a pirítós?",
    body: "A teljes kiőrlésű kenyér általában laktatóbb, és kedvezőbb választás lehet, mint a sima fehér kenyér. A fehérjedús túrókrémmel együtt stabilabb, tartósabb reggelit ad.",
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
