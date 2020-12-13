import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React, {useContext, useEffect, useState} from 'react';
import {Platform, AsyncStorage, ImageBackground} from 'react-native'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/main/HomeScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerShown: false})


 
  return (
    <BottomTab.Navigator  tabBarOptions={Platform.OS == "ios" ? opt : navOpt} 
      initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
          }}
        />
         <BottomTab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
          }}
        />
    </BottomTab.Navigator>
  );
}

 


const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
     <HomeStack.Screen name="Home" component={HomeScreen} />
     {/* <HomeStack.Screen name="Inside" component={InsideScreen}/> */}
    </HomeStack.Navigator>
   );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
     <SettingsStack.Screen name="Settings" component={SettingsScreen} />
     {/* <HomeStack.Screen name="Inside" component={InsideScreen}/> */}
    </SettingsStack.Navigator>
   );
 }


const navOpt =
  { 
    style:{
      height: 75
    },
    tabStyle:{
      height: 55
    },
    activeTintColor: "#0f2a40"
  }

const opt={
  activeTintColor: "#0f2a40"
}
