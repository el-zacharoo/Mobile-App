import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Button } from '../../components/Button';
import { theme } from '../../theme/index';
import ViewTemplate from '../../components/ViewTemplate';

export const Home = ({ navigation }) => {
    const [item, setItem] = useState(false);


    return (
        <ViewTemplate>
            <ImageBackground resizeMode="cover" style={{
                flex: 1,
                width: '100%',
                justifyContent: "center"
            }} source={require('/Users/zachary/Native/mobile-app/src/assets/mountains.jpeg')} >
                <Card style={{ backgroundColor: theme.colors.background, alignItems: 'center' }} mode="elevated" >
                    <Text style={theme.typography.h1}>Welcome to my app</Text>
                    <Card.Content>
                        <Text style={theme.typography.body1}>
                            Hello world
                        </Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={{ marginRight: 4, elevation: 0 }} onPress={() => navigation.navigate('Settings')} variant="contained" >
                            Create new
                        </Button>
                        <Button variant="outlined" onPress={item === false ? () => setItem(true) : () => setItem(false)}  >
                            {item === false ? 'Edit' : 'Cancel'}
                        </Button>
                    </Card.Actions>
                </Card>
            </ImageBackground>
        </ViewTemplate >
    )
}
export default Home;
