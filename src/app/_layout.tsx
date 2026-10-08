import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { BotanicalBackground } from '../components/BotanicalBackground';
import { WateringReminders } from '../components/WateringReminders';
import { GardenProvider } from '../context/GardenContext';
import { colors, fonts } from '../theme';

// Écrans riches en texte : le fond y est voilé pour rester lisible.
const READING_SCREENS = new Set(['species/[id]', 'plant/[id]/index', 'plant/new', 'plant/[id]/edit']);

// L'écran de démarrage natif reste affiché tant que les polices chargent.
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  // Si une police ne charge pas, on démarre quand même avec la police système.
  const ready = fontsLoaded || !!fontError;

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  if (!ready) return null;

  return (
    <GardenProvider>
      <WateringReminders />
      <StatusBar style="dark" />
      <Stack
        screenLayout={({ children, route }) => (
          <BotanicalBackground veiled={READING_SCREENS.has(route.name)}>{children}</BotanicalBackground>
        )}
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
          headerTitleStyle: { fontFamily: fonts.display, fontSize: 20, color: colors.text },
          headerBackButtonDisplayMode: 'minimal',
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="plant/new" options={{ title: 'Nouvelle plante', presentation: 'modal' }} />
        <Stack.Screen name="plant/[id]/index" options={{ headerShown: false }} />
        <Stack.Screen name="plant/[id]/edit" options={{ title: 'Modifier', presentation: 'modal' }} />
        <Stack.Screen name="species/index" options={{ title: 'Encyclopédie' }} />
        <Stack.Screen name="species/[id]" options={{ title: 'Fiche d’entretien' }} />
      </Stack>
    </GardenProvider>
  );
}
