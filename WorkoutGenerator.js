const generateWorkoutRoutine = (userProfile, equipmentList) => {
    const routines = [];
  
    if (equipmentList.includes('dumbbells')) {
      routines.push({ name: 'Dumbbell Press', video: 'https://youtu.be/5Y3VZsLb1Ys?feature=shared' });
      routines.push({ name: 'Dumbbell Squats', video: 'https://youtu.be/Si1bJXjRZsQ?feature=shared' });
      routines.push({ name: 'Dumbbell Rows', video: 'https://youtu.be/ZRSGpBUVcNw?feature=shared' });
    }
    if (equipmentList.includes('resistance bands')) {
      routines.push({ name: 'Resistance Band Bicep Curls', video: 'https://youtu.be/pXS-fSPWpk8?feature=shared' });
      routines.push({ name: 'Resistance Band Squats', video: 'https://youtu.be/jz47v0Uj1cY?feature=shared' });
    }
    if (userProfile.fitnessLevel === 'beginner') {
      routines.push({ name: 'Jumping Jacks', video: 'https://youtube.com/shorts/lWMw6uppiFc?feature=shared' });
      routines.push({ name: 'Plank', video: 'https://youtu.be/pSHjTRCQxIw?feature=shared' });
      routines.push({ name: 'Bodyweight Squats', video: 'https://youtu.be/m0GcZ24pK6k?feature=shared' });
      routines.push({ name: 'Knee Push-ups', video: 'https://youtu.be/jWxvty2KROs?feature=shared' });
    }
    if (userProfile.fitnessLevel === 'intermediate') {
      routines.push({ name: 'Lunges', video: 'https://youtube.com/shorts/EqH87Mo44ek?feature=shared' });
      routines.push({ name: 'Burpees', video: 'https://youtu.be/auBLPXO8Fww?feature=shared' });
      routines.push({ name: 'Mountain Climbers', video: 'https://youtu.be/kLh-uczlPLg?feature=shared' });
      routines.push({ name: 'Regular Push-ups', video: 'https://youtu.be/I9fsqKE5XHo?feature=shared' });
    }
    if (userProfile.fitnessLevel === 'advanced') {
      routines.push({ name: 'Pistol Squats', video: 'https://youtu.be/vq5-vdgJc0I?feature=shared' });
      routines.push({ name: 'Handstand Push-ups', video: 'https://youtu.be/FaRge9WFzWg?feature=shared' });
      routines.push({ name: 'Pull-ups', video: 'https://youtube.com/shorts/XSi02ijVDvo?feature=shared' });
      routines.push({ name: 'Box Jumps', video: 'https://youtu.be/NBY9-kTuHEk?feature=shared' });
    }
    // Add more logic...
    return routines;
  };
  
  export default generateWorkoutRoutine;
  