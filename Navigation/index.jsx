import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from '../src/Authentication/Onboarding/Onboarding';

const AuthenticationStack = createNativeStackNavigator()
const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator  >
            <AuthenticationStack.Screen options={{
                headerShown: false
            }}
                name="Onboarding" component={Onboarding} />
        </AuthenticationStack.Navigator>
    )
}

const Stack = createNativeStackNavigator()


export default function index() {
    return (
        <NavigationContainer>
            <AuthenticationNavigator />
            {/* <Stack.Navigator>
                <Stack.Screen name="root" component={BottomTabNaviagtor} />
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}

const BottomTab = createBottomTabNavigator()
const BottomTabNaviagtor = () => {
    return (
        <BottomTab.Navigator initialRouteName='Home'>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Planner" component={PlannerScreen} />
        </BottomTab.Navigator>
    )
}