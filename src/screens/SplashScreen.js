import React from "react"
import { StyleSheet, Text, View, StatusBar, Image } from "react-native"
import Colors from '../constants/Colors'
import ordear from '../../assets/images/ordear.png'

const SplashScreen = ({navigation}) => {

    setTimeout(() => {
     navigation.navigate('Login')
    },2000)
   
     return (
       <View style = {styles.container}>
         <StatusBar 
          barStyle="light-content"
          hidden= {false}
          backgroundColor ="#FF1717" 
         />
   
         <Image 
          source={ordear}
          style = {{ height: 220, width: 220}}
          />    
       </View>
     );
   };
   
   SplashScreen.navigationOptions = () => {
     return {
       headerShown: false,
     };
   };
   
   const styles = StyleSheet.create({
     container :{
       flex: 1,
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#FF1717',
     }
   });
   
   export default SplashScreen;