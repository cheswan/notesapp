import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AddNote from './screens/AddNote';
import AllNotes from './screens/AllNotes';
import { useState } from 'react';





export default function App() {
  const [screen, setScreen] = useState('home'); // home is the initial screen
  
  const onSetScreen = (val) => {
    setScreen(val);
  }

  const screenType = {
   home: 'home',
   addNote: 'addnote',
   allNote: 'allnote'
  }
  
  return (
    <View style={styles.container}>
      {screen == screenType.home&&<HomeScreen setScreen={onSetScreen}></HomeScreen>}
      {screen == screenType.addNote&&<AddNote setScreen={onSetScreen}></AddNote>}
      {screen == screenType.allNote&&<AllNotes setScreen={onSetScreen}></AllNotes>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

