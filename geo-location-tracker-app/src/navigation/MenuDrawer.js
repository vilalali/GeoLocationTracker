import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import HelpScreen from '../screens/HelpScreen';
import MainStack from './MainStack'; // Import MainStack

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                drawerStyle: {
                    backgroundColor: '#FFFFFF',
                },
                drawerLabelStyle: {
                    fontSize: 16,
                },
            }}
        >
            {/* Use MainStack for Home screen */}
            <Drawer.Screen name="Home" component={MainStack} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="Help" component={HelpScreen} />
        </Drawer.Navigator>
    );
};

export default MenuDrawer;
