import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UserProfileSetup from './UserProfileSetup';
import generateWorkoutRoutine from './WorkoutGenerator';
import WorkoutPlan from './WorkoutPlan';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('UserProfileSetup');
  const [userProfile, setUserProfile] = useState(null);
  const [workoutRoutine, setWorkoutRoutine] = useState([]);

  const handleProfileSubmit = (profile) => {
    setUserProfile(profile);
    const routine = generateWorkoutRoutine(profile, ['dumbbells', 'resistance bands']); // Example equipment list
    setWorkoutRoutine(routine);
    setCurrentScreen('WorkoutPlan');
  };

  const handleBack = () => {
    setCurrentScreen('UserProfileSetup');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'UserProfileSetup' && <UserProfileSetup onSubmit={handleProfileSubmit} />}
      {currentScreen === 'WorkoutPlan' && <WorkoutPlan routine={workoutRoutine} onBack={handleBack} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
