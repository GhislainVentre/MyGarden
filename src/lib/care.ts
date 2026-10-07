import type { Category, LightLevel, MyPlant, PlantSpecies } from '../types';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Intervalle par défaut quand l'espèce est inconnue et qu'aucun intervalle n'est saisi. */
export const DEFAULT_WATERING_DAYS = 7;

/** Printemps et été (hémisphère nord) : d'avril à septembre inclus. */
export function isGrowingSeason(date: Date): boolean {
  const month = date.getMonth();
  return month >= 3 && month <= 8;
}

export function wateringIntervalDays(
  plant: Pick<MyPlant, 'customWateringDays'>,
  species: PlantSpecies | undefined,
  date: Date = new Date(),
): number {
  if (plant.customWateringDays && plant.customWateringDays > 0) {
    return plant.customWateringDays;
  }
  if (!species) return DEFAULT_WATERING_DAYS;
  return isGrowingSeason(date) ? species.watering.summerDays : species.watering.winterDays;
}

function startOfDay(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

/**
 * Nombre de jours avant le prochain arrosage : négatif en cas de retard,
 * 0 aujourd'hui, null si la date du dernier arrosage est inconnue.
 */
export function daysUntilWatering(
  plant: Pick<MyPlant, 'customWateringDays' | 'lastWateredAt'>,
  species: PlantSpecies | undefined,
  now: Date = new Date(),
): number | null {
  if (!plant.lastWateredAt) return null;
  const last = new Date(plant.lastWateredAt);
  if (Number.isNaN(last.getTime())) return null;
  const interval = wateringIntervalDays(plant, species, now);
  const elapsed = Math.round((startOfDay(now) - startOfDay(last)) / DAY_MS);
  return interval - elapsed;
}

/** Tri : les plantes en retard d'abord, puis par échéance, celles sans date à la fin. */
export function compareUrgency(a: number | null, b: number | null): number {
  if (a === b) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  return a - b;
}

export function wateringLabel(days: number | null): string {
  if (days === null) return 'Arrosage : date inconnue';
  if (days < 0) return days === -1 ? 'À arroser (1 jour de retard)' : `À arroser (${-days} jours de retard)`;
  if (days === 0) return "À arroser aujourd'hui";
  if (days === 1) return 'Arrosage demain';
  return `Arrosage dans ${days} jours`;
}

export function formatEvery(days: number): string {
  if (days === 1) return 'tous les jours';
  if (days % 7 === 0) {
    const weeks = days / 7;
    return weeks === 1 ? 'toutes les semaines' : `toutes les ${weeks} semaines`;
  }
  return `tous les ${days} jours`;
}

export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’‘`´]/g, "'")
    .replace(/œ/gi, 'oe')
    .replace(/æ/gi, 'ae')
    .toLowerCase()
    .trim();
}

function words(text: string): string[] {
  return normalize(text)
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

/**
 * Fautes tolérées par mot : aucune jusqu'à 3 lettres, une jusqu'à 7, deux au-delà
 * (« serum » trouve « sedum », « scalathea » trouve « calathea »).
 */
function typoBudget(word: string): number {
  if (word.length <= 3) return 0;
  return word.length <= 7 ? 1 : 2;
}

/**
 * Plus petite distance d'édition entre `query` et un début de `word` (« banan » ressemble à « bananier »),
 * calculée en une seule passe et abandonnée dès qu'elle dépasse `max`.
 */
function prefixDistance(query: string, word: string, max: number): number {
  const n = query.length;
  // previous[j] : distance entre les i premières lettres du mot et les j premières de la requête.
  let previous = new Array<number>(n + 1);
  for (let j = 0; j <= n; j++) previous[j] = j;
  let best = n <= max ? n : max + 1;
  const last = Math.min(word.length, n + max);
  for (let i = 1; i <= last; i++) {
    const current = new Array<number>(n + 1);
    current[0] = i;
    let rowMin = i;
    const letter = word.charCodeAt(i - 1);
    for (let j = 1; j <= n; j++) {
      const cost = query.charCodeAt(j - 1) === letter ? 0 : 1;
      const value = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
      current[j] = value;
      if (value < rowMin) rowMin = value;
    }
    if (i >= n - max && current[n] < best) best = current[n];
    if (rowMin > max || best === 0) break;
    previous = current;
  }
  return best;
}

interface SearchIndex {
  /** Espèces triées par nom courant. */
  sorted: PlantSpecies[];
  /** Pour chaque espèce triée : ses noms réduits à leurs mots, séparés par des espaces. */
  names: string[][];
  /** Tous les noms d'une espèce dans une seule chaîne, pour tester rapidement chaque mot de la requête. */
  haystacks: string[];
  /** Vocabulaire : chaque mot connu et les espèces (indices dans `sorted`) qui le portent. */
  vocabulary: Map<string, number[]>;
}

const collator = new Intl.Collator('fr');
const indexCache = new WeakMap<PlantSpecies[], SearchIndex>();

/** Index de recherche, calculé une seule fois par liste d'espèces. */
function searchIndex(list: PlantSpecies[]): SearchIndex {
  let index = indexCache.get(list);
  if (index) return index;
  const sorted = [...list].sort((a, b) => collator.compare(a.commonName, b.commonName));
  const names = sorted.map((s) => [s.commonName, s.scientificName, ...(s.otherNames ?? [])].map((n) => words(n).join(' ')));
  const vocabulary = new Map<string, number[]>();
  names.forEach((speciesNames, i) => {
    for (const word of new Set(speciesNames.join(' ').split(' '))) {
      const owners = vocabulary.get(word);
      if (owners) owners.push(i);
      else vocabulary.set(word, [i]);
    }
  });
  index = { sorted, names, haystacks: names.map((n) => ` ${n.join(' | ')}`), vocabulary };
  indexCache.set(list, index);
  return index;
}

/**
 * Recherche insensible à la casse, aux accents et à la ponctuation sur les noms courants, latins et alternatifs.
 * Chaque mot de la requête doit apparaître dans les noms d'une espèce ; les noms qui commencent par
 * la requête passent en premier. Sans résultat, on retombe sur une recherche tolérante aux fautes de frappe.
 */
export function searchSpecies(list: PlantSpecies[], query: string): PlantSpecies[] {
  const { sorted, names, haystacks, vocabulary } = searchIndex(list);
  const queryWords = words(query);
  if (queryWords.length === 0) return normalize(query) ? [] : sorted.slice();
  const phrase = queryWords.join(' ');

  const ranked: { index: number; rank: number }[] = [];
  haystacks.forEach((haystack, index) => {
    if (!queryWords.every((w) => haystack.includes(w))) return;
    const speciesNames = names[index];
    const rank = speciesNames.some((n) => n.startsWith(phrase))
      ? 0
      : speciesNames.some((n) => n.includes(phrase))
        ? 1
        : 2;
    ranked.push({ index, rank });
  });
  if (ranked.length > 0) {
    return ranked.sort((a, b) => a.rank - b.rank || a.index - b.index).map((r) => sorted[r.index]);
  }

  // Recherche approximative : chaque mot de la requête doit ressembler à un mot connu de l'espèce.
  let scores: Map<number, number> | null = null;
  for (const q of queryWords) {
    const budget = typoBudget(q);
    const best = new Map<number, number>();
    for (const [word, owners] of vocabulary) {
      if (word.length < q.length - budget) continue;
      const distance = prefixDistance(q, word, budget);
      if (distance > budget) continue;
      for (const owner of owners) {
        const known = best.get(owner);
        if (known === undefined || distance < known) best.set(owner, distance);
      }
    }
    const next = new Map<number, number>();
    for (const [owner, distance] of best) {
      if (scores === null) next.set(owner, distance);
      else if (scores.has(owner)) next.set(owner, scores.get(owner)! + distance);
    }
    scores = next;
    if (scores.size === 0) return [];
  }
  return [...scores!.entries()].sort((a, b) => a[1] - b[1] || a[0] - b[0]).map(([index]) => sorted[index]);
}

export const CATEGORY_LABELS: Record<Category, string> = {
  interieur: "Plante d'intérieur",
  exterieur: "Plante d'extérieur",
  succulente: 'Succulente / cactus',
  aromatique: 'Aromatique',
  potager: 'Potager',
};

export const LIGHT_LABELS: Record<LightLevel, string> = {
  faible: 'Faible luminosité',
  moyenne: 'Luminosité moyenne',
  'vive-indirecte': 'Lumière vive, sans soleil direct',
  'plein-soleil': 'Plein soleil',
};

export const HUMIDITY_LABELS: Record<PlantSpecies['humidity'], string> = {
  faible: 'Faible (air sec toléré)',
  moyenne: 'Moyenne',
  elevee: 'Élevée (brumiser ou humidificateur)',
};
