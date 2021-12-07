import '@react-navigation/native';

import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';
import RootNavigator from './routes/RootNavigator';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {delay} from './utilities/delay';
import theme from './styles/theme';

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
    <StyledThemeProvider theme={theme}>
      <RootNavigator />
    </StyledThemeProvider>
  );
};

export default App;
