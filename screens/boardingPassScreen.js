import React, { Component } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator} from "react-native";
import Button from '../components/button';
import * as Font from 'expo-font';
import Icon from "react-native-vector-icons/AntDesign";
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import * as Asset from "expo-asset";

let customFonts = {
    'BakerSignet LT': require('../assets/fonts/BakerSignetLT.ttf'),
    'Century Gothic': require('../assets/fonts/centuryGothic.ttf'),
};


export default class BoardingPassScreen extends Component {

    state = {
        fontsLoaded: false,
        isModalVisible: false
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }


    componentDidMount() {
        this._loadFontsAsync().then();
    }

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    render() {
        const { fontsLoaded, isModalVisible } = this.state;
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

                    <Modal isVisible={isModalVisible}>
                        <TouchableWithoutFeedback onPress={this.toggleModal}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Image
                                    style={styles.logo}
                                    source={require("../assets/InfoOne.png")}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>


                    <Text style={{flex: 1, alignSelf: 'center', justifyContent: 'center', marginTop: "50%"}}>Insert Boarding Pass Here</Text>

                    <View style={{flex: 1 , flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
                        <Button
                            style={[styles.button,{alignSelf: 'center'}]}
                            onPress={() => {
                                this.props.navigation.navigate('personalDetail')
                            }}
                        >
                            <Text>Set Up KrisMetrics</Text>
                        </Button>
                        <TouchableOpacity style={ styles.help } onPress={() => {this.toggleModal();}}>
                            <Icon name="questioncircle"
                                  size={32}
                                  color='#A79F72'
                            />
                        </TouchableOpacity>
                    </View>

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
        marginHorizontal: 5,
        borderRadius: 4,
        height: 52,
        width: 160,
        marginLeft: '10%',
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
    },
    help: {
        marginLeft: 5
    },
    logo: {
        width: 330,
        height: 185,
        marginLeft: '3%',
        marginTop: '5%'
    }
})