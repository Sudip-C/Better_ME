import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const ListNutritionPlans = ({navigation}) => {
  const [nutritionPlans, setNutritionPlans] = useState([]);
  const [planId,setPalnId]=useState(null)
  const [message,setMessage]=useState('')

  const trainerId=JSON.parse(localStorage.getItem('trainer'))
  const user=JSON.parse(localStorage.getItem("data"))
  useEffect(() => {
    // Fetch the list of Nutrition Plans from your Django API
    axios.get('http://localhost:8000/api/nutrition-plans/')
      .then((response) => {
        setNutritionPlans(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const upateplan=()=>{
    axios
    .patch(`http://127.0.0.1:8000/api/users/${user.id}/select-nutrition-plan/`, {
      nutrition_plan_id: planId, 
    })
    .then((response) => {
      // Handle success
      console.log('Workout plan added to user profile:', response.data);
      setMessage('Workout plan added successfully.');
      setPalnId(null); // Reset selected plan
    })
    .catch((error) => {
      // Handle errors
      console.error('Error adding workout plan:', error);
      setMessage('Error adding workout plan. Please try again.');
    });
  }

  return (
    <View style={{padding:"15px"}}>
     {trainerId?<TouchableOpacity style={style.create} onPress={()=>navigation.navigate('create_nutrition')}>
    <Text style={style.button}>+ Add Nutrion Plan</Text>
    </TouchableOpacity>:null}
      <Text style={{fontFamily:"cursive",fontSize:"30px"}}>Nutrition Plans:</Text>
      <FlatList
        data={nutritionPlans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.list}>
            <Text style={{fontSize:"20px",fontWeight:"600",margin:"auto"}}>{item.plan_name}</Text>
            <Text style={style.margin}>{item.goal}</Text>
            <Text style={style.margin}>{item.duration_weeks} weeks</Text>
            <Text style={style.margin}>{item.guidelines}</Text>
            {planId?<Button title='confirm' onPress={upateplan}/>
            :user?<Button title='+ Add' onPress={()=>handlePlan(item.id)}/>:null}

            {trainerId?<Button
            title="Update Plan"
            
            onPress={() => {
                     navigation.navigate('update_nutrition', { nutritionPlanId: item.id });
                     }}
            />:null}
          </View>
        )}
      />
    </View>
  );
};

export default ListNutritionPlans;

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
      marginLeft:15,
      marginBottom:5
  }
})