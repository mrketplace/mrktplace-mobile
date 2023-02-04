import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomNavbar from './src/components/basics/BottomNavbar';

export default function App() {
  // Component rendering
  return (
    <NavigationContainer>
      {/* theme={userTheme === 'dark' ? theme.dark : theme.light}> */}
      <BottomNavbar />
    </NavigationContainer>
  );
}
