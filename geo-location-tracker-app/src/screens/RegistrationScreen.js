import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

export default function RegistrationScreen({ navigation }) {
    const [vehicleId, setVehicleId] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const API_URL = Constants.expoConfig?.extra?.API_URL || 'http://10.1.42.130:3001' || 'http://192.168.0.102:3001'; // Default fallback URL

    const handleRegistration = async () => {
        if (!vehicleId || !vehicleType || !username || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        try {
            console.log("Attempting to register:", { vehicleId, vehicleType, username });

            const response = await axios.post(`${API_URL}/api/users/register`, {
                vehicleId,
                vehicleType,
                username,
                password,
            });

            console.log("API Response:", response.data);

            // Registration successful, navigate to the tracker page
            Alert.alert('Success', response.data.message);
            navigation.navigate('Login'); // Redirect to Login screen after successful registration
        } catch (err) {
            console.error('Error:', err.message);
            Alert.alert('Error', `Registration failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Your Vehicle</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Vehicle ID"
                value={vehicleId}
                onChangeText={setVehicleId}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Vehicle Type"
                value={vehicleType}
                onChangeText={setVehicleType}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
           <View style={styles.buttonContainer}>
                <Button
                    title={isLoading ? "Registering..." : "Register and Start Tracking"}
                    onPress={handleRegistration}
                    disabled={isLoading}
                    color="#007BFF"  // Primary button color
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Already registered? Login"
                    onPress={() => navigation.navigate('Login')}
                    disabled={isLoading}
                    color="#6c757d"  // Secondary button color
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 15,
    },
});
