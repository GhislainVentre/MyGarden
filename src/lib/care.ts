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

/** Distance d'édition (insertion, suppression, substitution) bornée à `max`. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
      rowMin = Math.min(rowMin, current[j]);
    }
    if (rowMin > max) return max + 1;
    previous = current;
  }
  return previous[b.length];
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

/** Mots normalisés de chaque espèce, calculés une seule fois. */
const wordCache = new WeakMap<PlantSpecies, string[][]>();

function speciesWords(species: PlantSpecies): string[][] {
  let cached = wordCache.get(species);
  if (!cached) {
    cached = [species.commonName, species.scientificName, ...(species.otherNames ?? [])].map(words);
    wordCache.set(species, cached);
  }
  return cached;
}

/** Score de ressemblance approximative (plus petit = meilleur), ou null si un mot ne trouve pas d'équivalent. */
function fuzzyScore(queryWords: string[], nameWords: string[]): number | null {
  let total = 0;
  for (const q of queryWords) {
    const budget = typoBudget(q);
    let best = budget + 1;
    for (const w of nameWords) {
      // Le mot de la requête peut être le début d'un mot du nom (« banan » pour « bananier ») :
      // on le compare aux débuts de mot de longueur voisine.
      const from = Math.max(1, q.length - budget);
      const to = Math.min(w.length, q.length + budget);
      for (let length = from; length <= to && best > 0; length++) {
        best = Math.min(best, editDistance(q, w.slice(0, length), budget));
      }
      if (best === 0) break;
    }
    if (best > budget) return null;
    total += best;
  }
  return total;
}

/**
 * Recherche insensible à la casse et aux accents sur les noms courants, latins et alternatifs.
 * Sans résultat exact, on retombe sur une recherche tolérante aux fautes de frappe.
 */
export function searchSpecies(list: PlantSpecies[], query: string): PlantSpecies[] {
  const q = normalize(query);
  const sorted = [...list].sort((a, b) => a.commonName.localeCompare(b.commonName, 'fr'));
  if (!q) return sorted;
  const names = (s: PlantSpecies) => [s.commonName, s.scientificName, ...(s.otherNames ?? [])];
  const exact = sorted.filter((s) => names(s).some((name) => normalize(name).includes(q)));
  if (exact.length > 0) return exact;

  const queryWords = words(query);
  if (queryWords.length === 0) return [];
  return sorted
    .map((species) => {
      const scores = speciesWords(species)
        .map((nameWords) => fuzzyScore(queryWords, nameWords))
        .filter((score): score is number => score !== null);
      return { species, score: scores.length ? Math.min(...scores) : null };
    })
    .filter((r): r is { species: PlantSpecies; score: number } => r.score !== null)
    .sort((a, b) => a.score - b.score)
    .map((r) => r.species);
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
