import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.center} source={require("./logo.png")} />
      <Text style={styles.title}>Let us decide where you go next!</Text>

      <SafeAreaView style={styles.form}>
        <TextInput style={styles.input} placeholder={"USERNAME"} />
        <TextInput style={styles.input} placeholder="PASSWORD" />
      </SafeAreaView>

      <TouchableOpacity style={styles.btn} title="Login">
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.signUp}>SIGN UP</Text>
    </View>
  );
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
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

export default Login;
