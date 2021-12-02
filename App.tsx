import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

const delay = (timeout: number) =>
  new Promise(resolve => setTimeout(resolve, timeout));

const App = () => {
  useEffect(() => {
    const init = async () => {
      return delay(1000);
    };
    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
};

export default App;
