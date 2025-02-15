import { Exercise } from "@/types/models";

import { getDB } from ".";
import { DbExercise } from "@/types/db";

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

const parseExercise = (exercise: DbExercise): Exercise => {
  return {
    id: exercise.id,
    workoutId: exercise.workout_id,
    name: exercise.name,
  };
};

export const getExercises = async (workout_id: string): Promise<Exercise[]> => {
  try {
    const db = await getDB();

    const exercises = await db.getAllAsync<DbExercise>(
      `SELECT * FROM exercises WHERE workout_id = ?`,
      workout_id
    );

    return exercises.map(parseExercise);
  } catch (e) {
    console.log(e);
    return [];
  }
};
