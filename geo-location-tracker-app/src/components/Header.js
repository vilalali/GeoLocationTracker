import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // Ensure StyleSheet is imported

// Header Component
const Header = () => (
    <View style={styles}>
        <View style={styles.strip}></View> {/* This is the strip above the header */}
        <View style={styles.header}>
            <Image
                source={require('../../assets/logo.png')} // Replace with your logo's path
                style={styles.logo}
            />
            <Text style={styles.appName}>Geo Live Location Tracker</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    strip: {
        height: 40, // Adjust the height of the strip above the header
        backgroundColor: '#007BFF', // You can change the color of the strip
    },
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

export default Header;
