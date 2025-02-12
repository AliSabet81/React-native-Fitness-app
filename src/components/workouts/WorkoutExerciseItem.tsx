import { ExerciseWithSets } from '@/types/models';
import Card from '@/components/general/Card';
import { View, Text } from '@/components/general/Themed';
import { StyleSheet } from 'react-native';
import { getBestSet } from '@/services/setService';
import Colors from '@/constants/Colors';

type WorkoutExerciseItem = {
  exercise: ExerciseWithSets;
};

export default function WorkoutExerciseItem({ exercise }: WorkoutExerciseItem) {
  const bestSet = getBestSet(exercise.sets);

  return (
    <Card title={exercise.name}>
      {exercise.sets.map((exerciseSet, index) => (
        <View
          key={exerciseSet.id}
          style={[
            styles.setRow,
            {
              backgroundColor:
                exerciseSet.id === bestSet?.id
                  ? Colors.dark.tint + '50'
                  : 'transparent',
            },
          ]}
        >
          <Text style={styles.setIndex}>{index + 1}</Text>
          <Text style={styles.setInfo}>
            {exerciseSet.reps}{' '}
            {exerciseSet.weight ? `x ${exerciseSet.weight} kg` : 'reps'}
          </Text>
          {exerciseSet.oneRM && (
            <Text style={styles.setOneRm}>
              {Math.floor(exerciseSet.oneRM)} kg
            </Text>
          )}
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  setRow: {
    flexDirection: 'row',
    gap: 15,
    padding: 8,
  },
  setIndex: {
    fontSize: 16,
    color: 'gray',
  },
  setInfo: {
    fontSize: 16,
  },
  setOneRm: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
});
