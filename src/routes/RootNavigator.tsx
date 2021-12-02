import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
