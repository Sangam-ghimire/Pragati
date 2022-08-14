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
import Explore from '../screens/Explore';
import NotificationScreen from '../screens/NotificationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import AuthorProfileScreen from '../screens/AuthorProfileScreen';
import CameraScreen from '../screens/CameraScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import Card from '../screens/Card';
import CategorySpecific from '../screens/CategorySpecific';
import CatagorieSection from '../screens/CatagorieSection';

const AuthenticationStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator()

const AuthorStack = createNativeStackNavigator();
const AuthorNavigator = () => {
    return (
        <AuthorStack.Navigator initialRouteName='AuthorProfile'>
            <AuthorStack.Screen name="AuthorProfile" component={AuthorProfileScreen} />
        </AuthorStack.Navigator>
    )
}

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator initialRouteName='Onboarding'>
            <AuthenticationStack.Screen options={{
                headerShown: false
            }}
                name="Onboarding" component={Home} />
            <AuthenticationStack.Screen options={{
                headerShown: false
            }}
                name="Login" component={LoginScreen} />
        </AuthenticationStack.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="authentication">
            <Stack.Screen name="authentication" options={{ headerShown: false }} component={AuthenticationNavigator} />
            <Stack.Screen name="Main" options={{ headerShown: false }} component={DrawerNavigator} />
            <Stack.Screen name="AuthorProfile" options={{ headerShown: false }} component={AuthorNavigator} />
            <Stack.Screen name="Preferences" options={{ headerShown: false }} component={PreferencesScreen} />
            <Stack.Screen name="Video" options={{ headerShown: false }} component={Card} />
            <Stack.Screen name="CatageorySpecific" options={{ headerShown: false }} component={CategorySpecific} />
            <Stack.Screen name="CategorieSection" options={{ headerShown: false }} component={CatagorieSection} />
        </Stack.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home"
                options={{
                    headerTitle: (props) => (<Header {...props} />), headerStyle: {
                        height: 100
                    }
                }}
                component={BottomTabNavigator} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Profile" options={{
                headerShown: false
            }} component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Feed') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Explore') {
                    iconName = focused ? 'search' : 'search-outline';
                }
                else if (route.name === 'Notification') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'Camera') {
                    iconName = focused ? 'camera' : 'camera-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })} initialRouteName='Feed' >
            <Tab.Screen name="Feed" options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="Explore" options={{ headerShown: false }} component={Explore} />
            <Tab.Screen name="Notification" options={{ headerShown: false }} component={NotificationScreen} />
            <Tab.Screen name="Camera" options={{ headerShown: false }} component={CameraScreen} />
        </Tab.Navigator>
    );
};

export default function index() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}