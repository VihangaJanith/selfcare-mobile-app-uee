import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AssignTaskScreen = ({navigation, route}) => {

  const [teamid, setTeamId] = useState("");
  const [task, setTask] = useState("");

  
  
  useEffect(() => {
    AsyncStorage.getItem('tid').then((value) => {
      setTeamId(value)
  })

    axios.get(`http://172.28.29.4:5000/team/`).then(res => {
      setTeamId(res.data)
      
    })
    const unsubscribe = navigation.addListener("focus", () => {
   
    });
    return unsubscribe;
  }, [navigation])

  const addTask = async () => {
    try {
      
    if ( task === "") {
      alert("Please provide all the fields");
    } else {
      const data = {
        teamid,
        task
      };
      await axios
        .post("http://172.28.29.4:5000/team/add", data)
        .then((res) => {
          console.log(res.data);
        });
        alert("Task Assigned Successfully");

        await axios.get('http://172.28.29.4:5000/team/')

        navigation.navigate("AllTeamsScreen");
    }
    } catch (error) {
        console.log(error);
        }

  };

  return (
    <ScrollView style={styles.container}>
      <Text  style={styles.textTitle}>Assign Task</Text>
      <View style={styles.inputGroup}>
        <Text  style={styles.textLabel}>Team Id</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(e) => setTeamId(e)}
          value={teamid}/>
      </View>

      <View style={styles.inputGroup}>
        <Text  style={styles.textLabel}>Task Details</Text>
        <TextInput
          style={styles.textInputArea}
          onChangeText={(e) => setTask(e)}
          value={task}
        />
      </View>

      <View style={styles.inputGroup}>
        <Button color="#751616" title="Assign Task" onPress={() => addTask()} />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
  },
  textLabel: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#a7a7a7",
    borderRadius: 10,
    marginBottom:20,
  },
  textInputArea: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#a7a7a7",
    borderRadius: 10,
    height:140,
    marginBottom:20,
  },
  textTitle: {
    fontSize: 26,
    marginLeft: 111,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

export default AssignTaskScreen;

