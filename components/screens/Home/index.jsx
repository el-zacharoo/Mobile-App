import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { material } from 'react-native-typography';
import { theme } from '../../theme/index';

export const Home = ({ navigation }) => {
    const [item, setItem] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={material.display1}>
                Welcome to my app
            </Text>
            <View style={styles.row}>
                <Button onPress={() => navigation.navigate('Details')} color={theme.colors.primary} style={{ marginRight: 4, elevation: 0 }} mode="contained" >
                    Create new
                </Button>
                {item === false ?
                    <Button onPress={() => setItem(true)} color={theme.colors.primary} mode="outlined" >
                        Edit
                    </Button>
                    :
                    <Button onPress={() => setItem(false)} color={theme.colors.primary} mode="outlined" >
                        Cancel
                    </Button>
                }
            </View>
            {item === true &&
                <Text style={material.button, { paddingTop: 10 }}>
                    Welcome to my app
                </Text>
            }
        </View>
    )
}
export default Home;

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