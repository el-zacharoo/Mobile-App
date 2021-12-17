import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Details } from '../screens/Details';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { Header } from '../components/Header';
import { useTheme } from 'react-native-paper';

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
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <Header {...props} />,
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.disabled,
            }}
        >
            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} name="Home" component={Home} />
            <Tab.Screen name="Details" options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="folder" color={color} size={size} />
                ),
            }} component={Details} />
            <Tab.Screen name="Profile" options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} component={Profile} />
        </Tab.Navigator>
    )
}