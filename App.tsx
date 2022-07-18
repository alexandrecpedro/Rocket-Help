import { NativeBaseProvider, StatusBar } from 'native-base';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import React from 'react';
import { SignIn } from './src/screens/Signin';
import { Loading } from './src/components/Loading';

export default function App() {
  // Use Fonts (async process)
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  return (
    <NativeBaseProvider theme={THEME}>
      {/* Set status bar */}
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* The app should wait until fonts are loaded */}
      { fontsLoaded ? <SignIn /> : <Loading /> }
    </NativeBaseProvider>
  );
}
