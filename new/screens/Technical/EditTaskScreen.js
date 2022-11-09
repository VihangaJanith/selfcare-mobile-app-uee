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

const EditTaskScreen = ({navigation, route}) => {

  const getDetails = (type) => {
    if(route.params){
        switch(type){
            case "teamid":
                return route.params.teamid
            case "team_member1":
                return route.params.team_member1
            case "team_member2":
                return route.params.team_member2
            case "team_member3":
                return route.params.team_member3
            case "team_member4":
                return route.params.team_member4
        }
    }
    return ""
  }
  const [teamid, setTeamId] = useState(getDetails("teamid"));
  const [team_member1, setTeamMember1] = useState(getDetails("team_member1"));
  const [team_member2, setTeamMember2] = useState(getDetails("team_member2"));
  const [team_member3, setTeamMember3] = useState(getDetails("team_member3"));
  const [team_member4, setTeamMember4] = useState(getDetails("team_member4"));
  
  const editTeam = async (id) => {
    try {
      await axios
      .put(`http://172.28.29.4:5000/team/edit/${id}`)
      .then((res) => {
        console.log(res.data);
      });
      alert("Team Updated Successfully");

      await axios.get('http://172.28.29.4:5000/team/')

      navigation.navigate("AllTeamsScreen");
  
      
    } catch (error) {
      console.log(error);
      }

};

  return (
      <ScrollView style={styles.container}>
        <Text  style={styles.textTitle}>Update Team Details</Text>
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
        {route.params &&
        <View style={styles.buttonGroup}>
          <Button color="#751616" title="Update Team" onPress={() => editTeam()} />
        </View>}
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

export default EditTaskScreen;

