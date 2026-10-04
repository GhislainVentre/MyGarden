import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { CareSheet } from '../../components/CareSheet';
import { getSpecies } from '../../data/species';
import { spacing } from '../../theme';

export default function SpeciesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const species = getSpecies(id);

  if (!species) return <Text style={styles.container}>Fiche introuvable.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: species.commonName }} />
      <CareSheet species={species} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: 48 },
});
