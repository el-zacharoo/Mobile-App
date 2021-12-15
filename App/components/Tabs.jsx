import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

import { theme } from '../theme/index';

export const Tabs = (props) => {
    const { children, color, orientation } = props;
    switch (orientation) {
        case 'bottom':
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
        case 'top':
            return (
                <TouchableOpacity>
                    <Button {...props} style={{
                        borderBottomColor: color ? color : theme.colors.background,
                        borderBottomWidth: 3,
                        paddingBottom: 4,
                        borderRadius: 0,
                        marginLeft: 1,
                        marginRight: 1
                    }} mode="text" color={color ? color : theme.colors.primary}>
                        {children}
                    </Button>
                </TouchableOpacity>
            )
        default:
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
}
