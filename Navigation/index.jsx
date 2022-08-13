import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import 'react-native-gesture-handler';
import HomeScreen from "../screens/HomeScreen";
import Home from '../src/Authentication/Onboarding/Home';
import LoginScreen from '../screens/LoginScreen';
import Header from '../components/Header';
import AboutScreen from '../screens/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthenticationStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();


const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen options={{
                headerShown: false
            }}
                name="Onboarding" component={Home} />
            <AuthenticationStack.Screen options={{
                headerShown: false
            }}
                name="Login" component={LoginScreen} />
            <AuthenticationStack.Screen
                name="Home"
                options={{
                    headerShown: false
                }}
                component={DrawerNavigator} />
        </AuthenticationStack.Navigator>

    )
}
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="Home"
                options={{
                    headerTitle: (props) => (<Header {...props} />), headerStyle: {
                        height: 100
                    }
                }}
                component={BottomTabNavigator} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Explore') {
                    iconName = focused ? 'search' : 'search-outline';
                }
                else if (route.name === 'Notification') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })} initialRouteName='Home' >
            <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="Explore" options={{ headerShown: false }} component={ExploreScreen} />
            <Tab.Screen name="Notification" options={{ headerShown: false }} component={NotificationScreen} />
        </Tab.Navigator>
    );
};


const Stack = createNativeStackNavigator()


export default function index() {
    return (
        <NavigationContainer>
            <AuthenticationNavigator />
        </NavigationContainer>
    )
}