import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const API_URL = Constants.expoConfig?.extra?.API_URL || 'http://10.1.42.130:3001' || 'http://192.168.0.102:3001';

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please enter both Username and Password.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}/api/users/login`, { username, password });

            Alert.alert('Success', 'Login successful!');
            navigation.navigate('TrackerDashboard', { username, vehicleId: response.data.vehicleId }); // Pass user info to dashboard
        } catch (err) {
            console.error('Error:', err.message);
            Alert.alert('Error', 'Invalid credentials. Please try again.');
        } finally {
            setIsLoading(false);
        }   
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <Button
                title={isLoading ? "Logging in..." : "Login"}
                onPress={handleLogin}
                disabled={isLoading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 20, width: '100%' },
});
