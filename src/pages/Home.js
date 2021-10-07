import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = ({ username, isMapToggled, toggleMap, toggleCategory, categories }) => {

  const [foods, foodsToggle] = useState(false);
  const [clubs, clubsToggle] = useState(false)
  const [attractions, attractionsToggle] = useState(false);
  const [activities, activitiesToggle] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.center} source={require("./logo.png")} />
      <Text style={styles.title}>Let us decide where you go next!</Text>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.username}>{username.toUpperCase()}</Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.question}>WHAT DO YOU FEEL</Text>
        <Text style={styles.question}>LIKE DOING TODAY?</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          onPress={() => toggleCategory(prevState => ({...prevState, foods: !categories["foods"]}))}
          style={[
            styles.btn,
            styles.checkbox,
            categories["foods"] === true ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={categories["foods"] ? { color: "white" } : { color: "black" }}
          >
            FOOD & BEVERAGES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleCategory(prevState => ({...prevState, clubs: !categories["clubs"]}))}
          style={[
            styles.btn,
            styles.checkbox,
            categories["clubs"] === true ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={
              categories["clubs"] ? { color: "white" } : { color: "black" }
            }
          >
            CLUBS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleCategory(prevState => ({...prevState, attractions: !categories["attractions"]}))}
          style={[
            styles.btn,
            styles.checkbox,
            categories["attractions"] === true ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={
              categories["attractions"]
                ? { color: "white" }
                : { color: "black" }
            }
          >
            ATTRACTIONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleCategory(prevState => ({...prevState, activities: !categories["activities"]}))}
          style={[
            styles.btn,
            styles.checkbox,
            categories["activities"] === true ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={
              categories["activities"] ? { color: "white" } : { color: "black" }
            }
          >
            ACTIVITIES
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.btn, { marginTop: 50 }]} title="Login" onPress={() => toggleMap(!isMapToggled)}>
        <Text style={{ fontSize: 34 }}>GO</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0E2E7",
    color: "#fff",
    width: "100%",
    height: "100%",
    zIndex: -1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: "100",
    color: "#888",
  },
  username: {
    fontSize: 24,
    fontWeight: "100",
    color: "#888",
    alignContent: "center",
    justifyContent: "center"
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    marginTop: 20,
    padding: 15,
  },
  checkbox: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  current: {
    backgroundColor: "#4F7FC0",
  },
});

export default Home;
