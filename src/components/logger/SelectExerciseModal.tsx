import CustomButton from '@/components/general/CustomButton';
import { FlatList, Modal, Pressable, StyleSheet } from 'react-native';
import { View, Text, TextInput } from '@/components/general/Themed';
import Card from '@/components/general/Card';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import exercises from '@/data/exercises';

type SelectExerciseModal = {
  onSelectExercise: (name: string) => void;
};

export default function SelectExerciseModal({
  onSelectExercise,
}: SelectExerciseModal) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <CustomButton
        title="Select exercise"
        onPress={() => setIsOpen(true)}
        style={{ marginBottom: 15 }}
      />

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.overlay}>
          <Card title="Select exercise" style={styles.modalContent}>
            <AntDesign
              name="close"
              onPress={() => setIsOpen(false)}
              size={20}
              color="gray"
              style={styles.closeButton}
            />

            <TextInput
              placeholder="Search..."
              value={search}
              onChangeText={setSearch}
              style={styles.input}
            />

            <FlatList
              data={filteredExercises}
              contentContainerStyle={{ gap: 20 }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onSelectExercise(item.name);
                    setIsOpen(false);
                  }}
                  style={{ gap: 3 }}
                >
                  <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                  <Text style={{ color: 'gray' }}>{item.muscle}</Text>
                </Pressable>
              )}
            />
          </Card>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '90%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  input: {
    padding: 10,
    marginVertical: 10,
  },
});
