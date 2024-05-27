import { useState } from 'react';
import { StyleSheet, FlatList, ImageBackground, View, Dimensions, Alert, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cocktails, favorites } from '@/constants/Cocktails';
import { router, useSegments } from 'expo-router';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const adjustFavorite = (index) => {
    cocktails[index].favorite = !cocktails[index].favorite
  }

  const CocktailCard = ({title, image, favorite, index}) => {
    let favoriteColor = '#686462'
    if(favorite){
      favoriteColor = '#ECEDEE'
    }
    return (
      <Pressable style={{flex: 1}} onPress={() => router.push(`Recipe/${title}`)}>
        <ThemedView style={styles.card}>
            <ImageBackground
              source={{
                uri: image
              }}
              style={{
                flex:1, 
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              <TouchableOpacity onPress={() => adjustFavorite(index)}>
                <ThemedView style={{borderRadius: 50, padding: 5, margin: 5}}>
                  <MaterialCommunityIcons name='heart' color={favoriteColor} size={32}/>
                </ThemedView>
              </TouchableOpacity>
              <ThemedView style={{opacity: .6, width: '100%', height: "20%", justifyContent: 'center'}}>
                <ThemedText style={styles.text}>{title}</ThemedText>
              </ThemedView>
            </ImageBackground>
        </ThemedView>
      </Pressable>
    )
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <Searchbar
        mode='bar'
        placeholder={'Cocktail Name'}
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{backgroundColor: '#211f1f', color: '#6a6563'}}
        placeholderTextColor={'#6a6563'}
        right={({color, style, }) => {
          return (
            <>
              <TouchableOpacity onPress={() => Alert.alert("Pressed Media")} style={style}>
                <MaterialCommunityIcons name='image' color={'#ffffff'} size={28}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert("Pressed history")} style={style}>
                <MaterialCommunityIcons name='history' color={'#ffffff'} size={28}/>
              </TouchableOpacity>
            </>
          )
        }}
      />
      <FlatList 
        numColumns={2}
        data={cocktails}
        renderItem={({item, index}) => <CocktailCard title={item.name} image={item.img} favorite={item.favorite} index={index}/>}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  card: {
    flex:1, 
    height: Dimensions.get('screen').height/6,
    margin: 10
  },
  text: {
    fontSize: 24
  }
});
