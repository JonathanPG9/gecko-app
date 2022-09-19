import Home from './screens/home/Home.jsx';
import React,{ useState} from 'react';
import Header from './screens/header/Header.jsx';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import DataLoadContext from './context/Context.jsx';

export default function App() {
  const [data,setData] = useState([]),
        [isLoaded,setIsLoaded] = useState(false);

  return (
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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bab53',
    marginTop:StatusBar.currentHeight
  },
});


// AGREGAR COMPONENTE WRAPPER PARA CONTENER A TODOS LOS HIJOS + LÓGICA DE APP