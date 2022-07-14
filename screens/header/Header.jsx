import {StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.h}>
      <Text style={styles.h_s_g}>
        Gecko
      </Text>
      <Text style={styles.h_s_t}>
        ¡ Cotizacion a tiempo real !
      </Text>
      <Image style={styles.i} source={require('../../assets/pana.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  h: {
    flex: 0.25,
    alignItems:'center',
  },
  i: {
    width: 200,
    height: 200,
    position: 'absolute',
  },
  h_s_g: {
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    marginTop:33
  },
  h_s_t: {
    color:'white',
    fontSize:14,
    fontWeight:'bold',
  },
});
