import React from 'react';

import { Button as Object } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

import { theme } from '../theme/index';

export const Button = (props) => {
    const { children, variant, color } = props;

    switch (variant) {
        case 'contained':
            return (
                <TouchableOpacity>
                    <Object {...props} color={color ? color : theme.colors.primary} mode="contained" >
                        {children}
                    </Object>
                </TouchableOpacity>)
        case 'outlined':
            return (
                <TouchableOpacity>
                    <Object {...props} color={color ? color : theme.colors.primary} mode="outlined" >
                        {children}
                    </Object>
                </TouchableOpacity>
            )
        case 'text':
            return (
                <TouchableOpacity>
                    <Object {...props} color={color ? color : theme.colors.primary} mode="text" >
                        {children}
                    </Object>
                </TouchableOpacity>
            )
        default:
            return (
                <TouchableOpacity>
                    <Object {...props} color={color ? color : theme.colors.primary} mode="text" >
                        {children}
                    </Object>
                </TouchableOpacity>
            )
    }
}
