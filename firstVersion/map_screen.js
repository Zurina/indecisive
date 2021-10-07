import React, { Component } from "react";
import { View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';
import styles from "../src/style";

const Map = ( {toggleMap, isMapToggled, categories }) => {

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

          {categories["foods"] ? (
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
          ) : (
            <Text></Text>
          )}

          {categories["clubs"] ? (
            <Marker
            coordinate={{ latitude: 41.3287988, longitude: 2.271730441}}
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
            coordinate={{ latitude: 41.38897287, longitude: 2.217304416563 }}
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
            coordinate={{ latitude: 41.39788443, longitude: 2.2416563 }}
            pinColor={"purple"} // any color
            title={"Tibidabu"}
            description={"Come climb me!"}
          >
          </Marker>
          ) : (
            <Text></Text>
          )}
          
        </MapView>
        <Button
          style={styles.text}
          buttonStyle={styles.backButton}
          onPress={() => toggleMap(!isMapToggled)}
          title="Back"
        />
      </View>
    );
  }

export default Map;