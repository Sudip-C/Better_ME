import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";

const Trainer_login =({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const toast = useToast()
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/trainer-login/', { email, password });
        toast.show("Login Successfull")
        console.log(response.data); 
        localStorage.setItem("trainer",JSON.stringify(response.data))
        localStorage.removeItem("data")
        navigation.navigate("Workout_plan")
      } catch (error) {
        console.error(error.response.data.detail);
      }
    };
    return (
        <View style={styles.container}>
        <Text>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={e=>setEmail(e)} />
  
        <Text>Password:</Text>
        <TextInput style={styles.input} secureTextEntry value={password} onChangeText={p=>setPassword(p)} />
        <Text onPress={()=>navigation.navigate("Trainer")} >Don't have account? Create a Account.</Text>
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
};

export default Trainer_login;

const styles=StyleSheet.create({
    container:{
        width:'30%',
        margin:'auto',
        padding:10,
        gap:20,
       borderWidth:1
    },
    button:{
        backgroundColor:"green",
        color:"white",
        fontWeight:600,
        padding:10,
        alignItems:"center"
        
    },
    font:{
        // fontSize:'20px',
        fontFamily:"cursive"
    },
    input:{
      borderWidth:1,
        borderColor:"black",
        padding:10
    }

})