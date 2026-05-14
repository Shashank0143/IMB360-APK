import React from 'react';
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { store } from './src/store';
import AuthNavigator from './src/navigation/AuthNavigator';

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <AppNavigator />
        <AuthNavigator />
    </NavigationContainer>
    
    </Provider>
  );
};

export default App;