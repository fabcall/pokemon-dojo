import {Image, View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import {Text} from '../../../components';
import chroma from 'chroma-js';
import styled from 'styled-components/native';

export const Container = styled(View)``;

export const Button = styled(RectButton)`
  position: relative;
  overflow: hidden;
  flex-direction: row;
  margin: ${({theme}) => theme.space[3]}px;
  padding: ${({theme}) => theme.space[3]}px;
  border-radius: 12px;
`;

export const PokemonImage = styled(Image)`
  width: 128px;
  height: 128px;
`;

export const Grow = styled(View)`
  flex: 1;
`;

export const PokemonSpecie = styled(Text)`
  color: ${({theme}) => chroma(theme.palette.white).alpha(0.5).hex()};
  font-weight: ${({theme}) => theme.fontWeights.heading};
  text-transform: capitalize;
`;

export const PokedexNumber = styled(Text)`
  color: ${({theme}) => chroma(theme.palette.white).alpha(0.5).hex()};
  font-size: ${({theme}) => theme.fontSizes.lg}px;
  font-weight: ${({theme}) => theme.fontWeights.heading};
`;
