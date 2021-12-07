/* theme.js */
import {DefaultTheme} from '@react-navigation/native';
import {fontFamilies} from './fontFamilies';
import {fontSizes} from './fontSizes';
import {fontWeights} from './fontWeights';
import {lineHeights} from './lineHeights';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    card: '#FFF',
    muted: '#999',
  },
  dark: DefaultTheme.dark,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  textVariants: {
    body1: {
      fontFamily: fontFamilies.regular,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.body,
    },
    caption: {
      fontFamilies: fontFamilies.regular,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.body,
    },
  },
} as const;
