import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const delay = (timeout: number) =>
  new Promise(resolve => setTimeout(resolve, timeout));

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
