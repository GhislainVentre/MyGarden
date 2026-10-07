import type { PlantSpecies, WateringGuide } from '../types';

/** Volume approximatif d'un pot standard selon son diamètre (litres). */
export function potVolumeLitres(diameterCm: number): number {
  return 0.00045 * diameterCm ** 3;
}

/** Quantité d'eau par arrosage pour un pot donné, en millilitres arrondis, ou null si non applicable. */
export function wateringAmountMl(guide: WateringGuide, diameterCm: number | null): number | null {
  if (!diameterCm || diameterCm <= 0 || guide.potShare === null) return null;
  const ml = potVolumeLitres(diameterCm) * guide.potShare * 1000;
  const step = ml < 100 ? 5 : ml < 1000 ? 10 : 50;
  return Math.max(step, Math.round(ml / step) * step);
}

/** « 350 ml » ou « 1,2 L ». */
export function formatVolume(ml: number): string {
  if (ml < 1000) return `${ml} ml`;
  const litres = Math.round(ml / 100) / 10;
  return `${String(litres).replace('.', ',')} L`;
}

/** Conseil générique, utilisé si une espèce n'a pas encore de guide dédié. */
export function fallbackWateringGuide(species: PlantSpecies): WateringGuide {
  switch (species.category) {
    case 'succulente':
      return {
        method: 'Arroser à fond jusqu’à ce que l’eau s’écoule par les trous, vider la soucoupe, puis laisser sécher complètement le substrat.',
        amount: 'Environ un sixième du volume du pot, soit 200 ml pour un pot de 14 cm ; presque rien en hiver.',
        potShare: 0.15,
      };
    case 'potager':
      return {
        method: 'Arroser au pied, le matin ou le soir, sans mouiller le feuillage ; pailler pour garder la fraîcheur.',
        amount: 'Environ 10 à 15 litres par m² à chaque arrosage en été ; en pot, un tiers du volume du pot.',
        potShare: 0.3,
      };
    case 'exterieur':
      return {
        method: 'Arroser au pied, lentement et en profondeur, le soir en été ; espacer en automne et ne plus arroser en hiver sauf sécheresse.',
        amount: 'Environ 10 litres au pied d’un jeune arbuste, 5 litres pour une vivace ; en pot, un quart du volume du pot.',
        potShare: 0.25,
      };
    case 'aromatique':
      return {
        method: 'Arroser au pied quand la surface de la terre est sèche, sans mouiller les feuilles, de préférence le matin.',
        amount: 'Environ un quart du volume du pot, soit 300 ml pour un pot de 14 cm ; en pleine terre, 2 à 3 litres par pied.',
        potShare: 0.25,
      };
    default:
      return {
        method: 'Arroser lentement sur toute la surface du terreau avec de l’eau à température ambiante, puis vider la soucoupe après 15 minutes.',
        amount: 'Environ un cinquième du volume du pot, soit 250 ml pour un pot de 14 cm ; moins en hiver.',
        potShare: 0.2,
      };
  }
}
