import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import axios from 'axios';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContactNumber] = useState('');

  const handleSignup = async () => {
   
    try {
      const response = await axios.post('http://127.0.0.1:8000/new_signup/', {
        name,
        age,
        gender,
        height,
        weight,
        email,
        contact_number,
      });

      console.log('Signup successful!', response.data);
      navigation.navigate('Login')
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      // Handle error cases here
    }
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={text=>setName(text)} />

      <Text>Age</Text>
      <TextInput value={age} onChangeText={age=>setAge(age)} keyboardType="numeric" />

      <Text>Gender</Text>
      <Picker selectedValue={gender} onValueChange={gen=>setGender(gen)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text>Height</Text>
      <TextInput value={height} onChangeText={hei=>setHeight(hei)} keyboardType="numeric" />

      <Text>Weight</Text>
      <TextInput value={weight} onChangeText={wei=>setWeight(wei)} keyboardType="numeric" />

      <Text>Email</Text>
      <TextInput value={email} onChangeText={email=>setEmail(email)} keyboardType="email-address" />

      <Text>Contact Number</Text>
      <TextInput value={contact_number} onChangeText={num=>setContactNumber(num)} keyboardType="phone-pad" />

      <Button title="Sign Up" onPress={handleSignup} />
      <Button title='Sign up as Trainer' onPress={()=>navigation.navigate("Trainer")}/>
    </View>
  );
};

export default SignupScreen;
