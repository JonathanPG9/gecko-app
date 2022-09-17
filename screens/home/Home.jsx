import { View } from 'react-native';
import MiddleSection from './middleSection/Section';

export default function Home({data, setData, setIsLoaded}) {
  return (
    <View style={{flex:0.75}}>
      <MiddleSection data={data} setData={setData} setIsLoaded={setIsLoaded}/>
    </View>
  );
}