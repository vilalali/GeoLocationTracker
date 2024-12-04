import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ContactScreen() {
    return (
        <View style={styles.container}>
            {/* Ensure text is correctly wrapped within <Text> components */}
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.bodyText}>This is the Contact page of Geo Live Location Tracker.</Text>
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
        fontSize: 16, // Added style for the body text
    },
});

export default ContactScreen;
