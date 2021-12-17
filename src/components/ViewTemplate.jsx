import React from 'react';

import { StyleSheet, View } from 'react-native';

export const ViewTemplate = (props) => {
    const { children } = (props);
    return (
        <View {...props} style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default ViewTemplate; 