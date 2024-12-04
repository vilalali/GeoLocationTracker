import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RegistrationScreen from './screens/RegistrationScreen';
import LocationTracker from './screens/LocationTracker';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Header Component
const Header = () => (
    <View style={styles.header}>
        <Image
            source={require('./assets/logo.png')} // Replace with your logo's path
            style={styles.logo}
        />
        <Text style={styles.appName}>Geo Live Location Tracker</Text>
    </View>
);

// Registration & Location Tracker Stack
function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Location Tracker"
                component={LocationTracker}
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

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Menu') {
                        iconName = 'menu-outline';
                    } else if (route.name === 'Profile') {
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
                name="Menu"
                component={RegistrationScreen}
                options={{ tabBarLabel: '' }}
            />
            <Tab.Screen
                name="Home"
                component={MainStack}
                options={{ tabBarLabel: '' }}
            />
            <Tab.Screen
                name="Profile"
                component={LocationTracker}
                options={{ tabBarLabel: '' }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
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
});
