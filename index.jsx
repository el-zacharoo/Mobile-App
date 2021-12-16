import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App/theme'
import App from './App';

const Main = () => {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
