import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import { styles } from "../style";


const Contador = (props) => {
    const [contador, setContador] = useState(0);
    return (
        <View>
            <Text style={styles.text}>
                Contador = {contador}
            </Text>
            <Button title="incrementar" onPress={() => setContador(contador + 1)}>
            </Button>
        </View>
    )
}

export default Contador;