import {
    TOP_MEAL_INGREDIENT_PLANS,
    type MealIngredientAmount,
    type MealIngredientPlan,
} from "../data/topMealIngredients";

export type ShoppingDayMode = "workout" | "rest";

export type ShoppingSlotFilter =
  | "Mind"
  | "Reggeli"
  | "Tízórai"
  | "Ebéd"
  | "Uzsonna"
  | "Vacsora";

export type AggregatedShoppingItem = {
  key: string;
  name: string;
  totalAmount: number;
  unit: string;
  mealCount: number;
  sourceMeals: string[];
  kitchenAmounts: string[];
  notes: string[];
};

type AggregationBucket = {
  key: string;
  name: string;
  unit: string;
  totalAmount: number;
  sourceMeals: Set<string>;
  kitchenAmounts: Set<string>;
  notes: Set<string>;
};

const SLOT_ORDER: Exclude<ShoppingSlotFilter, "Mind">[] = [
  "Reggeli",
  "Tízórai",
  "Ebéd",
  "Uzsonna",
  "Vacsora",
];

function getFilteredPlans(slotFilter: ShoppingSlotFilter): MealIngredientPlan[] {
  if (slotFilter === "Mind") {
    return TOP_MEAL_INGREDIENT_PLANS;
  }

  return TOP_MEAL_INGREDIENT_PLANS.filter((plan) => plan.slot === slotFilter);
}

function getIngredientsByDayMode(
  plan: MealIngredientPlan,
  dayMode: ShoppingDayMode
): MealIngredientAmount[] {
  return dayMode === "workout" ? plan.workout : plan.rest;
}

function getMealLabel(plan: MealIngredientPlan): string {
  return plan.displayName ?? plan.mealVariantId;
}

function normalizeKey(name: string, unit: string): string {
  return `${name.trim().toLocaleLowerCase("hu-HU")}::${unit
    .trim()
    .toLocaleLowerCase("hu-HU")}`;
}

function amountWithSafePrecision(current: number, next: number): number {
  return Number((current + next).toFixed(3));
}

function toSortedItems(buckets: Map<string, AggregationBucket>): AggregatedShoppingItem[] {
  return Array.from(buckets.values())
    .map((bucket) => ({
      key: bucket.key,
      name: bucket.name,
      totalAmount: bucket.totalAmount,
      unit: bucket.unit,
      mealCount: bucket.sourceMeals.size,
      sourceMeals: Array.from(bucket.sourceMeals),
      kitchenAmounts: Array.from(bucket.kitchenAmounts),
      notes: Array.from(bucket.notes),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "hu"));
}

export function buildTop25ShoppingList(params: {
  slotFilter: ShoppingSlotFilter;
  dayMode: ShoppingDayMode;
}): {
  measuredItems: AggregatedShoppingItem[];
  portionItems: AggregatedShoppingItem[];
  totalMeals: number;
} {
  const { slotFilter, dayMode } = params;
  const selectedPlans = getFilteredPlans(slotFilter);

  const allBuckets = new Map<string, AggregationBucket>();

  selectedPlans.forEach((plan) => {
    const mealLabel = getMealLabel(plan);
    const ingredients = getIngredientsByDayMode(plan, dayMode);

    ingredients.forEach((ingredient) => {
      const key = normalizeKey(ingredient.name, ingredient.unit);
      const existing = allBuckets.get(key);

      if (!existing) {
        allBuckets.set(key, {
          key,
          name: ingredient.name,
          unit: ingredient.unit,
          totalAmount: ingredient.amount,
          sourceMeals: new Set([mealLabel]),
          kitchenAmounts: new Set(ingredient.kitchenAmount ? [ingredient.kitchenAmount] : []),
          notes: new Set(ingredient.note ? [ingredient.note] : []),
        });
        return;
      }

      existing.totalAmount = amountWithSafePrecision(existing.totalAmount, ingredient.amount);
      existing.sourceMeals.add(mealLabel);

      if (ingredient.kitchenAmount) {
        existing.kitchenAmounts.add(ingredient.kitchenAmount);
      }

      if (ingredient.note) {
        existing.notes.add(ingredient.note);
      }
    });
  });

  const sortedItems = toSortedItems(allBuckets);
  const measuredItems = sortedItems.filter((item) => item.unit !== "adag");
  const portionItems = sortedItems.filter((item) => item.unit === "adag");

  return {
    measuredItems,
    portionItems,
    totalMeals: selectedPlans.length,
  };
}

export const TOP25_SLOT_FILTERS: ShoppingSlotFilter[] = ["Mind", ...SLOT_ORDER];