import React from 'react';
import { View } from 'react-native';

import { Tabs } from '../components/Tabs';
import { theme } from '../theme/index';

const Footer = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', paddingLeft: 4, paddingRight: 4, paddingBottom: 4 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <Tabs color={isFocused ? theme.colors.accent : ''} onPress={onPress} onLongPress={onLongPress}>
                        {label}
                    </Tabs>
                );
            })}
        </View>
    );
}
export default Footer