/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { LoginForm } from './components/LoginForm';
import { theme } from './theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <PaperProvider theme={theme}>
        <LoginForm />
    </PaperProvider>
  );
};


export default App;
