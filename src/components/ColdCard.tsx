import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useGarden } from '../context/GardenContext';
import { useWeather } from '../context/WeatherContext';
import { PLACEMENT_LABELS, coldAdvice, formatTemp, type ColdLevel } from '../lib/frost';
import { colors, fonts, radius, spacing, type, type Tone } from '../theme';
import type { MyPlant, Placement, PlantSpecies } from '../types';
import { Button } from './Button';
import { Chip } from './Chip';
import { WeatherSetup } from './WeatherSetup';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

export const COLD_TONES: Record<ColdLevel, Tone & { icon: IconName }> = {
  urgent: { bg: colors.dangerLight, fg: colors.danger, icon: 'snow' },
  act: { bg: colors.warningLight, fg: colors.warning, icon: 'snow' },
  watch: { bg: colors.waterLight, fg: colors.water, icon: 'thermometer-outline' },
  ok: { bg: colors.primaryLight, fg: colors.primary, icon: 'thermometer-outline' },
};

/** Conseils contre le froid d'une plante d'extérieur, selon la météo des prochaines nuits. */
export function ColdCard({ plant, species }: { plant: MyPlant; species: PlantSpecies | undefined }) {
  const { place, night, error } = useWeather();
  const { updatePlant } = useGarden();
  const [setupOpen, setSetupOpen] = useState(false);
  const advice = coldAdvice(species, plant.placement, night?.minC ?? null);
  if (!advice) return null;
  const tone = COLD_TONES[advice.level];

  let subtitle: string;
  if (night && place) subtitle = `${capitalize(night.when)} : ${formatTemp(night.minC)} à ${place.label}`;
  else if (place) subtitle = error ?? 'Chargement de la météo…';
  else subtitle = 'Conseils contre le froid';

  return (
    <View style={[styles.card, { backgroundColor: tone.bg }]}>
      <View style={styles.header}>
        <View style={[styles.icon, { backgroundColor: tone.fg }]}>
          <Ionicons name={tone.icon} size={22} color={colors.onPrimary} />
        </View>
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: tone.fg }]}>{advice.title}</Text>
          <Text style={type.caption}>{subtitle}</Text>
        </View>
        {place ? (
          <Pressable accessibilityRole="button" accessibilityLabel="Changer de ville" onPress={() => setSetupOpen(true)} hitSlop={8}>
            <Ionicons name="location-outline" size={20} color={tone.fg} />
          </Pressable>
        ) : null}
      </View>
      <View style={styles.actions}>
        {advice.actions.map((action) => (
          <View key={action.text} style={styles.action}>
            <Ionicons name={action.icon} size={18} color={tone.fg} style={styles.actionIcon} />
            <Text style={[type.body, styles.actionText]}>{action.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.placement}>
        <Text style={type.caption}>Elle vit :</Text>
        {(['outdoor-pot', 'ground', 'indoor'] as Placement[]).map((key) => (
          <Chip
            key={key}
            label={PLACEMENT_LABELS[key]}
            selected={plant.placement === key}
            onPress={() => updatePlant(plant.id, { placement: key })}
          />
        ))}
      </View>
      {!place ? (
        <Button label="Activer la météo locale" icon="partly-sunny-outline" variant="secondary" onPress={() => setSetupOpen(true)} />
      ) : null}
      <WeatherSetup visible={setupOpen} onClose={() => setSetupOpen(false)} />
    </View>
  );
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const styles = StyleSheet.create({
  card: { borderRadius: radius.lg, padding: spacing.lg, gap: spacing.md },
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  icon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  headerText: { flex: 1, gap: 2 },
  title: { fontFamily: fonts.display, fontSize: 20, lineHeight: 26 },
  actions: { gap: spacing.sm },
  action: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start' },
  actionIcon: { marginTop: 2 },
  actionText: { flex: 1 },
  placement: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: spacing.sm },
});
