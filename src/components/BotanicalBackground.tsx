import type { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { colors } from '../theme';

const BACKGROUND = require('../../assets/images/botanical-bg.jpg');

/** Fond illustré (monstera, fougères, eucalyptus) derrière le contenu d'un écran. */
export function BotanicalBackground({ children, veiled = false }: { children: ReactNode; veiled?: boolean }) {
  return (
    <View style={styles.container}>
      <Image source={BACKGROUND} style={[StyleSheet.absoluteFill, styles.image]} resizeMode="cover" accessibilityIgnoresInvertColors />
      {/* Voile clair sur les écrans de lecture, pour que le texte posé sur les feuilles reste lisible. */}
      {veiled ? <View style={[StyleSheet.absoluteFill, styles.veil]} /> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  // Taille explicite : sur le web, l'image prendrait sinon ses dimensions d'origine.
  image: { width: '100%', height: '100%' },
  veil: { backgroundColor: 'rgba(245, 241, 232, 0.62)' },
});
