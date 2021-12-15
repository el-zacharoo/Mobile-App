import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from '../../components/Button';
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

                <Button color={theme.colors.primary} sx={{ marginRight: 4, elevation: 0 }} onPress={() => navigation.navigate('Details')} variant="contained" >
                    Create new
                </Button>

                {item === false ?
                    <Button color={theme.colors.primary} variant="outlined" onPress={() => setItem(true)}  >
                        Edit
                    </Button>
                    :
                    <Button color={theme.colors.primary} variant="outlined" onPress={() => setItem(false)}  >
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