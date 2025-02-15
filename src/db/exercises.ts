import { Exercise } from "@/types/models";

import { getDB } from ".";

export const saveExercise = async (exercise: Exercise) => {
  try {
    const db = await getDB();
    await db.runAsync(
      "INSERT INTO exercises(id, workout_id, name) VALUES(?, ?, ?)",
      exercise.id,
      exercise.workoutId,
      exercise.name
    );
  } catch (e) {
    console.log(e);
  }
};
