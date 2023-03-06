import React , {useState} from "react"
import { ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
//import Buttons from '../Components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';
//import { Profile_chef } from ".";

const Profile_chef = ({navigation}) => {


    return (
        
        <View style={{height:1000, backgroundColor: '#FF1717' }}>
            <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
             />

            <ScrollView  onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
                <View style={{padding:10, width:'100%', backgroundColor: '#FF1717', height:150, /*borderBottomRightRadius: 40, borderBottomLeftRadius: 40*/}}>
                           
                </View>

              <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/chef.png')} 
                         style={{width:140, height:140, borderRadius:100, marginTop:-70 }} >
                    </Image>

                    <View style={{flexDirection:'row'}}>                      
                      <Text style={{fontSize:25, fontWeight:'bold', padding:10, color:'#000',marginLeft: 20}}> Chef Burak</Text>
                      <Icon name='pencil' size={16} color="#818181" style={{padding:20, marginLeft: -20}}/>
                    </View>                       
                   
                </View>
                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>

                    <Icon name='envelope-o' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>Chef.Burak@gmail.com</Text>
                </View>

                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>
                    <Icon name='phone' size={22} color="#818181"/>

                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>+001 869745213</Text>
                </View>

                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>
                   <Icon name='map-pin' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>Canada</Text>
                </View>

                 <View style={{flexDirection: 'column', alignItems:'flex-end'}}>
                 <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20,backgroundColor:'#FF1717'
                                   }}>
                        
                    <Text style={{fontSize:15, color:'#fff', fontWeight:'blod'}}>Déconnecter</Text>
                </TouchableOpacity>   
                 </View>   
                </View>
                     
            </ScrollView>
        </View>
    )
};


export default Profile_chef

