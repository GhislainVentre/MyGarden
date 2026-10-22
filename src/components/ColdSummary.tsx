import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useWeather } from '../context/WeatherContext';
import { coldAdvice, compareColdLevel, formatTemp, type ColdLevel } from '../lib/frost';
import { colors, fonts, radius, spacing, type } from '../theme';
import type { MyPlant, PlantSpecies } from '../types';
import { COLD_TONES } from './ColdCard';
import { WeatherSetup } from './WeatherSetup';

interface Props {
  rows: { plant: MyPlant; species: PlantSpecies | undefined }[];
}

function listNames(names: string[]): string {
  if (names.length <= 2) return names.join(' et ');
  const rest = names.length - 2;
  return `${names.slice(0, 2).join(', ')} et ${rest} autre${rest > 1 ? 's' : ''}`;
}

/** Bandeau de l'accueil : les plantes d'extérieur à protéger du froid. */
export function ColdSummary({ rows }: Props) {
  const { place, night } = useWeather();
  const [setupOpen, setSetupOpen] = useState(false);
  const outdoor = rows.filter((r) => r.plant.placement !== 'indoor');
  if (outdoor.length === 0) return null;

  const setup = <WeatherSetup visible={setupOpen} onClose={() => setSetupOpen(false)} />;

  if (!place) {
    return (
      <>
        <Pressable
          accessibilityRole="button"
          onPress={() => setSetupOpen(true)}
          style={({ pressed }) => [styles.card, { backgroundColor: colors.waterLight }, pressed && styles.pressed]}
        >
          <View style={[styles.icon, { backgroundColor: colors.water }]}>
            <Ionicons name="partly-sunny-outline" size={22} color={colors.onPrimary} />
          </View>
          <View style={styles.text}>
            <Text style={[styles.title, { color: colors.water }]}>Conseils contre le froid</Text>
            <Text style={type.caption}>
              {`Activez la météo locale pour savoir quand protéger ${outdoor.length > 1 ? `vos ${outdoor.length} plantes` : 'votre plante'} d’extérieur.`}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.water} />
        </Pressable>
        {setup}
      </>
    );
  }

  if (!night) return null;

  const alerts = outdoor
    .map((r) => ({ ...r, advice: coldAdvice(r.species, r.plant.placement, night.minC) }))
    .filter((r): r is typeof r & { advice: { level: ColdLevel } } => !!r.advice && (r.advice.level === 'act' || r.advice.level === 'urgent'))
    .sort((a, b) => compareColdLevel(a.advice.level, b.advice.level));
  const level: ColdLevel = alerts[0]?.advice.level ?? 'ok';
  const tone = COLD_TONES[level];
  const first = alerts[0]?.plant;

  return (
    <>
      <Pressable
        accessibilityRole="button"
        onPress={() => (first ? router.push({ pathname: '/plant/[id]', params: { id: first.id } }) : setSetupOpen(true))}
        style={({ pressed }) => [styles.card, { backgroundColor: tone.bg }, pressed && styles.pressed]}
      >
        <View style={[styles.icon, { backgroundColor: tone.fg }]}>
          <Ionicons name={tone.icon} size={22} color={colors.onPrimary} />
        </View>
        <View style={styles.text}>
          <Text style={[styles.title, { color: tone.fg }]}>
            {alerts.length === 0
              ? `${formatTemp(night.minC)} ${night.when}`
              : `Froid ${night.when} : ${formatTemp(night.minC)}`}
          </Text>
          <Text style={type.caption}>
            {alerts.length === 0
              ? `${place.label} · rien à protéger pour l’instant`
              : `À protéger : ${listNames(alerts.map((a) => a.plant.nickname))}`}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={tone.fg} />
      </Pressable>
      {setup}
    </>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderRadius: radius.lg, padding: spacing.md },
  pressed: { opacity: 0.9 },
  icon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  text: { flex: 1, gap: 2 },
  title: { fontFamily: fonts.display, fontSize: 17, lineHeight: 22 },
});
