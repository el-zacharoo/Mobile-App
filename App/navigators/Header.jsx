import React from 'react';

import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { theme } from '../theme/index';


export const Header = () => {
    return (
        <Appbar.Header style={styles.heading} >
            <Appbar.Content title="Mobile-App" />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: theme.colors.primary,
    },
});