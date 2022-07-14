import Home from './screens/home/Home.jsx'
import { StatusBar as expoStatusBar } from 'expo-status-bar';
import Header from './screens/header/Header.jsx'
import {StyleSheet, View, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Home/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bab53',
    marginTop:StatusBar.currentHeight
  },
});
