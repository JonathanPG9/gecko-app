import { View } from 'react-native';
import MiddleSection from './middleSection/Section';
import Header from '../header/Header';

export default function App() {
  return (
    <View style={{flex:0.75}}>
      <MiddleSection></MiddleSection>
    </View>
  );
}