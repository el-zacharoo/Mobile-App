import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme';
import App from './src/App';

const Main = () => {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

registerRootComponent(Main);