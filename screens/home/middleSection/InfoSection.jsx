import {StyleSheet, Text, View } from 'react-native';

export default function InfoSection({compra, venta, valor}) {
  return (
    <View style={styles.s_v_d}>
      <Text style={{fontWeight:'bold'}}>
        {compra || venta}
      </Text>
      <Text style={styles.s_t_v}>
        ${valor}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  s_v_d: {
    marginTop:25,
    top:10,
    paddingVertical:25,
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'
  },
  s_t_v: {
    fontSize:14,
    fontWeight:'bold',
    color: '#3bab53'
  },
});
