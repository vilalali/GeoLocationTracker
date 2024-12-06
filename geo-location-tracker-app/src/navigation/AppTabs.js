import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainStack from './MainStack';
import MenuDrawer from './MenuDrawer';
import TrackerDashboard from '../screens/TrackerDashboard';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home-outline';
                            break;
                        case 'Menu':
                            iconName = 'menu-outline';
                            break;
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
                headerShown: false, // Removes the top tab (header)
            })}
        >
            <Tab.Screen name="Menu" component={MenuDrawer} options={{ tabBarLabel: '' }} />
            <Tab.Screen name="Home" component={MainStack} options={{ tabBarLabel: '' }} />
        </Tab.Navigator>
    );
};

export default AppTabs;
