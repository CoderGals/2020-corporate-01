import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './BottomTabNavigator'
import CommentsScreen from '../screens/main/CommentsScreen';
import ProfessionalJobsScreen from '../screens/main/ProfessionalJobsScreen';
import ProfessionalEmployeesScreen from '../screens/main/ProfessionalEmployeesScreen';
import ProfessionalJobDetailsScreen from '../screens/main/ProfessionalJobDetailsScreen';
import ProfessionalEmployeeDetailScreen from '../screens/main/ProfessionalEmployeeDetailScreen';
import AddJobScreen from '../screens/main/AddJobScreen';


const Stack=createStackNavigator()

export default function HomeNavigator({ navigation, route }) {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
            />
            <Stack.Screen
                name="ProfessionalJobs"
                component={ProfessionalJobsScreen}
            />
            <Stack.Screen
                name="ProfessionalJobDetails"
                component={ProfessionalJobDetailsScreen}
            />
            <Stack.Screen
                name="ProfessionalEmployees"
                component={ProfessionalEmployeesScreen}
            />
             <Stack.Screen
                name="AddJob"
                component={AddJobScreen}
            />
            <Stack.Screen
                name="ProfessionalEmployeeDetail"
                component={ProfessionalEmployeeDetailScreen}
            />
            <Stack.Screen
                name="Comments"
                component={CommentsScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


