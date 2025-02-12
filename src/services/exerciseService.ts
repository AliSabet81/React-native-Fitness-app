import { ExerciseWithSets } from "@/types/models";
import { getSetTotalWeight } from "@/services/setService";

export const getExerciseTotalWeight = (exercise: ExerciseWithSets) => {
  return exercise.sets.reduce(
    (totalSetWeight, set) => totalSetWeight + getSetTotalWeight(set),
    0
  );
};
