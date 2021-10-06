import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './src/login_screen.js'
import MainScreen from './src/main_screen.js'
import MapScreen from './src/map_screen.js'
import {useState} from "react";

export default function App() {

  const [isLoggedIn, authenticate] = useState(false);
  const [isMapToggled, toggleMap] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    
    <View style={styles.container}>
      {!isLoggedIn ? (
        <LoginScreen 
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