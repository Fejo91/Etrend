export type IngredientUnit =
  | "g"
  | "ml"
  | "db"
  | "szelet"
  | "tk"
  | "ek"
  | "adag";

export type MealIngredientAmount = {
  name: string;
  amount: number;
  unit: IngredientUnit;
  kitchenAmount?: string;
  note?: string;
};

export type MealIngredientPlan = {
  mealVariantId: string;
  displayName?: string;
  slot?: "Reggeli" | "Tízórai" | "Ebéd" | "Uzsonna" | "Vacsora";
  rank?: number;
  workout: MealIngredientAmount[];
  rest: MealIngredientAmount[];
  audit?: {
    status: "PASS" | "NEEDS_REVIEW";
    notes: string[];
    optionalSuggestion?: string;
  };
};

export const TOP_MEAL_INGREDIENT_PLANS: MealIngredientPlan[] = [
  {
    mealVariantId: "5-R-gyors-alap",
    displayName: "Gyors alapverzió",
    slot: "Reggeli",
    rank: 1,
    workout: [
      {
        name: "Görög joghurt (2%)",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb doboz vagy kb. 8–10 evőkanál",
        note: "Alap fehérjeforrás, krémes joghurtos alap.",
      },
      {
        name: "Zabpehely",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 3 evőkanál",
        note: "Edzésnapon több lassabb szénhidrátot ad.",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb marék vagy kb. fél bögre",
        note: "Áfonya, málna vagy eper.",
      },
      {
        name: "Méz",
        amount: 10,
        unit: "g",
        kitchenAmount: "kb. 1,5–2 teáskanál",
        note: "Vékonyan a tetejére csorgatva.",
      },
    ],
    rest: [
      {
        name: "Görög joghurt (2%)",
        amount: 180,
        unit: "g",
        kitchenAmount: "kb. 3/4–1 kisebb doboz vagy kb. 7–9 evőkanál",
        note: "Fehérjebázis, pihenőnapon mérsékelten csökkentve.",
      },
      {
        name: "Zabpehely",
        amount: 20,
        unit: "g",
        kitchenAmount: "kb. 2 evőkanál",
        note: "Csökkentett pihenőnapi szénhidrát.",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 60,
        unit: "g",
        kitchenAmount:
          "kb. 1 kisebb marék alatti mennyiség vagy kb. 1/3–1/2 bögre",
        note: "Kisebb pihenőnapi gyümölcsadag.",
      },
      {
        name: "Méz",
        amount: 5,
        unit: "g",
        kitchenAmount: "kb. 1 teáskanál",
        note: "Csökkentett pihenőnapi édesítés.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több zabot, gyümölcsöt és mézet tartalmaz, ezért több hasznos szénhidrátot ad.",
        "A pihenőnapi csökkentés főként a szénhidrátforrásokon és az édesítésen történik.",
        "A fehérje mérsékelten csökken, de nem esik vissza problémásan.",
        "A megadott makrók és a hozzávalóarányok összhangban vannak.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon fontosabb a teltségérzet és a fehérje, a görög joghurt opcionálisan 200 g-ra emelhető, miközben a zab és a méz marad csökkentve.",
    },
  },
  {
    mealVariantId: "3-R-klasszikus",
    displayName: "Cottage cheese – klasszikus",
    slot: "Reggeli",
    rank: 2,
    workout: [
      {
        name: "Zsírszegény cottage cheese",
        amount: 220,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb adag / kb. 10–12 evőkanál",
        note: "Fő fehérjeforrás, ez adja az étel alapját.",
      },
      {
        name: "Paradicsom",
        amount: 110,
        unit: "g",
        kitchenAmount: "kb. 1 közepes paradicsom",
        note: "Friss, lédús zöldség a cottage mellé.",
      },
      {
        name: "Uborka",
        amount: 90,
        unit: "g",
        kitchenAmount: "kb. 1/3–1/2 kígyóuborka",
        note: "Ropogós, alacsony kalóriás zöldség.",
      },
      {
        name: "Puffasztott rizs vagy abonett",
        amount: 3,
        unit: "szelet",
        kitchenAmount: "3 szelet",
        note: "Edzésnapon több ropogós szénhidrátforrás.",
      },
      {
        name: "Snidling vagy újhagyma",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás / 1 vékony újhagyma zöldje",
        note: "Ízesítő, elhagyható, de sokat javít az ízen.",
      },
      {
        name: "Só és bors",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Alap fűszerezés.",
      },
    ],
    rest: [
      {
        name: "Zsírszegény cottage cheese",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 normál adag / kb. 9–10 evőkanál",
        note: "Pihenőnapon is megmarad erős fehérjebázisnak.",
      },
      {
        name: "Paradicsom",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-közepes paradicsom",
        note: "Friss zöldség, minimális kalóriával.",
      },
      {
        name: "Uborka",
        amount: 110,
        unit: "g",
        kitchenAmount: "kb. 1/2 kígyóuborka alatt",
        note: "Pihenőnapon is bőven maradhat zöldségből.",
      },
      {
        name: "Puffasztott rizs vagy abonett",
        amount: 2,
        unit: "szelet",
        kitchenAmount: "2 szelet",
        note: "Csökkentett pihenőnapi ropogós szénhidrátforrás.",
      },
      {
        name: "Snidling vagy újhagyma",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás / kevés újhagyma",
        note: "Ízesítő, elhagyható.",
      },
      {
        name: "Só és bors",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Alap fűszerezés.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több ropogós szénhidrátforrást tartalmaz a 3 szelet puffasztott rizs vagy abonett miatt.",
        "A pihenőnapi adag főleg a szeletszám csökkentésével vesz vissza a szénhidrátból.",
        "A cottage cheese mennyisége pihenőnapon is elég magas marad, ezért a fehérjebázis nem esik vissza jelentősen.",
        "A zöldségmennyiség pihenőnapon is bőséges, ami jó teltségérzetet ad alacsony kalória mellett.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyon éhes maradsz, a zöldség mennyisége szabadon emelhető, miközben a puffasztott rizs vagy abonett maradhat 2 szelet.",
    },
  },
];
