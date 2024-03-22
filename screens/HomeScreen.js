import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = ({ setScreen }) => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View>
        <Text>hello</Text>
      </View>
      <Button
        title="Add Note"
        onPress={() => setScreen('addnote')}
      />
      <Button
        title="Press me"
        onPress={() => setScreen('allnote')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: "bold"
  }
})