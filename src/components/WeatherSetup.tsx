import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useWeather } from '../context/WeatherContext';
import { colors, fonts, radius, spacing, type } from '../theme';
import { Button } from './Button';

interface Props {
  visible: boolean;
  onClose: () => void;
}

/** Choix du lieu dont on suit la météo : position de l'appareil ou ville tapée. */
export function WeatherSetup({ visible, onClose }: Props) {
  const { place, locateMe, chooseCity, forget } = useWeather();
  const [city, setCity] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function run(action: () => Promise<string | null>) {
    if (busy) return;
    setBusy(true);
    setMessage(null);
    const error = await action();
    setBusy(false);
    if (error) setMessage(error);
    else {
      setCity('');
      onClose();
    }
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.header}>
            <Text style={type.title}>Météo locale</Text>
            <Pressable accessibilityRole="button" accessibilityLabel="Fermer" onPress={onClose} hitSlop={10} style={styles.close}>
              <Ionicons name="close" size={22} color={colors.text} />
            </Pressable>
          </View>
          <View style={styles.body}>
            <View style={styles.icon}>
              <Ionicons name="thermometer-outline" size={34} color={colors.water} />
            </View>
            <Text style={type.body}>
              MyGarden regarde la température des prochaines nuits pour vous dire quand rentrer ou protéger vos plantes
              d’extérieur.
            </Text>
            {place ? <Text style={type.caption}>{`Actuellement : météo de ${place.label}.`}</Text> : null}

            <Button label="Utiliser ma position" icon="navigate-outline" size="lg" onPress={() => run(locateMe)} disabled={busy} />

            <View style={styles.or}>
              <View style={styles.line} />
              <Text style={type.caption}>ou</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.inputRow}>
              <Ionicons name="search" size={18} color={colors.muted} />
              <TextInput
                value={city}
                onChangeText={setCity}
                placeholder="Nom de votre ville"
                placeholderTextColor={colors.muted}
                style={styles.input}
                returnKeyType="search"
                onSubmitEditing={() => run(() => chooseCity(city))}
              />
            </View>
            <Button label="Valider la ville" icon="checkmark" variant="secondary" onPress={() => run(() => chooseCity(city))} disabled={busy} />

            {busy ? <ActivityIndicator color={colors.primary} /> : null}
            {message ? <Text style={styles.error}>{message}</Text> : null}

            {place ? (
              <Button
                label="Ne plus utiliser la météo"
                variant="ghost"
                onPress={() => {
                  forget();
                  onClose();
                }}
              />
            ) : null}
            <Text style={styles.note}>Seule une position approchée (à environ 1 km) est envoyée au service météo Open-Meteo.</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  close: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  body: { padding: spacing.lg, gap: spacing.lg },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.waterLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  line: { flex: 1, height: 1, backgroundColor: colors.border },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    minHeight: 52,
  },
  input: { flex: 1, fontFamily: fonts.bodyMedium, fontSize: 16, color: colors.text, paddingVertical: 14 },
  error: { ...type.caption, color: colors.danger },
  note: { ...type.caption, textAlign: 'center' },
});
