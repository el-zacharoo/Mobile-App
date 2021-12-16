import React from 'react';
import { Home } from './App/screens/Home';
import { Details } from './App/screens/Details';

import { Header } from './App/components/Header';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  // const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{ header: (props) => <Header {...props} /> }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App


