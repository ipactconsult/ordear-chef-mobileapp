import React , {useState, useEffect} from "react"
import {TextInput,ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity, } from "react-native"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import ip_path from '../constants/Path'

const Edit_Porfile  = ({navigation}) => {

    const [password, setPassword ]= useState('');
    const[employee, setUser ]= useState({});
    const [username, setUsername ]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail ]= useState('');
    const [role, setRole] = useState(''); 
    const [address, setAdress] = useState('');
     /*------------------------- liaison avec back GET DATA ------------------------------------ */
    useEffect(()=>{   
      
        axios.get('http://192.168.1.14:8000/employees/view_profile').then((res)=>{
            setUser(res.data[0])
        })
        },[employee])
  /*------------------------- liaison avec back UPDATE ------------------------------------ */
         const handleSubmit = (e) => {
            e.preventDefault();
            const configuration = {
            method: "PUT",
            url: ip.ip_path+"/edit_profile",
            data: {
               phone: phone || employee.phone,
               address:address || employee.address,
            },
            };
            axios(configuration)
            .then((result) => {console.log("Data changed");           
              navigation.navigate('Profile')})
            .catch((error) => {console.log("Data has not changed"); }) 
          }
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
                        <TouchableOpacity onPress={(e) => handleSubmit(e)} style={{paddingTop:-60}}>
                        <Image source={require('../../assets/images/confirmation.png')}style={{width:30, height:30,marginLeft:320}}></Image>
                   </TouchableOpacity>  

                </View>
      {/* ----------------- Inputs -------------------------------------- */}
                <View style={{flexDirection:'column', justifyContent:'center', width: '80%', alignSelf:'center', marginTop: 60}}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                           <Text style = {styles.forgotPass}> You need to change your password !</Text>
                       </TouchableOpacity>
                  </View>
                  

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