import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({showSignUp, signUp}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./logo.png")} />

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="FIRST NAME" />
        <TextInput style={styles.input} placeholder="LAST NAME" />

        <View style={[styles.center, styles.card, styles.scroll]}>
          <Text style={styles.cardTitle}>INTERESTS</Text>
          <View style={[styles.center]}>
            <TouchableOpacity>
              <Text style={styles.mt5}>FOOD & BEVERAGES</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.mt5}>CLUBS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.mt5}>ACTIVITIES</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.mt5}>SPORTS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.mt5}>ATTRACTIONS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btn} title="Home" onPress={() => signUp(!showSignUp)}>
        <Text>HOME</Text>
      </TouchableOpacity>
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
  logo: {
    width: 80,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
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
    backgroundColor: "#fff",
    borderRadius: 50,
    marginTop: 20,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    position: "absolute",
    bottom: 50,
  },
  form: {
    marginTop: 50,
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
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 30,
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
  },
  mt5: {
    marginTop: 10,
  },
});

export default Login;
