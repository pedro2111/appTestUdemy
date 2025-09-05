import { Text } from "react-native";
import React from "react";
import { styles } from '../style';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Aleatorio = (props) => {
    return(
        <Text style={styles.text}>
            Numero aleatorio entre {props.min} e {props.max} = {getRandomInt(props.min, props.max)}
        </Text> 
    )
}

export default Aleatorio