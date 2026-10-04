import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SPECIES } from '../data/species';
import { CATEGORY_LABELS, searchSpecies } from '../lib/care';
import { colors, radius, spacing } from '../theme';
import type { PlantSpecies } from '../types';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (species: PlantSpecies | null) => void;
}

export function SpeciesPicker({ visible, onClose, onSelect }: Props) {
  const [query, setQuery] = useState('');
  const results = searchSpecies(SPECIES, query);

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Choisir l’espèce</Text>
          <Pressable accessibilityRole="button" onPress={onClose} hitSlop={12}>
            <Text style={styles.close}>Fermer</Text>
          </Pressable>
        </View>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Rechercher (ex. monstera, basilic…)"
          placeholderTextColor={colors.muted}
          style={styles.search}
          autoCorrect={false}
          autoFocus
        />
        <FlatList
          data={results}
          keyExtractor={(s) => s.id}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.list}
          ListHeaderComponent={
            <Pressable style={styles.row} onPress={() => onSelect(null)}>
              <Text style={styles.rowTitle}>Je ne connais pas l’espèce</Text>
              <Text style={styles.rowSubtitle}>Vous pourrez la renseigner plus tard</Text>
            </Pressable>
          }
          ListEmptyComponent={<Text style={styles.empty}>Aucune plante trouvée pour « {query} ».</Text>}
          renderItem={({ item }) => (
            <Pressable style={styles.row} onPress={() => onSelect(item)}>
              <Text style={styles.rowTitle}>{item.commonName}</Text>
              <Text style={styles.rowSubtitle}>
                {item.scientificName} · {CATEGORY_LABELS[item.category]}
              </Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
  },
  title: { fontSize: 20, fontWeight: '700', color: colors.text },
  close: { fontSize: 16, color: colors.primary, fontWeight: '600' },
  search: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.text,
  },
  list: { padding: spacing.lg, gap: spacing.sm },
  row: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  rowTitle: { fontSize: 16, fontWeight: '600', color: colors.text },
  rowSubtitle: { fontSize: 13, color: colors.muted, marginTop: 2 },
  empty: { textAlign: 'center', color: colors.muted, marginTop: spacing.xl },
});
