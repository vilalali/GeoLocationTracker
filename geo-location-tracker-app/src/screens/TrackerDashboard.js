import React, { useState, useEffect } from "react";
import { View, Alert, StyleSheet } from "react-native";
import {
  Text,
  Button,
  Card,
  ActivityIndicator,
  IconButton,
} from "react-native-paper";
import * as Location from "expo-location";
import axios from "axios";

const { API_URL } = require("../../creds");

const TrackerDashboard = ({ route, navigation }) => {
  const { vehicleId, username, vehicleType } = route.params || {};

  const [location, setLocation] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!vehicleId) {
      Alert.alert(
        "Error",
        "Vehicle ID is missing. Please register or login again."
      );
      return;
    }

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permission is required for tracking."
        );
        return;
      }

      const id = setInterval(async () => {
        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);

        try {
          await axios.post(`${API_URL}/api/locations/new_location_add`, {
            vehicleId,
            latitude: coords.latitude,
            longitude: coords.longitude,
            timestamp: new Date().toISOString(),
          });
          console.log("Location sent to backend");
        } catch (err) {
          console.error("Error sending location:", err);
        }
      }, 10000);

      setIntervalId(id);
      return () => clearInterval(id);
    })();
  }, [vehicleId]);

  const handleLogout = () => {
    if (intervalId) {
      clearInterval(intervalId);
      console.log("Location tracking stopped");
    }
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.vehicleType}>User Dashboard</Text>

      <Card mode="outlined" style={styles.card}>
        <Card.Title title={`User Name: ${username}`} />
        <Card.Title title={`Vehicle ID: ${vehicleId}`} />
        <Card.Title title={`Vehicle Type: ${vehicleType}`} />
        <Card.Content>
          {loading && (
            <ActivityIndicator
              size="small"
              color="#2563EB"
              style={styles.loader}
            />
          )}
          {location ? (
            <Text style={styles.locationText}>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </Text>
          ) : (
            <Text style={styles.locationText}>
              Location is being fetched...
            </Text>
          )}
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={handleLogout}
            style={styles.logoutButton}
            color="#d9534f"
          >
            Logout
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 0,
  },
  card: {
    width: "90%",
    padding: 10,
    backgroundColor: "#ffffff",
  },
  vehicleType: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#495057",
  },
  locationText: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 10,
  },
  loader: {
    marginTop: 10,
  },
  logoutButton: {
    marginTop: 20,
    width: "100%",
  },
});

export default TrackerDashboard;
