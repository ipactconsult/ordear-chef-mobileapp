import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/Login'
import Profile from './src/screens/Profile'
import Edit_Profile from './src/screens/Edit_Profile'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import VerifPassCode from './src/screens/VerifPassCode'
import ResetPasswordScreen from './src/screens/ResetPasswordScreen'
import ViewProfile from './src/screens/ViewProfile'
import ChangePassword from './src/screens/ChangePassword'
const Stack = createNativeStackNavigator();


const App = ()=>{
  return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown:false}} >
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Profile_chef" component={Profile_chef} />
              <Stack.Screen name="Update_Profile" component={Update_Profile} />
              <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
              <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
              <Stack.Screen name="VerifPassCode" component={VerifPassCode} />
              <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
              <Stack.Screen name="ViewProfile" component={ViewProfile} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App