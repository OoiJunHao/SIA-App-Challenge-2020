import React, { Component, useState } from "react";
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const StaticInput = props => (
    <View style={props.style}>
        <Text style={styles.inputTitle}>{props.children}</Text>
        <TextInput style={styles.input} onChangeText={props.onChangeText} value={props.value} />
    </View>
)

export const TitlelessStaticInput = props => (
    <View style={props.style}>
        <TextInput style={styles.input} onChangeText={props.onChangeText} value={props.value} keyboardType='number-pad'/>
    </View>
)

export const StaticInput2 = props => (
    <View style={props.style}>
        <Text style={styles.inputTitle}>{props.children}</Text>
        <TextInput style={styles.input2} autoCapitalize="none" keyboardType="email-address" onChangeText={props.onChangeText} value={props.value} placeholder="Type here" />
    </View>
)

export const StaticPasswordInput = props => (
    <View style={props.style}>
        <Text style={styles.inputTitle}>{props.children}</Text>
        <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={props.onChangeText} value={props.value} />
    </View>
)

export const StaticEmailInput = props => (
    <View style={props.style} testID={'wrapper'}>
        <Text style={styles.inputTitle} testID={'text'}>{props.children}</Text>
        <TextInput style={styles.input} testID={'input'} autoCapitalize="none" keyboardType="email-address" onChangeText={props.onChangeText} value={props.value} />
    </View>
)

export const FieldInput = props => (
    <View style={props.style}>
        <Text style={styles.inputTitle}>{props.children}</Text>
        <TextInput style={styles.input} onChangeText={props.onChangeText} value={props.value} />
    </View>
)

export const DatePicker = props => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        props.clear();
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        props.onChange(date);
        setDatePickerVisibility(false);
    };


    return (
        <View style={props.style}>
            <Text style={styles.inputTitle}>Date of Birth</Text>
            <TouchableOpacity style={styles.input} onPress={showDatePicker}>
                <Text style={{marginTop: 10, fontSize: 20}}>{(props.date ? (new Date(props.date)).toDateString().substring(3) : "")}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                cancelTextIOS="Clear"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputTitle: {
        color: "rgba(12, 36, 99, 0.65)",
        fontSize: 20,
        fontFamily: 'Century Gothic',
        marginBottom: 1
    },
    input: {
        //borderBottomColor: "#8A8F9E",
        //borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth: 1.3,
        borderColor: "#E7E7E7",
        height: 40,
        fontSize: 20,
        color: "#161f3d",
        backgroundColor: "#ffffff",
    },
    input2: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgb(121,130,167)',
        backgroundColor: "rgba(252,241,241,0.43)",
        textAlign: 'center',
        height: 40,
        fontSize: 15,
        color: "#161f3d"
    },
})
