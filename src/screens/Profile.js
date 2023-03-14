
import React , {useState, useEffect} from "react"
import { ScrollView,TouchableHighlight, StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import ip_path from '../constants/Path'
const Profile = ({navigation}) => {

    const[employee, setUser ]= useState({});
    const [username, setUsername ]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail ]= useState('');
    const [address, setAdress] = useState('');
    const [role, setRole]= useState(''); 
    /*------------------------- liaison avec back ------------------------------------ */
    useEffect(()=>{   
      
        axios.get('http://192.168.1.14:8000/employees/view_profile').then((res)=>{
            setUser(res.data[0])
        })

        },[employee])

     /*------------------------- log Out ------------------------------------ */
     const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
        method: "POST",
        url: ip.ip_path+"/logout",
        };

        axios(configuration)
        .then((result) => {console.log("Logged Out");           
          navigation.navigate('Login')})
        .catch((error) => {console.log("Erreur"); }) 
    }
    return (
        <View style={{height:1000, backgroundColor: '#fff'}}>
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
             />
                   <ScrollView  onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
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
                        <Text style={{fontSize:25, fontWeight:'bold', padding:10, color:'#000',marginLeft: 20}}> {employee.username}</Text>
                        
                        </View>                       
                   
                   </View>

                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20, paddingRight:70
                                   }}>
                        <Image source={require('../../assets/images/telephone.png')} 
                        style={{width:30, height:30, marginRight:10 }}></Image>
                        <Text style={{fontSize:15, color:'#818181', fontWeight:'blod'}}>{employee.phone}</Text>
                    </View>
                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20
                                   }}>
                        <Image source={require('../../assets/images/earth-globe.png')} 
                        style={{width:25, height:25, marginRight:10  }}></Image>
                        <Text style={{fontSize:15, color:'#818181', fontWeight:'blod'}}> {employee.address}</Text>
                    </View>
                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20
                                   }}>
                        <Image source={require('../../assets/images/email.png')} 
                        style={{width:25, height:25, marginRight:10  }}></Image>
                        <Text style={{fontSize:15, color:'#818181', fontWeight:'blod'}}>{employee.email}</Text>
                    </View>
                    <TouchableOpacity onPress={(e) => handleSubmit(e)} style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20,backgroundColor:'#D90A0A'
                                   }}>
                        
                        <Text style={{fontSize:15, color:'#fff', fontWeight:'blod'}}>Logout</Text>
                    </TouchableOpacity>
                    
                    </View> 
                    

                    </ScrollView>
        </View>
    )
}
export default Profile


