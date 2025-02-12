import Card from '@/components/general/Card';
import { View, Text } from '@/components/general/Themed';
import { StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { WorkoutWithExercises } from '@/types/models';
import dayjs from 'dayjs';

import { getBestSet } from '@/services/setService';
import { getWorkoutTotalWeight } from '@/services/workoutService';
import { calculateDuration } from '@/utils/time';

type WorkoutListItem = {
  workout: WorkoutWithExercises;
};

export default function WorkoutListItem({ workout }: WorkoutListItem) {
  return (
    <Card
      title={dayjs(workout.createdAt).format('HH:mm dddd, D MMM')}
      href={`/workout/${workout.id}`}
      style={{ gap: 8 }}
    >
      <View style={styles.row}>
        <Text style={styles.label}>Exercise</Text>
        <Text style={styles.label}>Best set</Text>
      </View>

      {workout.exercises.map((exercise) => {
        const bestSet = getBestSet(exercise.sets);
        return (
          <View key={exercise.id} style={styles.row}>
            <Text style={{ color: 'gray' }}>
              {exercise.sets.length} x {exercise.name}
            </Text>
            {bestSet && (
              <Text style={{ color: 'gray' }}>
                {bestSet.reps}{' '}
                {bestSet.weight ? `x ${bestSet.weight} kg` : 'reps'}
              </Text>
            )}
          </View>
        );
      })}

      {/* Footer */}
      <View style={styles.footer}>
        <Text>
          <FontAwesome5 name="clock" size={16} color="gray" />{' '}
          {calculateDuration(workout.createdAt, workout.finishedAt)}
        </Text>
        <Text>
          <FontAwesome5 name="weight-hanging" size={16} color="gray" />{' '}
          {getWorkoutTotalWeight(workout)} kg
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    gap: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#333',
    marginTop: 10,
    paddingTop: 10,
  },
});
