import { Text } from "react-native";
import React from "react";
import { styles } from '../style';

const MinMax = (props) => {
    return(
        <Text style={styles.text}>
            Maior numero: {props.max}{"\n"}
            Menor numero: {props.min}
        </Text>
        
    )
}

export default MinMax