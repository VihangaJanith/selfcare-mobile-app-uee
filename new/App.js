import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View , TextInput ,Button, ToastAndroid, SafeAreaView , Image, TouchableOpacity, DrawerButton, Pressable} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

import CreateInquiry from './screens/CreateInquiry'
import UsersList from './screens/UsersList'
import UserDetailScreen from './screens/UserDetailScreen';
<<<<<<< HEAD
import Register from './screens/Users/Register';
import Login from './screens/Users/Login';
import Example from './screens/Users/Example';
=======
import AssignTeamScreen from './screens/Technical/AssignTeamScreen';
import AssignTaskScreen from './screens/Technical/AssignTaskScreen';
import AllTeamsScreen from './screens/Technical/AllTeamsScreen';
import EditTaskScreen from './screens/Technical/EditTaskScreen';
>>>>>>> fe5cb7e9a648c685a89bc08690509307a1bce70c


function MyStack(){
  return (
      <Stack.Navigator>
<<<<<<< HEAD
        {/* <Stack.Screen name="Example" component={Example} options={{ title: 'ex' }} /> */}
<Stack.Screen name="CreateInquiry" component={CreateInquiry}/> 


        <Stack.Screen name="Login" component={Login} 
          // options={{

          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
          //   headerTintColor: '#fff',

          //   headerLeft: () => (
          //     <DrawerButton onPress={() => navigation.toggleDrawer()} />
          //   ),
        
           
          // }}


          options={({ navigation }) => ({
            title: 'Login',
            headerRight: () => (
              // <Button  style={styles.button}
              
              
              // onPress={() => navigation.navigate('Register')} title="UserList" color="#fff" />
              
              <Pressable style={styles.button} onPress={() => navigation.navigate('Register')} title="UserList" >
              <Text style={styles.text}>Register</Text>
            </Pressable>
            
            )
          })}
        

          
          

        
        />
        <Stack.Screen name="Register" component={Register} options={{title: 'Reg'}} />
                <Stack.Screen name="UsersList" component={UsersList}/> 

      

      
      
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/> 
=======
        <Stack.Screen name="AssignTeamScreen" component={AssignTeamScreen}/>
        <Stack.Screen name="AssignTaskScreen" component={AssignTaskScreen}/>
        <Stack.Screen name="AllTeamsScreen" component={AllTeamsScreen}/>
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen}/>
>>>>>>> fe5cb7e9a648c685a89bc08690509307a1bce70c
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});




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
