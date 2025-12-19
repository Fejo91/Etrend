// types/nutrition.ts

export type SlotType = "Reggeli" | "Tízorai" | "Ebéd" | "Uzsonna" | "Vacsora";

export type CookingProfile = "Gyors" | "Sütős" | "Wokos";
export type CookingStyleTag = "quick" | "oven" | "wok";

export type Macros = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  portion: string;
};

export type Meal = {
  id: string;
  mealId: string;
  name: string;
  timeOfDay: string;
  slot: SlotType;
  day: number;
  workout: Macros;
  rest: Macros;
  // ÚJ: milyen elkészítési stílushoz tartozik ez a variáció
  styles?: CookingStyleTag[];
};

export type MacroTotals = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type QuizRecipe = {
  id: string;
  name: string;
  steps: string[];
};
