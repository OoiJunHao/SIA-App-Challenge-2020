import React, { Component } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Keyboard, ScrollView} from "react-native";
import {DatePicker, StaticInput, TitlelessStaticInput} from "../components/StaticInput";
import SegmentedControl from "@react-native-community/segmented-control";
import DropDownPicker from "react-native-dropdown-picker";

import {ProgressStep, ProgressSteps} from "react-native-progress-steps";

export default class TravelDetailScreen extends Component {

    state = {
        name: 'Vineeth Buddha',
        gender: 0, // 1 and 0
        nationality: 'Singaporean',
        passport: 'M1234567',
        address: '',
        dob: '',
        contact: '',
        cc: 'Select a Country Code'
    }

    handleUpdateName = (name) => {
        this.setState({name: name})
    };
    handleUpdateNation = (nationality) => this.setState({nationality});
    handleUpdatePassport = (passport) => this.setState({passport});
    handleUpdateAddress = (address) => this.setState({address});
    handleUpdateContact = (contact) => this.setState({contact});
    handleUpdateDob = (dob) => this.setState({ dob });
    handleClearDob = () => this.setState({dob: ''});

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.greeting}>
                    <Text
                        style={{fontSize: 35, padding: "5%", fontFamily: 'BakerSignet LT', color: 'rgba(151,128,85,0.88)'}}
                    >
                        Personal Details
                    </Text>
                </View>

                <ScrollView style={styles.form}>
                    <StaticInput style={{marginTop: 5}} onChangeText={this.handleUpdateName}
                                 value={this.state.name}>Name</StaticInput>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.inputTitle}>Gender</Text>
                        <SegmentedControl
                            style={{ height: 40}}
                            values={['Male', 'Female']}
                            selectedIndex={this.state.gender}
                            onChange={(event) => {
                                this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                            }}
                        />
                    </View>

                    <StaticInput style={{marginTop: 20}} onChangeText={this.handleUpdateNation}
                                 value={this.state.nationality}>Nationality</StaticInput>
                    <StaticInput style={{marginTop: 20}} onChangeText={this.handleUpdatePassport}
                                 value={this.state.passport}>Passport Number</StaticInput>
                    <StaticInput style={{marginTop: 20}} onChangeText={this.handleUpdateAddress}
                                 value={this.state.address}>Residential Address</StaticInput>
                    <DatePicker
                        style={{ marginTop: 20 }}
                        onChange={this.handleUpdateDob}
                        clear={this.handleClearDob}
                        date={this.state.dob}
                    ></DatePicker>

                    <View style={{marginTop: 20}}>
                        <Text style={styles.inputTitle}>Contact No</Text>
                        <DropDownPicker
                            items={[
                                {label: 'Singapore (+65)', value: '+65'},
                                {label: 'Japan (+81)', value: '+81'},
                            ]}
                            placeholder="Please select a Country Code"
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                cc: item.value
                            })}
                        />
                        <TitlelessStaticInput style={{marginTop: 2}} onChangeText={this.handleUpdateContact}
                                              value={this.state.contact}></TitlelessStaticInput>
                    </View>

                    <View style={{flex: 1, marginTop: 10}}>
                        <ProgressSteps completedProgressBarColor='#A79F72' completedStepIconColor='#171E4A' activeLabelColor='#171E4A' activeStepIconBorderColor='#171E4A' labelFontFamily='Century Gothic'>
                            <ProgressStep label="Personal Details"
                                          nextBtnStyle={{borderRadius: 15 , backgroundColor: "#171E4A"}}
                                          nextBtnTextStyle={{fontFamily: 'BakerSignet LT', color: '#ffffff', fontSize: 25}}
                                          onNext={()=> {this.props.navigation.navigate('travelDetail')}}
                            >
                                <View style={{ alignItems: 'center' }}>
                                </View>
                            </ProgressStep>
                            <ProgressStep label="Travel Details">
                                <View style={{ alignItems: 'center' }}>
                                </View>
                            </ProgressStep>
                            <ProgressStep label="Declarations">
                                <View style={{ alignItems: 'center' }}>
                                </View>
                            </ProgressStep>
                        </ProgressSteps>
                    </View>



                    <View style={{height: 30}}></View>


                </ScrollView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "400",
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 20
    },
    logo: {
        marginTop: "20%",
        width: 270,
        height: 110,
        resizeMode: "contain",
        alignSelf: 'center'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#70bee2",
        borderRadius: 4,
        height: 52,
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
    inputTitle: {
        color: "rgba(12, 36, 99, 0.65)",
        fontSize: 20,
        fontFamily: 'Century Gothic',
        marginBottom: 1
    }
})