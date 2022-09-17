import {FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import InfoSection from './InfoSection';
import Paragraph from './Paragraph';

export default function Section({data}) {
  return (
    <FlatList style={styles.s}
    data={data}
    keyExtractor={item => item.i}
    renderItem={({ item }) => {
      return (
        <TouchableHighlight>
          <View style={styles.s_v}>
            <View style={styles.s_t}>
              <Paragraph itemTipo={'DOLAR ' + item.t.toUpperCase()}/>
              <Paragraph itemAct={item.d}/>
            </View>
            <InfoSection compra='COMPRA' valor={item.c}/>
            <InfoSection venta='VENTA' valor={item.v}/>
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
