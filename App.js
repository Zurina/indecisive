import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginModule from './src/pages/Login'
import HomeModule from './src/pages/Home'
import MapScreen from './src/pages/map'
import SettingsModule from './src/pages/Settings'
import {useState} from "react";

export default function App() {

  const [isLoggedIn, login] = useState(false);
  const [showSignUp, signUp] = useState(false)
  const [isMapToggled, toggleMap] = useState(false);
  const [username, setUsername] = useState("");
  const [categories, toggleCategory] = useState({
    foods: false,
    clubs: false,
    attractions: false,
    activities: false
  });
  
  return (
    
    <View style={styles.container}>
      {!isLoggedIn && !showSignUp ? (
        <LoginModule 
          login={login}
          setUsername={setUsername}
          signUp={signUp}
        />
      ) : showSignUp ? (
        <SettingsModule showSignUp={showSignUp} signUp={signUp}/>
      ) : !isMapToggled ? (
        <HomeModule toggleMap={toggleMap} isMapToggled={isMapToggled} username={username} categories={categories} toggleCategory={toggleCategory}/>
      ) : (
        <MapScreen categories={categories} toggleMap={toggleMap} isMapToggled={isMapToggled} />
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