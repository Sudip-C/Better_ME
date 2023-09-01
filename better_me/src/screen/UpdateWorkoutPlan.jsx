import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const UpdateWorkoutPlan = ({ route, navigation }) => {
  const [planName, setPlanName] = useState('');
  const [goal, setGoal] = useState('');
  const [durationWeeks, setDurationWeeks] = useState('');
  const [description, setDescription] = useState('');
  const [trainer,setTrainer]=useState(0)

  const { workoutPlanId } = route.params; // Get the workout plan ID from the route params

  useEffect(() => {
    // Fetch the details of the specific workout plan from your Django API
    axios.get(`http://localhost:8000/api/workout-plans/${workoutPlanId}/`)
      .then((response) => {
        const plan = response.data;
        setPlanName(plan.plan_name);
        setGoal(plan.goal);
        setDurationWeeks(plan.duration_weeks.toString());
        setDescription(plan.description);
        setTrainer(plan.trainer)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [workoutPlanId]);

  const handleUpdatePlan = () => {
    // Send a PUT request to update the workout plan
    axios.put(`http://localhost:8000/api/workout-plans/${workoutPlanId}/`, {
      plan_name: planName,
      goal: goal,
      duration_weeks: parseInt(durationWeeks), // Ensure it's an integer
      description: description,
      trainer:trainer
    })
      .then((response) => {
        console.log('Workout plan updated:', response.data);
        navigation.navigate('Workout_plan'); // Go back to the previous screen
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={style.container}>
      <Text style={style.heading} >Update Workout Plan:</Text>
      <TextInput style={style.input} placeholder="Plan Name" value={planName} onChangeText={setPlanName} />
      <TextInput style={style.input} placeholder="Goal" value={goal} onChangeText={setGoal} />
      <TextInput style={style.input} placeholder="Duration (weeks)" value={durationWeeks} onChangeText={setDurationWeeks} />
      <TextInput style={style.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Update" onPress={handleUpdatePlan} />
    </View>
  );
};

export default UpdateWorkoutPlan;

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
