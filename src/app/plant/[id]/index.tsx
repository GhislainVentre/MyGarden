import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Alert, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../components/Button';
import { CareSheet } from '../../../components/CareSheet';
import { PlantPhoto } from '../../../components/PlantPhoto';
import { WateringBadge } from '../../../components/WateringBadge';
import { useGarden } from '../../../context/GardenContext';
import { getSpecies } from '../../../data/species';
import { daysUntilWatering, formatEvery, wateringIntervalDays } from '../../../lib/care';
import { colors, radius, spacing } from '../../../theme';

function confirmDelete(name: string, onConfirm: () => void) {
  const message = `Supprimer « ${name} » de votre jardin ? Cette action est définitive.`;
  if (Platform.OS === 'web') {
    if (window.confirm(message)) onConfirm();
    return;
  }
  Alert.alert('Supprimer la plante', message, [
    { text: 'Annuler', style: 'cancel' },
    { text: 'Supprimer', style: 'destructive', onPress: onConfirm },
  ]);
}

export default function PlantDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { plants, markWatered, removePlant } = useGarden();
  const plant = plants.find((p) => p.id === id);

  if (!plant) {
    return (
      <View style={styles.center}>
        <Text style={styles.muted}>Cette plante n’existe plus.</Text>
      </View>
    );
  }

  const species = getSpecies(plant.speciesId);
  const days = daysUntilWatering(plant, species);
  const interval = wateringIntervalDays(plant, species);
  const lastWatered = plant.lastWateredAt
    ? new Date(plant.lastWateredAt).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
    : null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: plant.nickname }} />

      <View style={styles.hero}>
        <PlantPhoto uri={plant.photoUri} size={220} rounded={radius.lg} />
        <Text style={styles.name}>{plant.nickname}</Text>
        <Text style={styles.muted}>
          {species ? species.commonName : 'Espèce non renseignée'}
          {plant.location ? ` · ${plant.location}` : ''}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💧 Suivi de l’arrosage</Text>
        <WateringBadge days={days} />
        <Text style={styles.body}>
          Dernier arrosage : {lastWatered ?? 'inconnu'}
          {'\n'}Fréquence : {formatEvery(interval)}
          {plant.customWateringDays ? ' (personnalisée)' : species ? ' (selon la saison)' : ' (par défaut)'}
        </Text>
        <Button label="J’ai arrosé aujourd’hui" onPress={() => markWatered(plant.id)} />
      </View>

      {plant.notes ? (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📝 Notes</Text>
          <Text style={styles.body}>{plant.notes}</Text>
        </View>
      ) : null}

      <Text style={styles.sectionTitle}>Fiche d’entretien</Text>
      {species ? (
        <CareSheet species={species} />
      ) : (
        <View style={styles.card}>
          <Text style={styles.body}>
            Renseignez l’espèce de cette plante pour afficher ses conseils d’arrosage, de lumière, de terre et d’engrais.
          </Text>
          <Button
            label="Choisir l’espèce"
            variant="secondary"
            onPress={() => router.push({ pathname: '/plant/[id]/edit', params: { id: plant.id } })}
          />
        </View>
      )}

      <View style={styles.footer}>
        <Button
          label="Modifier"
          variant="secondary"
          onPress={() => router.push({ pathname: '/plant/[id]/edit', params: { id: plant.id } })}
        />
        <Button
          label="Supprimer"
          variant="danger"
          onPress={() =>
            confirmDelete(plant.nickname, () => {
              removePlant(plant.id);
              router.back();
            })
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.lg, paddingBottom: 48 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  hero: { alignItems: 'center', gap: spacing.xs },
  name: { fontSize: 26, fontWeight: '800', color: colors.text, marginTop: spacing.sm, textAlign: 'center' },
  muted: { fontSize: 15, color: colors.muted, textAlign: 'center' },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
  },
  cardTitle: { fontSize: 17, fontWeight: '700', color: colors.text },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: colors.text, marginTop: spacing.sm },
  body: { fontSize: 15, lineHeight: 22, color: colors.text },
  footer: { gap: spacing.sm, marginTop: spacing.md },
});
