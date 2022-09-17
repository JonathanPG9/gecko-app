import Home from './screens/home/Home.jsx';
import React,{ useState, useLayoutEffect } from 'react';
import Header from './screens/header/Header.jsx';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import Utils from './utils/utils.js';


export default function App() {
  const [data,setData] = useState(),
        [isLoaded,setIsLoaded] = useState(false);

  useLayoutEffect(() => { 
    Utils.callApi(setData,setIsLoaded);
  },[])

  console.log(data);

  if(!isLoaded) {
    return (
    <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
      <Text>{typeof data === 'string' ? data : 'Cargando..'}</Text>
    </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header/>
      <Home data={data}/>
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
