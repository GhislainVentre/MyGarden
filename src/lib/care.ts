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
    .toLowerCase()
    .trim();
}

/** Recherche insensible à la casse et aux accents sur les noms courants, latins et alternatifs. */
export function searchSpecies(list: PlantSpecies[], query: string): PlantSpecies[] {
  const q = normalize(query);
  const sorted = [...list].sort((a, b) => a.commonName.localeCompare(b.commonName, 'fr'));
  if (!q) return sorted;
  return sorted.filter((s) =>
    [s.commonName, s.scientificName, ...(s.otherNames ?? [])].some((name) => normalize(name).includes(q)),
  );
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
