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

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {userProfile.name}</Text>
      <Text style={styles.label}>Age: {userProfile.age}</Text>
      <Text style={styles.label}>Gender: {userProfile.gender}</Text>
      <Text style={styles.label}>Height: {userProfile.height}</Text>
      <Text style={styles.label}>Weight: {userProfile.weight}</Text>
      <Text style={styles.label}>Email: {userProfile.email}</Text>
      <Text style={styles.label}>Contact Number: {userProfile.contactNumber}</Text>
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
