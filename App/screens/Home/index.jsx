import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
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

                <Button style={{ marginRight: 4, elevation: 0 }} onPress={() => navigation.navigate('Details')} variant="contained" >
                    Create new
                </Button>

                {item === false ?
                    <Button variant="outlined" onPress={() => setItem(true)}  >
                        Edit
                    </Button>
                    :
                    <Button variant="outlined" onPress={() => setItem(false)}  >
                        Cancel
                    </Button>
                }
            </View>
            {item === true &&
                <Image style={{ height: 300, width: 300, marginTop: 3 }} source={require('/Users/zachary/Native/mobile-app/App/assets/mountains.jpeg')} />
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