import { Ionicons } from '@expo/vector-icons';
import { memo, useCallback, useDeferredValue, useMemo, useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SPECIES } from '../data/species';
import { CATEGORY_LABELS, searchSpecies } from '../lib/care';
import { CATEGORY_TONES, card, colors, fonts, radius, spacing, type } from '../theme';
import type { PlantSpecies } from '../types';
import { BotanicalBackground } from './BotanicalBackground';
import { Tag } from './Chip';
import { SearchField } from './SearchField';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (species: PlantSpecies | null) => void;
}

export function SpeciesPicker({ visible, onClose, onSelect }: Props) {
  const [query, setQuery] = useState('');
  // La saisie reste fluide : la liste se met à jour juste après la frappe.
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(() => searchSpecies(SPECIES, deferredQuery), [deferredQuery]);

  function close() {
    setQuery('');
    onClose();
  }

  const select = useCallback(
    (species: PlantSpecies | null) => {
      setQuery('');
      onSelect(species);
    },
    [onSelect],
  );
  const renderRow = useCallback(
    ({ item }: { item: PlantSpecies }) => <PickerRow item={item} onSelect={select} />,
    [select],
  );

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={close}>
      <BotanicalBackground>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={type.title}>Quelle espèce ?</Text>
              <Text style={type.caption}>{SPECIES.length} plantes dans l’encyclopédie</Text>
            </View>
            <Pressable accessibilityRole="button" accessibilityLabel="Fermer" onPress={close} hitSlop={12} style={styles.close}>
              <Ionicons name="close" size={20} color={colors.text} />
            </Pressable>
          </View>
          <View style={styles.search}>
            <SearchField value={query} onChangeText={setQuery} placeholder="Monstera, basilic, pilea…" autoFocus />
          </View>
          <FlatList
            data={results}
            keyExtractor={(s) => s.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.list}
            ListHeaderComponent={
              <Pressable style={({ pressed }) => [styles.row, styles.unknownRow, pressed && styles.pressed]} onPress={() => select(null)}>
                <View style={[styles.rowIcon, { backgroundColor: colors.surfaceAlt }]}>
                  <Ionicons name="help" size={22} color={colors.primary} />
                </View>
                <View style={styles.rowBody}>
                  <Text style={styles.rowTitle}>Je ne connais pas l’espèce</Text>
                  <Text style={type.caption}>Vous pourrez la renseigner plus tard</Text>
                </View>
              </Pressable>
            }
            ListEmptyComponent={
              <View style={styles.empty}>
                <Ionicons name="search-outline" size={36} color={colors.muted} />
                <Text style={[type.body, styles.emptyText]}>Aucune plante trouvée pour « {query} ».</Text>
              </View>
            }
            renderItem={renderRow}
            initialNumToRender={12}
            maxToRenderPerBatch={12}
            windowSize={7}
            removeClippedSubviews
          />
        </SafeAreaView>
      </BotanicalBackground>
    </Modal>
  );
}

const PickerRow = memo(function PickerRow({
  item,
  onSelect,
}: {
  item: PlantSpecies;
  onSelect: (species: PlantSpecies) => void;
}) {
  const tone = CATEGORY_TONES[item.category];
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]} onPress={() => onSelect(item)}>
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
      </View>
      <Tag label={CATEGORY_LABELS[item.category]} tone={tone} />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  close: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: { paddingHorizontal: spacing.lg, paddingBottom: spacing.sm },
  list: { padding: spacing.lg, gap: spacing.sm },
  row: { ...card, flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md },
  unknownRow: { backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.primaryLight, marginBottom: spacing.xs },
  pressed: { opacity: 0.9 },
  rowIcon: { width: 44, height: 44, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  rowBody: { flex: 1, gap: 2 },
  rowTitle: { fontFamily: fonts.display, fontSize: 16, color: colors.text },
  rowSubtitle: { ...type.caption, fontStyle: 'italic' },
  empty: { alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xxl, paddingHorizontal: spacing.xl },
  emptyText: { color: colors.muted, textAlign: 'center' },
});
