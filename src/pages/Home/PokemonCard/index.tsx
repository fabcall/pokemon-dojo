import {
  Button,
  Container,
  Grow,
  PokedexNumber,
  PokemonImage,
  PokemonSpecie,
} from './styles';
import React, {useMemo} from 'react';

import {PokemonTypes} from '../../../components';
import getColorByPokemonType from '../../../utilities/getColorByPokemonType';

type PokemonCardProps = {};

const pokemon = {
  types: [
    {
      slot: 1,
      type: {
        id: null,
        url: 'https://pokeapi.co/api/v2/type/12/',
        name: 'grass',
      },
    },
    {
      slot: 2,
      type: {
        id: null,
        url: 'https://pokeapi.co/api/v2/type/4/',
        name: 'poison',
      },
    },
  ],
};

const PokemonCard = ({}: PokemonCardProps) => {
  const backgroundColor = getColorByPokemonType(pokemon.types[0].type.name);

  const buttonStyle = useMemo(
    () => ({
      backgroundColor,
    }),
    [backgroundColor],
  );

  return (
    <Container>
      <Button style={buttonStyle}>
        <Grow>
          <PokedexNumber>#001</PokedexNumber>
          <PokemonSpecie>Bulbasaur</PokemonSpecie>
          <Grow />
          <PokemonTypes pokemon={pokemon} />
        </Grow>
        <PokemonImage
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          }}
        />
      </Button>
    </Container>
  );
};

export default React.memo(PokemonCard);
