import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

const DefaultTheme = {
    ...PaperDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
    },
};

const palette = {
    darkBlue: '#2c384c',
    lightBlue: '#399cdb',
    white: "#ffffff",
    grey: {
        100: '#C6C6C6',
        200: '#666666'
    }
}

export const theme = {

    ...DefaultTheme,
    colors: {
        primary: palette.darkBlue,
        accent: palette.lightBlue,
        background: palette.white,
        disabled: palette.grey[100]
    },
    typography: {
        h1: {
            letterSpacing: 1,
            color: palette.darkBlue,
            fontSize: 32,

        },
        h2: {
            color: palette.white,
            fontSize: 32,
        },
        body1: {
            fontSize: 12,
            color: palette.grey[200]
        }
    },
};
