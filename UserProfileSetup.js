import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const UserProfileSetup = ({ onSubmit }) => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');

  const handleSubmit = () => {
    onSubmit({ age, weight, height, gender, fitnessLevel });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Age" keyboardType="numeric" onChangeText={setAge} style={styles.input} />
      <TextInput placeholder="Weight (kg)" keyboardType="numeric" onChangeText={setWeight} style={styles.input} />
      <TextInput placeholder="Height (cm)" keyboardType="numeric" onChangeText={setHeight} style={styles.input} />
      <View style={styles.genderContainer}>
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'male' && styles.selectedButton]} 
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'female' && styles.selectedButton]} 
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fitnessContainer}>
        <TouchableOpacity 
          style={[styles.fitnessButton, fitnessLevel === 'beginner' && styles.selectedButton]} 
          onPress={() => setFitnessLevel('beginner')}
        >
          <Text style={styles.fitnessText}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.fitnessButton, fitnessLevel === 'intermediate' && styles.selectedButton]} 
          onPress={() => setFitnessLevel('intermediate')}
        >
          <Text style={styles.fitnessText}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.fitnessButton, fitnessLevel === 'advanced' && styles.selectedButton]} 
          onPress={() => setFitnessLevel('advanced')}
        >
          <Text style={styles.fitnessText}>Advanced</Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  genderButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'lightgray',
  },
  genderText: {
    fontSize: 16,
  },
  fitnessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  fitnessButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    borderRadius: 5,
  },
  fitnessText: {
    fontSize: 16,
  },
});

export default UserProfileSetup;
