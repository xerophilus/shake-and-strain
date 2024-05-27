import { FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <Drawer screenOptions={{
        swipeEnabled: true,
        // drawerInactiveTintColor: '#ffffff'
    }}>
      <Drawer.Screen
        name='Home'
        options={{
          headerTitle: 'Shake and Strain',
          drawerLabel:'Home',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='home' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='CocktailCategories'
        options={{
          drawerLabel:'Cocktail Categories',
          drawerIcon: ({size, color}) => (
            <FontAwesome6 name='shapes' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='SearchByIngredients'
        options={{
          drawerLabel:'Search by Ingredients',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='magnify' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='MyBar'
        options={{
          drawerLabel:'My Bar',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='bottle-wine' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='Favourites'
        options={{
          drawerLabel:'Favourites',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='cards-heart' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='ShoppingList'
        options={{
          drawerLabel:'Shopping List',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='basket' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='Feedback'
        options={{
          drawerLabel:'Feedback',
          drawerIcon: ({size, color}) => (
            <MaterialIcons name='feedback' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='RateThisApp'
        options={{
          drawerLabel:'Rate This App',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='star-circle' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='ShareApp'
        options={{
          drawerLabel:'Share App',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='share-variant' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
      <Drawer.Screen
        name='About'
        options={{
          drawerLabel:'About',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name='information-variant' size={32} color={color}/>
          ),
          drawerActiveTintColor:'#946c49'
        }}
      />
    </Drawer>
  </GestureHandlerRootView>
  );
}
