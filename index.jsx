import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import App from './App';
import { name as appName } from './app.json';
import { theme } from './App/theme';

const Main = () => {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
};

LogBox.ignoreLogs(['Require cycle:']);
AppRegistry.registerComponent(appName, () => Main);