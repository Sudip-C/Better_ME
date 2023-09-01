import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ListWorkoutPlans = ({navigation}) => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
     const trainerId=JSON.parse(localStorage.getItem('trainer'))

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
            <Button
            title="Update Plan"
            
            onPress={() => {
                     navigation.navigate('UpdateWorkoutPlan', { workoutPlanId: item.id });
                     }}
            />
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