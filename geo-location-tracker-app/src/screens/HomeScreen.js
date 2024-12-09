import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.appName}>Geo Live Location Tracker</Text> */}
            <Image
                source={require('../../assets/logo.png')} // Replace with your main icon path
                style={styles.mainIcon}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Registration')}
            >
                <Text style={styles.buttonText}>Go to Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: -80,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    mainIcon: {
        width: 200,
        height: 200,
        marginVertical: 40,
    },
    button: {
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
