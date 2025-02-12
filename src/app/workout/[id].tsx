import dayjs from "dayjs";
import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

import { useWorkouts } from "@/store";
import { Text } from "@/components/general/Themed";
import WorkoutExerciseItem from "@/components/workouts/WorkoutExerciseItem";

export default function WorkoutScreen() {
  const { id } = useLocalSearchParams();

  const workout = useWorkouts((state) =>
    state.workouts.find((workout) => workout.id === id)
  );
  if (!workout) {
    return <Text>Workout not found</Text>;
  }

  return (
    <FlatList
      data={workout.exercises}
      contentContainerStyle={{ gap: 8, padding: 8 }}
      renderItem={({ item }) => <WorkoutExerciseItem exercise={item} />}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>Workout details</Text>
          <Text style={styles.date}>
            {dayjs(workout.createdAt).format("HH:mm dddd, D MMM")}
          </Text>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 20,
  },
});
