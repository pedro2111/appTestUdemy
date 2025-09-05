import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente  from './components/PrimeiroComponente';
import { styles } from './style';
import { Comp1, Comp2, Comp3, Comp4 } from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      
     <Aleatorio min={1} max={3}/>
      
      {/*
      <MinMax min={3} max={20}/>
      <Text style={styles.text}>Ola mundo</Text>
      <PrimeiroComponente prop1="Testando propriedade"/>
      <Comp1/>
      <Comp4/>
      */}
    </View>
  );
}

