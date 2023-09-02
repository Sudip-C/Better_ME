import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

const ProfileScreen = () => {
  
  const [userdata,setuserData]=useState({});
  const [users,setUsers]=useState([])
  const [wPlan,setWplan]=useState([])
  const [nPlan,setNplan]=useState([])
  const toast=useToast()
useEffect(()=>{
  let userData=JSON.parse(localStorage.getItem("data"))
  setuserData(userData)
  
  axios.get(`http://localhost:8000/api/users/${userData.id}/`).
  then((res)=>setUsers(res.data)).catch((err)=>toast.show("can't get data:3",err.message))

  
},[])
useEffect(()=>{
  
  axios.get(`http://localhost:8000/api/workout-plans/${users.workout_plan_id}/`).
  then((res)=>setWplan(res.data)).catch((err)=>console.log("can't get data:2",err.message))

  axios.get(`http://localhost:8000/api/nutrition-plans/${users.nutrition_plan_id}/`).
  then((res)=>setNplan(res.data)).catch((err)=>console.log("can't get data:1",err.message))
  
},[users])
console.log(userdata)
console.log(wPlan)
console.log(users)
console.log(nPlan)
  return (<>
    <View style={styles.container}>
      <Text style={styles.label}>Name: {users.name}</Text>
      <Text style={styles.label}>Age: {users.age}</Text>
      <Text style={styles.label}>Gender: {users.gender}</Text>
      <Text style={styles.label}>Height: {users.height}</Text>
      <Text style={styles.label}>Weight: {users.weight}</Text>
      <Text style={styles.label}>Email: {users.email}</Text>
      <Text style={styles.label}>Contact Number: {users.contact_number}</Text>
    
    <Text style={styles.heading}>Your Plans:</Text>
    <View style={styles.list}>
            <Text style={{fontSize:"20px",fontWeight:"600",margin:"auto"}}>{wPlan.plan_name}</Text>
            <Text style={styles.margin}>{wPlan.goal}</Text>
            <Text style={styles.margin}>{wPlan.duration_weeks} weeks</Text>
            <Text style={styles.margin}>{wPlan.description}</Text>
    </View>
    <View style={styles.list}>
            <Text style={{fontSize:"20px",fontWeight:"600",margin:"auto"}}>{nPlan.plan_name}</Text>
            <Text style={styles.margin}>{nPlan.goal}</Text>
            <Text style={styles.margin}>{nPlan.duration_weeks} weeks</Text>
            <Text style={styles.margin}>{nPlan.guidelines}</Text>
    </View>  
    </View>
            </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading:{
    fontSize:'25px',
    fontFamily:"cursive",
    marginBottom:"10px"
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight:"600"
  },
  list:{
    width:"25%",
    flex:1,
    gap:10,
    borderWidth:1,
    marginBottom:20,
    paddingBottom:15
},
margin:{
    marginLeft:15,
    
}
});

export default ProfileScreen;
