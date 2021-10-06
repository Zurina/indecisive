import React, { Component } from "react";

import styles from "./style";
import {Keyboard, View, TextInput, Image} from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {

  render() {
    return (
        <View>
            <Image
              source = {require('C:/Users/Orchi/Desktop/In-decisive/assets/logo.png')}
              style={{ width: 200, height: 200 }}
            />
            <TextInput onChangeText={(username) => this.props.setUsername(username)} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
        </View>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {
    this.props.login(true)
  }
}
