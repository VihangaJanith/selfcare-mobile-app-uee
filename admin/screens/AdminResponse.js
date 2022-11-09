import React, { useEffect, useState } from 'react'

import axios from 'axios';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

const AdminResponse = (props) => {
  console.log(props.route.params.inqId)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [reply, setReply] = useState('');

  const id =  props.route.params.inqId;
  
  


  useEffect(() => {
      axios.get(`http://192.168.8.113:5000/inquiry/${id}`).then((res) => {
          console.log(res.data)
          setName(res.data.name)
          setEmail(res.data.email)
          setInquiry(res.data.inquiry)
          setReply(res.data.reply)

      })

  },[])


  const handleSubmit = async () =>{
    try {
   
    const inquiries ={
      
        reply
        
    }
    axios.put(`http://192.168.8.113:5000/inquiry/edit/${id}`, inquiries)
    alert("Data Updated successfully")
    props.navigation.navigate('UsersList')
    } catch (error) {
        console.log(error)
    }


}



  return (
    
        

        <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="User Name"
          disabled={true}
          value={name}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="User Email"
          
          value={email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="User Phone"
          
          value={inquiry}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Response"
          onChangeText={(e) => setReply(e)}
          value={reply}
        />
      </View>

      <View style={styles.inputGroup}>
        <Button title="Save User" onPress={() => handleSubmit()} />
      </View>
    </ScrollView>


       



  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default AdminResponse