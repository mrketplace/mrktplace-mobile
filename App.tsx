import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabs from './src/components/basics/BottomTabs';

export default function App() {
  // Component rendering
  return (
    <NavigationContainer>
      {/* theme={userTheme === 'dark' ? theme.dark : theme.light}> */}
      <BottomTabs />
    </NavigationContainer>
  );
}
