# Real-time Vehicle Geolocation Tracker (MERN Stack)
It provides a full-stack solution demonstrating how to register vehicles, capture their geographic location periodically using a mobile application, and display this historical data on a web-based dashboard.

[![MongoDB](https://img.shields.io/badge/MongoDB-4.0%2B-47A248.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000.svg?logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react&logoColor=white)](https://react.dev/)
[![React Native](https://img.shields.io/badge/React_Native-0.70%2B-61DAFB.svg?logo=react&logoColor=white)](https://reactnative.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x%2B-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)

## Project Overview

This repository hosts a Proof of Concept (POC) for a **real-time geolocation tracking application** specifically designed for vehicles. It provides a full-stack solution demonstrating how to register vehicles, capture their geographic location periodically using a mobile application, and display this historical data on a web-based dashboard.

The application is built using the **MERN (MongoDB, Express.js, React, Node.js) stack**, ensuring a robust and scalable architecture:
*   **Mobile App**: Developed with **React Native** for cross-platform compatibility (iOS and Android).
*   **Backend API**: Powered by **Node.js** and **Express.js** to handle user registration and location data storage.
*   **Database**: **MongoDB** is used to persist vehicle registration details and their corresponding geolocation data.
*   **Web UI**: A **React.js** application serves as a simple dashboard to fetch and visualize the historical location data.

This project can serve as a foundational block for more advanced **vehicle tracking systems**, **fleet management solutions**, or any application requiring **real-time GPS tracking** and location history.

## Keywords

*   **Geolocation Tracking**
*   **Real-time Location**
*   **Vehicle Tracking**
*   **GPS Tracker App**
*   **MERN Stack**
*   **React Native**
*   **Node.js Express.js**
*   **MongoDB**
*   **Web UI Dashboard**
*   **Location History**
*   **Cross-platform Mobile Development**
*   **Fleet Management (POC)**
*   **IoT (Internet of Things) Location**

## Features in this POC

### Mobile App (React Native)
1.  **User Registration Screen**:
    *   Allows users to register their vehicles with a unique Vehicle ID and Vehicle Type.
    *   Submits registration data securely to the backend.
2.  **Location Permission Handling**:
    *   Prompts the user to grant necessary location permissions (foreground and background).
3.  **Background Location Tracking**:
    *   Periodically collects geolocation data (latitude, longitude, timestamp) in the background (e.g., every 5 minutes, configurable).
    *   Sends the captured location data to the backend API.

### Web UI (React.js)
1.  **Fetch and Display Location Data**:
    *   Fetches the geolocation history for registered vehicles from the backend.
    *   Displays the data in a clear, tabular format including Timestamp, Latitude, and Longitude.
    *   Provides a simple interface without extensive styling for this POC.

### Backend (Node.js/Express.js)
1.  **RESTful API Endpoints**:
    *   `POST /register`: Endpoint to save new vehicle registration information.
    *   `POST /location`: Endpoint to receive and store periodic geolocation updates.
    *   `GET /locations`: Endpoint to fetch the geolocation history for display on the web UI.

## Workflow

1.  **User Registration**:
    *   A user opens the `mobile-app`, inputs their Vehicle ID and Vehicle Type, and submits.
    *   The backend saves this information to MongoDB.
2.  **Location Tracking**:
    *   The user grants location permissions to the `mobile-app`.
    *   The `mobile-app` starts tracking the device's location and periodically sends the geolocation data to the backend.
    *   The backend stores this data in MongoDB.
3.  **Data Display**:
    *   The `web-ui` fetches the historical location data for a specific vehicle (or all, depending on implementation detail) using a backend API endpoint.
    *   The `web-ui` displays this data in a list/table format.

## Getting Started

Follow these steps to set up and run the entire application locally.

### Prerequisites

Ensure you have the following installed on your development machine:

*   **Node.js** (LTS version recommended, v18.x or higher) - Download from [nodejs.org](https://nodejs.org/).
*   **npm** (comes with Node.js)
*   **Expo CLI**: Install globally using npm:
    ```bash
    npm install -g expo-cli
    ```
*   **MongoDB**:
    *   Install MongoDB locally (refer to the [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)).
    *   Alternatively, use a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas) for a free tier database.

### 1. Backend Setup

The backend handles API requests for user registration and location data.

1.  **Clone the repository**:
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```
2.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Set Up MongoDB Connection**:
    *   Create a `config.js` file in the `backend` directory (if not already present).
    *   Add your MongoDB connection string to this file. Replace the placeholder with your actual URI.
        ```javascript
        // backend/config.js
        module.exports = {
            mongoURI: 'mongodb://localhost:27017/geolocation_tracker' // Replace with your MongoDB URI (e.g., from MongoDB Atlas)
        };
        ```
        *If using MongoDB Atlas, your URI will look different and include credentials and possibly a database name.*
5.  **Run the Backend Server**:
    ```bash
    npm start
    ```
    The backend server should now be running, typically on `http://localhost:5000` (check `server.js` for the exact port).

### 2. Mobile App Setup (React Native)

The mobile app is responsible for vehicle registration and continuous location tracking.

1.  **Navigate to the mobile-app directory**:
    ```bash
    cd ../mobile-app
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Backend API URL**:
    *   You'll need to update the API URL in the mobile app to point to your backend server.
    *   Open `mobile-app/App.js` (or a similar file where API calls are made) and replace `http://localhost:5000` with your backend server's IP address if running on a physical device on the same network. For example, if your computer's local IP is `192.168.1.10`, use `http://192.168.1.10:5000`. If running on an emulator, `http://localhost:5000` or `http://10.0.2.2:5000` (for Android emulator) might work.
4.  **Run the Mobile App**:
    ```bash
    npx expo start
    ```
    This will open the Expo Dev Tools in your browser.
    *   **For Android**: Scan the QR code using the Expo Go app on your Android device.
    *   **For iOS**: Open the Expo Go app on your iOS device and scan the QR code.
    *   **On Emulator/Simulator**: You can select options within the Expo Dev Tools (e.g., 'Run on Android emulator', 'Run on iOS simulator') to deploy the app.

### 3. Web UI Setup (React.js)

The web UI displays the collected geolocation history.

1.  **Navigate to the web-ui directory**:
    ```bash
    cd ../web-ui
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Backend API URL**:
    *   Similar to the mobile app, you'll likely need to configure the API URL that the web UI fetches data from.
    *   Check files like `web-ui/src/App.js` or `web-ui/src/services/api.js` for the API base URL. Ensure it points to your backend server (e.g., `http://localhost:5000`).
4.  **Run the Web UI**:
    ```bash
    npm start
    ```
    The web UI should automatically open in your browser, typically at `http://localhost:3000`.

## Running the Application End-to-End

Once all three components are set up and running:

1.  **Start the Backend Server** (`npm start` in the `backend` directory).
2.  **Run the Mobile App** (`npx expo start` in the `mobile-app` directory) on an emulator or physical device.
    *   **Register a new vehicle** through the mobile app's registration screen (e.g., Vehicle ID: `TRK001`, Vehicle Type: `Car`).
    *   **Grant location permissions** to the app when prompted. The app will then start tracking your device's location and sending data to the backend periodically.
3.  **Launch the Web UI** (`npm start` in the `web-ui` directory) in your browser.
    *   The web UI should now fetch and display the geolocation history for the registered vehicle. You may need to refresh the web page after some time to see new location points appear.

## Project Structure

```
.
├── backend/                  # Node.js/Express.js API
│   ├── models/               # MongoDB schemas (e.g., Vehicle, Location)
│   ├── routes/               # API endpoint definitions (e.g., /register, /location, /locations)
│   ├── config.js             # MongoDB connection string configuration
│   ├── server.js             # Main server file, initializes Express and connects to MongoDB
│   └── package.json          # Backend dependencies
├── mobile-app/               # React Native application (Expo managed)
│   ├── components/           # Reusable UI components
│   ├── screens/              # Individual app screens (e.g., RegistrationScreen, TrackerScreen)
│   ├── services/             # API service calls
│   ├── App.js                # Main app component, handles navigation and initial setup
│   └── package.json          # Mobile app dependencies
└── web-ui/                   # React.js web dashboard
    ├── src/
    │   ├── components/       # Reusable UI components for the web UI
    │   ├── services/         # API service calls for the web UI
    │   ├── App.js            # Main web app component
    │   └── index.js          # Entry point for the React web app
    └── package.json          # Web UI dependencies
```

## Deliverables (POC)

1.  **Mobile App**: A basic React Native application with vehicle registration and periodic location tracking.
2.  **Backend API**: Minimal Node.js/Express.js endpoints for user registration and location data storage/retrieval.
3.  **Web UI**: A basic React.js page to view the geolocation history in a list/table format.

## Contributing

This project is a Proof of Concept (POC), and contributions are highly welcome to enhance its features, improve styling, add more robust error handling, implement user authentication, and extend functionality (e.g., real-time map display, filtering, etc.).

Feel free to fork the repository, make your changes, and submit a pull request.

## Author

**Vilal Ali**  
[vilal.ali@research.iiit.ac.in](mailto:vilal.ali@research.iiit.ac.in)

---
