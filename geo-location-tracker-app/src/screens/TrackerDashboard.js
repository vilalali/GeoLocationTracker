import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Constants from 'expo-constants';

const { API_URL } = require('../../creds');

const TrackerDashboard = ({ route, navigation }) => {
    const { vehicleId, userName, vehicleType } = route.params || {}; // Get vehicleId, userName, and vehicleType from params
    const [location, setLocation] = useState(null);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (!vehicleId) {
            Alert.alert('Error', 'Vehicle ID is missing. Please register or login again.');
            return;
        }

        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Location permission is required for tracking.');
                return;
            }

            // Start location tracking interval
            const id = setInterval(async () => {
                const { coords } = await Location.getCurrentPositionAsync({});
                setLocation(coords);

                try {
                    await axios.post(`${API_URL}/api/locations/new_location_add`, {
                        vehicleId,
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        timestamp: new Date().toISOString(), // Use the current timestamp
                    });
                    console.log('Location sent to backend');
                } catch (err) {
                    console.error('Error sending location:', err);
                }
            }, 10000); // Send location every 10 seconds

            setIntervalId(id); // Save interval ID to clear it later
            return () => clearInterval(id); // Cleanup on unmount
        })();
    }, [vehicleId]);

    // Handle Logout
    const handleLogout = () => {
        // Clear interval to stop location tracking
        if (intervalId) {
            clearInterval(intervalId);
            console.log('Location tracking stopped');
        }

        // You can clear any session or local data if needed here (e.g., clear vehicleId, userName)

        // Navigate to the home screen
        navigation.navigate('Home'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tracking for Vehicle ID: {vehicleId}</Text>
            <Text>User: {userName}</Text>
            <Text>Vehicle Type: {vehicleType}</Text>
            {location && (
                <Text>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</Text>
            )}
            <Button title="Logout" onPress={handleLogout} color="#d9534f" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default TrackerDashboard;
