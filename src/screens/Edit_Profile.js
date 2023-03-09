import React , {useState, useEffect} from "react"
import {TextInput,ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity, } from "react-native"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

const Edit_Porfile  = ({navigation}) => {

    const [password, setPassword ]= useState('');
    const[employee, setUser ]= useState({});
    const [username, setUsername ]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail ]= useState('');
    const [role, setRole] = useState(''); 
    const [address, setAdress] = useState('');
    
    useEffect(()=>{   
      
        axios.get('http://192.168.1.12:4000/view_profile').then((res)=>{
           // console.log(res)
            setUser(res.data[0])
        })

        },[employee])


    return (

        <View>
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
            /> 
           <ScrollView>
           <View style ={{ flexDirection:'column', justifyContent:'center'}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200, }}>
                        <Image source={require('../../assets/images/chef2.png')} 
                            style={{width:150, height:150, borderRadius:100, marginTop:30 }} >
                        </Image> 
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{paddingTop:-60}}>
                        <Image source={require('../../assets/images/confirmation.png')}style={{width:30, height:30,marginLeft:320}}></Image>
                   </TouchableOpacity>  

                </View>

                {/* ----------------- Inputs -------------------------------------- */}

                <View style={{flexDirection:'column', justifyContent:'center', width: '80%', alignSelf:'center', marginTop: 60}}>
                    <Input
                        placeholder= {employee.username}
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            
                            />
                        }
                        style = {styles.input} 
                        value={username}
                        onChangeText = {setUsername}
                    />
                     
                     <Input
                        placeholder={employee.role}
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            onChangeText = {setRole}
                            />
                        }
                        style = {styles.input} 
                        value={role}
                        onChangeText = {setRole}
                    />
                   
                     <Input
                        placeholder={employee.phone}
                        leftIcon={
                            <Icon
                            name='phone'
                            size={18}
                            color='black'
                            
                            />
                        }
                        style = {styles.input} 
                        value={phone}
                        onChangeText = {setPhone}
                    />
                    <Input
                        placeholder={employee.address}
                        leftIcon={
                            <Icon
                            name='address-book-o'
                            size={18}
                            color='black'
                          
                            />
                        }
                        style = {styles.input} 
                        value={address}
                        onChangeText = {setAdress}
                    />

                  <View style = {{ width: "90%" , marginBottom: 5 }}>
                    
                        <Text style = {styles.forgotPass}> You need to change your password !</Text>
                  
                  </View>
                  <Input
                        
                        leftIcon={
                            <Icon
                            name='lock'
                            size={18}
                            color='black'
                            
                            />
                        }
                        style = {styles.input} 
                        value={password}
                        onChangeText = {setPassword}
                    />



                </View>    
           
            </View>
           </ScrollView>
        </View>
        
    );

};

Edit_Porfile.navigationOptions = () => {
    return {
      headerShown: null,    
    };
};

const styles = StyleSheet.create({

    txt: {        
        marginTop:15
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

export default Edit_Porfile;