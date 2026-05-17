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
