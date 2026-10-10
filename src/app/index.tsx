import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../components/Button';
import { ColdSummary } from '../components/ColdSummary';
import { PlantPhoto } from '../components/PlantPhoto';
import { WateringBadge } from '../components/WateringBadge';
import { useGarden } from '../context/GardenContext';
import { getSpecies } from '../data/species';
import { compareUrgency, daysUntilWatering } from '../lib/care';
import { useNow } from '../lib/useNow';
import { card, colors, fonts, radius, spacing, type } from '../theme';
import type { MyPlant, PlantSpecies } from '../types';

interface Row {
  plant: MyPlant;
  species: PlantSpecies | undefined;
  days: number | null;
}

function greeting(date: Date): string {
  const hour = date.getHours();
  if (hour < 5) return 'Bonne nuit';
  if (hour < 12) return 'Bonjour';
  if (hour < 18) return 'Bon après-midi';
  return 'Bonsoir';
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function MyPlantsScreen() {
  const { plants, loading } = useGarden();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const now = useNow();
  // Deux colonnes de largeur fixe : une carte seule en fin de grille ne s'étire pas.
  const cardWidth = Math.floor((width - spacing.lg * 2 - spacing.md) / 2);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  const rows: Row[] = plants
    .map((plant) => {
      const species = getSpecies(plant.speciesId);
      return { plant, species, days: daysUntilWatering(plant, species, now) };
    })
    // Les plantes à arroser en premier, celles sans date à la fin.
    .sort((a, b) => compareUrgency(a.days, b.days));
  const toWater = rows.filter((r) => r.days !== null && r.days <= 0).length;
  const dateLabel = capitalize(now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }));

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        keyExtractor={(row) => row.plant.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={[styles.list, { paddingTop: insets.top + spacing.lg, paddingBottom: insets.bottom + 110 }]}
        ListHeaderComponent={
          <View style={styles.header}>
            <View>
              <Text style={type.caption}>{dateLabel}</Text>
              <Text style={type.hero}>{greeting(now)} 🌿</Text>
            </View>
            {plants.length > 0 && (
              <LinearGradient
                colors={toWater > 0 ? [colors.warning, '#E08A5C'] : [colors.primary, '#3F7A52']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.summary}
              >
                <View style={styles.summaryIcon}>
                  <Ionicons name={toWater > 0 ? 'water' : 'checkmark-done'} size={26} color={colors.onPrimary} />
                </View>
                <View style={styles.summaryText}>
                  <Text style={styles.summaryTitle}>
                    {toWater === 0 ? 'Tout est arrosé' : toWater === 1 ? '1 plante a soif' : `${toWater} plantes ont soif`}
                  </Text>
                  <Text style={styles.summarySubtitle}>
                    {toWater === 0
                      ? `${plants.length} plante${plants.length > 1 ? 's' : ''} dans votre jardin`
                      : 'Pensez à les arroser aujourd’hui'}
                  </Text>
                </View>
              </LinearGradient>
            )}
            <ColdSummary rows={rows} />
            {plants.length > 0 && <Text style={[type.label, styles.sectionLabel]}>Mes plantes</Text>}
          </View>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <View style={styles.emptyIcon}>
              <Ionicons name="leaf" size={44} color={colors.leaf} />
            </View>
            <Text style={type.title}>Votre jardin est vide</Text>
            <Text style={[type.body, styles.emptyText]}>
              Ajoutez votre première plante avec une photo pour suivre ses arrosages et retrouver ses conseils d’entretien.
            </Text>
          </View>
        }
        renderItem={({ item: { plant, species, days } }) => (
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push({ pathname: '/plant/[id]', params: { id: plant.id } })}
            style={({ pressed }) => [styles.cardItem, { width: cardWidth }, pressed && styles.pressed]}
          >
            <PlantPhoto uri={plant.photoUri} width={9999} height={150} rounded={0} style={styles.cardPhoto} />
            <View style={styles.cardBody}>
              <Text style={styles.cardName} numberOfLines={1}>
                {plant.nickname}
              </Text>
              <Text style={type.caption} numberOfLines={1}>
                {species ? species.commonName : 'Espèce non renseignée'}
                {plant.location ? ` · ${plant.location}` : ''}
              </Text>
              <WateringBadge days={days} compact style={styles.cardBadge} />
            </View>
          </Pressable>
        )}
      />

      <View style={[styles.actions, { paddingBottom: insets.bottom + spacing.md }]}>
        <Button label="Encyclopédie" icon="book-outline" variant="secondary" onPress={() => router.push('/species')} style={styles.action} />
        <Button label="Ajouter" icon="add" size="lg" onPress={() => router.push('/plant/new')} style={styles.action} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { paddingHorizontal: spacing.lg },
  column: { gap: spacing.md },
  header: { gap: spacing.lg, marginBottom: spacing.md },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  summaryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryText: { flex: 1, gap: 2 },
  summaryTitle: { fontFamily: fonts.display, fontSize: 20, color: colors.onPrimary },
  summarySubtitle: { fontFamily: fonts.bodyMedium, fontSize: 13, color: 'rgba(255,255,255,0.85)' },
  sectionLabel: { marginBottom: -spacing.sm },
  cardItem: { ...card, overflow: 'hidden', marginBottom: spacing.md },
  pressed: { opacity: 0.9, transform: [{ scale: 0.985 }] },
  cardPhoto: { width: '100%' },
  cardBody: { padding: spacing.md, gap: 4 },
  cardName: { fontFamily: fonts.display, fontSize: 17, color: colors.text },
  cardBadge: { marginTop: spacing.xs },
  empty: { alignItems: 'center', paddingVertical: 48, paddingHorizontal: spacing.xl, gap: spacing.md },
  emptyIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: { textAlign: 'center', color: colors.muted },
  actions: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  action: { flex: 1 },
});
