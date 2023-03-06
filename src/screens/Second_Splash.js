import React from "react"
//import {Text, View } from "react-native"
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from "react-native"
import Buttons from '../components/Buttons'


const Onboarding = ({navigation}) => {
    setTimeout(()=>{
        navigation.replace('Login')
    },5000)
    return (
        <View style={{flex:1,backgroundColor:'#fff'}} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/*image */}
            <View style={{flex:3,flexDirection:"column",backgroundColor:'#fff'}} >
                <ImageBackground source={require('../../assets/images/ordear.png')}
                style={{flex:1,width: 350, height: 350, marginTop:30, marginRight:250 ,marginLeft:20 ,backgroundColor:'#fff'}}  />
            </View>

            {/* button and text */}
            <View style={{flex:2,backgroundColor:'#fff'}} >
                
                {/* Text part */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff'}} >
                    <Text style={{color:'#333',fontSize:30}} >Ordear</Text>
                    <Text style={{maxWidth:'50%', color:"#999",fontSize:14, textAlign:'center',paddingTop:10}} >Rendre votre journée un régal.</Text>
                </View>   
            </View>
            
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})