import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import axios from 'axios';

const AllTeamsScreen = ({navigation}) => {

  const [teams, setTeams] = useState();

  const onLoad = async () => {

    const place_ref = await axios.get('http://172.28.29.4:5000/team/').then(res => {
      setTeams(res.data)
    })
  }

  useEffect(() => {
    axios.get('http://172.28.29.4:5000/team/').then(res => {
      setTeams(res.data)
    })
    const unsubscribe = navigation.addListener("focus", () => {
      onLoad() // Gets fired whenever this screen is in focus
    });
    return unsubscribe;
  }, [navigation])

  const deleteTeam = async (id) => {
    try {
      await axios.delete(`http://172.28.29.4:5000/team/${id}`)
      alert("Team Deleted Successfully")
      navigation.navigate('AllTeamsScreen')

      await axios.get('http://172.28.29.4:5000/team/').then(res => {
        setTeams(res.data)
      })
    } catch (error) {

      console.log(error)
    }
  }

  return (
    <ScrollView  >
      {teams && teams.map((team, index) => (
        <View key={index} style={styles.inputGroup}>
          <Text>{index + 1}</Text>
          <Text>{team.teamid}</Text>
          <Text>{team.team_member1}</Text>
          <Text>{team.team_member2}</Text>
          <Text>{team.team_member3}</Text>
          <Text>{team.team_member4}</Text>
          <Text>{team.task}</Text>
          <Button color="#751616" title="Edit Team" onPress={() => { navigation.navigate('EditTaskScreen', {
           teamid: team.teamid, team_member1: team.team_member1, team_member2: team.team_member2, team_member3: team.team_member3, team_member4: team.team_member4, task: team.task
          })}}></Button>
          <View style={styles.space} />
          <Button color="#751616" title="Delete Team" onPress={() => deleteTeam(team._id)} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputGroup: {
    padding: 50,
    borderBottomWidth: 1,
  },
  buttonGroup: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20,
    height: 20,
  }
})

export default AllTeamsScreen

