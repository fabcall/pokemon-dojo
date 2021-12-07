import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStack';
import {useTheme} from 'styled-components';

const RootNavigator = () => {
  const theme = useTheme();

  return (
    <>
      <NavigationContainer theme={theme}>
        <RootStack />
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
