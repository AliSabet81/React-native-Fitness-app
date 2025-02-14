export type DbWorkout = {
  id: string;
  created_at: string;
  finished_at: string | null;
};

export type DbExercise = {
  id: string;
  workout_id: string;
  name: string;
};

export type DbExerciseSet = {
  id: string;
  exercise_id: string;
  reps?: number;
  weight?: number;
  one_rm?: number;
};
