import React, { Component } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Keyboard, ActivityIndicator} from "react-native";
import Button from '../components/button';
import * as Font from 'expo-font';

let customFonts = {
    'BakerSignet LT': require('../assets/fonts/BakerSignetLT.ttf'),
    'Century Gothic': require('../assets/fonts/centuryGothic.ttf')
};

export default class BoardingPassScreen extends Component {

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
        const { fontsLoaded } = this.state;
        if (!fontsLoaded) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 70
                }}>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Text style={{flex: 1, alignSelf: 'center', justifyContent: 'center', marginTop: "50%"}}>BoardingPasssScreen</Text>
                    <Button
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('personalDetail')
                        }}
                    >
                        <Text>Set Up KrisMetrics</Text>
                    </Button>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 60,
        borderRadius: 4,
        height: 52,
        width: 160,
        marginBottom: '30%',
        alignItems: "center",
        justifyContent: "center"
    },
    background: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: -170,
        resizeMode: "contain",
    }
})