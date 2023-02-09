import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import fonts from './fonts';
import BottomTabs from './src/components/base/BottomTabs';

export default function App() {
  // Font loading
  const [fontsLoaded] = useFonts(fonts);
  // Component rendering
  return (
    <NavigationContainer>
      {/* theme={userTheme === 'dark' ? theme.dark : theme.light}> */}
      <BottomTabs />
    </NavigationContainer>
  );
}
