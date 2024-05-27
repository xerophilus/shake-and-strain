import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { ThemedView } from './ThemedView';
import { TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';

const Ingredient = ({ingredient, units}) => {
    const [checked, setChecked] = useState(false)
    const measurementUnit = units ? 0 : 1

    const measurement = ingredient.unit[measurementUnit]

    return (
        <TouchableOpacity onPress={() => setChecked(!checked)} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#9BA1A6', borderRadius: 25, margin: 5, width: '75%'}}>
            <Checkbox status={checked ? "checked" : 'unchecked'} onPress={() => setChecked(!checked)}/>
            <ThemedText>{measurement} <ThemedText style={{fontWeight: 'bold'}}>{ingredient.name}</ThemedText></ThemedText>
        </TouchableOpacity>
    )
}

export default Ingredient;