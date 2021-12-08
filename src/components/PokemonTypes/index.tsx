import {Container, Type, TypeText} from './styles';

import {Pokemon} from '../../types/Pokemon';
import React from 'react';
import {ViewProps} from 'react-native';

type PokemonTypesProps = ViewProps & {
  pokemon: Pokemon;
  size?: 'regular' | 'small';
};

const PokemonTypes = ({
  pokemon,
  size = 'regular',
  ...props
}: PokemonTypesProps) => {
  return (
    <Container {...props}>
      {pokemon.types.map(type => (
        <Type size={size} key={type.name}>
          <TypeText size={size}>{type.name}</TypeText>
        </Type>
      ))}
    </Container>
  );
};

export default PokemonTypes;
