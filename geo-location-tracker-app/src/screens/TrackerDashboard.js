import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Constants from 'expo-constants';

const API_URL = Constants.manifest?.extra?.API_URL || 'http://10.1.42.130:3001';

const TrackerDashboard = ({ route }) => {
    const { vehicleId } = route.params || {}; // Get vehicleId from params
    const [location, setLocation] = useState(null);

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

            const intervalId = setInterval(async () => {
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

            return () => clearInterval(intervalId); // Cleanup on unmount
        })();
    }, [vehicleId]);

    return (
        <View>
            <Text>Tracking for Vehicle ID: {vehicleId}</Text>
            {location && (
                <Text>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</Text>
            )}
        </View>
    );
};

export default TrackerDashboard;
