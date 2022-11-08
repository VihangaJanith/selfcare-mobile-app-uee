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
import AssignTeamScreen from './screens/Technical/AssignTeamScreen';
import AssignTaskScreen from './screens/Technical/AssignTaskScreen';
import AllTeamsScreen from './screens/Technical/AllTeamsScreen';
import EditTaskScreen from './screens/Technical/EditTaskScreen';


function MyStack(){
  return (
      <Stack.Navigator>
        <Stack.Screen name="AssignTeamScreen" component={AssignTeamScreen}/>
        <Stack.Screen name="AssignTaskScreen" component={AssignTaskScreen}/>
        <Stack.Screen name="AllTeamsScreen" component={AllTeamsScreen}/>
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen}/>
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
//<Stack.Screen name="UsersList" component={UsersList}/> 
//<Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/> 
//<Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/> 
