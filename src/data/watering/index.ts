import { fallbackWateringGuide } from '../../lib/watering';
import type { PlantSpecies, WateringGuide } from '../../types';
import { WATERING_GUIDES_1 } from './guides-1';
import { WATERING_GUIDES_2 } from './guides-2';
import { WATERING_GUIDES_3 } from './guides-3';
import { WATERING_GUIDES_4 } from './guides-4';
import { WATERING_GUIDES_5 } from './guides-5';
import { WATERING_GUIDES_6 } from './guides-6';

const WATERING_GUIDES: Record<string, WateringGuide> = {
  ...WATERING_GUIDES_1,
  ...WATERING_GUIDES_2,
  ...WATERING_GUIDES_3,
  ...WATERING_GUIDES_4,
  ...WATERING_GUIDES_5,
  ...WATERING_GUIDES_6,
};

/** Comment arroser une espèce et combien d'eau lui donner. */
export function getWateringGuide(species: PlantSpecies): WateringGuide {
  return WATERING_GUIDES[species.id] ?? fallbackWateringGuide(species);
}

/** Identifiants des espèces qui ont un guide dédié (pour les tests). */
export function hasWateringGuide(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(WATERING_GUIDES, id);
}
