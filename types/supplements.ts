// ../types/supplements.ts

// ---- ALAPTÍPUSOK ----

export type CyclePhase = "light" | "heavy";
export type TrainingKind = "weights" | "cardio_rest";

export type SupplementTimeSlot =
  | "after_breakfast"
  | "after_lunch"
  | "pre_workout"
  | "post_workout"
  | "with_dinner"
  | "after_dinner";

export type Supplement = {
  id: string;
  name: string;
  description?: string;
  isCore?: boolean;
  isPreWorkout?: boolean; // ÚJ mező
};

export type SupplementRule = {
  id: string;
  supplementId: string;
  timeSlot: SupplementTimeSlot;
  dose: string; // emberi szöveg: "1 kapszula", "5 g", stb.
};

// ---- IDŐPONT LABELLEK A UI-NAK ----

export const SUPPLEMENT_TIME_SLOT_LABELS: Record<SupplementTimeSlot, string> = {
  after_breakfast: "Reggeli után",
  after_lunch: "Ebéd után",
  pre_workout: "Edzés előtt",
  post_workout: "Edzés után",
  with_dinner: "Vacsorával",
  after_dinner: "Vacsora után / lefekvés előtt",
};

// ---- ELÉRHETŐ KIEGÉSZÍTŐK LISTÁJA ----

export const SUPPLEMENTS: Supplement[] = [
  {
    id: "mega_daily_one",
    name: "Mega Daily One (multivitamin)",
    description: "1 kapszula reggeli után",
    isCore: true, // ← kiemelendő
  },
  {
    id: "d3",
    name: "D3-vitamin 2000 NE",
    description: "Zsírban oldódó, multivitaminnal együtt",
    isCore: true, // ← kiemelendő
  },
  {
    id: "k2",
    name: "K2-vitamin",
    description: "50–100 µg D3 mellé",
  },
  {
    id: "omega3",
    name: "Omega-3",
    description: "EPA/DHA kapszula, reggel és este",
    isCore: true, // ← kiemelendő
  },
  {
    id: "beres",
    name: "Béres Csepp Plusz",
    description: "10–20 csepp, heti 3× (Béres-napokon)",
    isCore: true, // ← hozzáadva
  },
  {
    id: "zinc25",
    name: "Cink 25 mg",
    description: "Heavy súlyzós napokon reggeli után",
    isPreWorkout: true, // ← hozzáadva
  },
  {
    id: "calcium",
    name: "Kalcium",
    description: "300 mg ebéd után",
    isCore: true, // ← kiemelendő
  },
  {
    id: "vitc",
    name: "C-vitamin",
    description: "Nap típusától függő dózis, vacsorával",
  },
  {
    id: "nac",
    name: "NAC",
    description: "600 mg, light fázisban reggel",
  },
  {
    id: "q10",
    name: "Koenzim Q10",
    description: "100–200 mg reggel, étellel",
  },
  {
    id: "arginine",
    name: "L-Arginin",
    description: "3–4 g, edzés előtt 15–20 perccel",
    isPreWorkout: true, // ← hozzáadva
  },
  {
    id: "citrulline",
    name: "Citrullin-malát",
    description: "5–6 g, edzés előtt 15–20 perccel",
    isPreWorkout: true, // ← hozzáadva
  },
  {
    id: "jumbo",
    name: "Jumbo Hardcore",
    description: "½–1 adag edzés előtt/után",
    isPreWorkout: true, // ← hozzáadva
  },
  {
    id: "whey",
    name: "Whey Protein",
    description: "Edzés után 1 adag, banánnal",
    isPreWorkout: true, // ← hozzáadva
  },
  {
    id: "creatine",
    name: "Kreatin-monohidrát",
    description: "5 g minden nap (edzésnap: edzés után, pihenőnap: ebéd után)",
  },
  {
    id: "magnesium",
    name: "Magnézium",
    description: "300–400 mg este, lefekvés előtt",
    isCore: true, // ← kiemelendő
  },
  {
    id: "collagen",
    name: "Kollagén",
    description: "10–15 g, ízület- és kötőszövet-támogatás",
  },
  {
    id: "gelatin",
    name: "Zselatin",
    description: "5–10 g edzés előtt 30–45 perccel",
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    description: "300–600 mg lefekvés előtt",
  },
];

// ---- NAPI TERV PARAMÉTEREI ----

export type DailySupplementPlanParams = {
  cyclePhase: CyclePhase;
  trainingKind: TrainingKind;
  isBeresDay: boolean;
};

// ---- FŐ LOGIKA: NAPI KIEGÉSZÍTŐ TERV ----
//
// 4 nap-típus:
// - light + weights      = light edzős
// - light + cardio_rest  = light pihenős
// - heavy + weights      = heavy edzős
// - heavy + cardio_rest  = heavy pihenős
//
// Itt állítjuk össze, hogy az app "Mai kiegészítők" dobozában mi jelenjen meg.

export function getDailySupplementPlan(
  params: DailySupplementPlanParams
): SupplementRule[] {
  const { cyclePhase, trainingKind, isBeresDay } = params;

  const isLight = cyclePhase === "light";
  const isHeavy = cyclePhase === "heavy";
  const isWorkoutDay = trainingKind === "weights";

  const rules: SupplementRule[] = [];

  // ---- 1) REGGELI UTÁN STACK (minden nap) ----
  rules.push(
    {
      id: "mega_daily_one_morning",
      supplementId: "mega_daily_one",
      timeSlot: "after_breakfast",
      dose: "1 kapszula",
    },
    {
      id: "d3_morning",
      supplementId: "d3",
      timeSlot: "after_breakfast",
      dose: "2000 NE",
    },
    {
      id: "omega3_morning",
      supplementId: "omega3",
      timeSlot: "after_breakfast",
      dose: "1 kapszula",
    },
    {
      id: "k2_morning",
      supplementId: "k2",
      timeSlot: "after_breakfast",
      dose: "50–100 µg",
    }
  );

  if (isBeresDay) {
    rules.push({
      id: "beres_morning",
      supplementId: "beres",
      timeSlot: "after_breakfast",
      dose: "10–20 csepp (heti 3×)", // ← módosítva
    });
  }

  if (isLight) {
    rules.push({
      id: "nac_morning_light",
      supplementId: "nac",
      timeSlot: "after_breakfast",
      dose: "600 mg (light fázis)",
    });
  }

  rules.push({
    id: "q10_morning",
    supplementId: "q10",
    timeSlot: "after_breakfast",
    dose: "100–200 mg",
  });

  if (isHeavy && isWorkoutDay) {
    rules.push({
      id: "zinc_heavy_weights_morning",
      supplementId: "zinc25",
      timeSlot: "after_breakfast",
      dose: "25 mg (csak heavy súlyzós napokon)",
    });
  }

  if (!isWorkoutDay) {
    rules.push({
      id: "creatine_rest_lunch_all",
      supplementId: "creatine",
      timeSlot: "after_lunch",
      dose: "5 g",
    });
  }

  // ---- 2) EBÉD UTÁN ----
  rules.push({
    id: "calcium_lunch_all",
    supplementId: "calcium",
    timeSlot: "after_lunch",
    dose: "300 mg",
  });

  // ---- 3) EDZÉS ELŐTT ----
  if (isWorkoutDay) {
    rules.push(
      {
        id: "gelatin_pre_workout_all",
        supplementId: "gelatin",
        timeSlot: "pre_workout",
        dose: "5–10 g (edzés előtt 30–45 perccel)",
      },
      {
        id: "vitc_pre_workout_all",
        supplementId: "vitc",
        timeSlot: "pre_workout",
        dose: "50–100 mg (edzés előtt 30–45 perccel)",
      }
    );

    if (isHeavy) {
      rules.push(
        {
          id: "arginine_pre_heavy",
          supplementId: "arginine",
          timeSlot: "pre_workout",
          dose: "3–4 g (edzés előtt 15–20 perccel)",
        },
        {
          id: "citrulline_pre_heavy",
          supplementId: "citrulline",
          timeSlot: "pre_workout",
          dose: "5–6 g (edzés előtt 15–20 perccel)",
        },
        {
          id: "jumbo_pre_heavy",
          supplementId: "jumbo",
          timeSlot: "pre_workout",
          dose: "½ adag Jumbo (edzés előtt)",
        }
      );
    } else {
      rules.push(
        {
          id: "jumbo_pre_light_optional",
          supplementId: "jumbo",
          timeSlot: "pre_workout",
          dose: "½ adag (ha kell plusz energia light napon)",
        },
        {
          id: "arginine_pre_light_optional",
          supplementId: "arginine",
          timeSlot: "pre_workout",
          dose: "3–4 g (opcionálisan light súlyzós napon)",
        },
        {
          id: "citrulline_pre_light_optional",
          supplementId: "citrulline",
          timeSlot: "pre_workout",
          dose: "5–6 g (opcionálisan light súlyzós napon)",
        }
      );
    }
  }

  // ---- 4) EDZÉS UTÁN ----
  if (isWorkoutDay) {
    if (isHeavy) {
      rules.push(
        {
          id: "jumbo_post_heavy",
          supplementId: "jumbo",
          timeSlot: "post_workout",
          dose: "½ adag",
        },
        {
          id: "whey_post_heavy",
          supplementId: "whey",
          timeSlot: "post_workout",
          dose: "½ adag whey + banán",
        },
        {
          id: "vitc_post_heavy",
          supplementId: "vitc",
          timeSlot: "with_dinner",
          dose: "500 mg vacsorával",
        },
        {
          id: "creatine_post_heavy",
          supplementId: "creatine",
          timeSlot: "post_workout",
          dose: "5 g",
        }
      );
    } else {
      rules.push(
        {
          id: "whey_post_light",
          supplementId: "whey",
          timeSlot: "post_workout",
          dose: "1 adag whey + banán",
        },
        {
          id: "vitc_post_light",
          supplementId: "vitc",
          timeSlot: "with_dinner",
          dose: "250 mg vacsorával",
        },
        {
          id: "creatine_post_light",
          supplementId: "creatine",
          timeSlot: "post_workout",
          dose: "5 g",
        }
      );
    }
  }

  if (!isWorkoutDay && isHeavy) {
    rules.push({
      id: "vitc_with_dinner_heavy_rest",
      supplementId: "vitc",
      timeSlot: "with_dinner",
      dose: "500 mg vacsorával",
    });
  }

  if (!isWorkoutDay && isLight) {
    rules.push({
      id: "vitc_with_dinner_light_rest",
      supplementId: "vitc",
      timeSlot: "with_dinner",
      dose: "0 vagy 250 mg vacsorával",
    });
  }

  // ---- 5) VACSORA UTÁN / LEFEKVÉS ELŐTT ----
  rules.push(
    {
      id: "omega3_night_all",
      supplementId: "omega3",
      timeSlot: "after_dinner",
      dose: "1 kapszula (vacsora után)",
    },
    {
      id: "magnesium_night_all",
      supplementId: "magnesium",
      timeSlot: "after_dinner",
      dose: "300–400 mg (lefekvés előtt ~1 órával)",
    },
    {
      id: "collagen_night_all",
      supplementId: "collagen",
      timeSlot: "after_dinner",
      dose: "10–15 g vízben / shakerben",
    },
    {
      id: "ashwagandha_night_all",
      supplementId: "ashwagandha",
      timeSlot: "after_dinner",
      dose: "300–600 mg (lefekvés előtt)",
    }
  );

  // 🔚 FONTOS: A VÉGÉN MINDIG TÉRJÜNK VISSZA A LISTÁVAL
  return rules;
}
