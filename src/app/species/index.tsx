import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { SPECIES } from '../../data/species';
import { CATEGORY_LABELS, formatEvery, searchSpecies } from '../../lib/care';
import { colors, radius, spacing } from '../../theme';
import type { Category } from '../../types';

const FILTERS: (Category | 'all')[] = ['all', 'interieur', 'succulente', 'aromatique', 'exterieur', 'potager'];

export default function EncyclopediaScreen() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const results = searchSpecies(SPECIES, query).filter((s) => category === 'all' || s.category === category);

  return (
    <FlatList
      data={results}
      keyExtractor={(s) => s.id}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <View style={styles.header}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Rechercher une plante"
            placeholderTextColor={colors.muted}
            style={styles.search}
            autoCorrect={false}
          />
          <View style={styles.filters}>
            {FILTERS.map((f) => (
              <Pressable
                key={f}
                onPress={() => setCategory(f)}
                style={[styles.chip, category === f && styles.chipSelected]}
              >
                <Text style={[styles.chipText, category === f && styles.chipTextSelected]}>
                  {f === 'all' ? 'Toutes' : CATEGORY_LABELS[f]}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      }
      ListEmptyComponent={<Text style={styles.empty}>Aucune plante ne correspond à votre recherche.</Text>}
      renderItem={({ item }) => (
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.row, pressed && { opacity: 0.85 }]}
          onPress={() => router.push({ pathname: '/species/[id]', params: { id: item.id } })}
        >
          <Text style={styles.title}>{item.commonName}</Text>
          <Text style={styles.subtitle}>{item.scientificName}</Text>
          <Text style={styles.hint}>💧 {formatEvery(item.watering.summerDays)} en été</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: spacing.lg, gap: spacing.sm },
  header: { gap: spacing.md, marginBottom: spacing.sm },
  search: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.text,
  },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.round,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 13 },
  chipTextSelected: { color: '#FFFFFF', fontWeight: '600' },
  row: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: 2,
  },
  title: { fontSize: 17, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, fontStyle: 'italic', color: colors.muted },
  hint: { fontSize: 13, color: colors.water, marginTop: spacing.xs },
  empty: { textAlign: 'center', color: colors.muted, marginTop: spacing.xl },
});
