import React from 'react';

import { View, StyleSheet, Text } from 'react-native';


export const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}
export default Details;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 24,
    },
});
