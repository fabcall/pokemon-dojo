import {Text, View} from 'react-native';

import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<ReactNavigation.RootParamList, 'Pokemon'>;

const Pokemon = ({}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pokemon Screen</Text>
    </View>
  );
};

export default Pokemon;
