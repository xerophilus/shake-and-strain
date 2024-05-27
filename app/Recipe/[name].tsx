import { useState } from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { cocktails } from '@/constants/Cocktails';
import { useLocalSearchParams } from 'expo-router';
import { Image, Linking } from 'react-native';
import { Button, Checkbox, ToggleButton } from 'react-native-paper';
import MeasurementToggle from '@/components/MeasurementToggle';
import Ingredients from '@/components/Ingredients';

export default function Page() {
  const { name } = useLocalSearchParams();
  const [value, setValue] = useState(true);

  const recipe = cocktails.filter(obj => {
    return obj.name === name
  })[0]
  console.log(recipe.ingredients[2].unit[1])
  return (
    <ThemedView style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Image source={{uri: recipe.img }} style={{height: 200, width: "75%"}}/>
      <ThemedView style={{flexDirection: 'row'}}>
        <Button 
          mode='contained' 
          style={{backgroundColor: "#9BA1A6", borderRadius: 5, margin: 5, marginLeft: '24%'}}
          onPress={() => Linking.openURL(recipe.videoUrl)}
        >
          <ThemedText>Watch Video</ThemedText>
        </Button>
        <MeasurementToggle onToggle={setValue} value={value}/>
      </ThemedView>
      <ThemedText style={{
        fontSize: 40,
        lineHeight: 45,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
      }}>Ingredients</ThemedText>
      <Ingredients ingredients={recipe.ingredients} units={value}/>
      <ThemedView style={{flexDirection: 'row'}}>
        <Button mode='outlined' style={{flexDirection: 'row', borderRadius: 5, margin: 10}}>
          <ThemedText style={{flexShrink: 3}}>Add All To Shopping List</ThemedText>
        </Button>
        <Button mode='outlined' style={{borderRadius: 5, margin: 10}}>
          <ThemedText>Search for Similar</ThemedText>
        </Button>
      </ThemedView>
    </ThemedView>
  );
}
