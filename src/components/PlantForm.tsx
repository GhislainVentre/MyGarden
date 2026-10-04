import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { getSpecies } from '../data/species';
import { formatEvery, wateringIntervalDays } from '../lib/care';
import { pickPhoto, type PhotoSource } from '../lib/photos';
import { colors, radius, spacing } from '../theme';
import type { NewPlant } from '../types';
import { Button } from './Button';
import { PlantPhoto } from './PlantPhoto';
import { SpeciesPicker } from './SpeciesPicker';

type WateredChoice = 'today' | 'yesterday' | 'week' | 'unknown' | 'keep';

interface Props {
  initial?: NewPlant;
  submitLabel: string;
  onSubmit: (plant: NewPlant) => void;
}

const DAY_MS = 24 * 60 * 60 * 1000;

function wateredAt(choice: WateredChoice, previous: string | null): string | null {
  const now = Date.now();
  switch (choice) {
    case 'today':
      return new Date(now).toISOString();
    case 'yesterday':
      return new Date(now - DAY_MS).toISOString();
    case 'week':
      return new Date(now - 7 * DAY_MS).toISOString();
    case 'unknown':
      return null;
    case 'keep':
      return previous;
  }
}

export function PlantForm({ initial, submitLabel, onSubmit }: Props) {
  const [photoUri, setPhotoUri] = useState<string | null>(initial?.photoUri ?? null);
  const [nickname, setNickname] = useState(initial?.nickname ?? '');
  const [speciesId, setSpeciesId] = useState<string | null>(initial?.speciesId ?? null);
  const [location, setLocation] = useState(initial?.location ?? '');
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [customDays, setCustomDays] = useState(initial?.customWateringDays ? String(initial.customWateringDays) : '');
  const [watered, setWatered] = useState<WateredChoice>(initial ? 'keep' : 'today');
  const [pickerOpen, setPickerOpen] = useState(false);

  const species = getSpecies(speciesId);
  const parsedDays = Number.parseInt(customDays, 10);
  const validCustomDays = Number.isFinite(parsedDays) && parsedDays > 0 ? parsedDays : null;
  const suggestedDays = wateringIntervalDays({ customWateringDays: null }, species);

  async function choosePhoto(source: PhotoSource) {
    const result = await pickPhoto(source);
    if (!result) return;
    if ('error' in result) {
      Alert.alert('Photo', result.error);
      return;
    }
    setPhotoUri(result.uri);
  }

  function submit() {
    const name = nickname.trim() || species?.commonName;
    if (!name) {
      Alert.alert('Nom manquant', 'Donnez un nom à votre plante ou choisissez son espèce.');
      return;
    }
    onSubmit({
      nickname: name,
      speciesId,
      photoUri,
      location: location.trim(),
      notes: notes.trim(),
      lastWateredAt: wateredAt(watered, initial?.lastWateredAt ?? null),
      customWateringDays: validCustomDays,
    });
  }

  const wateredOptions: { key: WateredChoice; label: string }[] = [
    ...(initial ? [{ key: 'keep' as const, label: 'Inchangé' }] : []),
    { key: 'today', label: 'Aujourd’hui' },
    { key: 'yesterday', label: 'Hier' },
    { key: 'week', label: 'Il y a une semaine' },
    { key: 'unknown', label: 'Je ne sais pas' },
  ];

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.photoBlock}>
          <PlantPhoto uri={photoUri} size={160} rounded={radius.lg} />
          <View style={styles.photoButtons}>
            {Platform.OS !== 'web' && (
              <Button label="📷 Prendre une photo" variant="secondary" onPress={() => choosePhoto('camera')} style={styles.flex} />
            )}
            <Button label="🖼️ Galerie" variant="secondary" onPress={() => choosePhoto('library')} style={styles.flex} />
          </View>
          {photoUri && (
            <Pressable onPress={() => setPhotoUri(null)} hitSlop={8}>
              <Text style={styles.link}>Retirer la photo</Text>
            </Pressable>
          )}
        </View>

        <Text style={styles.label}>Espèce</Text>
        <Pressable accessibilityRole="button" style={styles.input} onPress={() => setPickerOpen(true)}>
          <Text style={species ? styles.inputText : styles.placeholder}>
            {species ? `${species.commonName} (${species.scientificName})` : 'Choisir dans l’encyclopédie…'}
          </Text>
        </Pressable>

        <Text style={styles.label}>Nom de la plante</Text>
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          placeholder={species ? species.commonName : 'ex. Le monstera du salon'}
          placeholderTextColor={colors.muted}
          style={[styles.input, styles.inputText]}
        />

        <Text style={styles.label}>Emplacement</Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="ex. Salon, balcon, chambre…"
          placeholderTextColor={colors.muted}
          style={[styles.input, styles.inputText]}
        />

        <Text style={styles.label}>Dernier arrosage</Text>
        <View style={styles.chips}>
          {wateredOptions.map((option) => (
            <Pressable
              key={option.key}
              accessibilityRole="radio"
              accessibilityState={{ selected: watered === option.key }}
              onPress={() => setWatered(option.key)}
              style={[styles.chip, watered === option.key && styles.chipSelected]}
            >
              <Text style={[styles.chipText, watered === option.key && styles.chipTextSelected]}>{option.label}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Fréquence d’arrosage personnalisée (jours)</Text>
        <TextInput
          value={customDays}
          onChangeText={(text) => setCustomDays(text.replace(/[^0-9]/g, ''))}
          keyboardType="number-pad"
          placeholder={species ? `Conseillé en ce moment : ${formatEvery(suggestedDays)}` : 'Facultatif'}
          placeholderTextColor={colors.muted}
          style={[styles.input, styles.inputText]}
        />

        <Text style={styles.label}>Notes</Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="Date d’achat, rempotage, observations…"
          placeholderTextColor={colors.muted}
          style={[styles.input, styles.inputText, styles.notes]}
          multiline
        />

        <Button label={submitLabel} onPress={submit} style={styles.submit} />
      </ScrollView>

      <SpeciesPicker
        visible={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(selected) => {
          setSpeciesId(selected?.id ?? null);
          setPickerOpen(false);
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { padding: spacing.lg, paddingBottom: 48 },
  photoBlock: { alignItems: 'center', gap: spacing.md, marginBottom: spacing.sm },
  photoButtons: { flexDirection: 'row', gap: spacing.sm, alignSelf: 'stretch' },
  link: { color: colors.danger, fontWeight: '600' },
  label: { fontSize: 14, fontWeight: '600', color: colors.muted, marginTop: spacing.lg, marginBottom: spacing.xs },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
  },
  inputText: { fontSize: 16, color: colors.text },
  placeholder: { fontSize: 16, color: colors.muted },
  notes: { minHeight: 90, textAlignVertical: 'top' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.round,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 14 },
  chipTextSelected: { color: '#FFFFFF', fontWeight: '600' },
  submit: { marginTop: spacing.xl },
});
