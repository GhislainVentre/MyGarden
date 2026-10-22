import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { resolvePhotoUri } from '../lib/photos';
import { colors, radius } from '../theme';

interface Props {
  uri: string | null;
  size?: number;
  width?: number;
  height?: number;
  rounded?: number;
  style?: StyleProp<ViewStyle>;
}

/** Photo d'une plante, ou un motif végétal doux quand il n'y en a pas. */
export function PlantPhoto({ uri, size, width, height, rounded = radius.md, style }: Props) {
  const box = { width: width ?? size ?? 80, height: height ?? size ?? 80, borderRadius: rounded };
  const source = resolvePhotoUri(uri);
  if (source) {
    return (
      <View style={[box, styles.frame, style]}>
        <Image source={{ uri: source }} style={StyleSheet.absoluteFill} resizeMode="cover" accessibilityIgnoresInvertColors />
      </View>
    );
  }
  const iconSize = Math.round(Math.min(box.width, box.height) * 0.4);
  return (
    <View style={[box, styles.frame, style]}>
      <LinearGradient
        colors={[colors.primaryLight, '#C9DEC4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[StyleSheet.absoluteFill, styles.placeholder]}
      >
        <Ionicons name="leaf" size={iconSize} color={colors.leaf} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: { overflow: 'hidden', backgroundColor: colors.primaryLight },
  placeholder: { alignItems: 'center', justifyContent: 'center' },
});
