import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RegistrationScreen from './src/screens/RegistrationScreen';
import TrackerDashboard from './src/screens/TrackerDashboard'; // Make sure this is the correct import
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/screens/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Registration & Location Tracker Stack
function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen} // Set the HomeScreen to load first
                options={{ headerShown: false }} // Hide header for HomeScreen
            />
            <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TrackerDashboard" // Ensure this is the same name as the tab screen
                component={TrackerDashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

// Bottom Tab Navigator
function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Menu') {
                        iconName = 'menu-outline';
                    } 
                    else if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } 
                    else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: '#ADB5BD',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#E9ECEF',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={MainStack}
                options={{ tabBarLabel: '' }}
            />
            <Tab.Screen
                name="Menu"
                component={RegistrationScreen}
                options={{ tabBarLabel: '' }}
            />
            <Tab.Screen
                name="Profile"
                component={TrackerDashboard} // This should match the name used in the stack navigator
                options={{ tabBarLabel: '' }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <Header />
                <AppTabs />
            </View>
        </NavigationContainer>
    );
}

// Styles
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F9FA',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECEF',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#343A40',
    },
    homeScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    mainIcon: {
        width: 100,
        height: 100,
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});
