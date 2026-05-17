import { isTop25Meal } from "../../../constants/topMeals";
import MEALS from "../../../types/meals";
import COOKING_INSTRUCTIONS, {
    type CookingInstruction,
} from "../../../types/preparations";

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
