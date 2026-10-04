import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GardenProvider } from '../context/GardenContext';
import { colors } from '../theme';

export default function RootLayout() {
  return (
    <GardenProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
          headerBackTitle: 'Retour',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Mes plantes' }} />
        <Stack.Screen name="plant/new" options={{ title: 'Nouvelle plante', presentation: 'modal' }} />
        <Stack.Screen name="plant/[id]/index" options={{ title: 'Ma plante' }} />
        <Stack.Screen name="plant/[id]/edit" options={{ title: 'Modifier', presentation: 'modal' }} />
        <Stack.Screen name="species/index" options={{ title: 'Encyclopédie' }} />
        <Stack.Screen name="species/[id]" options={{ title: 'Fiche d’entretien' }} />
      </Stack>
    </GardenProvider>
  );
}
