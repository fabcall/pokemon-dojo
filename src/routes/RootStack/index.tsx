import Home from '../../pages/Home';
import Pokemon from '../../pages/Pokemon';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Pokemon: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default RootStack;
