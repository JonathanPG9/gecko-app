import Home from './screens/home/Home.jsx'
import Header from './screens/header/Header.jsx'
import {StyleSheet, View } from 'react-native';

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
    backgroundColor: '#22aa69',
  },
});
