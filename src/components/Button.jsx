import React from 'react';

import { useTheme, TouchableRipple, Button as Object } from 'react-native-paper';

export const Button = (props) => {
    const { children, variant, color } = props;
    const { colors } = useTheme()

    switch (variant) {
        case 'contained':
            return (
                <TouchableRipple  >
                    <Object uppercase={false} {...props} color={color ? color : colors.primary} mode="contained" >
                        {children}
                    </Object>
                </TouchableRipple>)
        case 'outlined':
            return (
                <TouchableRipple>
                    <Object uppercase={false} {...props} color={color ? color : colors.primary} mode="outlined" >
                        {children}
                    </Object>
                </TouchableRipple>
            )
        case 'text':
            return (
                <TouchableRipple>
                    <Object uppercase={false} {...props} color={color ? color : colors.primary} mode="text" >
                        {children}
                    </Object>
                </TouchableRipple>
            )
        default:
            return (
                <TouchableRipple>
                    <Object uppercase={false} {...props} color={color ? color : colors.primary} mode="text" >
                        {children}
                    </Object>
                </TouchableRipple>
            )
    }
}
