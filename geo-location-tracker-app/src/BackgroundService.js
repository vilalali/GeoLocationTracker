import BackgroundFetch from 'react-native-background-fetch';
import { Alert } from 'react-native';

const configureBackgroundFetch = () => {
    BackgroundFetch.configure(
        {
            minimumFetchInterval: 15,  // Minimum interval between fetches (in minutes)
            stopOnTerminate: false,    // Keep running in the background after the app is terminated
            startOnBoot: true,         // Start when the device is rebooted
            enableHeadless: true,      // Allow background task when the app is terminated
        },
        async (taskId) => {
            console.log('[BackgroundFetch] taskId:', taskId);
            
            // Background task logic, e.g., fetch data from server or update DB
            Alert.alert('Background Task Executed', 'The background task ran successfully!');

            // Finish the task
            BackgroundFetch.finish(taskId);
        },
        (error) => {
            console.log('[BackgroundFetch] failed to start', error);
        }
    );
};

export default configureBackgroundFetch;
