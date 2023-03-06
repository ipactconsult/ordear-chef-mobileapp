import React , {useState} from "react"
import {TextInput,ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity, } from "react-native"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const Edit_Porfile  = ({navigation}) => {

    const [avatar, setAvatar ]= useState('');
    const [username, setUsername ]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail ]= useState('');
    const [adresse, setAdresse ]= useState('');
    const [image, setImage] = useState(''); 
    const [address, setAdress] = useState(''); 


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
                        placeholder='Zidi Donia'
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                     
                     <Input
                        placeholder='Chef'
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                   
                     <Input
                        placeholder='001 869745213'
                        leftIcon={
                            <Icon
                            name='phone'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                    <Input
                        placeholder='Canada'
                        leftIcon={
                            <Icon
                            name='address-book-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
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