import {FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const mockedValues = [
      {
        id: 0,
        actualizacion:5,
        tipo: "oficial",
        valor: {
          compra: 126.75,
          venta: 133.75
        }
      },{
        id: 1,
        actualizacion:5,
        tipo: "blue",
        valor: {
          compra: 263.00,
          venta: 268.00
        }
      },{
        id: 2,
        actualizacion:5,
        tipo: "mep",
        valor: {
          compra: 285.54,
          venta: 285.87
        }
      },{
        id: 3,
        actualizacion:5,
        tipo: "liqui",
        valor: {
          compra: 297.76,
          venta: 298.55
        }
      },{
        id: 4,
        actualizacion:5,
        tipo: "solidario",
        valor: {
          compra: 237.76,
          venta: 218.55
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
                Actualizacion hace {item.actualizacion  + ` ${item.actualizacion > 60 ? 'hora' : 'minutos'}`}
              </Text>
            </View>
            <View style={styles.s_v_d}>
              <Text style={{fontWeight:'bold'}}>
                COMPRA
              </Text>
              <Text style={styles.s_t_v}>
                ${item.valor.compra}
              </Text>
            </View>
            <View style={styles.s_v_d}>
              <Text style={{fontWeight:'bold'}}>
                VENTA
              </Text>
              <Text style={styles.s_t_v}>
                ${item.valor.venta}
              </Text>
            </View>
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
    backgroundColor: '#fcfcfc',
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
  },
  s_v: {
    backgroundColor: '#f3f8fe',
    marginHorizontal:20,
    marginTop:20,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomEndRadius:30,
    marginBottom:10
  },
  s_t: {
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:0.2,
    marginTop:5,
    paddingHorizontal:20
  },
  s_t_t: {
    fontSize:14,
    fontWeight:'bold',
  },
  s_t_v: {
    fontSize:14,
    fontWeight:'bold',
    color: '#22aa69'
  },
  s_v_d: {
    marginTop:25,
    paddingVertical:33,
    flex:0.5,
    alignItems:'center',
  },
});
