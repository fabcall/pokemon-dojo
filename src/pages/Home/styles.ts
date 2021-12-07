import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const PokemonsList = styled(FlatList)`
  flex: 1;
` as React.ComponentType as new <T>() => FlatList<T>;
