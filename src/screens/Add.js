import React , {useState} from "react"
import {Alert ,StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from "react-native"
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import axios from 'axios';



const Add = ({navigation}) => {

    const [username, setUsername]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(''); 
    const [image, setImage] = useState(''); 
    const [address, setAdress] = useState(''); 
    const [role, setRole ]= useState(''); 
    const [restaurant, setrestaurant] = useState(''); 
    
    {/** 
    const handleSubmit = (e) => {
          // prevent the form from refreshing the whole page
          e.preventDefault();

          //Alert.alert('hello');

          const configuration = {
              method: "post",
            //  url: "http://192.168.0.106:5000/add_restaurant_responsible",
              data: {
                username,
                email,
                password,
                phone,
                image,
                address,
                role,
              },
            };
            axios(configuration)
              .then((result) => {console.log("user registered");  
              navigation.navigate('Profile')})
              .catch((error) => {console.log(error)});
              
          
        }*/}
   

    return (
        <ScrollView>
            <View style={{flex:1,backgroundColor:'#fff',flexDirection:'column', paddingHorizontal:'3%', height:900}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:20,paddingHorizontal:'3%'}} >
                
                <Text style={{fontSize:20,paddingTop:10,color:"#777", top:'5%'}} >Merci d'ajouter un nouveau agent</Text>

                <View style={{flexDirection:'column',paddingTop:20, height:600}}
                  onSubmit={(e) => {handleSubmit(onSubmit)(e)}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                            width:'95%',borderRadius:10,height:60,paddingLeft:20, top:'5%',marginTop:20}} >
                        <Icon name="user-o" size={22} color="#818181" />
                        <TextInput
                        onChangeText={setUsername} 
                        style={styles.input}
                        placeholder=" User Name"
                        name={username}
                        value={username}
                        placeholderTextColor="#818181" />

                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                              width:'95%',borderRadius:10,height:60,paddingLeft:20, top:'5%',marginTop:20}} >
                        <Icon name="envelope-o" size={22} color="#818181" />
                        <TextInput 
                        onChangeText={setEmail} 
                        name={email}
                        style={styles.input}
                        placeholder=" Email" 
                        value={email}
                        placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',
                    borderRadius:10,height:60,paddingLeft:20,marginTop:20, top:'5%'}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput 
                          name={password}
                          value={password}
                          onChangeText={setPassword}
                          //onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}}
                          style={styles.input} placeholder="Mot de passe" 
                          secureTextEntry={true} 
                          placeholderTextColor="#818181" />
                          
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                    width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20, top:'5%'}} >
                      <Icon name="user-o" size={22} color="#818181" />
                        <TextInput 
                        name={phone}
                        value={phone}
                        onChangeText={setPhone}
                          //onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}}
                        style={styles.input} placeholder="Numéro télephone" keyboardType="phone-pad"
                        placeholderTextColor="#818181" />
                          
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                    width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20, top:'5%'}} >
                        <Icon name="user-o" size={22} color="#818181" />
                        <TextInput 
                        name={address}
                        value={address}
                        onChangeText={setAdress}
                          //onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}}
                        style={styles.input} placeholder="Addresse" 
                        
                        placeholderTextColor="#818181" />
                          
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                    width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20, top:'5%'}} keyboardType="phone-pad"  >
                        <Icon name="user-o" size={22} color="#818181" />
                        <TextInput 
                        name={image}
                        value={image}
                        onChangeText={setImage}
                          //onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}}
                        style={styles.input} placeholder="image" 
                    
                        placeholderTextColor="#818181" />
                          
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                    width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20, top:'5%'}} keyboardType="phone-pad"  >
                        <Icon name="user-o" size={22} color="#818181" />
                        <TextInput 
                        name={role}
                        value={role}
                        onChangeText={setRole}
                          //onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}}
                        style={styles.input} placeholder="Role souhaité" 
                    
                        placeholderTextColor="#818181" />
                          
                    </View>
                    {/** <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',
                    width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20, top:'5%'}} >
                       <Icon name="user-o" size={22} color="#818181" />
                        <TextInput 
                        name={restaurant}
                        value={restaurant}
                        onChangeText={setrestaurant}
                          //onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}}
                        style={styles.input} placeholder="Restaurant" 
                        
                        placeholderTextColor="#818181" />
                          
                    </View> */}
                   

                    <View style={{ top:'10%'}} >
                     {/** <Buttons  btn_text={"Connecter"} on_press={() => navigation.navigate("Add")} />
                      * onPress={(e) => handleSubmit(e)}
                     */}
                        <TouchableOpacity style={styles.press} on_press={() => navigation.navigate("Profile")}>
                        <Text style={styles.pressTxt}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>

                    
                    
                </View>
            </View>        
            
        </View>
        </ScrollView>
    )
}

export default Add

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
      
        paddingLeft:20,
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    press:{
        justifyContent:'center',
        width:'95%',
        backgroundColor:"#FF1717",
        height:50,
        marginBottom:20,
        borderRadius:10,
        marginTop: 10
    },
    pressTxt:{
        fontSize:15,
        letterSpacing:1.5,
        textAlign:'center',
        position:'relative',
        color:"#fff"
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
})