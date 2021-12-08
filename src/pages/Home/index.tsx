import {Container, PokemonsList} from './styles';
import React, {useCallback, useMemo, useState} from 'react';

import {GetPokemonsResultItem} from '../../hooks/useGetPokemons/useGetPokemons';
import {ListRenderItem} from 'react-native';
import {NetworkStatus} from '@apollo/client';
import PokemonCard from './PokemonCard';
import {StackScreenProps} from '@react-navigation/stack';
import {useGetPokemons} from '../../hooks';

type Props = StackScreenProps<ReactNavigation.RootParamList, 'Home'>;

const Home = ({}: Props) => {
  const [limit] = useState(10);
  const {data, fetchMore, networkStatus} = useGetPokemons({
    variables: {
      offset: 0,
      limit,
    },
  });
  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;

  const results = useMemo(
    () => data?.pokemons.results || [],
    [data?.pokemons.results],
  );

  const keyExtractor = useCallback(({name}: GetPokemonsResultItem) => name, []);

  const renderItem: ListRenderItem<GetPokemonsResultItem> = useCallback(
    ({item}) => <PokemonCard item={item} />,
    [],
  );

  const onEndReached = () => {
    if (!isFetchingMore) {
      fetchMore({
        variables: {
          offset: data?.pokemons.results.length,
        },
        updateQuery: (previousResult, {fetchMoreResult}) => {
          const newEntries = fetchMoreResult?.pokemons.results || [];
          return {
            pokemons: {
              ...previousResult.pokemons,
              results: previousResult.pokemons.results.concat(newEntries),
            },
          };
        },
      });
    }
  };

  return (
    <Container>
      <PokemonsList
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </Container>
  );
};

export default Home;
