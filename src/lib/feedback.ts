/** Adresse qui reçoit les retours des utilisateurs. */
export const FEEDBACK_EMAIL = 'ghislain.ventre@gmail.com';

/** E-mail prérempli : sujet, place pour le message, puis la version et le téléphone pour aider au diagnostic. */
export function feedbackMailto(version: string | null, device: string): string {
  const subject = 'Mon avis sur MyGarden';
  const body = `\n\n\n—\nMyGarden ${version ?? '(version inconnue)'} · ${device}`;
  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
