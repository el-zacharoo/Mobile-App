import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Card, Text } from 'react-native-paper';
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
                <Card style={{ backgroundColor: theme.colors.background, alignItems: 'center', margin: 5 }} mode="elevated" >
                    <Text style={theme.typography.h1}>Welcome to my app</Text>
                    <Card.Content>
                        <Text>
                            Hello world
                        </Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={{ marginRight: 4, elevation: 0 }} onPress={() => navigation.navigate('Settings')} variant="contained" >
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
                    </Card.Actions>
                </Card>
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

});