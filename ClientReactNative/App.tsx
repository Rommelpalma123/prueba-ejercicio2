'use strict';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v2';
import { Home } from './src/screens';

const tamaguiConfig = createTamagui(config);
type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

LogBox.ignoreLogs(['']);

const App = (props) => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer {...props}>
        <Home />
      </NavigationContainer>
    </TamaguiProvider>
  );
};
export default App;
