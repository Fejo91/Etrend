import { isTop25Meal } from "../../../constants/topMeals";
import MEALS from "../../../types/meals";
import COOKING_INSTRUCTIONS, {
    type CookingInstruction,
} from "../../../types/preparations";
import {
    TOP_MEAL_INGREDIENT_PLANS,
    type MealIngredientAmount,
} from "../data/topMealIngredients";

export type Top25QuizMealSteps = {
  mealId: string;
  mealName: string;
  steps: string[];
};

export function getInstructionQuizSteps(instruction: CookingInstruction): string[] {
  if (instruction.quizSteps && instruction.quizSteps.length > 0) {
    return instruction.quizSteps;
  }

  return instruction.steps;
}

export function getTop25QuizMealsWithSteps(minSteps = 4): Top25QuizMealSteps[] {
  const result: Top25QuizMealSteps[] = [];

  for (const meal of MEALS) {
    if (!isTop25Meal(meal.id)) {
      continue;
    }

    const instruction = COOKING_INSTRUCTIONS.find((ci) => ci.mealId === meal.id);
    if (!instruction) {
      continue;
    }

    const rawSteps = getInstructionQuizSteps(instruction);
    const steps = rawSteps.filter((s) => s.trim().length > 0);

    if (steps.length >= minSteps) {
      result.push({
        mealId: meal.id,
        mealName: meal.name,
        steps,
      });
    }
  }

  return result;
}

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

export type Top25NextStepQuestion = {
  mealId: string;
  mealName: string;
  currentStep: string;
  correctNextStep: string;
  options: string[];
};

export function buildTop25NextStepQuestion(): Top25NextStepQuestion | null {
  const pool = getTop25QuizMealsWithSteps(3);
  if (pool.length === 0) {
    return null;
  }

  // Random étel
  const meal = pool[Math.floor(Math.random() * pool.length)];
  const { steps } = meal;

  // Random currentStepIndex (de ne az utolsó)
  if (steps.length < 2) {
    return null;
  }

  const maxIndex = steps.length - 2;
  const currentStepIndex = Math.floor(Math.random() * (maxIndex + 1));
  const currentStep = steps[currentStepIndex];
  const correctNextStep = steps[currentStepIndex + 1];

  // Összegyűjtjük az összes Top25 lépést az opciók készítéséhez
  const allTop25Steps: string[] = [];
  for (const m of pool) {
    for (const step of m.steps) {
      if (
        step !== currentStep &&
        step !== correctNextStep &&
        !allTop25Steps.includes(step)
      ) {
        allTop25Steps.push(step);
      }
    }
  }

  // Ha nincs elég rossz opció, ne készítsünk kérdést
  if (allTop25Steps.length < 3) {
    return null;
  }

  // 3 random rossz válasz
  const wrongOptions: string[] = [];
  const shuffledAll = shuffleArray(allTop25Steps);
  for (let i = 0; i < 3 && i < shuffledAll.length; i++) {
    wrongOptions.push(shuffledAll[i]);
  }

  // 4 opció: 1 helyes + 3 rossz, majd shuffle
  const allOptions = [correctNextStep, ...wrongOptions];
  const shuffledOptions = shuffleArray(allOptions);

  return {
    mealId: meal.mealId,
    mealName: meal.mealName,
    currentStep,
    correctNextStep,
    options: shuffledOptions,
  };
}

export type Top25IngredientQuizQuestion = {
  mealId: string;
  mealName: string;
  correctIngredients: string[];
  options: string[];
};

function isFilteredOutIngredient(name: string): boolean {
  const normalized = name.toLowerCase().trim();

  // Exclude generic/seasoning ingredients
  const excludePatterns = [
    "só",
    "bors",
    "citromlé",
    "ízlés szerint",
    "fahéj",
    "fűszer",
    "öntet",
    "fokhagymapor",
    "oregánó",
    "kapor",
  ];

  return excludePatterns.some((pattern) => normalized.includes(pattern));
}

function normalizeIngredientName(name: string): string {
  return name.toLowerCase().trim();
}

export function buildTop25IngredientQuestion(): Top25IngredientQuizQuestion | null {
  // Gather all Top25 meals with ingredients
  const top25MealsWithIngredients = TOP_MEAL_INGREDIENT_PLANS.filter((plan) => {
    const mealId = plan.mealVariantId.split("-").slice(1).join("-");
    return isTop25Meal(mealId);
  });

  if (top25MealsWithIngredients.length === 0) {
    return null;
  }

  // Try to build a valid question
  const shuffledMeals = shuffleArray(top25MealsWithIngredients);

  for (const selectedPlan of shuffledMeals) {
    // Get correct ingredients for this meal
    const combinedIngredients: MealIngredientAmount[] = [
      ...selectedPlan.workout,
      ...selectedPlan.rest,
    ];

    // Filter and deduplicate ingredients
    const seenNormalized = new Set<string>();
    const correctIngredientsList: string[] = [];

    for (const ingredient of combinedIngredients) {
      if (ingredient.unit === "adag" || isFilteredOutIngredient(ingredient.name)) {
        continue;
      }

      const normalized = normalizeIngredientName(ingredient.name);
      if (!seenNormalized.has(normalized)) {
        seenNormalized.add(normalized);
        correctIngredientsList.push(ingredient.name);
      }
    }

    // Skip if not enough correct ingredients
    if (correctIngredientsList.length < 1) {
      continue;
    }

    // Randomly choose 1-3 correct ingredients
    const numCorrect = Math.min(
      Math.floor(Math.random() * 3) + 1,
      correctIngredientsList.length
    );
    const shuffledCorrect = shuffleArray(correctIngredientsList);
    const selectedCorrectIngredients = shuffledCorrect.slice(0, numCorrect);

    // Gather wrong ingredients from other Top25 meals
    const wrongIngredientsSet = new Set<string>();
    const correctNormalized = new Set(
      selectedCorrectIngredients.map(normalizeIngredientName)
    );

    for (const otherPlan of top25MealsWithIngredients) {
      if (otherPlan.mealVariantId === selectedPlan.mealVariantId) {
        continue;
      }

      const otherIngredients: MealIngredientAmount[] = [
        ...otherPlan.workout,
        ...otherPlan.rest,
      ];

      for (const ingredient of otherIngredients) {
        if (
          ingredient.unit === "adag" ||
          isFilteredOutIngredient(ingredient.name)
        ) {
          continue;
        }

        const normalized = normalizeIngredientName(ingredient.name);
        if (!correctNormalized.has(normalized)) {
          wrongIngredientsSet.add(ingredient.name);
        }
      }
    }

    // We need exactly 4 options total (1-3 correct + rest wrong)
    const numWrongNeeded = 4 - selectedCorrectIngredients.length;
    const wrongIngredientsList = Array.from(wrongIngredientsSet);

    if (wrongIngredientsList.length < numWrongNeeded) {
      continue; // Not enough wrong options
    }

    const shuffledWrong = shuffleArray(wrongIngredientsList);
    const selectedWrongIngredients = shuffledWrong.slice(0, numWrongNeeded);

    // Combine and shuffle all options
    const allOptions = [
      ...selectedCorrectIngredients,
      ...selectedWrongIngredients,
    ];
    const shuffledOptions = shuffleArray(allOptions);

    // Get meal info
    const mealId = selectedPlan.mealVariantId.split("-").slice(1).join("-");
    const mealData = MEALS.find((m) => m.id === mealId);
    const mealName = mealData?.name || selectedPlan.displayName || selectedPlan.mealVariantId;

    return {
      mealId,
      mealName,
      correctIngredients: selectedCorrectIngredients,
      options: shuffledOptions,
    };
  }

  return null;
}
