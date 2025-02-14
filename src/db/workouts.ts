import { Workout } from "@/types/models";
import { getDB } from ".";

export const saveWorkout = async (workout: Workout) => {
  // save it in database
  try {
    const db = await getDB();

    const res = await db.runAsync(
      "INSERT OR REPLACE INTO workouts(id, created_at, finished_at) VALUES(?, ?, ?)",
      workout.id,
      workout.createdAt.toISOString(),
      workout.finishedAt?.toISOString() || null
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
