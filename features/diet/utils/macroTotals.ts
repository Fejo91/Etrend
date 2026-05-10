import type { MacroTotals, Meal } from "../../../types/nutrition";

export const EMPTY_TOTALS: MacroTotals = {
  kcal: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
};

export function addMacroTotals(a: MacroTotals, b: MacroTotals): MacroTotals {
  return {
    kcal: a.kcal + b.kcal,
    protein: a.protein + b.protein,
    carbs: a.carbs + b.carbs,
    fat: a.fat + b.fat,
  };
}

export function macrosFromMeal(meal: Meal, isWorkoutDay: boolean): MacroTotals {
  const source = isWorkoutDay ? meal.workout : meal.rest;

  return {
    kcal: source.kcal,
    protein: source.protein,
    carbs: source.carbs,
    fat: source.fat,
  };
}