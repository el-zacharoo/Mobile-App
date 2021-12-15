import React from 'react';

import { Button as Object } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';


export const Button = (props) => {
    const { children, variant } = props

    switch (variant) {
        case 'contained':
            return (
                <TouchableOpacity>
                    <Object {...props} mode="contained" >
                        {children}
                    </Object>
                </TouchableOpacity>)
        case 'outlined':
            return (
                <TouchableOpacity>
                    <Object {...props} mode="outlined" >
                        {children}
                    </Object>
                </TouchableOpacity>
            )
        case 'text':
            return (
                <TouchableOpacity>
                    <Object {...props} mode="text" >
                        {children}
                    </Object>
                </TouchableOpacity>
            )
        default:
            throw new Error('Invalid Button variant');
    }
}
