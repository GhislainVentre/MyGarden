import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { wateringLabel } from '../lib/care';
import { colors, fonts, radius } from '../theme';

interface Props {
  days: number | null;
  compact?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function wateringTone(days: number | null) {
  if (days === null) return { bg: colors.surfaceAlt, fg: colors.muted };
  if (days <= 0) return { bg: colors.warningLight, fg: colors.warning };
  return { bg: colors.waterLight, fg: colors.water };
}

export function WateringBadge({ days, compact, style }: Props) {
  const tone = wateringTone(days);
  const label = compact ? compactLabel(days) : wateringLabel(days);
  return (
    <View style={[styles.badge, { backgroundColor: tone.bg }, style]}>
      <Ionicons name={days !== null && days <= 0 ? 'water' : 'water-outline'} size={13} color={tone.fg} />
      <Text style={[styles.text, { color: tone.fg }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

function compactLabel(days: number | null): string {
  if (days === null) return 'Date inconnue';
  if (days < 0) return `${-days} j de retard`;
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return 'Demain';
  return `Dans ${days} j`;
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-start',
    borderRadius: radius.round,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: { fontFamily: fonts.bodyBold, fontSize: 12 },
});
