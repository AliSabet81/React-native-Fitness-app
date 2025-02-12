import { View, Text, TextInput } from "@/components/general/Themed";
import { ExerciseSet } from "@/types/models";
import { useState } from "react";
import { StyleSheet } from "react-native";
// TODO: In newer version of GH, import the Reanimated version
// import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Swipeable from "react-native-gesture-handler/Swipeable";
import CustomButton from "../general/CustomButton";

type SetItem = {
  index: number;
  set: ExerciseSet;
};

export default function SetItem({ index, set }: SetItem) {
  const [weight, setWeight] = useState(set.weight?.toString() || "");
  const [reps, setReps] = useState(set.reps?.toString() || "");

  const handleWeightChange = () => {
    console.warn("add");
  };

  const handleRepsChange = () => {
    console.warn("add");
  };

  const renderRightActions = () => (
    <CustomButton
      onPress={() => console.warn("add")}
      title="Delete"
      type="link"
      style={{ width: "auto", padding: 5 }}
      color="crimson"
    />
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Text style={styles.setNumber}>{index + 1}</Text>

        <TextInput
          placeholder="50"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
          keyboardType="numeric"
          onBlur={handleWeightChange}
        />
        <TextInput
          placeholder="8"
          value={reps}
          onChangeText={setReps}
          style={styles.input}
          keyboardType="numeric"
          onBlur={handleRepsChange}
        />
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  setNumber: {
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    width: 60,
    padding: 5,
    paddingVertical: 7,
    fontSize: 16,
    textAlign: "center",
  },
});
