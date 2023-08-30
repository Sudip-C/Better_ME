import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // Dummy data, replace with actual data from your API or state management
  const userProfile = {
    name: 'John Doe',
    age: 28,
    gender: 'Male',
    height: 175,
    weight: 70,
    email: 'john@example.com',
    contactNumber: '1234567890',
  };
  const [userdata,setuserData]=useState({});
useEffect(()=>{
  let userData=JSON.parse(localStorage.getItem("data"))
  setuserData(userData)
},[])
console.log(userdata)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {userdata.name}</Text>
      <Text style={styles.label}>Age: {userdata.age}</Text>
      <Text style={styles.label}>Gender: {userdata.gender}</Text>
      <Text style={styles.label}>Height: {userdata.height}</Text>
      <Text style={styles.label}>Weight: {userdata.weight}</Text>
      <Text style={styles.label}>Email: {userdata.email}</Text>
      <Text style={styles.label}>Contact Number: {userdata.contact_number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    // fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
