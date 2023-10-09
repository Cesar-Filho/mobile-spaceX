import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {persistor, store} from './store';

import {ErrorBoundary} from '@components/ErrorBoundary';
import {Navigator} from './navigators';
import {theme} from './theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <NavigationContainer>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              />
              <Navigator />
            </NavigationContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
