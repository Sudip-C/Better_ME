import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import axios from 'axios';
const TrainerSignup = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [password,setPassword]=useState("")

  const handleTrainerSignup = async () => {
   
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/trainer-signup/', {
        name,
        gender,
        specialization,
        experience,
        email,
        contact_number,
        password
      });

      console.log('Trainer signup successful!', response.data);
      navigation.navigate('Trainer_login')
      // You might want to navigate to a success screen or perform other actions here
    } catch (error) {
      console.error('Error signing up as a trainer:',error.response);
      // Handle error cases here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={name=>setName(name)} />

      <Text style={styles.label}>Gender</Text>
      <Picker style={styles.input} selectedValue={gender} onValueChange={gen=>setGender(gen)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.label}>Specialization</Text>
      <TextInput style={styles.input} value={specialization} onChangeText={specs=>setSpecialization(specs)} />

      <Text style={styles.label}>Experience</Text>
      <TextInput
        style={styles.input}
        value={experience}
        onChangeText={exp=>setExperience(exp)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={email=>setEmail(email)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.input}
        value={contact_number}
        onChangeText={num=>setContactNumber(num)}
        keyboardType="phone-pad"
      />
      <Text>Password:</Text>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={p=>setPassword(p)} />
      <Button title="Sign Up" onPress={handleTrainerSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default TrainerSignup;
