import { ExerciseWithSets } from "@/types/models";
import { createSet, getSetTotalWeight } from "@/services/setService";
import * as Crypto from "expo-crypto";

export const getExerciseTotalWeight = (exercise: ExerciseWithSets) => {
  return exercise.sets.reduce(
    (totalSetWeight, set) => totalSetWeight + getSetTotalWeight(set),
    0
  );
};

export const createExercise = (name: string, workoutId: string) => {
  const newExercise: ExerciseWithSets = {
    id: Crypto.randomUUID(),
    name,
    workoutId,
    sets: [],
  };

  newExercise.sets.push(createSet(newExercise.id));

  return newExercise;
};
