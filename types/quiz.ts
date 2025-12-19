// types/quiz.ts

// Kvíz mód: gyakorló vs ranglista
export type QuizMode = "practice" | "ranked";

// Hint típusok
export type HintType = "first_step" | "wrong_steps" | "none";

// Egy kvízhez szükséges pontszám
export type QuizScore = {
  mode: QuizMode;
  mealId: string;
  mealName: string;
  correctOnFirstTry: boolean;
  attempts: number;
  timeSeconds: number;
  hintsUsed: HintType[];
  score: number; // pontszám (100 = tökéletes)
  timestamp: Date;
};

// Ranglistaadat
export type RankedStats = {
  totalQuizzes: number;
  perfectScores: number; // 100 pontosak
  averageScore: number;
  bestTime: number; // másodperc
  totalHintsUsed: number;
};
