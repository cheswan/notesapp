import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'

const AddNote = ({ setScreen, newNote }) => {
  const [note, setNote] = useState(' ');

  onNoteChange = (data) => {
    setNote(data)
  }
  return (
    <View style={{
      backgroundColor: 'white',
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    }}>
      <Header showBack={true} title={'Add Note'} setScreen={setScreen}></Header>
      <View>
        <Text>Add Note:</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Type note here...'
        value={setNote}
        onChangeText={onNoteChange}
      />
      <Button
        title="Add me"
        onPress={() => {newNote(note), setScreen('allnote')}}
      />
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})