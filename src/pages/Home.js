import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = () => {
  const [current, setCurrent] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.center} source={require("./logo.png")} />
      <Text style={styles.title}>Let us decide where you go next!</Text>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.question}>WHAT DO YOU FEEL</Text>
        <Text style={styles.question}>LIKE DOING TODAY?</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          onPress={() => setCurrent("food")}
          style={[
            styles.btn,
            styles.checkbox,
            current === "food" ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={current === "food" ? { color: "white" } : { color: "black" }}
          >
            FOOD & BEVERAGES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent("clubs")}
          style={[
            styles.btn,
            styles.checkbox,
            current === "clubs" ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={
              current === "clubs" ? { color: "white" } : { color: "black" }
            }
          >
            CLUBS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent("attractions")}
          style={[
            styles.btn,
            styles.checkbox,
            current === "attractions" ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={
              current === "attractions"
                ? { color: "white" }
                : { color: "black" }
            }
          >
            ATTRACTIONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent("activities")}
          style={[
            styles.btn,
            styles.checkbox,
            current === "activities" ? styles.current : "",
          ]}
          title="Login"
        >
          <Text
            style={
              current === "activities" ? { color: "white" } : { color: "black" }
            }
          >
            ACTIVITIES
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.btn, { marginTop: 50 }]} title="Login">
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
