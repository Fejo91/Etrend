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
    workout: [
      {
        name: "Görög joghurt (2%)",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb doboz vagy kb. 8-10 evőkanál",
        note: "Alap fehérjeforrás",
      },
      {
        name: "Zabpehely",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 3 evőkanál",
        note: "Lassú szénhidrát edzésnapra",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb marék vagy kb. fél bögre",
        note: "Áfonya, málna vagy eper",
      },
      {
        name: "Méz",
        amount: 10,
        unit: "g",
        kitchenAmount: "kb. 1,5-2 teáskanál",
        note: "Tetejére csorgatva",
      },
    ],
    rest: [
      {
        name: "Görög joghurt (2%)",
        amount: 180,
        unit: "g",
        kitchenAmount: "kb. 3/4-1 kisebb doboz vagy kb. 7-9 evőkanál",
        note: "Fehérjebázis mérsékelten csökkentve",
      },
      {
        name: "Zabpehely",
        amount: 20,
        unit: "g",
        kitchenAmount: "kb. 2 evőkanál",
        note: "Csökkentett pihenőnapi szénhidrát",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 60,
        unit: "g",
        kitchenAmount:
          "kb. 1 kisebb marék alatti mennyiség vagy kb. 1/3-1/2 bögre",
        note: "Kisebb pihenőnapi adag",
      },
      {
        name: "Méz",
        amount: 5,
        unit: "g",
        kitchenAmount: "kb. 1 teáskanál",
        note: "Csökkentett pihenőnapi édesítés",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag több zabot, gyümölcsöt és mézet tartalmaz, ezért több hasznos szénhidrátot ad.",
        "A pihenőnapi csökkentés főként a szénhidrátforrásokon történik.",
        "A fehérje csökkenése mérsékelt, nem kritikus.",
        "A megadott makrók és a hozzávalók összhangban vannak.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon fontosabb a teltségérzet és a fehérje, a görög joghurt opcionálisan 200 g-ra emelhető, miközben a zab és méz marad csökkentve.",
    },
  },
];
