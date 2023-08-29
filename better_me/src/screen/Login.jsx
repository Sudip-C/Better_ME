import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Login =({navigation}) => {

    return (
        <View style={styles.container}>
       <Text style={styles.font}>Login</Text>
       <input style={styles.input} placeholder='enter Email'></input>
       <input style={styles.input} placeholder='enter Password'></input>

       <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Profile')} >Sign in</TouchableOpacity>
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
        borderColor:"black",
        padding:10
    }

})