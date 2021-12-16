// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Details } from '../screens/Details';
// import { Header } from '../components/Header';
// import { Profile } from '../screens/Profile';
// import { Home } from '../screens/Home';
// import { Settings } from '../screens/Settings';

// // const Routes = () => {
// //     const Stack = createStackNavigator()
// //     return (
// //         <NavigationContainer>
// //             <Stack.Navigator initialRouteName="Home" initialRouteName="Home"
// //                 screenOptions={{ header: (props) => <Header {...props} /> }} >
// //                 <Stack.Screen name="Details" component={Detail} />
// //                 <Stack.Screen name="Settings" component={Settings} />
// //             </Stack.Navigator>
// //         </NavigationContainer>
// //     );
// // }

// // const Detail = () => {
// //     const Tab = createBottomTabNavigator();

// //     return (

// //         <Tab.Navigator initialRouteName="Home"
// //             screenOptions={{ header: (props) => <Header {...props} /> }} >
// //             <Tab.Screen name="Home" component={Home} />
// //             <Tab.Screen name="Details" component={Details} />
// //         </Tab.Navigator>


// //     );
// // }

// // export default Routes


// const Navigation = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Details" component={Details} />
//         </Tab.Navigator>
//     );
// }

// export const Routes = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={Navigation}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen name="Profile" component={Profile} />
//                 <Stack.Screen name="Settings" component={Settings} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
// export default Routes; 