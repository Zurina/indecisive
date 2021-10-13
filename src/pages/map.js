import React from "react";
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';
// import styles from "../style";

const Map = ({ toggleMap, isMapToggled, categories }) => {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.3889728,
          longitude: 2.2006717,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>

        {categories["foods"] ? (
          <Marker
            coordinate={{ latitude: 41.38897287988443, longitude: 2.2006717304416563 }}
            pinColor={"purple"} // any color
            title={"Vitaminas Burger & Beach Bar"}
            description={"Come visit us!"}
          >
          </Marker>
        ) : (
          <Text></Text>
        )}

        {categories["clubs"] ? (
          <Marker
            coordinate={{ latitude: 41.38540448559623, longitude: 2.1967583745257135 }}
            pinColor={"purple"} // any color
            title={"Opium"}
            description={"Come dance!!!"}
          >
          </Marker>
        ) : (
          <Text></Text>
        )}

        {categories["attractions"] ? (
          <Marker
            coordinate={{ latitude: 41.390598, longitude: 2.190798 }}
            pinColor={"purple"} // any color
            title={"Sagrada d familia"}
            description={"Come watch our amazing unfinished church!"}
          >
          </Marker>
        ) : (
          <Text></Text>
        )}

        {categories["activities"] ? (
          <Marker
            coordinate={{ latitude: 41.391663, longitude:  2.197915 }}
            pinColor={"purple"} // any color
            title={"Zumba dance"}
            description={"Come work out!"}
          >
          </Marker>
        ) : (
          <Text></Text>
        )}

      </MapView>

      <TouchableOpacity style={styles.btn} title="Back" onPress={() => toggleMap(!isMapToggled)}>
        <Text >Back</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    marginBottom: 100,
    marginTop: 10,
    padding: 15,
    color: "black"
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1
  },
});

export default Map;