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

export const TOP25_SLOT_ORDER: Exclude<ShoppingSlotFilter, "Mind">[] = [
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

type PlanContribution = {
  plan: MealIngredientPlan;
  count: number;
  sourceLabel: string;
};

function buildAggregatedShoppingListFromContributions(
  contributions: PlanContribution[],
  dayMode: ShoppingDayMode,
): {
  measuredItems: AggregatedShoppingItem[];
  portionItems: AggregatedShoppingItem[];
} {
  const allBuckets = new Map<string, AggregationBucket>();

  contributions.forEach(({ plan, count, sourceLabel }) => {
    const ingredients = getIngredientsByDayMode(plan, dayMode);

    ingredients.forEach((ingredient) => {
      const key = normalizeKey(ingredient.name, ingredient.unit);
      const scaledAmount = Number((ingredient.amount * count).toFixed(3));
      const existing = allBuckets.get(key);

      if (!existing) {
        allBuckets.set(key, {
          key,
          name: ingredient.name,
          unit: ingredient.unit,
          totalAmount: scaledAmount,
          sourceMeals: new Set([sourceLabel]),
          kitchenAmounts: new Set(ingredient.kitchenAmount ? [ingredient.kitchenAmount] : []),
          notes: new Set(ingredient.note ? [ingredient.note] : []),
        });
        return;
      }

      existing.totalAmount = amountWithSafePrecision(existing.totalAmount, scaledAmount);
      existing.sourceMeals.add(sourceLabel);

      if (ingredient.kitchenAmount) {
        existing.kitchenAmounts.add(ingredient.kitchenAmount);
      }

      if (ingredient.note) {
        existing.notes.add(ingredient.note);
      }
    });
  });

  const sortedItems = toSortedItems(allBuckets);

  return {
    measuredItems: sortedItems.filter((item) => item.unit !== "adag"),
    portionItems: sortedItems.filter((item) => item.unit === "adag"),
  };
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

  const contributions: PlanContribution[] = selectedPlans.map((plan) => ({
    plan,
    count: 1,
    sourceLabel: getMealLabel(plan),
  }));

  const { measuredItems, portionItems } = buildAggregatedShoppingListFromContributions(
    contributions,
    dayMode,
  );

  return {
    measuredItems,
    portionItems,
    totalMeals: selectedPlans.length,
  };
}

export function buildCustomTop25ShoppingList(params: {
  selectedCounts: Record<string, number>;
  dayMode: ShoppingDayMode;
}): {
  measuredItems: AggregatedShoppingItem[];
  portionItems: AggregatedShoppingItem[];
  totalMeals: number;
} {
  const { selectedCounts, dayMode } = params;

  const contributions: PlanContribution[] = TOP_MEAL_INGREDIENT_PLANS
    .filter((plan) => (selectedCounts[plan.mealVariantId] ?? 0) > 0)
    .map((plan) => {
      const count = selectedCounts[plan.mealVariantId] ?? 1;
      const baseLabel = getMealLabel(plan);
      const sourceLabel = count > 1 ? `${count}\u00d7 ${baseLabel}` : baseLabel;

      return { plan, count, sourceLabel };
    });

  const { measuredItems, portionItems } = buildAggregatedShoppingListFromContributions(
    contributions,
    dayMode,
  );

  const totalMeals = Object.values(selectedCounts).reduce(
    (sum, c) => sum + Math.max(0, c),
    0,
  );

  return {
    measuredItems,
    portionItems,
    totalMeals,
  };
}

export const TOP25_SLOT_FILTERS: ShoppingSlotFilter[] = ["Mind", ...TOP25_SLOT_ORDER];
