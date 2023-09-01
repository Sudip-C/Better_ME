import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const CreateWorkoutPlan = ({navigation}) => {
  const [planName, setPlanName] = useState('');
  const [goal, setGoal] = useState('');
  const [durationWeeks, setDurationWeeks] = useState('');
  const [description, setDescription] = useState('');

  const trainer=JSON.parse(localStorage.getItem("trainer"))

  console.log(trainer.id)

  const handleCreatePlan = () => {
    axios.post('http://localhost:8000/api/workout-plans/create/', {
      plan_name: planName,
      goal: goal,
      duration_weeks: durationWeeks,
      description: description,
      trainer: trainer.id, 
    })
      .then((response) => {
        console.log('Workout plan created:', response.data);
        navigation.navigate('Workout_plan')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text>Create Workout Plan:</Text>
      <TextInput placeholder="Plan Name" value={planName} onChangeText={plan=>setPlanName(plan)} />
      <TextInput placeholder="Goal" value={goal} onChangeText={goal=>setGoal(goal)} />
      <TextInput placeholder="Duration (weeks)" value={durationWeeks} onChangeText={Dura=>setDurationWeeks(Dura)} />
      <TextInput placeholder="Description" value={description} onChangeText={desc=>setDescription(desc)} />
      <Button title="Create" onPress={handleCreatePlan} />
    </View>
  );
};

export default CreateWorkoutPlan;
