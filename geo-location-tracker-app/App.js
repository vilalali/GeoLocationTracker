import React, { useEffect } from 'react';
import { View, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import AppTabs from './src/navigation/AppTabs';
// import configureBackgroundFetch from './src/BackgroundService'; // Import the background service

export default function App() {
    useEffect(() => {
        // Configure background fetch when the app is mounted
        // configureBackgroundFetch();

        // Optional: Handle app state changes (background, foreground, etc.)
        const handleAppStateChange = (nextAppState) => {
            if (nextAppState === 'background') {
                console.log('App is in background!');
                // You can perform additional logic when the app goes into the background
            } else if (nextAppState === 'active') {
                console.log('App is in foreground!');
                // You can handle any app-specific actions when it returns to the foreground
            }
        };

        AppState.addEventListener('change', handleAppStateChange);

        // Clean up listeners when the app is unmounted
        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <Header />
                <AppTabs />
            </View>
        </NavigationContainer>
    );
}
