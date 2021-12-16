import React from 'react';

import { View, StyleSheet, Text } from 'react-native';


export const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 24,
    },
});