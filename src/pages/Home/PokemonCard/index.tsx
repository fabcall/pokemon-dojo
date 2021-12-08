import {
  Button,
  Container,
  Grow,
  PokedexNumber,
  PokemonImage,
  PokemonSpecie,
} from './styles';
import {Pokeball, PokemonTypes} from '../../../components';
import React, {useMemo} from 'react';

import {GetPokemonsResultItem} from '../../../hooks/useGetPokemons/useGetPokemons';
import chroma from 'chroma-js';
import {getColorByPokemonType} from '../../../utilities/getColorByPokemonType';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from 'styled-components/native';

type PokemonCardProps = {
  item: GetPokemonsResultItem;
};

const POKEBALL_RADIUS = 192;
const POKEBALL_STYLE = {
  position: 'absolute',
  right: -POKEBALL_RADIUS / 3,
} as const;

const PokemonCard = ({item}: PokemonCardProps) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const fill = chroma(theme.palette.black).alpha(0.05).hex();

  const backgroundColor = useMemo(
    () => getColorByPokemonType(item.types?.[0].name),
    [item.types],
  );

  const buttonStyle = useMemo(
    () => ({
      backgroundColor,
    }),
    [backgroundColor],
  );

  const onPress = () => {
    navigation.navigate('Pokemon');
  };

  return (
    <Container>
      <Button onPress={onPress} style={buttonStyle}>
        <Pokeball
          width={POKEBALL_RADIUS}
          height={POKEBALL_RADIUS}
          fill={fill}
          style={POKEBALL_STYLE}
        />
        <Grow>
          <PokedexNumber>
            {'#'.concat('000'.concat(item.id.toString()).slice(-3))}
          </PokedexNumber>
          <PokemonSpecie>{item.name}</PokemonSpecie>
          <Grow />
          <PokemonTypes pokemon={item} />
        </Grow>
        <PokemonImage
          source={{
            uri: item.avatar,
          }}
        />
      </Button>
    </Container>
  );
};

export default React.memo(PokemonCard);
