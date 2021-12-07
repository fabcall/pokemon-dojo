import {DefaultTheme, useTheme} from 'styled-components/native';
import React, {useMemo} from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from '../../pages/Home';
import Pokemon from '../../pages/Pokemon';

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

const createRootStackScreenOptions = (
  theme: DefaultTheme,
): StackNavigationOptions => ({
  headerStyle: {
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.heading,
  },
});

const RootStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo(
    () => createRootStackScreenOptions(theme),
    [theme],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Pokédex',
        }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default RootStack;
