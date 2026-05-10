import type {
  SupplementRule,
  SupplementTimeSlot,
} from "../../../types/supplements";

export function groupSupplementsByTimeSlot(
  dailySupplements: SupplementRule[]
): Record<SupplementTimeSlot, SupplementRule[]> {
  const grouped: Record<SupplementTimeSlot, SupplementRule[]> = {
    after_breakfast: [],
    after_lunch: [],
    pre_workout: [],
    post_workout: [],
    with_dinner: [],
    after_dinner: [],
  };

  dailySupplements.forEach((rule) => {
    grouped[rule.timeSlot].push(rule);
  });

  return grouped;
}