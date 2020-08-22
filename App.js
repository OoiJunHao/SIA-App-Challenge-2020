import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

export default function App() {

  const menuTab = createBottomTabNavigator();
  const arrivalCardStack = createStackNavigator();

  const createArrivalStack = () => {
      return (
          <arrivalCardStack.Navigator initialRouteName="boardingPass" headerMode="none">
            <arrivalCardStack.Screen name='boardingPass' component={boardingPassScreen}/>
            <arrivalCardStack.Screen name='personalDetail' component={personalDetailScreen}/>
            <arrivalCardStack.Screen name='travelDetail' component={travelDetailScreen}/>
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
