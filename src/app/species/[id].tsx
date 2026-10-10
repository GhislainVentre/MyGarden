import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CareSheet } from '../../components/CareSheet';
import { getSpecies } from '../../data/species';
import { spacing, type } from '../../theme';

export default function SpeciesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const species = getSpecies(id);

  if (!species) return <Text style={[type.body, styles.container]}>Fiche introuvable.</Text>;

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: insets.bottom + spacing.xxl }]}>
      <Text style={[type.hero, styles.title]}>{species.commonName}</Text>
      <CareSheet species={species} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg },
  title: { marginBottom: spacing.md },
});
