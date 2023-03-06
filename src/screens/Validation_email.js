import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
//import Buttons from '../Components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';
import  {useForm, Controller} from 'react-hook-form';
import image from '../../assets/images/email.png'
import axios from 'axios';

const Validation_email = ({navigation}) => {
  const [code, setCode]= useState('');
    const [pinReady, setPinReady] =useState(false);

    const MAX_CODE_LENGTH = 4;
    const {control, handleSubmit,getValues, formState: {errors}} = useForm();
    console.log(errors);
    
    var confirmCode;

    const onSignInPressed = (confirmCode) => {
   
      // console
      console.log(confirmCode);
        
          
    }
    return (
        
        <View style={{height:1000, backgroundColor: '#FF1717' }}>
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
        <View style = {{flexDirection: 'column', marginTop: 40, alignItems:'center'}}
                onSubmit={() => {onSignInPressed(onSubmit)}}>

          <Text style = {styles.txt}>  Enter your verification code</Text>
          
          <Controller
              control={control}
              name="code"
              rules={{required: 'Code is required'}}
              render={ ({field: {value, onChange , onBlur}, fieldState:{error}}) => 
               <>
                  <View style={{flexDirection:"column"}}>
                    <View style = {[styles.formContainer,  {borderColor: error? 'red': '#e8e8e8'}]}>
                      <Icon name='code' size={22} color="#818181"/>
                      <TextInput 
                        maxLength={4}
                        autoCapitalize='none'
                        keyboardType="number-pad"           
                        style = {[styles.input]} 
                        placeholder= "Your code"
                        placeholderTextColor="#818181"
                        //name={email}
                        value={value}
                        onChangeText = {onChange}
                        onBlur={onBlur}
                    /> 
                    </View>
                    {error && (<Text style={{color: 'red', alignSelf:'stretch', fontSize: 14.5}}>{error.message || 'Error'}</Text>)}
                  </View>               
               </>
              } 
              
            />        
             
                 
        </View>

        <TouchableOpacity style={styles.send}  onPress={ handleSubmit(onSignInPressed(confirmCode = getValues("code")))
           } >
          <Text style={styles.sendTxt} > Check</Text>
        </TouchableOpacity>   

        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', alignSelf:'center'}}>SignIn</Text>
        </TouchableOpacity>

       </View>
            </ScrollView>
        </View>
    )
};

Validation_email.navigationOptions = () => {
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
         paddingTop: 0,
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
        press:{
            justifyContent:'center',
            width:'85%',
            backgroundColor:"#FF1717",
            height:50,
            marginBottom:20,
            borderRadius:10,
            marginTop: 10,
            marginLeft:30,
        },
        pressTxt:{
            fontSize:15,
            letterSpacing:1.5,
            textAlign:'center',
            position:'relative',
            color:"#fff"
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
  

export default Validation_email;

