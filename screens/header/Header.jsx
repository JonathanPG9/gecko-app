import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.h}>
      <Text style={styles.h_s}>
        Bienvenido
      </Text>
      <Text style={styles.h_s_g}>
        Gecko
      </Text>
      <Text style={styles.h_s_t}>
        ¡ Cotizacion a tiempo real !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h: {
    flex: 0.25,
    justifyContent:'center',
    alignItems:'center'
  },
  h_s: {
    color:'white',
    fontWeight:'bold',
    fontSize:27,
  },
  h_s_g: {
    color:'white',
    fontWeight:'bold',
    fontSize:22,
  },
  h_s_t: {
    color:'white',
    textAlign:'center',
    paddingVertical:5,
    fontSize:16,
    fontWeight:'bold'
  },
});
