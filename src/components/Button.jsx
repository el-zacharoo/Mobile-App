import React from 'react';

import { TouchableRipple, Button as Object } from 'react-native-paper';

import { theme } from '../theme';

export const Button = (props) => {
    const { children, variant, color } = props;

    switch (variant) {
        case 'contained':
            return (
                <TouchableRipple  >
                    <Object uppercase={false} {...props} color={color ? color : theme.colors.primary} mode="contained" >
                        {children}
                    </Object>
                </TouchableRipple>)
        case 'outlined':
            return (
                <TouchableRipple>
                    <Object uppercase={false} {...props} color={color ? color : theme.colors.primary} mode="outlined" >
                        {children}
                    </Object>
                </TouchableRipple>
            )
        case 'text':
            return (
                <TouchableRipple>
                    <Object uppercase={false} {...props} color={color ? color : theme.colors.primary} mode="text" >
                        {children}
                    </Object>
                </TouchableRipple>
            )
        default:
            return (
                <TouchableRipple>
                    <Object uppercase={false} {...props} color={color ? color : theme.colors.primary} mode="text" >
                        {children}
                    </Object>
                </TouchableRipple>
            )
    }
}
