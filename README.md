# Geolocation Tracker Application

## POC Objectives

### 1. User Registration:
   a. Allow users to register with their Vehicle ID and Vehicle Type.  
   b. Save registration data to a database.  

### 2. Location Tracking:
   a. Request and obtain location permissions.  
   b. Capture user geolocation periodically when the app is running.  
   c. Save geolocation data (latitude, longitude, timestamp) to the database.  

### 3. Web UI for Location Display:
   a. A simple webpage to fetch and display the geolocation history of the user from the database.  

---

## Technology Stack
- **Mobile App**: React Native (for cross-platform compatibility).  
- **Backend**: Node.js with Express.js (API for user registration and location storage).  
- **Database**: MongoDB (to store user and geolocation data).  
- **Web UI**: React.js (to display geolocation history).  

---

## Features in POC

### Mobile App
1. **User Registration Screen**:  
   a. Input fields for Vehicle ID and Vehicle Type.  
   b. Submit button to save data.  

2. **Location Permission**:  
   a. Prompt user to allow location tracking.  
   b. Enable periodic location tracking.  

3. **Background Location Tracking**:  
   a. Collect geolocation data every 5 minutes (or as feasible in POC).  
   b. Send geolocation data to the backend.  

### Web UI
1. **Fetch and Display Data**:  
   a. Show a table or list with columns: Timestamp, Latitude, Longitude.  
   b. Simple interface for now, no styling emphasis.  

---

## Workflow
1. **User Registration**:  
   a. User opens the app, registers with Vehicle ID and Vehicle Type.  
   b. Backend saves this information.  

2. **Location Tracking**:  
   a. User grants location permissions.  
   b. App starts tracking location and sends data to the backend periodically.  

3. **Data Display**:  
   a. Web UI fetches location data using an API and displays it in a list format.  

---

## Development Plan for POC

### Backend:
- **RESTful API endpoints**:  
  - `POST /register` – Save user information.  
  - `POST /location` – Save user geolocation data.  
  - `GET /locations` – Fetch geolocation data for display.  

### Mobile App:
- **React Native app with**:  
  - Registration screen.  
  - Location tracking logic using libraries like `react-native-geolocation-service`.  

### Web UI:
- **Simple React.js app** to display location data fetched from the backend.  

---

## Deliverables
1. **Mobile App**: A basic app with registration and location tracking.  
2. **Backend API**: Minimal endpoints for user registration and location storage.  
3. **Web UI**: A basic page to view geolocation history.  

---

## Setup and Running Steps

### Backend Setup
1. **Install Dependencies**:  
   ```bash
   cd backend
   npm install
   ```

2. **Set Up MongoDB**:  
   - Install MongoDB locally or use a cloud service like MongoDB Atlas.  
   - Update the MongoDB connection string in `backend/config.js`.  

3. **Run the Backend Server**:  
   ```bash
   npm start
   ```

### Mobile App Setup
1. **Install Dependencies**:  
   ```bash
   cd mobile-app
   npm install
   ```

2. **Install React Native CLI**:  
   ```bash
   npm install -g react-native-cli
   ```

3. **Run the Mobile App**:  
   - For Android:  
     ```bash
     react-native run-android
     ```  
   - For iOS:  
     ```bash
     react-native run-ios
     ```

### Web UI Setup
1. **Install Dependencies**:  
   ```bash
   cd web-ui
   npm install
   ```

2. **Run the Web UI**:  
   ```bash
   npm start
   ```

3. **Access the Web UI**:  
   - Open `http://localhost:3000` in your browser.  

---

## Running the Application
1. Start the **Backend Server**.  
2. Run the **Mobile App** on an emulator or physical device.  
3. Launch the **Web UI** in your browser.  
4. Register a user in the mobile app and allow location permissions.  
5. View the geolocation history on the Web UI.  


---
Author: Vilal Ali
vilal.ali@research.iiit.ac.in
