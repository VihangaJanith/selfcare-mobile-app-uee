import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View , TextInput ,Button, ToastAndroid, SafeAreaView , Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

import CreateUserScreen from './screens/CreateUserScreen'
import UsersList from './screens/UsersList'

import UserDetailScreen from './screens/UserDetailScreen';


function MyStack(){
  return (
  



      <Stack.Navigator>
                <Stack.Screen name="UsersList" component={UsersList}/> 

      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/> 

      
      
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/> 
      </Stack.Navigator>
  


  )

}

export default function App() {
  
  


 
 

  return (


<NavigationContainer>
    <MyStack/>


  </NavigationContainer>
    

  )
   
    

}

