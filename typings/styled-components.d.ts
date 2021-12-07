import theme from '../src/styles/theme';

export type ExtendedTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ExtendedTheme {}
}
