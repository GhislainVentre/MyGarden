import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chip, Tag } from '../../components/Chip';
import { SearchField } from '../../components/SearchField';
import { SPECIES } from '../../data/species';
import { CATEGORY_LABELS, formatEvery, searchSpecies } from '../../lib/care';
import { CATEGORY_TONES, DIFFICULTY_TONES, LIGHT_ICONS, card, colors, fonts, radius, spacing, type } from '../../theme';
import type { Category } from '../../types';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

const FILTERS: { key: Category | 'all'; label: string; icon: IconName }[] = [
  { key: 'all', label: 'Toutes', icon: 'apps-outline' },
  { key: 'interieur', label: 'Intérieur', icon: 'home-outline' },
  { key: 'succulente', label: 'Succulentes', icon: 'sunny-outline' },
  { key: 'aromatique', label: 'Aromatiques', icon: 'restaurant-outline' },
  { key: 'exterieur', label: 'Extérieur', icon: 'flower-outline' },
  { key: 'potager', label: 'Potager', icon: 'nutrition-outline' },
];

const DIFFICULTY_LABELS = { facile: 'Facile', moyenne: 'Moyen', difficile: 'Exigeant' } as const;

export default function EncyclopediaScreen() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const insets = useSafeAreaInsets();
  const results = useMemo(
    () => searchSpecies(SPECIES, query).filter((s) => category === 'all' || s.category === category),
    [query, category],
  );

  return (
    <FlatList
      data={results}
      keyExtractor={(s) => s.id}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + spacing.xl }]}
      ListHeaderComponent={
        <View style={styles.header}>
          <SearchField value={query} onChangeText={setQuery} placeholder={`Rechercher parmi ${SPECIES.length} plantes`} />
          <FlatList
            horizontal
            data={FILTERS}
            keyExtractor={(f) => f.key}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filters}
            renderItem={({ item }) => (
              <Chip label={item.label} icon={item.icon} selected={category === item.key} onPress={() => setCategory(item.key)} />
            )}
          />
          <Text style={type.caption}>
            {results.length} plante{results.length > 1 ? 's' : ''}
          </Text>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.empty}>
          <Ionicons name="search-outline" size={36} color={colors.muted} />
          <Text style={[type.body, { color: colors.muted, textAlign: 'center' }]}>Aucune plante ne correspond à votre recherche.</Text>
        </View>
      }
      renderItem={({ item }) => {
        const tone = CATEGORY_TONES[item.category];
        return (
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}
            onPress={() => router.push({ pathname: '/species/[id]', params: { id: item.id } })}
          >
            <View style={[styles.rowIcon, { backgroundColor: tone.bg }]}>
              <Ionicons name="leaf" size={22} color={tone.fg} />
            </View>
            <View style={styles.rowBody}>
              <Text style={styles.rowTitle} numberOfLines={1}>
                {item.commonName}
              </Text>
              <Text style={styles.rowSubtitle} numberOfLines={1}>
                {item.scientificName}
              </Text>
              <View style={styles.rowMeta}>
                <Tag label={CATEGORY_LABELS[item.category]} tone={tone} />
                <Tag label={DIFFICULTY_LABELS[item.difficulty]} tone={DIFFICULTY_TONES[item.difficulty]} />
              </View>
              <View style={styles.rowHints}>
                <Ionicons name="water-outline" size={13} color={colors.water} />
                <Text style={styles.hint}>{formatEvery(item.watering.summerDays)} en été</Text>
                <Ionicons name={LIGHT_ICONS[item.light.level]} size={13} color={colors.sun} style={styles.hintIcon} />
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.border} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: spacing.lg, gap: spacing.md },
  header: { gap: spacing.md, marginBottom: spacing.xs },
  filters: { gap: spacing.sm, paddingVertical: 2 },
  row: { ...card, flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md },
  pressed: { opacity: 0.9 },
  rowIcon: { width: 48, height: 48, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  rowBody: { flex: 1, gap: 3 },
  rowTitle: { fontFamily: fonts.display, fontSize: 17, color: colors.text },
  rowSubtitle: { ...type.caption, fontStyle: 'italic' },
  rowMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 4 },
  rowHints: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  hint: { fontFamily: fonts.bodyMedium, fontSize: 12, color: colors.muted },
  hintIcon: { marginLeft: 6 },
  empty: { alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xxl, paddingHorizontal: spacing.xl },
});
