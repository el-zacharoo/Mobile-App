import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { material } from 'react-native-typography';
import { theme } from '../theme/index';

export const Components = () => {
    return (
        <View style={styles.container}>
            <Text style={material.display1}>
                Welcome to my app
            </Text>
            <Button color={theme.colors.primary} mode="contained" >
                Create
            </Button>
            <Button color={theme.colors.primary} mode="outlined" >
                Open
            </Button>
        </View>

    )
}
export default Components;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
