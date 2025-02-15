import { DbExerciseSet } from "@/types/db";
import { ExerciseSet } from "@/types/models";

import { getDB } from ".";

export const saveSet = async (exerciseSet: ExerciseSet) => {
  try {
    const db = await getDB();

    await db.runAsync(
      "INSERT OR REPLACE INTO sets(id, exercise_id, reps, weight, one_rm) VALUES(?, ?, ?, ?, ?)",
      exerciseSet.id,
      exerciseSet.exerciseId,
      exerciseSet.reps ?? null,
      exerciseSet.weight ?? null,
      exerciseSet.oneRM ?? null
    );
  } catch (e) {
    console.log(e);
  }
};

const parseSet = (exerciseSet: DbExerciseSet): ExerciseSet => {
  return {
    id: exerciseSet.id,
    exerciseId: exerciseSet.exercise_id,
    reps: exerciseSet.reps,
    weight: exerciseSet.weight,
    oneRM: exerciseSet.one_rm,
  };
};

export const getSets = async (exerciseId: string): Promise<ExerciseSet[]> => {
  try {
    const db = await getDB();

    const sets = await db.getAllSync<DbExerciseSet>(
      `SELECT * from sets WHERE exercise_id = ?`,
      exerciseId
    );

    return sets.map(parseSet);
  } catch (e) {
    console.log(e);
    return [];
  }
};
