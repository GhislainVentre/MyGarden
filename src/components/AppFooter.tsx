import { useState } from 'react';
import { Linking, Platform, StyleSheet, Text, View } from 'react-native';

import { useUpdates, type CheckResult } from '../context/UpdateContext';
import { FEEDBACK_EMAIL, feedbackMailto } from '../lib/feedback';
import { notify } from '../lib/notify';
import { spacing, type } from '../theme';
import { Button } from './Button';

const RESULT_TEXT: Record<Exclude<CheckResult, 'available'>, string> = {
  'up-to-date': 'Vous avez la dernière version.',
  error: 'Vérification impossible pour le moment (pas de connexion ?).',
  unsupported: 'Les mises à jour se font depuis l’APK installé sur le téléphone.',
};

/** Pied de l'accueil : avis, recherche de mise à jour et numéro de version. */
export function AppFooter() {
  const { installedVersion, checkNow } = useUpdates();
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function check() {
    setChecking(true);
    setResult(null);
    const outcome = await checkNow();
    setChecking(false);
    // Une version plus récente ouvre sa propre fenêtre.
    if (outcome !== 'available') setResult(RESULT_TEXT[outcome]);
  }

  return (
    <View style={styles.footer}>
      <Button label="Donner mon avis" icon="chatbubble-ellipses-outline" variant="secondary" onPress={() => sendFeedback(installedVersion)} />
      {Platform.OS === 'android' ? (
        <Button label={checking ? 'Recherche…' : 'Rechercher une mise à jour'} icon="refresh" variant="ghost" onPress={check} disabled={checking} />
      ) : null}
      {result ? <Text style={[type.caption, styles.center]}>{result}</Text> : null}
      <Text style={[type.caption, styles.center]}>{installedVersion ? `MyGarden ${installedVersion}` : 'MyGarden'}</Text>
    </View>
  );
}

export async function sendFeedback(version: string | null) {
  const device = Platform.OS === 'android' ? `Android ${Platform.Version}` : Platform.OS;
  try {
    await Linking.openURL(feedbackMailto(version, device));
  } catch {
    notify('Aucune application d’e-mail', `Écrivez-nous à ${FEEDBACK_EMAIL}.`);
  }
}

const styles = StyleSheet.create({
  footer: { gap: spacing.sm, paddingTop: spacing.xl, paddingBottom: spacing.md },
  center: { textAlign: 'center' },
});
