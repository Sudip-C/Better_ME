import React from 'react';
import {Text, View} from 'react-native';

const Login =({navigation}) => {

    return (
        <View >
       <Text>Login</Text>
       <button onClick={()=>navigation.navigate('Signup')}>signup</button>
        </View>
    );
};

export default Login;
