import React, {useState}  from 'react';
import Home from '../screens/home/Home';
import Header from '../screens/header/Header';
import DataLoadContext from '../context/Context';
import { StyleSheet, View, StatusBar, Text } from 'react-native';

export default function Wrapper() {
  const [data,setData] = useState([]),
        [isLoaded,setIsLoaded] = useState(false);

  return(
    <DataLoadContext data={data} setData={setData} isLoaded={isLoaded} setIsLoaded={setIsLoaded}>
      {!isLoaded ?
        <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
          <Text>{typeof data === 'string' ? data : 'Cargando..'}</Text>
        </View>
        :
        <View style={styles.container}>
          <Header/>
          <Home/>
        </View>
      }
    </DataLoadContext>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bab53',
    marginTop:StatusBar.currentHeight
  },
});
