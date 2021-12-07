import {Container, Type, TypeText} from './styles';

import React from 'react';
import {ViewProps} from 'react-native';

type PokemonTypesProps = ViewProps & {
  pokemon: any;
  size?: 'regular' | 'small';
};

const PokemonTypes = ({
  pokemon,
  size = 'regular',
  ...props
}: PokemonTypesProps) => {
  return (
    <Container {...props}>
      {pokemon.types.map(({type}: any) => (
        <Type size={size} key={type.url}>
          <TypeText size={size}>{type.name}</TypeText>
        </Type>
      ))}
    </Container>
  );
};

export default PokemonTypes;
