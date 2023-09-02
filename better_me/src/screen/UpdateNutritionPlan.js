import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

const UpdateNutritionPlan = ({ route, navigation }) => {
  const [planName, setPlanName] = useState('');
  const [goal, setGoal] = useState('');
  const [durationWeeks, setDurationWeeks] = useState('');
  const [guidelines, setGuidelines] = useState('');
  const [trainer,setTrainer]=useState(0)
  const toast=useToast()
  const { nutritionPlanId } = route.params; // Get the Nutrition Plan ID from the route params

  useEffect(() => {
    // Fetch the details of the specific Nutrition Plan from your Django API
    axios.get(`http://localhost:8000/api/nutrition-plans/${nutritionPlanId}/`)
      .then((response) => {
        const plan = response.data;
        setPlanName(plan.plan_name);
        setGoal(plan.goal);
        setDurationWeeks(plan.duration_weeks.toString());
        setGuidelines(plan.guidelines);
        setTrainer(plan.trainer)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [nutritionPlanId]);

console.log(planName)

  const handleUpdatePlan = () => {
    // Send a PUT request to update the Nutrition Plan
    axios.put(`http://localhost:8000/api/nutrition-plans/${nutritionPlanId}/`, {
      plan_name: planName,
      goal: goal,
      duration_weeks: parseInt(durationWeeks), // Ensure it's an integer
      guidelines: guidelines,
      trainer:trainer
    })
      .then((response) => {
        toast.show("Plan Updated.👌👌")
        console.log('Nutrition plan updated:', response.data);
        navigation.navigate('ListNutrition'); // Go back to the previous screen
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Update Nutrition Plan:</Text>
      <TextInput style={style.input} placeholder="Plan Name" value={planName} onChangeText={plan=>setPlanName(plan)} />
      <TextInput style={style.input} placeholder="Goal" value={goal} onChangeText={goal=>setGoal(goal)} />
      <TextInput style={style.input} placeholder="Duration (weeks)" value={durationWeeks} onChangeText={dur=>setDurationWeeks(dur)} />
      <TextInput style={style.input} placeholder="Guidelines" value={guidelines} onChangeText={guid=>setGuidelines(guid)} />
      <Button title="Update" onPress={handleUpdatePlan} />
    </View>
  );
};

export default UpdateNutritionPlan;

const style=StyleSheet.create({
  input:{
      borderWidth:1,
      padding:"10px"
  },
  container:{
      gap:10,
      width:"35%",
      margin:"auto"
  },
  heading:{
      fontFamily:'cursive',
      fontSize:"30px"
  }
})
