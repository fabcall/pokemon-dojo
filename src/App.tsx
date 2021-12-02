import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './routes/RootNavigator';
import {delay} from './utilities/delay';

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
    <GestureHandlerRootView>
      <RootNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
