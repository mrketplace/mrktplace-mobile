import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import fonts from './fonts';
import BottomTabs from './src/components/base/BottomTabs';
import SplashScreen from './src/views/SplashScreen';
import 'localstorage-polyfill';

export default function App() {
  // Font loading
  const [fontsLoaded] = useFonts(fonts);
  // SplashScreen timer configs
  const [isSplashTimePassed, setSplashTimePassed] = useState(false);
  if (!isSplashTimePassed) {
    setTimeout(() => {
      setSplashTimePassed(true);
    }, 5000);
  }
  // Component rendering
  return (fontsLoaded && isSplashTimePassed) ? (
    <NavigationContainer>
      {/* theme={userTheme === 'dark' ? theme.dark : theme.light}> */}
      <BottomTabs />
    </NavigationContainer>
  ) : <SplashScreen />;
}
