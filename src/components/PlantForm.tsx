import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getSpecies } from '../data/species';
import { formatEvery, wateringIntervalDays } from '../lib/care';
import { deletePhoto, pickPhoto, type PhotoSource } from '../lib/photos';
import { notify } from '../lib/notify';
import { CATEGORY_TONES, card, colors, fonts, radius, spacing, type } from '../theme';
import type { NewPlant } from '../types';
import { Button } from './Button';
import { Chip } from './Chip';
import { PlantPhoto } from './PlantPhoto';
import { SpeciesPicker } from './SpeciesPicker';

type WateredChoice = 'today' | 'yesterday' | 'week' | 'unknown' | 'keep';

interface Props {
  initial?: NewPlant;
  submitLabel: string;
  onSubmit: (plant: NewPlant) => void;
}

/** Même heure il y a `days` jours, en jours civils (robuste aux changements d'heure). */
function daysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

function wateredAt(choice: WateredChoice, previous: string | null): string | null {
  switch (choice) {
    case 'today':
      return new Date().toISOString();
    case 'yesterday':
      return daysAgo(1).toISOString();
    case 'week':
      return daysAgo(7).toISOString();
    case 'unknown':
      return null;
    case 'keep':
      return previous;
  }
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <View style={styles.field}>
      <Text style={type.label}>{label}</Text>
      {children}
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}

export function PlantForm({ initial, submitLabel, onSubmit }: Props) {
  const insets = useSafeAreaInsets();
  const [photoUri, setPhotoUri] = useState<string | null>(initial?.photoUri ?? null);
  const [nickname, setNickname] = useState(initial?.nickname ?? '');
  const [speciesId, setSpeciesId] = useState<string | null>(initial?.speciesId ?? null);
  const [location, setLocation] = useState(initial?.location ?? '');
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [customDays, setCustomDays] = useState(initial?.customWateringDays ? String(initial.customWateringDays) : '');
  const [watered, setWatered] = useState<WateredChoice>(initial ? 'keep' : 'today');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const draftPhoto = useRef<string | null>(photoUri);
  const submitted = useRef(false);

  useEffect(() => {
    draftPhoto.current = photoUri;
  }, [photoUri]);

  // Photo copiée puis formulaire abandonné : on efface la copie.
  useEffect(() => {
    return () => {
      if (!submitted.current && draftPhoto.current !== (initial?.photoUri ?? null)) deletePhoto(draftPhoto.current);
    };
  }, [initial?.photoUri]);

  const species = getSpecies(speciesId);
  const parsedDays = Number.parseInt(customDays, 10);
  const validCustomDays = Number.isFinite(parsedDays) && parsedDays > 0 ? parsedDays : null;
  const suggestedDays = wateringIntervalDays({ customWateringDays: null }, species);
  const speciesTone = species ? CATEGORY_TONES[species.category] : null;

  /** Efface une photo copiée pendant la saisie mais finalement non retenue. */
  function discardDraftPhoto(uri: string | null) {
    if (uri && uri !== initial?.photoUri) deletePhoto(uri);
  }

  async function choosePhoto(source: PhotoSource) {
    const result = await pickPhoto(source);
    if (!result) return;
    if ('error' in result) {
      notify('Photo', result.error);
      return;
    }
    discardDraftPhoto(photoUri);
    setPhotoUri(result.uri);
  }

  function removePhoto() {
    discardDraftPhoto(photoUri);
    setPhotoUri(null);
  }

  function submit() {
    if (submitting) return;
    const name = nickname.trim() || species?.commonName;
    if (!name) {
      notify('Nom manquant', 'Donnez un nom à votre plante ou choisissez son espèce.');
      return;
    }
    setSubmitting(true);
    submitted.current = true;
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
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: insets.bottom + spacing.xxl }]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.photoBlock}>
          <View>
            <PlantPhoto uri={photoUri} size={168} rounded={radius.xl} />
            {photoUri && (
              <Pressable
                accessibilityLabel="Retirer la photo"
                onPress={removePhoto}
                hitSlop={8}
                style={styles.removePhoto}
              >
                <Ionicons name="close" size={16} color={colors.onPrimary} />
              </Pressable>
            )}
          </View>
          <View style={styles.photoButtons}>
            {Platform.OS !== 'web' && (
              <Button label="Photo" icon="camera-outline" variant="secondary" onPress={() => choosePhoto('camera')} style={styles.flex} />
            )}
            <Button label="Galerie" icon="images-outline" variant="secondary" onPress={() => choosePhoto('library')} style={styles.flex} />
          </View>
        </View>

        <Field label="Espèce">
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.speciesPicker, pressed && styles.pressed]}
            onPress={() => setPickerOpen(true)}
          >
            <View style={[styles.speciesIcon, { backgroundColor: speciesTone?.bg ?? colors.surfaceAlt }]}>
              <Ionicons name={species ? 'leaf' : 'search'} size={20} color={speciesTone?.fg ?? colors.primary} />
            </View>
            <View style={styles.flex}>
              <Text style={species ? styles.speciesName : styles.placeholder} numberOfLines={1}>
                {species ? species.commonName : 'Choisir dans l’encyclopédie'}
              </Text>
              <Text style={styles.speciesLatin} numberOfLines={1}>
                {species ? species.scientificName : '300 plantes avec leurs conseils d’entretien'}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.muted} />
          </Pressable>
        </Field>

        <Field label="Nom de la plante">
          <TextInput
            value={nickname}
            onChangeText={setNickname}
            placeholder={species ? species.commonName : 'ex. Le monstera du salon'}
            placeholderTextColor={colors.muted}
            style={styles.input}
          />
        </Field>

        <Field label="Emplacement">
          <View style={styles.inputRow}>
            <Ionicons name="location-outline" size={18} color={colors.muted} />
            <TextInput
              value={location}
              onChangeText={setLocation}
              placeholder="Salon, balcon, chambre…"
              placeholderTextColor={colors.muted}
              style={styles.inputInner}
            />
          </View>
        </Field>

        <Field label="Dernier arrosage">
          <View style={styles.chips}>
            {wateredOptions.map((option) => (
              <Chip key={option.key} label={option.label} selected={watered === option.key} onPress={() => setWatered(option.key)} />
            ))}
          </View>
        </Field>

        <Field
          label="Fréquence d’arrosage"
          hint={
            species
              ? `Laissez vide pour suivre la fiche : ${formatEvery(suggestedDays)} en ce moment.`
              : 'Facultatif. Sans espèce, l’app propose un arrosage hebdomadaire.'
          }
        >
          <View style={styles.inputRow}>
            <Ionicons name="water-outline" size={18} color={colors.water} />
            <TextInput
              value={customDays}
              onChangeText={(text) => setCustomDays(text.replace(/[^0-9]/g, ''))}
              keyboardType="number-pad"
              placeholder="Tous les…"
              placeholderTextColor={colors.muted}
              style={styles.inputInner}
            />
            <Text style={styles.suffix}>jours</Text>
          </View>
        </Field>

        <Field label="Notes">
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder="Date d’achat, rempotage, observations…"
            placeholderTextColor={colors.muted}
            style={[styles.input, styles.notes]}
            multiline
          />
        </Field>

        <Button label={submitLabel} icon="checkmark" size="lg" onPress={submit} disabled={submitting} style={styles.submit} />
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

const inputBase = {
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: radius.md,
  paddingHorizontal: spacing.lg,
  minHeight: 52,
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { padding: spacing.lg, gap: spacing.lg },
  photoBlock: { alignItems: 'center', gap: spacing.lg },
  removePhoto: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoButtons: { flexDirection: 'row', gap: spacing.sm, alignSelf: 'stretch' },
  field: { gap: spacing.sm },
  hint: { ...type.caption, paddingHorizontal: spacing.xs },
  input: { ...inputBase, fontFamily: fonts.bodyMedium, fontSize: 16, color: colors.text, paddingVertical: 14 },
  inputRow: { ...inputBase, flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  inputInner: { flex: 1, fontFamily: fonts.bodyMedium, fontSize: 16, color: colors.text, paddingVertical: 14 },
  suffix: { ...type.caption, color: colors.text },
  notes: { minHeight: 110, textAlignVertical: 'top' },
  speciesPicker: { ...card, flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md },
  pressed: { opacity: 0.9 },
  speciesIcon: { width: 44, height: 44, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  speciesName: { fontFamily: fonts.display, fontSize: 17, color: colors.text },
  placeholder: { fontFamily: fonts.bodyBold, fontSize: 16, color: colors.primary },
  speciesLatin: { ...type.caption, fontStyle: 'italic' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  submit: { marginTop: spacing.sm },
});
