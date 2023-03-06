import React , {useState} from "react"
import { ScrollView,TouchableHighlight, StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from "react-native"
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';



const Profile = ({navigation}) => {
    return (
        <View style={{height:1000, backgroundColor: '#fff'}}>
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
             />
            
                    <View style={{padding:10, width:'100%', backgroundColor: '#fff', height:150}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit_Profile')} style={{paddingTop:-60}}>
                    <Icon name='pencil' size={30} color="#000" style={{width:30, height:30,marginLeft:350}} />
                   </TouchableOpacity>
                    </View>
                    <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                    <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                        <Image source={require('../../assets/images/chef2.png')} 
                            style={{width:140, height:140, borderRadius:100, marginTop:-70 }} >
                        </Image>

                        <View style={{flexDirection:'row'}}>                      
                        <Text style={{fontSize:25, fontWeight:'bold', padding:10, color:'#000',marginLeft: 20}}> Zidi Donia</Text>
                        
                        </View>                       
                   
                   </View>

                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20, paddingRight:70
                                   }}>
                        <Image source={require('../../assets/images/assiette.png')} 
                        style={{width:30, height:30, marginRight:10 }}></Image>
                        <Text style={{fontSize:15, color:'#818181', fontWeight:'blod'}}>Chef</Text>
                    </View>
                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20
                                   }}>
                        <Image source={require('../../assets/images/telephone.png')} 
                        style={{width:25, height:25, marginRight:10  }}></Image>
                        <Text style={{fontSize:15, color:'#818181', fontWeight:'blod'}}>+001 869745213</Text>
                    </View>
                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20
                                   }}>
                        <Image source={require('../../assets/images/email.png')} 
                        style={{width:25, height:25, marginRight:10  }}></Image>
                        <Text style={{fontSize:15, color:'#818181', fontWeight:'blod'}}>Donia.zidi.dz@gmail.com</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20,backgroundColor:'#D90A0A'
                                   }}>
                        
                        <Text style={{fontSize:15, color:'#fff', fontWeight:'blod'}}>Logout</Text>
                    </TouchableOpacity>
                    
                    </View> 
                    

           
        </View>
    )
}


export default Profile

