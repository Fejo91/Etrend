export type IngredientBaseUnit = "g" | "ml" | "db";

export type IngredientCatalogItem = {
  ingredientKey: string;
  displayName: string;
  fallbackEmoji: string;
  imageAsset?: any;
  averagePackagePriceHuf: number;
  averagePackageAmount: number;
  averagePackageUnit: IngredientBaseUnit;
  note?: string;
};

export type EstimateIngredientCostParams = {
  amount: number;
  amountUnit: IngredientBaseUnit;
  averagePackagePriceHuf: number;
  averagePackageAmount: number;
  averagePackageUnit: IngredientBaseUnit;
};

export function estimateIngredientCostHuf(
  params: EstimateIngredientCostParams
): number | null {
  const {
    amount,
    amountUnit,
    averagePackagePriceHuf,
    averagePackageAmount,
    averagePackageUnit,
  } = params;

  if (
    !Number.isFinite(amount) ||
    !Number.isFinite(averagePackagePriceHuf) ||
    !Number.isFinite(averagePackageAmount) ||
    amount <= 0 ||
    averagePackagePriceHuf <= 0 ||
    averagePackageAmount <= 0
  ) {
    return null;
  }

  if (amountUnit !== averagePackageUnit) {
    return null;
  }

  const unitPrice = averagePackagePriceHuf / averagePackageAmount;
  return unitPrice * amount;
}

export const INGREDIENT_CATALOG: Record<string, IngredientCatalogItem> = {
  greek_yogurt_2: {
    ingredientKey: "greek_yogurt_2",
    displayName: "Görög joghurt (2%)",
    fallbackEmoji: "🥣",
    averagePackagePriceHuf: 950,
    averagePackageAmount: 500,
    averagePackageUnit: "g",
    note: "Átlagos 500 g-os kiszerelés alapján",
  },
  oats: {
    ingredientKey: "oats",
    displayName: "Zabpehely",
    fallbackEmoji: "🌾",
    averagePackagePriceHuf: 1200,
    averagePackageAmount: 1000,
    averagePackageUnit: "g",
    note: "Átlagos 1 kg-os kiszerelés alapján",
  },
  berries_mix: {
    ingredientKey: "berries_mix",
    displayName: "Bogyós gyümölcs",
    fallbackEmoji: "🫐",
    averagePackagePriceHuf: 1600,
    averagePackageAmount: 300,
    averagePackageUnit: "g",
    note: "Átlagos 300 g-os mirelit/friss mix alapján",
  },
  honey: {
    ingredientKey: "honey",
    displayName: "Méz",
    fallbackEmoji: "🍯",
    averagePackagePriceHuf: 1800,
    averagePackageAmount: 500,
    averagePackageUnit: "g",
    note: "Átlagos 500 g-os kiszerelés alapján",
  },
};

export function getIngredientCatalogItem(
  ingredientKey: string | undefined
): IngredientCatalogItem | undefined {
  if (!ingredientKey) {
    return undefined;
  }

  return INGREDIENT_CATALOG[ingredientKey];
}
