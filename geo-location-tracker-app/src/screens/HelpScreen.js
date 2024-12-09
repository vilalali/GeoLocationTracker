import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HelpScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Help</Text>
            <Text>This is the Help page of Geo Live Location Tracker.</Text>
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
});

export default HelpScreen;
