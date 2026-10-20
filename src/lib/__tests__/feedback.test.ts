import { FEEDBACK_EMAIL, feedbackMailto } from '../feedback';

it('prépare un e-mail avec la version et le téléphone', () => {
  const url = feedbackMailto('1.0.42', 'Android 34');
  expect(url.startsWith(`mailto:${FEEDBACK_EMAIL}?subject=`)).toBe(true);
  const body = decodeURIComponent(url.split('&body=')[1]);
  expect(body).toContain('MyGarden 1.0.42 · Android 34');
  expect(decodeURIComponent(url)).toContain('Mon avis sur MyGarden');
});
