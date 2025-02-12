import { FlatList } from "react-native";
import { Link, router } from "expo-router";

import { useWorkouts } from "@/store";
import { View } from "@/components/general/Themed";
import CustomButton from "@/components/general/CustomButton";
import WorkoutListItem from "@/components/workouts/WorkoutListItem";

export default function HomeScreen() {
  const currentWorkout = useWorkouts((state) => state.currentWorkout);
  const startWorkout = useWorkouts((state) => state.startWorkout);
  const workouts = useWorkouts((state) => state.workouts);

  const onStartWorkout = () => {
    startWorkout();
    router.push("/workout/current");
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        padding: 10,
        backgroundColor: "transparent",
      }}
    >
      {currentWorkout ? (
        <Link href="/workout/current" asChild>
          <CustomButton title="Resume workout" />
        </Link>
      ) : (
        <CustomButton title="Start new workout" onPress={onStartWorkout} />
      )}

      <FlatList
        data={workouts}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => <WorkoutListItem workout={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
