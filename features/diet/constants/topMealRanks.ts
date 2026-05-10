import type { Meal } from "../../../types/nutrition";

export const TOP_BREAKFAST_RANKS: Record<string, number> = {
  "5-R-gyors-alap": 1,
  "3-R-klasszikus": 2,
  "1-R-overnight": 3,
  "1-R-mikros": 4,
  "6-R-alap": 5,
};

export const TOP_TIZORAI_RANKS: Record<string, number> = {
  "1-T-klasszikus": 1,
  "5-T-kremes-dio": 2,
  "4-T-klasszikus": 3,
  "6-T-superfood": 4,
  "3-T-bento": 5,
};

export const TOP_LUNCH_RANKS: Record<string, number> = {
  "1-E-alap": 1,
  "2-E-suto": 2,
  "3-E-suto-egyben": 3,
  "5-E-alap": 4,
  "6-E-klasszikus": 5,
};

export const TOP_UZSONNA_RANKS: Record<string, number> = {
  "2-U-dietas": 1,
  "3-U-alap": 2,
  "1-U-feherjes": 3,
  "2-U-zabos": 4,
  "5-U-fitnesz-alap": 5,
};

export const TOP_DINNER_RANKS: Record<string, number> = {
  "5-V-proteines": 1,
  "5-V-kapros-uborkas": 2,
  "7-V-salatas": 3,
  "1-V-stirfry": 4,
  "3-V-kremes": 5,
};

export function getTopMealBadge(meal: Meal | null): string | null {
  if (!meal) return null;

  if (meal.slot === "Reggeli" && TOP_BREAKFAST_RANKS[meal.id]) {
    return `🥇 Top reggeli #${TOP_BREAKFAST_RANKS[meal.id]}`;
  }

  if (meal.slot === "Tízorai" && TOP_TIZORAI_RANKS[meal.id]) {
    return `🥇 Top tízórai #${TOP_TIZORAI_RANKS[meal.id]}`;
  }

  if (meal.slot === "Ebéd" && TOP_LUNCH_RANKS[meal.id]) {
    return `🥇 Top ebéd #${TOP_LUNCH_RANKS[meal.id]}`;
  }

  if (meal.slot === "Uzsonna" && TOP_UZSONNA_RANKS[meal.id]) {
    return `🥇 Top uzsonna #${TOP_UZSONNA_RANKS[meal.id]}`;
  }

  if (meal.slot === "Vacsora" && TOP_DINNER_RANKS[meal.id]) {
    return `🥇 Top vacsora #${TOP_DINNER_RANKS[meal.id]}`;
  }

  return null;
}