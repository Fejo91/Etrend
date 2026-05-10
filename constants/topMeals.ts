export const TOP_25_MEAL_IDS = new Set<string>([
  "5-R-gyors-alap",
  "3-R-klasszikus",
  "1-R-overnight",
  "1-R-mikros",
  "6-R-alap",
  "1-T-klasszikus",
  "5-T-kremes-dio",
  "4-T-klasszikus",
  "6-T-superfood",
  "3-T-bento",
  "1-E-alap",
  "2-E-suto",
  "3-E-suto-egyben",
  "5-E-alap",
  "6-E-klasszikus",
  "2-U-dietas",
  "3-U-alap",
  "1-U-feherjes",
  "2-U-zabos",
  "5-U-fitnesz-alap",
  "5-V-proteines",
  "5-V-kapros-uborkas",
  "7-V-salatas",
  "1-V-stirfry",
  "3-V-kremes",
]);

export const isTop25Meal = (mealId: string): boolean =>
  TOP_25_MEAL_IDS.has(mealId);

export type Top25Pool = "all" | "top25";

export const matchesTop25Pool = (mealId: string, pool: Top25Pool): boolean =>
  pool === "all" || isTop25Meal(mealId);

export const filterMealsByTop25Pool = <T extends { id: string }>(
  meals: T[],
  pool: Top25Pool
): T[] => meals.filter((meal) => matchesTop25Pool(meal.id, pool));

export const TOP_25_SHOPPING_MEAL_IDS = new Set<string>([
  "overnight-oats",
  "cottage-cheese",
  "microwave-oats",
  "greek-yogurt-bowl",
  "curd-cream-base",
  "classic-cottage-snack",
  "greek-yogurt-walnuts",
  "turkey-ham-rolls",
  "rice-cake-peanut-butter-superfood",
  "turkey-bento-box",
  "chicken-brown-rice",
  "turkey-sweet-potato-green-beans",
  "baked-salmon-sweet-potato-vegetables",
  "basic-tuna-salad",
  "chicken-basmati-peas-carrots",
  "diet-berry-protein-shake",
  "abonett-cottage-cheese-vegetables",
  "protein-cottage-cheese-fruit-bowl",
  "oat-protein-shake-mini-gainer",
  "fitness-basic-eggs-vegetables",
  "cottage-cheese-cream-protein-vanilla",
  "cottage-cheese-cream-dill-cucumber",
  "cottage-cheese-ham-salad",
  "wok-chicken-strips-vegetables",
  "creamy-scrambled-eggs-avocado",
]);

export const isTop25ShoppingMeal = (mealId: string): boolean =>
  TOP_25_SHOPPING_MEAL_IDS.has(mealId);
