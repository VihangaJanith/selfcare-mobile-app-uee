import { View, Text, Button, StyleSheet , ScrollView, TextInput, TouchableOpacity, Image, Pressable, ToastAndroid} from 'react-native'
import React, { useState,useEffect} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({navigation}) => {

    
    const [email, setEmail] = useState('');
   
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const [name, setName] = useState('');
    const [error, setError] = useState('');
   
let STORAGE_KEY = '@user_input';


const showToast = () => {
  const message = error
  ToastAndroid.show(message, ToastAndroid.SHORT);
 
};

    const handleSubmit = async () => {
        try {
            if (email === '' || password === '' ) {
                setError('Please provide all the fields')
                showToast()
                return false
            }
        
            else {
                const data = {
                    
                    email,
                  
                    password,
                    
                    
                }
                await axios.post('http://192.168.8.113:5000/user/login', data)
                .then((res) => {
                    console.log(res.data)


                    if (res.data.token) {
     
                        AsyncStorage.setItem('vjs', res.data.token);
                       
                        alert('Login Successfully')
                        
                      } else {
                        
                        
                       
                        setError(res.data)
                        showToast()
                        
                    
                    


                    // const value =  AsyncStorage.getItem(STORAGE_KEY)
                    // if(value !== null) {
                    //     console.log(value)
                       
                        
                    // }

                



                }}
                )

                

                
            }
        } catch (error) {
            console.log(error)
        }
    }


    // useEffect(() => {

    //     try {
       
    //         AsyncStorage.getItem('vjs').then((value) => 
                
    
                
    //          axios.post('http://192.168.8.113:5000/user/view', {token: value})
    //         .then((res) => {
    //             console.log(res.data)
    //             setName(res.data.name)


    //         })    
    //         );
    
        
    
    //         } catch (error) {
    //         console.log(error);
    //         }



    // },[])


    // const getValueFunction = async () => {

    //     try {
       
    //     AsyncStorage.getItem('vjs').then((value) => 
            

            
    //      axios.post('http://192.168.8.113:5000/user/view', {token: value})
    //     .then((res) => {
    //         console.log(res.data)
    //     })

            
            
    //     );

    //     // const len = token.length
    //     // const result = token.slice(1,len-1)
    //     // const abc = {token:result}
        



    //     // const value =  AsyncStorage.getItem('any_key_here')
    //     // if(value !== null) {
    //     //     console.log(value)

    //     //     setToken(value)
    //     // }


    //     } catch (error) {
    //     console.log(error);
    //     }
    //   };

             

     








  return (
    

      <ScrollView style={styles.container}>

        <Image
        style = {styles.tinyLogo}
        source={{
          uri: 'https://ceb.lk/front_img/1535428868ceb_og.jpg',
        }}
      />
    
      
      <View style={styles.inputGroup}>
        <TextInput style={styles.input}
        placeholderTextColor="#F5F5DC" 
        autoFocus={true}

      
          placeholder="User Email"
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
      </View>
      

      <View style={styles.inputGroup}>
        <TextInput style={styles.input}
        autoFocus={true}

          placeholder="User password"
          onChangeText={(e) => setPassword(e)}
          value={password}
          placeholderTextColor="#F5F5DC" 
        />
      </View>

      <Pressable style={styles.button} onPress={() => handleSubmit()}  >
              <Text style={styles.text}> Login </Text>
            </Pressable>


{/* 
      <View style={styles.inputGroup}>
        <Button title="Save User" onPress={() => handleSubmit()} />
      </View> */}




        
        



    </ScrollView>



  
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      backgroundColor: '#721011',
    },
    inputGroup: {
      flex: 1,
      padding: 0,
     
     
    },
    tinyLogo: {
      justifyContent: 'center',
      width: "100%",
      height: 200,
    },
    input: {
      borderColor: "white",
      width: "100%",
      borderWidth: 1,
      borderRadius: 50,
      padding: 10,
      marginBottom: 10,
      
      color: "white",
      
     
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#721011',
    },
  });

export default Login