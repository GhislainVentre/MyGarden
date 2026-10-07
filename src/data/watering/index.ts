import { fallbackWateringGuide } from '../../lib/watering';
import type { PlantSpecies, WateringGuide } from '../../types';

const WATERING_GUIDES: Record<string, WateringGuide> = {};

/** Comment arroser une espèce et combien d'eau lui donner. */
export function getWateringGuide(species: PlantSpecies): WateringGuide {
  return WATERING_GUIDES[species.id] ?? fallbackWateringGuide(species);
}

/** Identifiants des espèces qui ont un guide dédié (pour les tests). */
export function hasWateringGuide(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(WATERING_GUIDES, id);
}
