import {Image, View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import {Text} from '../../../components';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
`;

export const Button = styled(RectButton)`
  position: relative;
  overflow: hidden;
  flex-direction: row;
  margin: 20px;
  padding: 16px;
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
  font-weight: ${({theme}) => theme.fontWeights.heading};
`;

export const PokedexNumber = styled(Text)``;
