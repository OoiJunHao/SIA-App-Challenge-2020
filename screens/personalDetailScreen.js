import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Keyboard,
    Alert,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback
} from "react-native";
import Button from '../components/button';
import {StaticInput, DatePicker, TitlelessStaticInput} from "../components/StaticInput";
import SegmentedControl from '@react-native-community/segmented-control';
import DropDownPicker from 'react-native-dropdown-picker';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Flag from 'react-native-flags';
import Modal from 'react-native-modal';

export default class PersonalDetailScreen extends Component {
     state = {
         name: 'Vineeth Buddha',
         gender: 0, // 1 and 0
         nationality: 'Singaporean',
         passport: 'M1234567',
         address: '',
         dob: '',
         contact: '',
         cc: 'Select a Country Code',
         flightNo: '',
         durationOfStay: '',
         intendedAddress: '',
         previousCountry: '',
         purposeOfVisit: 'Select a purpose for visit',
         currentScreen: 1,
         isModalVisible: false
     }

     increaseScreen = () => {
         this.setState({currentScreen: this.state.currentScreen+1})
     }
    decreaseScreen = () => {
        this.setState({currentScreen: this.state.currentScreen-1})
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
     updateFlightNo = (flightNo) => this.setState({flightNo});
    handleUpdateDurationOfStay = (durationOfStay) => this.setState({durationOfStay});
    handleUpdateIntendedAddress = (intendedAddress) => this.setState({intendedAddress});
    handleUpdatePreviousCountry = (previousCountry) => this.setState({previousCountry});

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    render() {
        const { currentScreen } = this.state;
            return (
                <View style={styles.container}>


                    <Modal isVisible={this.state.isModalVisible}>
                        <TouchableWithoutFeedback onPress={this.toggleModal}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <View style={{width: 250, height: 470, alignSelf: 'center', backgroundColor: "#fafafa", paddingVertical: 15,
                                    borderRadius: 15, alignItems: 'center'}}>
                                    <Text style={{alignSelf: 'center', fontFamily: "BakerSignet LT", fontSize: 35, marginHorizontal: 30, marginVertical: 30}}>I hereby declare that the information given is true and accurate to the best of my knowledge.</Text>
                                    <Button
                                        style={[styles.button,{alignSelf: 'center'}]}
                                        onPress={() => {
                                            this.props.navigation.goBack();
                                            alert("put qr code here")
                                        }}
                                    >
                                        <Text>Yes</Text>
                                    </Button>
                                    <Button
                                        style={[styles.button,{alignSelf: 'center'}]}
                                        onPress={() => {
                                            this.toggleModal();
                                        }}
                                    >
                                        <Text>Go Back</Text>
                                    </Button>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>



                    <View style={styles.greeting}>
                        <Text
                            style={{
                                fontSize: 35,
                                padding: "5%",
                                fontFamily: 'BakerSignet LT',
                                color: 'rgba(151,128,85,0.88)'
                            }}
                        >
                            {(currentScreen === 1 ? "Personal Details" : (currentScreen === 2 ? "Travel Details" : "Declarations"))}
                        </Text>
                    </View>


                    <ScrollView style={styles.form}>
                        {currentScreen === 1 && <View>
                        <StaticInput style={{marginTop: 5}} onChangeText={this.handleUpdateName}
                                     value={this.state.name}>Name</StaticInput>
                        <View style={{marginTop: 20}}>
                            <Text style={styles.inputTitle}>Gender</Text>
                            <SegmentedControl
                                style={{height: 40}}
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
                            style={{marginTop: 20}}
                            onChange={this.handleUpdateDob}
                            clear={this.handleClearDob}
                            date={this.state.dob}
                        ></DatePicker>

                        <View style={{marginTop: 20}}>
                            <Text style={styles.inputTitle}>Contact No</Text>
                            <DropDownPicker
                                items={[
                                    {label: 'Singapore (+65)', value: '+65', icon: () => <Flag code='SG' size={16}/>},
                                    {label: 'Japan (+81)', value: '+81', icon: () => <Flag code='JP' size={16}/>}, //only size 16, 24, 32 allowed
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
                        </View>
                        }

                        {currentScreen === 2 && <View>
                            <StaticInput style={{marginTop: 5}} onChangeText={this.updateFlightNo}
                                         value={this.state.flightNo}>Flight No</StaticInput>

                            <StaticInput style={{marginTop: 20}} onChangeText={this.handleUpdateDurationOfStay}
                                         value={this.state.durationOfStay}>Intended Duration of Stay</StaticInput>


                            <StaticInput style={{marginTop: 20}} onChangeText={this.handleUpdateIntendedAddress}
                                         value={this.state.intendedAddress}>Intended Address</StaticInput>
                            <StaticInput style={{marginTop: 20}} onChangeText={this.handleUpdatePreviousCountry}
                                         value={this.state.previousCountry}>Previous Country</StaticInput>

                            <View style={{marginTop: 20}}>
                                <Text style={styles.inputTitle}>Purpose of visit</Text>
                                <DropDownPicker
                                    items={[
                                        {label: 'Tourism', value: 'tourism'},
                                        {label: 'Work', value: 'work'}, //only size 16, 24, 32 allowed
                                    ]}
                                    placeholder="Please select a purpose of visit"
                                    containerStyle={{height: 40}}
                                    style={{backgroundColor: '#fafafa'}}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{backgroundColor: '#fafafa'}}
                                    onChangeItem={item => this.setState({
                                        purposeOfVisit: item.value
                                    })}
                                />
                            </View>
                            <View style={{marginBottom: 40}}></View>
                        </View>
                        }

                        {currentScreen === 3 && <View></View>}

                        <View style={{flex: 1, marginTop: 10}}>
                            <ProgressSteps completedProgressBarColor='#A79F72' completedStepIconColor='#171E4A'
                                           activeLabelColor='#171E4A' activeStepIconBorderColor='#171E4A'
                                           labelFontFamily='Century Gothic'>
                                <ProgressStep label="Personal Details"
                                              nextBtnStyle={{borderRadius: 15, backgroundColor: "#171E4A"}}
                                              nextBtnTextStyle={{
                                                  fontFamily: 'BakerSignet LT',
                                                  color: '#ffffff',
                                                  fontSize: 25
                                              }}
                                              onNext={() => {
                                                  this.increaseScreen();
                                              }}
                                >
                                    <View style={{alignItems: 'center'}}>
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Travel Details"
                                              nextBtnStyle={{borderRadius: 15, backgroundColor: "#171E4A"}}
                                              nextBtnTextStyle={{
                                                  fontFamily: 'BakerSignet LT',
                                                  color: '#ffffff',
                                                  fontSize: 25
                                              }}
                                              onNext={() => {
                                                  this.increaseScreen();
                                              }}
                                              previousBtnStyle={{borderRadius: 15, backgroundColor: "#171E4A"}}
                                              previousBtnTextStyle={{
                                                  fontFamily: 'BakerSignet LT',
                                                  color: '#ffffff',
                                                  fontSize: 25
                                              }}
                                              onPrevious={() => {
                                                  this.decreaseScreen();
                                              }}
                                >
                                    <View style={{alignItems: 'center'}}>
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Declarations"
                                              nextBtnStyle={{borderRadius: 15, backgroundColor: "#171E4A"}}
                                              nextBtnTextStyle={{
                                                  fontFamily: 'BakerSignet LT',
                                                  color: '#ffffff',
                                                  fontSize: 25
                                              }}
                                              onSubmit={() => {
                                                  this.toggleModal();
                                              }}
                                              previousBtnStyle={{borderRadius: 15, backgroundColor: "#171E4A"}}
                                              previousBtnTextStyle={{
                                                  fontFamily: 'BakerSignet LT',
                                                  color: '#ffffff',
                                                  fontSize: 25
                                              }}
                                              onPrevious={() => {
                                                  this.decreaseScreen();
                                              }}
                                >
                                    <View style={{alignItems: 'center'}}>
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
        marginHorizontal: 5,
        borderRadius: 4,
        height: 52,
        width: 160,
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