export type Workout = {
  id: string;
  createdAt: Date;
  finishedAt: Date | null;
};

export type Exercise = {
  id: string;
  workoutId: string;
  name: string;
};

export type ExerciseSet = {
  id: string;
  exerciseId: string;
  reps?: number;
  weight?: number;
  oneRM?: number;
};

// Additional types for nested structures
export type WorkoutWithExercises = Workout & {
  exercises: ExerciseWithSets[];
};

export type ExerciseWithSets = Exercise & {
  sets: ExerciseSet[];
};
