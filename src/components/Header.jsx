import React from 'react';

import { Appbar, useTheme } from 'react-native-paper';
import { Platform } from 'react-native';

const Icon = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = () => {
    const { colors } = useTheme()
    return (
        <Appbar.Header style={{ backgroundColor: colors.primary, }} >
            <Appbar.Content title="Mobile-App" />
            <Appbar.Action icon="magnify" onPress={() => { }} />
            <Appbar.Action icon={Icon} onPress={() => { }} />
        </Appbar.Header>
    )
}