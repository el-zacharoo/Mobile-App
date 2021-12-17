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
            {views.map((item, i) =>
                <Tab.Screen key={i} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name={item.icon} color={color} size={size} />
                    ),
                }} name={item.title} component={item.component} />
            )}

        </Tab.Navigator>
    )
}

const views = [
    { title: "Home", icon: 'home', component: Home },
    { title: "Details", icon: 'folder', component: Details },
    { title: "Profile", icon: 'account', component: Profile }
]