import React, { useState } from "react";
import { ScrollView, View,Text,Image, StyleSheet ,Button, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const ChangePassword = ({navigation}) => {

  const [password, setPassword]= useState('');
  [Confirmpassword, setConfirmPassword]= useState('');

  /*------------------------- liaison avec back ------------------------------------ */
 const handleSubmit = (e) => {
  e.preventDefault();
  const configuration = {
  method: "put",
  url: "http://192.168.1.102:4000/changePass",
  data: {
     password,
  },
  };

  axios(configuration)
  .then((result) => {console.log("Password changed");           
    navigation.navigate('Login')})
  .catch((error) => {console.log("Password has not changed"); }) 
  
}
  return (
        
    <View style={{height:700, backgroundColor: '#fff' }}>
        <StatusBar 
            barStyle="dark-content"
            hidden= {false}
            backgroundColor ="#fff" 
         />

        <ScrollView  onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
            <View style={{padding:10, width:'100%', backgroundColor: '#fff', height:250, /*borderBottomRightRadius: 40, borderBottomLeftRadius: 40*/}}>
                       
            </View>

          <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
            <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                <Image source={require('../../assets/images/reset.png')} 
                     style={{width:150, height:150, borderRadius:100, marginTop:-70 }} >
                </Image>                       
            </View>

            {/* ----------------------- Forgot Password Data ----------------------------- */}
          <View style = {{flexDirection: 'column', marginTop: 80}}>
                
          <Text style = {styles.txt}> Enter your new password</Text>
            <View style = {styles.formContainer}>
                <Icon name='lock' size={22} color="#818181"/>
                <TextInput 
                secureTextEntry
                  autoCapitalize='none'
                  style = {styles.input} 
                  placeholder= "New Password"
                  placeholderTextColor="#818181"
                  name={password}
                  value={password}
                  onChangeText = {setPassword}
                />
          </View>   
          <View style = {styles.formContainer}>
                <Icon name='lock' size={22} color="#818181"/>
                  <TextInput 
                  secureTextEntry
                    autoCapitalize='none'
                    style = {styles.input} 
                    placeholder= "Confirm Password"
                    placeholderTextColor="#818181"
                    name={Confirmpassword}
                    value={Confirmpassword}
                    onChangeText = {setConfirmPassword}
                  />
            </View>                  
        </View>

            <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)} disabled ={password? false:true}  >
                <Text style={styles.sendTxt} >Send</Text>
            </TouchableOpacity>
             
          </View>
                 
        </ScrollView>
    </View>
)
};

ChangePassword.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };

  const styles = StyleSheet.create({

    entete: {
      height: 150,
      backgroundColor:"#FEF0E5",
      marginBottom:200,
    },
  
      container : {
          flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
          alignItems: 'center',
          width:"100%",
          justifyContent: 'center'
        },
  
        forgotTxt:{
          fontSize: 30,
          fontWeight:"600", 
          color: '#232323'
        },
  
        txt:{
         color: "#5E5E5E",
         marginLeft: 5,
         fontSize: 15,
         paddingTop: -40,
         alignSelf:'center'
        },
  
        formContainer:{
          flexDirection:'row',
          justifyContent: 'center',
          alignItems:'center',
          alignSelf:'center',
          backgroundColor:"#ededed",
          width:"90%",
          borderRadius: 10,
          height: 60,
          paddingLeft: 20,
          marginTop:15,
          marginBottom: 10,
        },
  
      input: {
          position: 'relative',
          height:'100%',
          width:'95%',
          paddingLeft: 20,
          alignSelf:'center',
         
      
        },
  
        send:{
          justifyContent:'center',
          alignSelf:'center',
          width:'95%',
          backgroundColor:"#FF1717",
          height:50,
          borderRadius:10,
          marginTop: 0,
          marginBottom:5
          
        },
        sendTxt:{
          fontSize:15,
          letterSpacing:1.5,
          textAlign:'center',
          position:'relative',
          color:"#fff"
        },
  });
  
export default ChangePassword;