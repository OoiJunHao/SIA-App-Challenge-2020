import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/homeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import boardingPassScreen from "./screens/boardingPassScreen";
import personalDetailScreen from "./screens/personalDetailScreen";
import travelDetailScreen from "./screens/travelDetailScreen";
import {Text, View, StyleSheet, Image } from "react-native";

export default function App() {

  const menuTab = createBottomTabNavigator();
  const arrivalCardStack = createStackNavigator();

  const createArrivalStack = () => {
      return (
          <arrivalCardStack.Navigator initialRouteName="boardingPass" headerMode="float">
            <arrivalCardStack.Screen name='boardingPass' component={boardingPassScreen}
                                     options={{
                                         headerShown: false,
                                         headerTitleAlign: 'left',
                                         headerStatusBarHeight: 100,
                                         headerTitle: props => <LogoTitle {...props} />
                                     }}
            />
            <arrivalCardStack.Screen name='personalDetail' component={personalDetailScreen}
                                     options={{
                                         headerBackTitleVisible: false,
                                         headerLeft: null,
                                         headerShown: true,
                                         headerTitleAlign: 'left',
                                         headerStatusBarHeight: 100,
                                         headerTitle: props => <LogoTitle {...props} />
                                     }}/>
            <arrivalCardStack.Screen name='travelDetail' component={travelDetailScreen}
                                     options={{
                                         headerBackTitleVisible: false,
                                         headerLeft: null,
                                         headerShown: true,
                                         headerTitleAlign: 'left',
                                         headerStatusBarHeight: 100,
                                         headerTitle: props => <LogoTitle {...props} />
                                     }}/>
          </arrivalCardStack.Navigator>
      )
  }

  return (

    <NavigationContainer>
      <menuTab.Navigator  initialRouteName="home" tabBarOptions={{
        activeTintColor: "rgba(64,64,121,0.89)",
        inactiveTintColor: "rgba(123,123,135,0.48)",
      }}>
        <menuTab.Screen name="home" component={HomeScreen} options={
          {
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-home" color={color} size={size} />
            )
          }
        }/>
        <menuTab.Screen name="searchFlights" component={HomeScreen} options={
          {
            tabBarLabel: "Search Flights",
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-search" color={color} size={size} />
            )
          }
        }/>
        <menuTab.Screen name="flightStatus" component={HomeScreen} options={
          {
            tabBarLabel: "Flight Status",
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="airplane-takeoff" color={color} size={size} />
            )
          }
        }/>
        <menuTab.Screen name="trips" children={createArrivalStack} options={
          {
            tabBarLabel: "My Trips",
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-briefcase" color={color} size={size} />
            )
          }
        }/>
        <menuTab.Screen name="more" component={HomeScreen} options={
          {
            tabBarLabel: "More",
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="more-horiz" color={color} size={size} />
            )
          }
        }/>
      </menuTab.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

function LogoTitle() {
  return (
      <View style={{flex: 1}}>

          <View style={{flex: 1 , flexDirection: 'row', flexWrap: 'wrap', top: -30, alignItems: 'center' }}>
              <Image
                  style={{ width: 100, height: 50 , resizeMode: 'contain'}}
                  source={require('./assets/singapore_airlines_logo.jpg')}
              />
              <Text style={{marginLeft: 10, paddingTop: '2%', fontFamily: 'BakerSignet LT', fontSize: 25}}>KrisMetrics</Text>
              <Image
                  style={{ width: 50, height: 50 , resizeMode: 'contain', marginLeft: '24%'}}
                  source={require('./assets/Vineeth.png')}
              />
          </View>
          <View style={{top: -35}}>
              <Text style={{marginLeft: 5, fontFamily: 'BakerSignet LT', fontSize: 40}}>Singapore <Text>&#8594;</Text> Japan</Text>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
