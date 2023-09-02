import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

const Login =({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast=useToast()
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/user-login/', { email, password });
        toast.show('Welcome!!')
        console.log(response.data); 
        localStorage.setItem("data",JSON.stringify(response.data))
        localStorage.removeItem("trainer")
        navigation.navigate('Profile')
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
        <Text onPress={()=>navigation.navigate("Signup")} >Don't have account? Create a Account.</Text>
        <Button title="Login" onPress={handleLogin} /><br/>
        <Button title='Sign in as Trainer' onPress={()=>navigation.navigate("Trainer_login")} />
      </View>
    );
};

export default Login;

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