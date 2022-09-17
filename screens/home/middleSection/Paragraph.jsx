import {Text, StyleSheet} from 'react-native';

export default function Paragraph({itemAct, itemTipo, children}) {
  return(
    <Text style={styles.s_t_t}>
      { itemTipo || itemAct || children}
    </Text>
  )
}

const styles = StyleSheet.create({
  s_t_t: {
    fontSize:13,
    fontWeight:'bold',
  }
});