import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import ChooseTypeScreen from '../screens/auth/ChooseTypeScreen';

const Stack=createStackNavigator()

export default function AuthNavigator({ navigation, route }) {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name="ChooseType"
                component={ChooseTypeScreen}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                // options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

