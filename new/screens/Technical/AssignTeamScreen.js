import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
 
} from "react-native";
import  AsyncStorage from '@react-native-async-storage/async-storage'

const AssignTeamScreen = ({navigation}) => {

  const [teamid, setTeamId] = useState("");
  const [team_member1, setTeamMember1] = useState("");
  const [team_member2, setTeamMember2] = useState("");
  const [team_member3, setTeamMember3] = useState("");
  const [team_member4, setTeamMember4] = useState("");
  
  const addTeam = async (props) => {
    try {
    if (teamid === "" || team_member1 === "" || team_member2 === "" || team_member3 === "" || team_member4 === "") {
      alert("Please provide all the fields");
    } else {
      const data = {
        teamid,
        team_member1,
        team_member2,
        team_member3,
        team_member4
      };
      
      await axios
        .post("http://172.28.29.4:5000/team/add", data)
        .then((res) => {
          AsyncStorage.setItem("tid", res.data.teamid)

          console.log(res.data);
        });
        alert("Team Assigned Successfully");

        if(AsyncStorage.getItem('tid')){
          console.log("idddddd" + AsyncStorage.getItem('tid'))
        }


        await axios.get('http://172.28.29.4:5000/team/')

        navigation.navigate("AssignTaskScreen");
    }
    } catch (error) {
        console.log(error);
        }

  };

  return (
      <ScrollView style={styles.container}>
        
        <Text  style={styles.textTitle}>Assign Team Members</Text>
        <View style={styles.inputGroup}>
          <Text  style={styles.textLabel}>Technical Team Id</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Team Id"
            onChangeText={(e) => setTeamId(e)}
            value={teamid}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text  style={styles.textLabel}>Username of Member 1</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            onChangeText={(e) => setTeamMember1(e)}
            value={team_member1}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text  style={styles.textLabel}>Username of Member 2</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            onChangeText={(e) => setTeamMember2(e)}
            value={team_member2}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text  style={styles.textLabel}>Username of Member 3</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            onChangeText={(e) => setTeamMember3(e)}
            value={team_member3}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text  style={styles.textLabel}>Username of Member 4</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            onChangeText={(e) => setTeamMember4(e)}
            value={team_member4}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button color="#751616" title="Assign Team" onPress={() => addTeam()} />
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
    marginTop:10,
    padding:10,
    marginBottom: -10,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#a7a7a7",
    borderRadius: 10,
  },
  textLabel: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
  },
  textTitle: {
    fontSize: 26,
    marginLeft: 71,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonGroup: {
    marginTop: 33,
    padding: 10,
  }
});

export default AssignTeamScreen;
