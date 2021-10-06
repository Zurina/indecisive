import React, { Component } from "react";
import styles from "./style";
import { View, Image, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { Button } from 'react-native-elements';

const tags = ["Bars", "Restaurant", "Supermarket", "Clubs"]

export default class MainScreen extends Component {

    render() {
        return (
            <View>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
                <Text>What are you InDecisive about?</Text>
                <Button
                    buttonStyle={styles.inDecisiveButton}
                    onPress={() => this.onLoginPress()}
                    title="I'm indecisive"
                />
                <SelectDropdown
                    data={tags}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => { return selectedItem }}
                    rowTextForSelection={(item, index) => { return item }}
                />
            </View>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onLoginPress() {
        this.props.showMap(true)
    }
}
