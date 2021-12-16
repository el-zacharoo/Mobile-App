import React from 'react';

import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

import { theme } from '../theme/index';

const Icon = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = () => {
    return (
        <Appbar.Header style={styles.heading} >
            <Appbar.Content title="Mobile-App" />
            <Appbar.Action icon="magnify" onPress={() => { }} />
            <Appbar.Action icon={Icon} onPress={() => { }} />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: theme.colors.primary,
    },
});