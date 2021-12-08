import {gql, useQuery} from '@apollo/client';

import {Pokemon} from '../../types/Pokemon';

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        avatar
        id
        name
        types {
          slot
          name
        }
      }
    }
  }
`;

export type GetPokemonsResultItem = Pokemon;

export interface UseGetPokemonsData {
  pokemons: {
    count: number;
    results: GetPokemonsResultItem[];
    status: boolean;
  };
}

export interface UseGetPokemons {
  variables: {
    limit: number;
    offset: number;
  };
}

const useGetPokemons = ({variables}: UseGetPokemons) => {
  return useQuery<UseGetPokemonsData, UseGetPokemons['variables']>(
    GET_POKEMONS,
    {
      variables,
    },
  );
};

export default useGetPokemons;
