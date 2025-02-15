import * as Crypto from "expo-crypto";

import { saveExercise } from "@/db/exercises";
import { ExerciseWithSets } from "@/types/models";
import { cleanSets, createSet, getSetTotalWeight } from "@/services/setService";

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

  saveExercise(newExercise);

  newExercise.sets.push(createSet(newExercise.id));

  return newExercise;
};

export const cleanExercise = (exercise: ExerciseWithSets) => {
  const cleanedSets = cleanSets(exercise.sets);

  if (cleanedSets.length === 0) {
    return null;
  }

  return {
    ...exercise,
    sets: cleanedSets,
  };
};
