import theme from './theme';

export type ExtendedTheme = typeof theme;

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}
