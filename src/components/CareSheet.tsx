import { StyleSheet, Text, View } from 'react-native';

import { CATEGORY_LABELS, HUMIDITY_LABELS, LIGHT_LABELS, formatEvery } from '../lib/care';
import { colors, radius, spacing } from '../theme';
import type { PlantSpecies } from '../types';

const DIFFICULTY_LABELS: Record<PlantSpecies['difficulty'], string> = {
  facile: 'Facile',
  moyenne: 'Moyenne',
  difficile: 'Exigeante',
};

function Section({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        {icon} {title}
      </Text>
      {children}
    </View>
  );
}

function Line({ label, value }: { label?: string; value: string }) {
  return (
    <Text style={styles.body}>
      {label ? <Text style={styles.label}>{label} : </Text> : null}
      {value}
    </Text>
  );
}

/** Fiche d'entretien complète d'une espèce. */
export function CareSheet({ species }: { species: PlantSpecies }) {
  const { watering, light, temperature } = species;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.scientific}>{species.scientificName}</Text>
        <Text style={styles.meta}>
          {CATEGORY_LABELS[species.category]} · {species.family} · Entretien : {DIFFICULTY_LABELS[species.difficulty]}
        </Text>
        <Text style={styles.body}>{species.description}</Text>
      </View>

      <Section icon="💧" title="Arrosage">
        <Line label="Printemps / été" value={formatEvery(watering.summerDays)} />
        <Line label="Automne / hiver" value={formatEvery(watering.winterDays)} />
        <Line value={watering.advice} />
      </Section>

      <Section icon="☀️" title="Lumière">
        <Line label={LIGHT_LABELS[light.level]} value={light.advice} />
      </Section>

      <Section icon="🌡️" title="Température et humidité">
        <Line label="Idéale" value={`${temperature.idealMinC} à ${temperature.idealMaxC} °C`} />
        <Line label="Minimum supporté" value={`${temperature.minC} °C`} />
        <Line label="Humidité de l’air" value={HUMIDITY_LABELS[species.humidity]} />
      </Section>

      <Section icon="🪨" title="Terre">
        <Line value={species.soil} />
      </Section>

      <Section icon="🧪" title="Engrais">
        <Line value={species.fertilizing} />
      </Section>

      <Section icon="🪴" title="Rempotage">
        <Line value={species.repotting} />
      </Section>

      <Section icon="✂️" title="Taille">
        <Line value={species.pruning} />
      </Section>

      <Section icon="⚠️" title="Toxicité">
        <Line value={species.toxicity} />
      </Section>

      <Section icon="🩺" title="Problèmes fréquents">
        {species.commonProblems.map((problem) => (
          <Text key={problem} style={styles.body}>
            • {problem}
          </Text>
        ))}
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.md },
  header: { gap: spacing.xs },
  scientific: { fontSize: 16, fontStyle: 'italic', color: colors.muted },
  meta: { fontSize: 13, color: colors.muted },
  section: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  label: { fontWeight: '600', color: colors.text },
  body: { fontSize: 15, lineHeight: 22, color: colors.text },
});
