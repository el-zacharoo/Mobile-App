import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

import { theme } from '../theme/index';

export const Tabs = (props) => {
    const { children, color } = props;
    return (
        <TouchableOpacity>
            <Button {...props} style={{
                borderTopColor: color ? color : theme.colors.background,
                borderTopWidth: 3,
                paddingTop: 4,
                borderRadius: 0,
                marginLeft: 1,
                marginRight: 1
            }} mode="text" color={color ? color : theme.colors.primary}>
                {children}
            </Button>
        </TouchableOpacity>
    )
}

