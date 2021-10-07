import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Button } from 'react-native-elements';

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.center} source={require("./logo.png")} />
        <Text style={styles.title}>Let us decide where you go next!</Text>

        <SafeAreaView style={styles.form}>
          <TextInput style={styles.input} placeholder={"USERNAME"} />
          <TextInput style={styles.input} placeholder="PASSWORD" secureTextEntry={true} />
        </SafeAreaView>

        <TouchableOpacity style={styles.btn} title="Login">
        <Button
          color="black"
          buttonStyle={styles.btn}
          onPress={() => this.props.login(true)}
          title="Login"
        >Login</Button>
        </TouchableOpacity>

        <Button
          color="black"
          buttonStyle={styles.btn}
          onPress={() => this.props.login(true)}
          title="Sign Up"
        >Sign Up</Button>
      </View>
    );
  }
};


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
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingBottom: 14,
    marginTop: 20,
  },
  form: {
    marginTop: 200,
  },
  input: {
    borderRadius: 50,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 20,
  },
  signUp: {
    marginTop: 80,
  },
});
