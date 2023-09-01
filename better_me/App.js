import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfileScreen from './src/screen/UserProfileScreen';
import SignupScreen from './src/screen/Signup';
import TrainerSignup from './src/screen/TrainerSignup';
import Home from './src/screen/Home';
import Trainer_login from './src/screen/TrainerLogin';
import ListWorkoutPlans from './src/screen/WorkoutPlans';
import CreateWorkoutPlan from './src/screen/CreateworkoutPlans';
import UpdateWorkoutPlan from './src/screen/UpdateWorkoutPlan';

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
      <Stack.Screen name="Trainer_login" component={Trainer_login} />
      <Stack.Screen name="Workout_plan" component={ListWorkoutPlans}/>
      <Stack.Screen name='Create_workout_plan' component={CreateWorkoutPlan}/>
      <Stack.Screen name='UpdateWorkoutPlan' component={UpdateWorkoutPlan}/>
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
