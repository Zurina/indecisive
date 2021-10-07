import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginModule from './src/pages/Login.js'
import MainScreen from './firstVersion/main_screen.js'
import MapScreen from './firstVersion/map_screen.js'
import {useState} from "react";

export default function App() {

  const [isLoggedIn, authenticate] = useState(false);
  const [isMapToggled, toggleMap] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    
    <View style={styles.container}>
      {!isLoggedIn ? (
        <LoginModule 
          login={authenticate}
          setUsername={setUsername}
        />
      ) : !isMapToggled ? (
        <MainScreen showMap={toggleMap} username={username} />
      ) : (
        <MapScreen showMap={toggleMap}/>
      )}
  </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
});