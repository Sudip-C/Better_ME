import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import axios from 'axios';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [password,setPassword] =useState('')

  const handleSignup = async () => {
   
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-signup/', {
        name,
        age,
        gender,
        height,
        weight,
        email,
        contact_number,
        password
      });

      console.log('Signup successful!', response.data);
      navigation.navigate('Login')
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      
    }
  };

  return (
    <View style={styles.container} >
      <Text>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={text=>setName(text)} />

      <Text>Age</Text>
      <TextInput style={styles.input} value={age} onChangeText={age=>setAge(age)} keyboardType="numeric" />

      <Text>Gender</Text>
      <Picker selectedValue={gender} onValueChange={gen=>setGender(gen)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text>Height</Text>
      <TextInput style={styles.input} value={height} onChangeText={hei=>setHeight(hei)} keyboardType="numeric" />

      <Text>Weight</Text>
      <TextInput style={styles.input} value={weight} onChangeText={wei=>setWeight(wei)} keyboardType="numeric" />

      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={email=>setEmail(email)} keyboardType="email-address" />

      <Text>Contact Number</Text>
      <TextInput style={styles.input} value={contact_number} onChangeText={num=>setContactNumber(num)} keyboardType="phone-pad" />
      <Text>Password:</Text>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={p=>setPassword(p)} />
      <Button title="Sign Up" onPress={handleSignup} /><br/>
      <Button title='Sign up as Trainer' onPress={()=>navigation.navigate("Trainer")}/>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    // position:'absolute',
    width:'30%',
    height:"80%",
    margin:'auto',
    padding:10,
    gap:20,
   borderWidth:1
},
input:{
  borderWidth:1,
    borderColor:"black",
    padding:10
}
})

export default SignupScreen;
