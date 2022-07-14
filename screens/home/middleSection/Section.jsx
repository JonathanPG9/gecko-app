import {FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import InfoSection from './InfoSection';

export default function Section() {
  const mockedValues = [
      {
        id: 0,
        actualizacion:'07/12 13:00',
        tipo: "oficial",
        valor: {
          compra: 126.75,
          venta: 133.75
        }
      },{
        id: 1,
        actualizacion:'07/12 13:00',
        tipo: "blue",
        valor: {
          compra: 263.00,
          venta: 268.00
        }
      },{
        id: 2,
        actualizacion:'07/12 13:00',
        tipo: "mep",
        valor: {
          compra: 285.54,
          venta: 285.87
        }
      },{
        id: 3,
        actualizacion:'07/12 13:00',
        tipo: "liqui",
        valor: {
          compra: 297.76,
          venta: 298.55
        }
      },{
        id: 4,
        actualizacion:'07/12 13:00',
        tipo: "solidario",
        valor: {
          compra: 237.76,
          venta: 218.55
        }
      },
      {
        id: 5,
        actualizacion:'07/12 13:00',
        tipo: "bitcoin",
        valor: {
          compra: 2317.76,
          venta: 2128.55
        }
      }
    ]

  return (
    <FlatList style={styles.s}
    data={mockedValues}
    keyExtractor={item => item.id}
    renderItem={({ item }) => {
      return (
        <TouchableHighlight>
          <View style={styles.s_v}>
            <View style={styles.s_t}>
              <Text style={styles.s_t_t}>
                DOLAR {item.tipo.toUpperCase()}
              </Text>
              <Text style={styles.s_t_t}>
                {item.actualizacion}
              </Text>
            </View>
            <InfoSection compra='COMPRA' valor={item.valor.compra}/>
            <InfoSection venta='VENTA' valor={item.valor.venta}/>
          </View>
        </TouchableHighlight>
      )
    }}
    />
  );
}

const styles = StyleSheet.create({
  s: {
    flex: 1,
    backgroundColor: '#FBF8F5',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  s_v: {
    backgroundColor: '#fff',
    marginHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomEndRadius:30,
    marginBottom:10,
  },
  s_t: {
    position: 'absolute',
    alignItems:'center',
    borderBottomWidth:1,
    marginTop:12,
    paddingHorizontal:54
  },
  s_t_t: {
    fontSize:13,
    fontWeight:'bold',
  }
});
