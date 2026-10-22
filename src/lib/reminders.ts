import { daysUntilWatering } from './care';
import type { MyPlant, PlantSpecies } from '../types';

/** Heure locale à laquelle partent les rappels d'arrosage. */
export const REMINDER_HOUR = 9;
/** iOS garde au plus 64 notifications programmées : on reste en dessous. */
export const MAX_REMINDERS = 60;

export interface WateringReminder {
  date: Date;
  plantIds: string[];
  title: string;
  body: string;
}

function listNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  const shown = names.slice(0, 3);
  const rest = names.length - shown.length;
  if (rest > 0) return `${shown.join(', ')} et ${rest} autre${rest > 1 ? 's' : ''}`;
  return `${shown.slice(0, -1).join(', ')} et ${shown[shown.length - 1]}`;
}

/**
 * Un rappel par jour d'arrosage à venir, à REMINDER_HOUR, regroupant les plantes à arroser ce jour-là.
 * Les échéances déjà passées ne sont pas reprogrammées : la liste de l'app les met en avant.
 */
export function planWateringReminders(
  plants: MyPlant[],
  getSpecies: (id: string) => PlantSpecies | undefined,
  now: Date = new Date(),
): WateringReminder[] {
  const byDay = new Map<number, MyPlant[]>();
  for (const plant of plants) {
    const species = plant.speciesId ? getSpecies(plant.speciesId) : undefined;
    const days = daysUntilWatering(plant, species, now);
    if (days === null) continue;
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days, REMINDER_HOUR);
    if (date.getTime() <= now.getTime()) continue;
    const key = date.getTime();
    byDay.set(key, [...(byDay.get(key) ?? []), plant]);
  }
  return [...byDay.entries()]
    .sort(([a], [b]) => a - b)
    .slice(0, MAX_REMINDERS)
    .map(([time, due]) => {
      const names = due.map((p) => p.nickname.trim() || 'Une plante');
      return {
        date: new Date(time),
        plantIds: due.map((p) => p.id),
        title: due.length === 1 ? `${names[0]} a soif` : `${due.length} plantes ont soif`,
        body:
          due.length === 1
            ? `C’est le jour d’arroser ${names[0]}${due[0].location.trim() ? ` (${due[0].location.trim()})` : ''}.`
            : `Pensez à arroser ${listNames(names)}.`,
      };
    });
}
