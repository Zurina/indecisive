import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './src/login_screen.js'
import MainScreen from './src/main_screen.js'
import MapScreen from './src/map_screen.js'
import {useState} from "react";

export default function App() {

  const [isLoggedIn, authenticate] = useState(false);
  const [isMapToggled, toggleMap] = useState(false);
  
  return (
    
    <View style={styles.container}>
      {!isLoggedIn ? (
        <LoginScreen login={authenticate}/>
      ) : !isMapToggled ? (
        <MainScreen showMap={toggleMap}/>
      ) : (
        <MapScreen />
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

/* 

  var markers = [
    {
      latitude: 45.65,
      longitude: -78.90,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ]; */