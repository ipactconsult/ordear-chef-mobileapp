import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
//import Buttons from '../Components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail]= useState('');

    /*------------------------- liaison avec back ------------------------------------ */
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        //Alert.alert("Submited");
        

        const configuration = {
        method: "put",
        url: "http://192.168.1.12:4000/forgotPass",
        data: {
           email,
        },
        };

        axios(configuration)
        .then((result) => {console.log("Email sent");           
          navigation.navigate('VerifPassCode')})
        .catch((err) => {console.log("Email not sent !"); }) 
    }
    /*------------------------------------------------------------------------------*/
    

    return (
        
        <View style={{height:700, backgroundColor: '#FF1717' }}>
            <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
             />

            <ScrollView  onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
                <View style={{padding:10, width:'100%', backgroundColor: '#FF1717', height:250, /*borderBottomRightRadius: 40, borderBottomLeftRadius: 40*/}}>
                           
                </View>

              <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/reset.png')} 
                         style={{width:150, height:150, borderRadius:100, marginTop:-70 }} >
                    </Image>                       
                </View>

                {/* ----------------------- Forgot Password Data ----------------------------- */}
              <View style = {{flexDirection: 'column', marginTop: 80}}>
                    
              <Text style = {styles.txt}> Enter your verification Email</Text>
              <View style = {styles.formContainer}>
                <Icon name='envelope-o' size={22} color="#818181"/>
                <TextInput 
                  autoCapitalize='none'
                  style = {styles.input} 
                  placeholder= "Your email"
                  placeholderTextColor="#818181"
                  name={email}
                  value={email}
                  onChangeText = {setEmail}
                />
          </View>                    
        </View>

                <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)}  >
                    <Text style={styles.sendTxt} >Send</Text>
                </TouchableOpacity>
                    
               <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', alignSelf:'center'}}>signIn</Text>
               </TouchableOpacity>

                 
              </View>
                     
            </ScrollView>
        </View>
    )
};

ForgotPasswordScreen.navigationOptions = () => {
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
  

export default ForgotPasswordScreen;

