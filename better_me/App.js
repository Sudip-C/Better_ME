import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfileScreen from './src/screen/UserProfileScreen';
import SignupScreen from './src/screen/Signup';
import TrainerSignup from './src/screen/TrainerSignup';
import Home from './src/screen/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Profile" component={UserProfileScreen}/>
      <Stack.Screen name="Trainer" component={TrainerSignup}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
