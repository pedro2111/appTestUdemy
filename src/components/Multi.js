import React from 'react';
import { Text } from 'react-native';

function Comp1 () {
    return(
        <Text>
            Componente 1
        </Text>
    )
}
function Comp2 () {
    return(
        <Text>
            Componente 2
        </Text>
    )
}
function Comp3 () {
    return(
        <Text>
            Componente 3
        </Text>
    )
}
export const Comp4 = () => {
    return(
        <Text>
            Componente 4
        </Text>
    )
}

export {
    Comp1,
    Comp2,
    Comp3
}