import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack, router, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthContextProvider, useAuth } from '@/firebase/authContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const { isAuthed } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if(typeof isAuthed == 'undefined') return;
    
    const inApp = segments[0] == 'drawer';
    const inRecipe = segments[0] == 'Recipe';

    if ( isAuthed && !inApp && !inRecipe ) {
      router.replace('/Home')
    } else if ( isAuthed === false ) {
      router.replace('/Login')
    }

    console.log( segments)
  }, [isAuthed])

  return (
    <Stack>
      <Stack.Screen 
        name='index'
      />
      <Stack.Screen 
        name='Recipe'
        options={{
          headerBackTitle:"Back"
        }}
      />
      <Stack.Screen 
        name='(drawer)'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='Login'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='SignUp'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='ForgotPassword'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthContextProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MainLayout />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
