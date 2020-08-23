import React, { Component } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Keyboard, ActivityIndicator} from "react-native";
import * as Font from "expo-font";

let customFonts = {
    'BakerSignet LT': require('../assets/fonts/BakerSignetLT.ttf'),
    'Century Gothic': require('../assets/fonts/centuryGothic.ttf'),
};

export default class HomeScreen extends Component {

    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }


    componentDidMount() {
        this._loadFontsAsync().then();
    }

    render() {

        const {fontsLoaded} = this.state;
        if (!fontsLoaded) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 70
                }}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            return (
                <View style={{flex: 1}}>
                    <Text style={{flex: 1, alignSelf: 'center', justifyContent: 'center', marginTop: "50%"}}>This page
                        is not part of the demo</Text>
                </View>
            )
        }
    }

}