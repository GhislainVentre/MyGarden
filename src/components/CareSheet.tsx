import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { CATEGORY_LABELS, HUMIDITY_LABELS, LIGHT_LABELS, formatEvery, wateringIntervalDays } from '../lib/care';
import { CATEGORY_TONES, DIFFICULTY_TONES, LIGHT_ICONS, card, colors, radius, spacing, type } from '../theme';
import { getWateringGuide } from '../data/watering';
import type { PlantSpecies } from '../types';
import { Tag } from './Chip';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

const DIFFICULTY_LABELS: Record<PlantSpecies['difficulty'], string> = {
  facile: 'Facile',
  moyenne: 'Moyenne',
  difficile: 'Exigeante',
};

/** Tuile compacte : une icône, une valeur, un libellé. */
function Stat({ icon, value, label, color }: { icon: IconName; value: string; label: string; color: string }) {
  return (
    <View style={styles.stat}>
      <View style={[styles.statIcon, { backgroundColor: `${color}22` }]}>
        <Ionicons name={icon} size={18} color={color} />
      </View>
      <View style={styles.statValueWrap}>
        <Text style={styles.statValue} numberOfLines={2}>
          {value}
        </Text>
      </View>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

/** Rangée des quatre repères essentiels d'une espèce. */
export function CareStats({ species }: { species: PlantSpecies }) {
  const { light, temperature } = species;
  const days = wateringIntervalDays({ customWateringDays: null }, species);
  return (
    <View style={styles.stats}>
      <Stat icon="water" value={`${days} jour${days > 1 ? 's' : ''}`} label="Arrosage" color={colors.water} />
      <Stat icon={LIGHT_ICONS[light.level]} value={shortLight(light.level)} label="Lumière" color={colors.sun} />
      <Stat
        icon="thermometer-outline"
        value={`${temperature.idealMinC}–${temperature.idealMaxC} °C`}
        label="Température"
        color={colors.warning}
      />
      <Stat icon="leaf-outline" value={DIFFICULTY_LABELS[species.difficulty]} label="Entretien" color={colors.leaf} />
    </View>
  );
}

function shortLight(level: PlantSpecies['light']['level']): string {
  switch (level) {
    case 'faible':
      return 'Faible';
    case 'moyenne':
      return 'Moyenne';
    case 'vive-indirecte':
      return 'Vive, indirecte';
    case 'plein-soleil':
      return 'Plein soleil';
  }
}

function Section({ icon, color, title, children }: { icon: IconName; color: string; title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={[styles.sectionIcon, { backgroundColor: `${color}1F` }]}>
          <Ionicons name={icon} size={16} color={color} />
        </View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function Line({ label, value }: { label?: string; value: string }) {
  return (
    <Text style={type.body}>
      {label ? <Text style={type.bodyStrong}>{label} : </Text> : null}
      {value}
    </Text>
  );
}

/** Fiche d'entretien complète d'une espèce. */
export function CareSheet({ species, showStats = true }: { species: PlantSpecies; showStats?: boolean }) {
  const { watering, light, temperature } = species;
  const guide = getWateringGuide(species);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.scientific}>{species.scientificName}</Text>
        <View style={styles.tags}>
          <Tag label={CATEGORY_LABELS[species.category]} tone={CATEGORY_TONES[species.category]} />
          <Tag label={`Entretien ${DIFFICULTY_LABELS[species.difficulty].toLowerCase()}`} tone={DIFFICULTY_TONES[species.difficulty]} />
        </View>
        <Text style={type.body}>{species.description}</Text>
      </View>

      {showStats && <CareStats species={species} />}

      <Section icon="water" color={colors.water} title="Arrosage">
        <Line label="Printemps / été" value={formatEvery(watering.summerDays)} />
        <Line label="Automne / hiver" value={formatEvery(watering.winterDays)} />
        <Line label="Comment" value={guide.method} />
        <Line label="Quantité" value={guide.amount} />
        <Line value={watering.advice} />
      </Section>

      <Section icon={LIGHT_ICONS[light.level]} color={colors.sun} title="Lumière">
        <Line label={LIGHT_LABELS[light.level]} value={light.advice} />
      </Section>

      <Section icon="thermometer-outline" color={colors.warning} title="Température et humidité">
        <Line label="Idéale" value={`${temperature.idealMinC} à ${temperature.idealMaxC} °C`} />
        <Line label="Minimum supporté" value={`${temperature.minC} °C`} />
        <Line label="Humidité de l’air" value={HUMIDITY_LABELS[species.humidity]} />
      </Section>

      <Section icon="layers-outline" color={colors.leaf} title="Terre">
        <Line value={species.soil} />
      </Section>

      <Section icon="flask-outline" color={colors.primary} title="Engrais">
        <Line value={species.fertilizing} />
      </Section>

      <Section icon="swap-vertical-outline" color={colors.warning} title="Rempotage et plantation">
        <Line value={species.repotting} />
      </Section>

      <Section icon="cut-outline" color={colors.leaf} title="Taille et récolte">
        <Line value={species.pruning} />
      </Section>

      <Section icon="warning-outline" color={colors.danger} title="Toxicité">
        <Line value={species.toxicity} />
      </Section>

      <Section icon="medkit-outline" color={colors.danger} title="Problèmes fréquents">
        {species.commonProblems.map((problem) => (
          <View key={problem} style={styles.bullet}>
            <View style={styles.dot} />
            <Text style={[type.body, styles.bulletText]}>{problem}</Text>
          </View>
        ))}
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.md },
  header: { gap: spacing.sm },
  scientific: { ...type.caption, fontStyle: 'italic', fontSize: 15 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  stats: { flexDirection: 'row', gap: spacing.sm },
  stat: {
    flex: 1,
    ...card,
    borderRadius: radius.md,
    padding: spacing.sm,
    paddingVertical: spacing.md,
    alignItems: 'center',
    gap: 6,
  },
  statIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  statValueWrap: { flex: 1, justifyContent: 'center' },
  statValue: { ...type.bodyStrong, fontSize: 12, lineHeight: 16, textAlign: 'center' },
  statLabel: { ...type.caption, fontSize: 10, lineHeight: 12, textTransform: 'uppercase', letterSpacing: 0.5 },
  section: { ...card, padding: spacing.lg, gap: spacing.xs },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs },
  sectionIcon: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  sectionTitle: { ...type.heading },
  bullet: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.danger, marginTop: 9 },
  bulletText: { flex: 1 },
});
