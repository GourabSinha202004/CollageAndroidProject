import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Linking } from 'react-native';

const WorkoutPlan = ({ routine, onBack }) => {
  return (
    <ScrollView style={styles.container}>
      {routine.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.exerciseText}>{exercise.name}</Text>
          <Button
            title="Watch Video"
            onPress={() => {
              Linking.openURL(exercise.video);
            }}
          />
        </View>
      ))}
      <Button title="Back" onPress={onBack} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  exerciseContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  exerciseText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default WorkoutPlan;
