import {Container, PokemonsList} from './styles';

import {ListRenderItem} from 'react-native';
import PokemonCard from './PokemonCard';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<ReactNavigation.RootParamList, 'Home'>;

const Home = ({}: Props) => {
  const keyExtractor = (_: any, index: number) => {
    return `${index}`;
  };

  const renderItem: ListRenderItem<any> = () => {
    // eslint-disable-next-line no-bitwise
    return <PokemonCard />;
  };

  return (
    <Container>
      <PokemonsList<any>
        data={[{}]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Home;
