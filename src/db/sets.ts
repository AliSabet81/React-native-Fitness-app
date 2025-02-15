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
