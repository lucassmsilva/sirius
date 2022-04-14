import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
        primary: '#e3e3',
        secondary: '#0275d8',
        accent: '#f1c40f',
    },

}
 export const customFonts =  {
    fontFamily: 'Roboto',
    extraLarge: 42,
    large: 24,
    medium: 18,
    small: 14,
    tiny: 10,
}

const themeDark = {
    // primary: '#10002b',
    // secondary: '#c77dff',
    // accent: '#e0aaff',
    // bgLight: '#6c757d'
}
export const customColors = {...{
    primary: '#e3e3',
    secondary: '#0275d8',
    accent: '#e0aaff',
    error: '#B00020',
    danger: '#ff0000',
    grey: '#adb5bd',
    bgLight: '#fff',
    textLight: '#fff',
    textMuted: '#6C757D',
    textDark: '#343A40',
}, ...themeDark}
