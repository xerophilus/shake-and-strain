import { TouchableOpacity } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Checkbox } from "react-native-paper";
import Ingredient from "./Ingredient";

const Ingredients = ({ingredients, units}) => {
    const sortIngredients = (ingredient, index) => {
        return <Ingredient ingredient={ingredient} units={units} key={index}/>
    }
    const ingredientsList = ingredients.map(sortIngredients)

    return (
        <ThemedView style={{width: '100%'}}>
            {ingredientsList}
        </ThemedView>
    )
}

export default Ingredients;