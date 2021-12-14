import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, } from 'react-native-paper';

export const Components = () => {
    return (
        <View style={styles.container}>
            <Button mode="contained">
                Create
            </Button>
            <Text>
                Welcome to my app
            </Text>
        </View>

    )
}
export default Components;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
