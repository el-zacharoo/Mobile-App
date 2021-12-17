import React, { useState } from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { Button } from '../../components/Button';
import ViewTemplate from '../../components/ViewTemplate';

export const Home = ({ navigation }) => {
    const [item, setItem] = useState(false);
    const { colors, typography } = useTheme()

    return (
        <ViewTemplate>
            <Card style={{ backgroundColor: colors.background, alignItems: 'center', width: '100%' }} mode="outlined" >
                <Text style={typography.h1}>Welcome to my app</Text>
                <Card.Content>
                    <Text style={typography.body1}>
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
        </ViewTemplate >
    )
}
export default Home;