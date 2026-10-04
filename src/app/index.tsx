import { router } from 'expo-router';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../components/Button';
import { PlantPhoto } from '../components/PlantPhoto';
import { WateringBadge } from '../components/WateringBadge';
import { useGarden } from '../context/GardenContext';
import { getSpecies } from '../data/species';
import { daysUntilWatering } from '../lib/care';
import { colors, radius, spacing } from '../theme';

export default function MyPlantsScreen() {
  const { plants, loading } = useGarden();
  const insets = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  const now = new Date();
  const rows = plants
    .map((plant) => {
      const species = getSpecies(plant.speciesId);
      return { plant, species, days: daysUntilWatering(plant, species, now) };
    })
    // Les plantes à arroser en premier, celles sans date à la fin.
    .sort((a, b) => (a.days ?? Infinity) - (b.days ?? Infinity));
  const toWater = rows.filter((r) => r.days !== null && r.days <= 0).length;

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        keyExtractor={(row) => row.plant.id}
        contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + 120 }]}
        ListHeaderComponent={
          plants.length > 0 ? (
            <View style={styles.summary}>
              <Text style={styles.summaryText}>
                {toWater === 0
                  ? 'Aucune plante à arroser aujourd’hui 🌿'
                  : toWater === 1
                    ? '1 plante a besoin d’eau aujourd’hui'
                    : `${toWater} plantes ont besoin d’eau aujourd’hui`}
              </Text>
            </View>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>🌱</Text>
            <Text style={styles.emptyTitle}>Votre jardin est vide</Text>
            <Text style={styles.emptyText}>
              Ajoutez votre première plante avec une photo pour suivre ses arrosages et retrouver ses conseils
              d’entretien.
            </Text>
          </View>
        }
        renderItem={({ item: { plant, species, days } }) => (
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push({ pathname: '/plant/[id]', params: { id: plant.id } })}
            style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}
          >
            <PlantPhoto uri={plant.photoUri} size={72} />
            <View style={styles.cardBody}>
              <Text style={styles.name} numberOfLines={1}>
                {plant.nickname}
              </Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                {species ? species.commonName : 'Espèce non renseignée'}
                {plant.location ? ` · ${plant.location}` : ''}
              </Text>
              <WateringBadge days={days} />
            </View>
          </Pressable>
        )}
      />
      <View style={[styles.actions, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Button label="📖 Encyclopédie" variant="secondary" onPress={() => router.push('/species')} style={styles.action} />
        <Button label="＋ Ajouter" onPress={() => router.push('/plant/new')} style={styles.action} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { padding: spacing.lg, gap: spacing.md },
  summary: { backgroundColor: colors.primaryLight, borderRadius: radius.md, padding: spacing.md },
  summaryText: { color: colors.primaryDark, fontWeight: '600', fontSize: 15 },
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    alignItems: 'center',
  },
  cardBody: { flex: 1, gap: spacing.xs },
  name: { fontSize: 18, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, color: colors.muted },
  empty: { alignItems: 'center', paddingVertical: 64, paddingHorizontal: spacing.xl, gap: spacing.sm },
  emptyIcon: { fontSize: 56 },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: colors.text },
  emptyText: { fontSize: 15, color: colors.muted, textAlign: 'center', lineHeight: 22 },
  actions: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  action: { flex: 1 },
});
