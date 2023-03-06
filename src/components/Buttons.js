import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Buttons = ({on_press,btn_text}) => {
    return (
        <TouchableOpacity style={{justifyContent:'center',width:'95%',backgroundColor:'#D90A0A',height:50,marginBottom:30,borderRadius:10}} 
        onPress={on_press}
        >
            <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color:Colors.white}} >{btn_text}</Text>


        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({})