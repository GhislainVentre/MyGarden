/** Lieu dont on suit la météo. Coordonnées arrondies à 0,01° (environ 1 km). */
export interface WeatherPlace {
  latitude: number;
  longitude: number;
  label: string;
}

/** Températures heure par heure, heure locale du lieu (« 2026-10-09T05:00 »). */
export interface Forecast {
  placeKey: string;
  fetchedAt: string;
  hours: { time: string; tempC: number }[];
}

export interface ColdNight {
  minC: number;
  /** « cette nuit », « demain soir »… */
  when: string;
}

/** Au-delà, on recharge la météo. */
export const FORECAST_MAX_AGE_MS = 3 * 60 * 60 * 1000;
/** Fenêtre regardée pour trouver la nuit la plus froide. */
export const LOOKAHEAD_HOURS = 48;

const round2 = (value: number) => Math.round(value * 100) / 100;

export function makePlace(latitude: number, longitude: number, label: string): WeatherPlace {
  return { latitude: round2(latitude), longitude: round2(longitude), label: label.trim() || 'Ma position' };
}

export function placeKey(place: WeatherPlace): string {
  return `${place.latitude.toFixed(2)},${place.longitude.toFixed(2)}`;
}

export function forecastUrl(place: WeatherPlace): string {
  return (
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${place.latitude.toFixed(2)}&longitude=${place.longitude.toFixed(2)}` +
    '&hourly=temperature_2m&timezone=auto&forecast_days=3'
  );
}

export function geocodingUrl(city: string): string {
  return `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.trim())}&count=1&language=fr&format=json`;
}

/** Lit la réponse d'Open-Meteo ; null si elle est inattendue. */
export function parseForecast(json: unknown, place: WeatherPlace, now: Date = new Date()): Forecast | null {
  const hourly = (json as { hourly?: { time?: unknown; temperature_2m?: unknown } } | null)?.hourly;
  const times = hourly?.time;
  const temps = hourly?.temperature_2m;
  if (!Array.isArray(times) || !Array.isArray(temps) || times.length !== temps.length) return null;
  const hours = times
    .map((time, i) => ({ time, tempC: temps[i] }))
    .filter((h): h is { time: string; tempC: number } => typeof h.time === 'string' && typeof h.tempC === 'number' && Number.isFinite(h.tempC));
  if (hours.length === 0) return null;
  return { placeKey: placeKey(place), fetchedAt: now.toISOString(), hours };
}

/** Premier résultat du géocodage d'Open-Meteo ; null si la ville est introuvable. */
export function parseGeocoding(json: unknown): WeatherPlace | null {
  const first = (json as { results?: unknown[] } | null)?.results?.[0] as
    | { latitude?: unknown; longitude?: unknown; name?: unknown; admin1?: unknown }
    | undefined;
  if (!first || typeof first.latitude !== 'number' || typeof first.longitude !== 'number') return null;
  return makePlace(first.latitude, first.longitude, typeof first.name === 'string' ? first.name : '');
}

/** « 2026-10-09T05:00 » lu comme une heure locale de l'appareil. */
function localDate(time: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(time);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4]), Number(m[5]));
}

function dayIndex(date: Date): number {
  return Math.round(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() / 86_400_000);
}

/** Moment de la journée en mots, par rapport à maintenant. */
export function describeWhen(target: Date, now: Date): string {
  const offset = dayIndex(target) - dayIndex(now);
  const hour = target.getHours();
  if (hour >= 10 && hour < 19) return offset === 0 ? 'aujourd’hui' : offset === 1 ? 'demain' : 'après-demain';
  // Une nuit appartient au soir qui la précède : 5 h demain, c'est « cette nuit ».
  const night = hour < 10 ? offset - 1 : offset;
  if (night < 0) return 'ce matin';
  if (night === 0) return 'cette nuit';
  if (night === 1) return 'demain soir';
  return 'après-demain soir';
}

/** Température la plus basse des prochaines heures, et quand. */
export function coldestNight(forecast: Forecast | null, now: Date = new Date()): ColdNight | null {
  if (!forecast) return null;
  const start = now.getTime() - 60 * 60 * 1000;
  const end = now.getTime() + LOOKAHEAD_HOURS * 60 * 60 * 1000;
  let coldest: { date: Date; tempC: number } | null = null;
  for (const hour of forecast.hours) {
    const date = localDate(hour.time);
    if (!date || date.getTime() < start || date.getTime() > end) continue;
    if (!coldest || hour.tempC < coldest.tempC) coldest = { date, tempC: hour.tempC };
  }
  return coldest ? { minC: coldest.tempC, when: describeWhen(coldest.date, now) } : null;
}

export function isFresh(forecast: Forecast | null, place: WeatherPlace | null, now: Date = new Date()): boolean {
  return (
    !!forecast &&
    !!place &&
    forecast.placeKey === placeKey(place) &&
    now.getTime() - new Date(forecast.fetchedAt).getTime() < FORECAST_MAX_AGE_MS
  );
}
