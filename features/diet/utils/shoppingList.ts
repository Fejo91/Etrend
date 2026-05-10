import type { IngredientItem, Meal } from "../../../types/nutrition";

type ShoppingListItem = {
  name: string;
  amounts: Set<string>;
};

type ShoppingListMealGroup = {
  mealId: string;
  mealName: string;
  slot: Meal["slot"];
  items: ShoppingListItem[];
};

function parseIngredientsFromPortion(portion: string): IngredientItem[] {
  const cleaned = portion
    .replace(/Edzésnap:\s*/gi, "")
    .replace(/Pihenőnap:\s*/gi, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\b(opcionális|opcionalis)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned
    .split(/\s*\+\s*|\s*,\s*/)
    .map((chunk) => chunk.trim().replace(/[.;:]$/, ""))
    .filter((chunk) => chunk.length >= 3)
    .map((chunk) => ({ name: chunk }));
}

function normalizeIngredientName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

function buildMergedIngredients(source: IngredientItem[]): ShoppingListItem[] {
  const merged = new Map<string, { name: string; amounts: Set<string> }>();

  source.forEach((item) => {
    const key = normalizeIngredientName(item.name);
    if (!key) return;

    const existing = merged.get(key);
    if (!existing) {
      merged.set(key, {
        name: item.name,
        amounts: new Set(item.amount ? [item.amount] : []),
      });
      return;
    }

    if (item.amount) existing.amounts.add(item.amount);
  });

  return Array.from(merged.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "hu")
  );
}

function getMealIngredients(meal: Meal, isWorkoutDay: boolean): IngredientItem[] {
  const structured = isWorkoutDay ? meal.workoutIngredients : meal.restIngredients;
  const fallback = parseIngredientsFromPortion(
    isWorkoutDay ? meal.workout.portion : meal.rest.portion
  );

  return structured && structured.length > 0 ? structured : fallback;
}

export function buildShoppingList(
  selectedMealsList: Array<Meal | null>,
  isWorkoutDay: boolean
): ShoppingListItem[] {
  const combined = selectedMealsList.flatMap((meal) =>
    meal ? getMealIngredients(meal, isWorkoutDay) : []
  );

  return buildMergedIngredients(combined);
}

export function buildShoppingListByMeal(
  selectedMealsList: Array<Meal | null>,
  isWorkoutDay: boolean
): ShoppingListMealGroup[] {
  return selectedMealsList
    .filter((meal): meal is Meal => meal !== null)
    .map((meal) => {
      const items = buildMergedIngredients(getMealIngredients(meal, isWorkoutDay));

      return {
        mealId: meal.id,
        mealName: meal.name,
        slot: meal.slot,
        items,
      };
    });
}