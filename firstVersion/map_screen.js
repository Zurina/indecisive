import React, { Component } from "react";
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';
import styles from "../src/style";

export default class MapScreen extends Component {

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 41.3889728,
            longitude: 2.2006717,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{ latitude: 41.38897287988443, longitude: 2.2006717304416563 }}
            pinColor={"purple"} // any color
            title={"Vitaminas Burger & Beach Bar"}
            description={"Come visit us!"}
          >
            <Image
              source={require('C:/Users/Orchi/Desktop/In-decisive/assets/restaurant_icon.jpg')}
              style={{ width: 35, height: 35 }}
            />
          </Marker>
        </MapView>
        <Button
          style={styles.text}
          buttonStyle={styles.backButton}
          onPress={() => this.onLoginPress()}
          title="Back"
        />
      </View>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {
    this.props.showMap(false)
  }
}