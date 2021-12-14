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
            <View style={styles.row}>
                <Button color={theme.colors.primary} style={{ marginRight: 4 }} mode="contained" >
                    Create
                </Button>
                <Button color={theme.colors.primary} mode="outlined" >
                    Edit
                </Button>
            </View>
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
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',

    },
});
