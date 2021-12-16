import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Details } from '../screens/Details';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { Header } from '../components/Header';
import { theme } from '../theme';

export const Navigators = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Routes" >
                <Stack.Screen name="Mobile App" component={Routes} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigators

const Routes = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <Header {...props} />,
                tabBarActiveTintColor: theme.colors.accent,
                tabBarInactiveTintColor: theme.colors.disabled,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
    )
}