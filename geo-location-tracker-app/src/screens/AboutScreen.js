import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutScreen() {
    return (
        <View style={styles.container}>
            {/* Ensure the text is properly rendered within Text components */}
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.bodyText}>This is the About page of Geo Live Location Tracker.</Text>
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
        marginVertical: 20,
    },
    bodyText: {
        fontSize: 16,  // Adjusted font size for body text for better styling
    },
});

export default AboutScreen;
