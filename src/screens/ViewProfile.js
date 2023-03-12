import React , {useState, useEffect} from "react"
import { ScrollView,TouchableHighlight, StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from "react-native"
import { useRoute } from "@react-navigation/native";

const ViewProfile = ({navigation}) => {

    const [user, setUser ]= useState('');
    const route = useRoute();

    const [username, setusername ]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail ]= useState('');
    const [address, setAddress ]= useState('');
    const [role, setRole ]= useState(''); 

    return (
        <View>
      <Text>Full_Name:</Text>
      <Text style={{ fontWeight: "bold" }}>{user.username}</Text>

      <Text>Email:</Text>
      <Text style={{ fontWeight: "bold" }}>{user.email}</Text>

      <Text>address:</Text>
      <Text style={{ fontWeight: "bold" }}>{user.address}</Text>

      <Text>Phone:</Text>
      <Text style={{ fontWeight: "bold" }}>{user.phone}</Text>
     
    </View>
  );
}


export default ViewProfile


