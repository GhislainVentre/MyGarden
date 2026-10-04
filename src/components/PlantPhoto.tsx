import { Image, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '../theme';

interface Props {
  uri: string | null;
  size: number;
  rounded?: number;
  style?: StyleProp<ViewStyle>;
}

export function PlantPhoto({ uri, size, rounded = 12, style }: Props) {
  const box = { width: size, height: size, borderRadius: rounded };
  if (uri) {
    return (
      <View style={[box, styles.frame, style]}>
        <Image source={{ uri }} style={box} accessibilityIgnoresInvertColors />
      </View>
    );
  }
  return (
    <View style={[box, styles.frame, styles.placeholder, style]}>
      <Text style={{ fontSize: size * 0.45 }}>🪴</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: { overflow: 'hidden' },
  placeholder: { backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center' },
});
