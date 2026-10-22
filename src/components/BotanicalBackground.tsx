import type { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { colors } from '../theme';

const DOODLES = require('../../assets/images/plant-doodles.png');

/** Fond sable semé de petits dessins de plantes au trait, répétés derrière le contenu d'un écran. */
export function BotanicalBackground({ children }: { children: ReactNode }) {
  return (
    <View style={styles.container}>
      <Image source={DOODLES} style={[StyleSheet.absoluteFill, styles.pattern]} resizeMode="repeat" accessibilityIgnoresInvertColors />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  // Taille explicite : sur le web, l'image prendrait sinon ses dimensions d'origine.
  pattern: { width: '100%', height: '100%' },
});
