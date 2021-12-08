export interface PokemonType {
  slot: number;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  avatar: string;
}
