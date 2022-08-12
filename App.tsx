import React from 'react';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

import { Home } from './src/pages/Home';
import { SignIn } from './src/pages/SignIn';

export const App = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  // return <Home />;
  return <SignIn></SignIn>;
};

export default App;
