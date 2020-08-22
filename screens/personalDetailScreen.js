import React, { Component } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Keyboard} from "react-native";

export default class PersonalDetailScreen extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{flex: 1, alignSelf: 'center', justifyContent: 'center', marginTop: "50%"}}>Personal Detail Screen</Text>
            </View>
        )
    }

}