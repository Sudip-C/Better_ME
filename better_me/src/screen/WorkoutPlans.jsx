import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";

const ListWorkoutPlans = ({navigation}) => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [planId,setPalnId]=useState(null)
  const [message,setMessage]=useState('')

  const trainerId=JSON.parse(localStorage.getItem('trainer'))
  const user=JSON.parse(localStorage.getItem("data"))
  const toast = useToast();
  console.log(planId)
  useEffect(() => {
    // Fetch the list of workout plans from your Django API
    axios.get('http://localhost:8000/api/workout-plans/')
      .then((response) => {
        setWorkoutPlans(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
const handlePlan=(id)=>{
setPalnId(id)
}

const upateplan=()=>{
  axios
  .patch(`http://127.0.0.1:8000/api/users/${user.id}/select-workout-plan/`, {
    workout_plan_id: planId, 
  })
  .then((response) => {
    // Handle success
    console.log('Workout plan added to user profile:', response.data);
    toast.show('Workout plan added successfully 😁😁😁');
    setPalnId(null); 
  })
  .catch((error) => {
    // Handle errors
    console.error('Error adding workout plan:', error);
    toast.show('Error adding workout plan. Please try again.');
  });
}

  return (
    <View style={{padding:"15px"}}>
    {trainerId?<TouchableOpacity onPress={()=>navigation.navigate('Create_workout_plan')} style={style.create}>
    <Text style={style.button}>+ Add Workout</Text>
    </TouchableOpacity>:null}
    <br/>
      <Text style={{fontFamily:"cursive",fontSize:"30px"}}>Workout Plans:</Text>
      <FlatList
      
        data={workoutPlans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.list}>
            <Text style={{fontSize:"20px",fontWeight:"600",margin:"auto"}}>{item.plan_name}</Text>
            <Text style={style.margin}>{item.goal}</Text>
            <Text style={style.margin}>{item.duration_weeks} weeks</Text>
            <Text style={style.margin}>{item.description}</Text>
            {planId?<Button title='confirm' onPress={upateplan}/>
            :user?<Button title='+ Add' onPress={()=>handlePlan(item.id)}/>:null}
            
            {trainerId?<Button
            title="Update Plan"
            
            onPress={() => {
                     navigation.navigate('UpdateWorkoutPlan', { workoutPlanId: item.id });
                     }}
            />:null}
          </View>
        )}
      />
    </View>
  );
};

export default ListWorkoutPlans;

const style=StyleSheet.create({
    create:{
        backgroundColor:'#20B8B1',
        width:'8%',
        padding:"10px",
        marginLeft:"auto",
        marginRight:"20px",
        marginTop:"20px",
        borderRadius:"10px"
    },
    button:{
        color:'red',
        fontWeight:"600"
    },
    list:{
        width:"25%",
        flex:1,
        gap:10,
        borderWidth:1,
        marginBottom:20
    },
    margin:{
        marginLeft:15
    }
})