import { StyleSheet, Text, View } from 'react-native';

import { wateringLabel } from '../lib/care';
import { colors, radius } from '../theme';

export function WateringBadge({ days }: { days: number | null }) {
  const tone =
    days === null
      ? { bg: colors.border, fg: colors.muted }
      : days <= 0
        ? { bg: colors.warningLight, fg: colors.warning }
        : { bg: colors.waterLight, fg: colors.water };
  return (
    <View style={[styles.badge, { backgroundColor: tone.bg }]}>
      <Text style={[styles.text, { color: tone.fg }]}>💧 {wateringLabel(days)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { alignSelf: 'flex-start', borderRadius: radius.round, paddingHorizontal: 10, paddingVertical: 4 },
  text: { fontSize: 13, fontWeight: '600' },
});
