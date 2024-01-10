import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/Pages/HomeScreen'
import { ThemeProvider } from './src/Themes/theme'

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen/>
      <StatusBar style='auto'/>
    </ThemeProvider>
  );
}
