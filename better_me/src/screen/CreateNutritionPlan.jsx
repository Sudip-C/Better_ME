import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

const CreateNutritionPlan = ({ navigation }) => {
  const [planName, setPlanName] = useState('');
  const [goal, setGoal] = useState('');
  const [durationWeeks, setDurationWeeks] = useState('');
  const [guidelines, setGuidelines] = useState('');

  const trainer=JSON.parse(localStorage.getItem("trainer"))
  const toast=useToast()
  const handleCreatePlan = () => {
    // Send a POST request to create a new Nutrition Plan
    axios.post('http://localhost:8000/api/nutrition-plans/create/', {
      plan_name: planName,
      goal: goal,
      duration_weeks: parseInt(durationWeeks), // Ensure it's an integer
      guidelines: guidelines,
      trainer: trainer.id,  
    })
      .then((response) => {
        toast.show("Nutrition Plan created Successfully.")
        console.log('Nutrition plan created:', response.data);
        navigation.navigate('ListNutrition'); // Go back to the previous screen
      })
      .catch((error) => {
        toast.show(error.msg)
        console.error(error);
      });
  };

  return (
    <View>
      <Text>Create Nutrition Plan:</Text>
      <TextInput placeholder="Plan Name" value={planName} onChangeText={plan=>setPlanName(plan)} />
      <TextInput placeholder="Goal" value={goal} onChangeText={goal=>setGoal(goal)} />
      <TextInput placeholder="Duration (weeks)" value={durationWeeks} onChangeText={dur=>setDurationWeeks(dur)} />
      <TextInput placeholder="Guidelines" value={guidelines} onChangeText={guide=>setGuidelines(guide)} />
      <Button title="Create" onPress={handleCreatePlan} />
    </View>
  );
};

export default CreateNutritionPlan;
