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
  slot?: string;
};

export function getInstructionQuizSteps(instruction: CookingInstruction): string[] {
  if (instruction.quizSteps && instruction.quizSteps.length > 0) {
    return instruction.quizSteps;
  }

  return instruction.steps;
}

export type Top25QuizMealsParams = {
  minSteps?: number;
  slotFilter?: Top25QuizSlotFilter;
};

export function getTop25QuizMealsWithSteps(
  arg?: number | Top25QuizMealsParams
): Top25QuizMealSteps[] {
  const minSteps = typeof arg === "number" ? arg : arg?.minSteps ?? 4;
  const slotFilter: Top25QuizSlotFilter =
    typeof arg === "object" && arg !== null ? arg.slotFilter ?? "Mind" : "Mind";

  const result: Top25QuizMealSteps[] = [];

  for (const meal of MEALS) {
    if (!isTop25Meal(meal.id)) {
      continue;
    }

    if (slotFilter !== "Mind" && meal.slot !== slotFilter) {
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
        slot: meal.slot,
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

export type Top25NextStepParams = {
  slotFilter?: Top25QuizSlotFilter;
  difficulty?: Top25QuizDifficulty;
};

export function buildTop25NextStepQuestion(
  params?: Top25NextStepParams
): Top25NextStepQuestion | null {
  const slotFilter = params?.slotFilter ?? "Mind";
  const difficulty = params?.difficulty ?? "normal";

  const pool = getTop25QuizMealsWithSteps({ minSteps: 3, slotFilter });
  if (pool.length === 0) {
    return null;
  }

  const meal = pool[Math.floor(Math.random() * pool.length)];
  const { steps } = meal;

  if (steps.length < 2) {
    return null;
  }

  const maxIndex = steps.length - 2;
  const currentStepIndex = Math.floor(Math.random() * (maxIndex + 1));
  const currentStep = steps[currentStepIndex];
  const correctNextStep = steps[currentStepIndex + 1];

  // Wrong options pool — slot-aware difficulty selection
  const fullPool = getTop25QuizMealsWithSteps({ minSteps: 3, slotFilter: "Mind" });

  let preferredPool: Top25QuizMealSteps[] = fullPool;
  if (difficulty === "easy" && meal.slot) {
    preferredPool = fullPool.filter((m) => m.slot !== meal.slot);
  } else if (difficulty === "hard" || difficulty === "master") {
    if (meal.slot) {
      preferredPool = fullPool.filter(
        (m) => m.slot === meal.slot && m.mealId !== meal.mealId
      );
    }
  }

  const collectSteps = (mealList: Top25QuizMealSteps[]): string[] => {
    const arr: string[] = [];
    const seen = new Set<string>([currentStep, correctNextStep]);
    for (const m of mealList) {
      for (const s of m.steps) {
        if (!seen.has(s)) {
          seen.add(s);
          arr.push(s);
        }
      }
    }
    return arr;
  };

  let candidates = collectSteps(preferredPool);
  if (candidates.length < 3) {
    candidates = collectSteps(fullPool);
  }
  if (candidates.length < 3) {
    return null;
  }

  const wrongOptions = shuffleArray(candidates).slice(0, 3);
  const shuffledOptions = shuffleArray([correctNextStep, ...wrongOptions]);

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

export type Top25IngredientParams = {
  slotFilter?: Top25QuizSlotFilter;
  difficulty?: Top25QuizDifficulty;
};

function targetCorrectCount(
  difficulty: Top25QuizDifficulty,
  availableCorrect: number
): number {
  switch (difficulty) {
    case "easy":
      return Math.min(1, availableCorrect);
    case "normal":
      return Math.min(Math.floor(Math.random() * 2) + 1, availableCorrect); // 1-2
    case "hard":
      return Math.min(Math.floor(Math.random() * 2) + 2, availableCorrect); // 2-3
    case "master":
      return Math.min(3, availableCorrect);
    default:
      return Math.min(Math.floor(Math.random() * 3) + 1, availableCorrect);
  }
}

export function buildTop25IngredientQuestion(
  params?: Top25IngredientParams
): Top25IngredientQuizQuestion | null {
  const slotFilter = params?.slotFilter ?? "Mind";
  const difficulty = params?.difficulty ?? "normal";

  // meal slot lookup
  const mealSlotById = new Map<string, string>();
  for (const m of MEALS) {
    mealSlotById.set(m.id, m.slot);
  }

  // All Top25 plans (used for wrong-pool sourcing)
  const top25Plans = TOP_MEAL_INGREDIENT_PLANS.filter((plan) =>
    isTop25Meal(plan.mealVariantId)
  );

  if (top25Plans.length === 0) {
    return null;
  }

  // Plans filtered by slot (question source)
  const filteredPlans =
    slotFilter === "Mind"
      ? top25Plans
      : top25Plans.filter(
          (p) => mealSlotById.get(p.mealVariantId) === slotFilter
        );

  if (filteredPlans.length === 0) {
    return null;
  }

  const shuffledMeals = shuffleArray(filteredPlans);

  for (const selectedPlan of shuffledMeals) {
    const combinedIngredients: MealIngredientAmount[] = [
      ...selectedPlan.workout,
      ...selectedPlan.rest,
    ];

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

    if (correctIngredientsList.length < 1) {
      continue;
    }

    // Hard/master prefer meals with more correct ingredients
    if (difficulty === "master" && correctIngredientsList.length < 2) {
      continue;
    }

    const numCorrect = targetCorrectCount(difficulty, correctIngredientsList.length);
    if (numCorrect < 1) {
      continue;
    }

    const selectedCorrectIngredients = shuffleArray(correctIngredientsList).slice(
      0,
      numCorrect
    );
    const correctNormalized = new Set(
      selectedCorrectIngredients.map(normalizeIngredientName)
    );

    const selectedSlot = mealSlotById.get(selectedPlan.mealVariantId);

    const buildWrongPool = (planList: typeof top25Plans): string[] => {
      const wrongSet = new Set<string>();
      for (const otherPlan of planList) {
        if (otherPlan.mealVariantId === selectedPlan.mealVariantId) {
          continue;
        }
        const others: MealIngredientAmount[] = [
          ...otherPlan.workout,
          ...otherPlan.rest,
        ];
        for (const ingredient of others) {
          if (
            ingredient.unit === "adag" ||
            isFilteredOutIngredient(ingredient.name)
          ) {
            continue;
          }
          const normalized = normalizeIngredientName(ingredient.name);
          if (!correctNormalized.has(normalized)) {
            wrongSet.add(ingredient.name);
          }
        }
      }
      return Array.from(wrongSet);
    };

    let wrongIngredientsList: string[];
    const numWrongNeeded = 4 - numCorrect;

    if ((difficulty === "hard" || difficulty === "master") && selectedSlot) {
      const sameSlotPlans = top25Plans.filter(
        (p) => mealSlotById.get(p.mealVariantId) === selectedSlot
      );
      wrongIngredientsList = buildWrongPool(sameSlotPlans);
      if (wrongIngredientsList.length < numWrongNeeded) {
        wrongIngredientsList = buildWrongPool(top25Plans);
      }
    } else if (difficulty === "easy" && selectedSlot) {
      const otherSlotPlans = top25Plans.filter(
        (p) => mealSlotById.get(p.mealVariantId) !== selectedSlot
      );
      wrongIngredientsList = buildWrongPool(otherSlotPlans);
      if (wrongIngredientsList.length < numWrongNeeded) {
        wrongIngredientsList = buildWrongPool(top25Plans);
      }
    } else {
      wrongIngredientsList = buildWrongPool(top25Plans);
    }

    if (wrongIngredientsList.length < numWrongNeeded) {
      continue;
    }

    const selectedWrongIngredients = shuffleArray(wrongIngredientsList).slice(
      0,
      numWrongNeeded
    );

    const allOptions = [
      ...selectedCorrectIngredients,
      ...selectedWrongIngredients,
    ];
    const shuffledOptions = shuffleArray(allOptions);

    const mealId = selectedPlan.mealVariantId;
    const mealData = MEALS.find((m) => m.id === mealId);
    const mealName =
      mealData?.name || selectedPlan.displayName || selectedPlan.mealVariantId;

    return {
      mealId,
      mealName,
      correctIngredients: selectedCorrectIngredients,
      options: shuffledOptions,
    };
  }

  return null;
}

// === Top25 quiz settings ===

export type Top25QuizSlotFilter =
  | "Mind"
  | "Reggeli"
  | "Tízórai"
  | "Ebéd"
  | "Uzsonna"
  | "Vacsora";

export type Top25QuizDifficulty = "easy" | "normal" | "hard" | "master";

export type Top25QuizMode = "practice" | "exam";

export const TOP25_QUIZ_SLOT_FILTERS = [
  "Mind",
  "Reggeli",
  "Tízórai",
  "Ebéd",
  "Uzsonna",
  "Vacsora",
] as const satisfies readonly Top25QuizSlotFilter[];

export const TOP25_QUIZ_DIFFICULTIES = [
  "easy",
  "normal",
  "hard",
  "master",
] as const satisfies readonly Top25QuizDifficulty[];

export const TOP25_QUIZ_MODES = [
  "practice",
  "exam",
] as const satisfies readonly Top25QuizMode[];

export const TOP25_DIFFICULTY_LABELS: Record<Top25QuizDifficulty, string> = {
  easy: "Könnyű",
  normal: "Normál",
  hard: "Nehéz",
  master: "Mester",
};

export const TOP25_MODE_LABELS: Record<Top25QuizMode, string> = {
  practice: "Gyakorlás",
  exam: "Vizsga",
};

export function sanitizeSlotFilter(value: unknown): Top25QuizSlotFilter {
  if (
    typeof value === "string" &&
    (TOP25_QUIZ_SLOT_FILTERS as readonly string[]).includes(value)
  ) {
    return value as Top25QuizSlotFilter;
  }
  return "Mind";
}

export function sanitizeDifficulty(value: unknown): Top25QuizDifficulty {
  if (
    typeof value === "string" &&
    (TOP25_QUIZ_DIFFICULTIES as readonly string[]).includes(value)
  ) {
    return value as Top25QuizDifficulty;
  }
  return "normal";
}

export function sanitizeMode(value: unknown): Top25QuizMode {
  if (
    typeof value === "string" &&
    (TOP25_QUIZ_MODES as readonly string[]).includes(value)
  ) {
    return value as Top25QuizMode;
  }
  return "practice";
}

export function getOrderStepCount(
  difficulty: Top25QuizDifficulty,
  maxAvailable: number
): number {
  let target: number;
  switch (difficulty) {
    case "easy":
      target = 4;
      break;
    case "normal":
      target = 5 + Math.floor(Math.random() * 2); // 5–6
      break;
    case "hard":
      target = 6 + Math.floor(Math.random() * 2); // 6–7
      break;
    case "master":
      target = maxAvailable;
      break;
    default:
      target = 4;
  }
  return Math.max(4, Math.min(target, maxAvailable));
}

