import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/Login'
import Password from './src/screens/Password'
import Validation_email from './src/screens/Validation_email'
import Profile from './src/screens/Profile'
import New_Password from './src/screens/New_Password'
import Add from './src/screens/Add'
import Add_Executor from './src/screens/Add_Executor'
import Profile_chef from './src/screens/Profile_chef'
import Update_Profile from './src/screens/Update_Profile'


import Edit_Profile from './src/screens/Edit_Profile'

//import Add_Super_Admin from './src/screens/Add_Super_Admin'

const Stack = createNativeStackNavigator();


const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
               
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Password" component={Password} />
              <Stack.Screen name="Validation_email" component={Validation_email} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="New_Password" component={New_Password} />
              <Stack.Screen name="Add" component={Add} />
              <Stack.Screen name="Add_Executor" component={Add_Executor} />
              <Stack.Screen name="Profile_chef" component={Profile_chef} />
              <Stack.Screen name="Update_Profile" component={Update_Profile} />
              <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
              
            
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App