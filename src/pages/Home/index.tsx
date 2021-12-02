import {Text, View} from 'react-native';

import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<ReactNavigation.RootParamList, 'Home'>;

const Home = ({}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
