import React from 'react'
import { Text } from 'react-native'
import { styles } from '../style';

const PrimeiroComponente = (props) => {
  
  return (
    <Text style={styles.text}>Meu primeiro componente: {props.prop1}</Text>
  )
}

export default PrimeiroComponente