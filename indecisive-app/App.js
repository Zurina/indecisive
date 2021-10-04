import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import MapView from 'react-native-maps';

const tags = ["Bars", "Restaurant", "Supermarket", "Clubs"]

export default function App() {

  var markers = [
    {
      latitude: 45.65,
      longitude: -78.90,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];

  return (
    <View style={styles.container}>
      <Text>InDecisive</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>What are you InDecisive about?</Text>

      <SelectDropdown
        data={tags}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => { return selectedItem }}
        rowTextForSelection={(item, index) => { return item }}
      />

      <MapView 
          style={{ flex: 1 }}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
      </MapView>

    
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    flex: 1
  },
});
