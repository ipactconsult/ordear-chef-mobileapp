import Icon from 'react-native-vector-icons/FontAwesome';
import { View,Text,Image, StyleSheet ,TextInput,Button, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import  {useForm, Controller} from 'react-hook-form';
import ip_path from '../constants/Path'

const EMAIL_REGEX = /^[a-zA-Z0-9. !#$%&*+/?^_{1}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/ 

const Login = ({navigation}) => {
  var email = '';
  var password='';
     /*-------------HOOK---------------*/
  const {control, handleSubmit,getValues, formState: {errors}} = useForm();
    console.log(errors);
     /*------------------------- liaison avec back SignIn ------------------------------------ */
   const onSignInPressed = (email, password) => {
        console.log(email, password);
        const configuration = {
          method: "POST",
          url: ip.ip_path+"/SignIn",
          data: {
          email,
          password
          },
        };

        axios(configuration)
        .then(async(result) => {console.log("user connecté"); 
             navigation.navigate('Profile')  
        }) 
        .catch((error) => {console.log(error.response.data);
          console.log("user non connecté");})
   }

  return(
    <View style = {styles.container}> 
       <StatusBar 
         barStyle="dark-content"
         hidden= {false}
         backgroundColor ="#fff" 
       />
      <View style = {styles.loginContainer}>        

      <View style={{padding:-50, width:'100%', backgroundColor: '#fff', height:150,}}>
                    <TouchableOpacity style={{paddingTop:-30}}>
                         <Image source={require('../../assets/images/earth-globe.png')}style={{width:30, height:30,marginLeft:320}}></Image>
                    </TouchableOpacity>
                   
                    <View style={{justifyContent:'flex-start',alignItems:'center'}} > 
                      <Text style={{fontSize:25,color:'#000', top:'180%', alignSelf:'center',fontWeight: 'bold'}} >Let's Sign You In</Text>
                    </View>   
            </View>
        <View style = {{flexDirection:'column', paddingTop: 40 }}>
           <View style={{flexDirection:'row'}}>
   
            <Controller
              control={control}
              name="email"
              rules={{required: 'Email is required', pattern:{value: EMAIL_REGEX, message:'Email invalid'}}}
              render={ ({field: {value, onChange , onBlur}, fieldState:{error}}) => 
               <>
                  <View style={{flexDirection:"column"}}>
                    <View style = {[styles.formContainer,  {borderColor: error? 'red': '#e8e8e8'}]}>
                      <Icon name='envelope' size={22} color="#818181"/>
                      <TextInput 
                        autoCapitalize='none'           
                        style = {[styles.input]} 
                        placeholder= "Email"
                        placeholderTextColor="#818181"
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
         <View style={{flexDirection:'row'}}>

            <Controller
              control={control}
              name="password"
              rules={{required: 'Password is required', minLength: {value:6 , message: 'Password should be minimum 6 characters'}}}
              render={ ({field: {value, onChange, onBlur}, fieldState:{error}}) => 
              <>
                  <View style={{flexDirection:"column"}}>
                    <View style = {[styles.formContainer,  {borderColor: error? 'red': '#e8e8e8'}]}>
                      <Icon name='lock' size={22} color="#818181"/>
                      <TextInput 
                        secureTextEntry
                        autoCapitalize='none'           
                        style = {[styles.input]} 
                        placeholder= "Password"
                        placeholderTextColor="#818181"
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
                <View style = {{ width: "90%" , marginBottom: 5 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style = {styles.forgotPass}> Forgot Password ?</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.press}
                  onPress={ handleSubmit(onSignInPressed(email = getValues("email"), password=getValues("password")))
                  } >
                    <Text style={styles.pressTxt} >
                      SignIn</Text>
                </TouchableOpacity>
        </View>
      </View>
  </View>
  )
}
Login.navigationOptions = () => {
  return {
    headerShown: null,    
  };
};
/*------------styles----------*/
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:'column',
    alignItems: 'center',
    width:"100%",
    marginLeft:10
   
  },
 

  loginContainer: {
   flex:2,
   flexDirection: 'column',
   backgroundColor:"#fff",
   paddingTop: 40,
   paddingHorizontal:'3%',
   width:"95%",
   margin:5
  },

  socialContainer:{
   flex:2,
   flexDirection: 'column',
   backgroundColor:"#fff",
   paddingHorizontal: "3%",
  },
  text: {
    color: "#5E5E5E",
    marginLeft: 5,
    fontSize: 15,
    paddingTop: 0
  },

  formContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#ededed",
    width:"95%",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginTop:5,
    marginBottom: 10,
    borderWidth: 1, 
  },

  input: {
    position: 'relative',
    height:'100%',
    width:'95%',
    paddingLeft: 20,
      

  },

  forgotPass: {
    fontSize: 15,
    color: "#818181",
    alignSelf:'flex-end',
    paddingTop: 10,
    fontWeight: 'bold'
    
  },

 press:{
  justifyContent:'center',
  width:'95%',
  backgroundColor:"#FF1717",
  height:50,
  marginBottom:20,
  borderRadius:10,
  marginTop: 10
},
pressTxt:{
  fontSize:15,
  letterSpacing:1.5,
  textAlign:'center',
  position:'relative',
  color:"#fff"
},

/* ----- Social login Section -----*/
Or: {
  textAlign: 'center',
  marginVertical: 35,
  color:"#818181",
  fontSize: 20,
  fontWeight:'bold',
},

apps:{
  flexDirection: 'column',
  alignItems:'center',
  width:"95%",
},

touchable:{
  height: 50, 
  width: '100%',
  borderWidth: 1,
  borderRadius: 10,
  borderColor: "#747373",
  flexDirection:'row',
  alignItems:'center',
  marginBottom: 20

},

txtTouchable: {
  fontSize: 17,
  marginLeft: 5,
  width: '80%',
  textAlign: 'center'
},

 /* ----------- go to signup -----------------*/
signup: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems:'flex-end',
   backgroundColor:'#fff',
   
},
textSignUp: {
  fontSize: 15,
  color: "#818181"
},

icon:{
  position: 'absolute',
  right: 10,
},
translate: {
  height: 25,
  width:25,
  marginTop:22,
  marginHorizontal:160
}

});

export default Login;

