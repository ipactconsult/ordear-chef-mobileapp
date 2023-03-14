import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import ip_path from '../constants/Path'
const LENGTH = 4;

const VerifPassCode = ({navigation}) => {

  const [activationCodeForgotPass, setActivationCodeForgotPass]= useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [isCode, setConfirmCode] = useState(true);
  const [showErrors, setShowErrors] = useState(false);
  /*------------------------- Input Control ------------------------------------ */
  const handleChange = (value) => {
    setActivationCodeForgotPass(value);
    setIsEmpty(value.trim().length === 0);
    setShowErrors(false);
    if (value.length === LENGTH) {
      setConfirmCode(true);
    } 
     else {
      setConfirmCode(false);
    }
  };
    /*------------------------- liaison avec back ------------------------------------ */
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowErrors(!isCode ||isEmpty );
        if (!isCode) {
          //alert('Please fill in the input field!');
        }
       if (isEmpty) {
          //alert('Please fill in the input field!');
        }
        else{
          const configuration = {
            method: "POST",
            url: ip.ip_path+"/codePass",
            data: {
                activationCodeForgotPass,
            },
            };
    
            axios(configuration)
            .then((result) => {console.log("Code verified");           
              navigation.navigate('ResetPasswordScreen')})
            .catch((error) => {console.log("Code not verified !"); }) 
        }
        
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
                    
              <Text style = {styles.txt}> Enter your verification code</Text>
              <View style = {styles.formContainer}>
                <Icon name='check-circle-o' size={22} color="#818181"/>
                <TextInput 
                  maxLength={4}
                  autoCapitalize='none'
                  style = {styles.input} 
                  placeholder= "Enter the code"
                  placeholderTextColor="#818181"
                  name={activationCodeForgotPass}
                  value={activationCodeForgotPass}
                  onChangeText = {handleChange}
                />
          </View>  
          {showErrors && isEmpty && <Text style={{ color: 'red' }}>Code cannot be empty</Text>}  
          {!isCode && <Text style={{ color: 'red' }}>Code value must be  4 characters</Text>}              
        </View>

                <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)}>
                    <Text style={styles.sendTxt} >Send</Text>
                </TouchableOpacity>
                    
               <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', alignSelf:'center'}}>SignIn</Text>
               </TouchableOpacity>

                 
              </View>
                     
            </ScrollView>
        </View>
    )
};

VerifPassCode.navigationOptions = () => {
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
  

export default VerifPassCode;

