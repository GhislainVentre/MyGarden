import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../../../components/Button';
import { CareSheet, CareStats } from '../../../components/CareSheet';
import { PlantPhoto } from '../../../components/PlantPhoto';
import { wateringTone } from '../../../components/WateringBadge';
import { useGarden } from '../../../context/GardenContext';
import { getSpecies } from '../../../data/species';
import { getWateringGuide } from '../../../data/watering';
import { daysUntilWatering, formatEvery, wateringIntervalDays, wateringLabel } from '../../../lib/care';
import { formatVolume, wateringAmountMl } from '../../../lib/watering';
import { goBack } from '../../../lib/navigation';
import { useNow } from '../../../lib/useNow';
import { card, colors, fonts, radius, spacing, type } from '../../../theme';

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
  const { plants, loading, markWatered, removePlant } = useGarden();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const now = useNow();
  const plant = plants.find((p) => p.id === id);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  if (!plant) {
    return (
      <View style={styles.center}>
        <Text style={type.body}>Cette plante n’existe plus.</Text>
        <Button label="Retour au jardin" icon="arrow-back" variant="secondary" onPress={() => router.replace('/')} />
      </View>
    );
  }

  const species = getSpecies(plant.speciesId);
  const days = daysUntilWatering(plant, species, now);
  const interval = wateringIntervalDays(plant, species, now);
  const tone = wateringTone(days);
  const amountMl = species ? wateringAmountMl(getWateringGuide(species), plant.potDiameterCm) : null;
  const lastWatered = plant.lastWateredAt
    ? new Date(plant.lastWateredAt).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
    : null;
  const heroHeight = Math.min(width * 0.95, 420);

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: insets.bottom + spacing.xxl }]} bounces={false}>
      <StatusBar style="light" />
      <View style={[styles.hero, { height: heroHeight }]}>
        <PlantPhoto uri={plant.photoUri} width={9999} height={heroHeight} rounded={0} style={styles.heroPhoto} />
        <LinearGradient
          colors={['rgba(31,42,34,0.35)', 'transparent', 'rgba(31,42,34,0.75)']}
          locations={[0, 0.45, 1]}
          style={StyleSheet.absoluteFill}
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Retour"
          onPress={goBack}
          hitSlop={8}
          style={[styles.back, { top: insets.top + spacing.sm }]}
        >
          <Ionicons name="chevron-back" size={22} color={colors.onPrimary} />
        </Pressable>
        <View style={styles.heroText}>
          <Text style={styles.heroName}>{plant.nickname}</Text>
          <Text style={styles.heroSubtitle}>
            {species ? species.commonName : 'Espèce non renseignée'}
            {plant.location ? `  ·  ${plant.location}` : ''}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={[styles.waterCard, { backgroundColor: tone.bg }]}>
          <View style={styles.waterHeader}>
            <View style={[styles.waterIcon, { backgroundColor: tone.fg }]}>
              <Ionicons name="water" size={22} color={colors.onPrimary} />
            </View>
            <View style={styles.waterText}>
              <Text style={[styles.waterTitle, { color: tone.fg }]}>{wateringLabel(days)}</Text>
              <Text style={type.caption}>
                {lastWatered ? `Dernier arrosage : ${lastWatered}` : 'Dernier arrosage inconnu'}
                {'\n'}
                {`Fréquence : ${formatEvery(interval)}`}
                {plant.customWateringDays ? ' (personnalisée)' : species ? ' (selon la saison)' : ' (par défaut)'}
                {amountMl !== null ? `\nQuantité : environ ${formatVolume(amountMl)} (pot de ${plant.potDiameterCm} cm)` : ''}
              </Text>
            </View>
          </View>
          <Button label="J’ai arrosé aujourd’hui" icon="checkmark" size="lg" onPress={() => markWatered(plant.id)} />
        </View>

        {species && <CareStats species={species} />}

        {plant.notes ? (
          <View style={styles.notes}>
            <View style={styles.notesHeader}>
              <Ionicons name="create-outline" size={16} color={colors.muted} />
              <Text style={type.label}>Mes notes</Text>
            </View>
            <Text style={type.body}>{plant.notes}</Text>
          </View>
        ) : null}

        <Text style={type.title}>Fiche d’entretien</Text>
        {species ? (
          <CareSheet species={species} showStats={false} />
        ) : (
          <View style={styles.notes}>
            <Text style={type.body}>
              Renseignez l’espèce de cette plante pour afficher ses conseils d’arrosage, de lumière, de terre et d’engrais.
            </Text>
            <Button
              label="Choisir l’espèce"
              icon="search"
              variant="secondary"
              onPress={() => router.push({ pathname: '/plant/[id]/edit', params: { id: plant.id } })}
            />
          </View>
        )}

        <View style={styles.footer}>
          <Button
            label="Modifier"
            icon="pencil"
            variant="secondary"
            onPress={() => router.push({ pathname: '/plant/[id]/edit', params: { id: plant.id } })}
          />
          <Button
            label="Supprimer"
            icon="trash-outline"
            variant="danger"
            onPress={() =>
              confirmDelete(plant.nickname, () => {
                removePlant(plant.id);
                goBack();
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.lg, padding: spacing.xl },
  back: {
    position: 'absolute',
    left: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(31,42,34,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  hero: { width: '100%', backgroundColor: colors.primaryLight },
  heroPhoto: { width: '100%' },
  heroText: { position: 'absolute', left: spacing.lg, right: spacing.lg, bottom: spacing.xl + 8, gap: 2 },
  heroName: { fontFamily: fonts.displayBold, fontSize: 30, lineHeight: 36, color: colors.onPrimary },
  heroSubtitle: { fontFamily: fonts.bodyMedium, fontSize: 14, color: 'rgba(255,255,255,0.9)' },
  content: {
    marginTop: -spacing.xl,
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.lg,
  },
  waterCard: { borderRadius: radius.lg, padding: spacing.lg, gap: spacing.lg },
  waterHeader: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start' },
  waterIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  waterText: { flex: 1, gap: 4 },
  waterTitle: { fontFamily: fonts.display, fontSize: 20, lineHeight: 26 },
  notes: { ...card, padding: spacing.lg, gap: spacing.sm },
  notesHeader: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  footer: { gap: spacing.sm, marginTop: spacing.sm },
});
