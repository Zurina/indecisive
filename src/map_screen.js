import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

var markers = [
    {
      latitude: 45.65,
      longitude: -78.90,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
            latitude: 41.3889728,
            longitude: 2.2006717,   
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
        <Marker coordinate = {{latitude: 41.38897287988443,longitude: 2.2006717304416563}}
         pinColor = {"purple"} // any color
         title={"Vitaminas Burger & Beach Bar"}
         description={"Come visit us!"}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});