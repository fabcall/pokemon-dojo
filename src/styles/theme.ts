import * as palette from './palette';

import {DefaultTheme} from '@react-navigation/native';
import {fontFamilies} from './fontFamilies';
import {fontSizes} from './fontSizes';
import {fontWeights} from './fontWeights';
import {lineHeights} from './lineHeights';
import {space} from './space';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    card: '#FFF',
    muted: '#999',
  },
  dark: DefaultTheme.dark,
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
  palette,
  space,
} as const;
