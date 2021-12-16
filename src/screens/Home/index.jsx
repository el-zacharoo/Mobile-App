import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '../../components/Button';
import { theme } from '../../theme/index';

export const Home = ({ navigation }) => {
    const [item, setItem] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={{
                flex: 1,
                width: '100%',
                justifyContent: "center"
            }} source={require('/Users/zachary/Native/mobile-app/src/assets/mountains.jpeg')} >
                <Text style={theme.typography.h1}>
                    Welcome to my app
                </Text>
                <View style={styles.row}>
                    <Button style={{ marginRight: 4, elevation: 0 }} onPress={() => navigation.navigate('Settings')} variant="contained" >
                        Create new
                    </Button>

                    {item === false ?
                        <Button color={theme.colors.background} variant="outlined" onPress={() => setItem(true)}  >
                            Edit
                        </Button>
                        :
                        <Button color={theme.colors.background} variant="outlined" onPress={() => setItem(false)}  >
                            Cancel
                        </Button>
                    }
                </View>
                {item === true &&
                    <Text >
                        Cover
                    </Text>
                }
            </ImageBackground>
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