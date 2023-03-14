import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import ip_path from '../constants/Path'

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail]= useState('');
  const [isEmailValid, setIsEmailValid]= useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [showErrors, setShowErrors] = useState(false);
  /*------------------------- Input Control ------------------------------------ */
  const handleEmailChange = (value) => {
    setEmail(value);
    setIsEmpty(value.trim().length === 0);
    setIsEmailValid(validateEmail(value));
    setShowErrors(false);
  };
  const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
    /*------------------------- liaison avec back ------------------------------------ */
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowErrors(!isEmailValid || isEmpty);

        if (!isEmailValid) {
          alert('Please enter a valid email address!');
          //setShowErrors(false);
        } 
       else  if (isEmpty) {
          //alert('Please fill in the input field!');
        }
       else{
          const configuration = {
            method: "PUT",
            url:  ip.ip_path+"/forgotPass",
            data: {
               email,
            },
            };
            axios(configuration)
            .then((result) => {console.log("Email sent");           
              navigation.navigate('VerifPassCode')})
            .catch((err) => {console.log("Email not sent !"); }) 
        }
        
    }
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
                  onChangeText = {handleEmailChange}
                />
                
          </View> 
                {showErrors && isEmpty && <Text style={{ color: 'red' }}>Email cannot be empty</Text>}
                {!isEmailValid && <Text style={{ color: 'red' }}>Invalid email address</Text>}                   
        </View>

                <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)} >
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

