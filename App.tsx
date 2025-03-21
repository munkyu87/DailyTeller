import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {StatusBar} from 'react-native';
import {NewsStoreProvider} from './src/stores/useNewsStore';

const App = () => {
  return (
    <NewsStoreProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </NavigationContainer>
    </NewsStoreProvider>
  );
};

export default App;
