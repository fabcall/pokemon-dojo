import '@react-navigation/native';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';
import RootNavigator from './routes/RootNavigator';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {delay} from './utilities/delay';
import theme from './styles/theme';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache,
});

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
    <ApolloProvider client={client}>
      <StyledThemeProvider theme={theme}>
        <RootNavigator />
      </StyledThemeProvider>
    </ApolloProvider>
  );
};

export default App;
