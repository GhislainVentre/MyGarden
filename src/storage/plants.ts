import AsyncStorage from '@react-native-async-storage/async-storage';

import type { MyPlant } from '../types';

const STORAGE_KEY = 'mygarden:plants:v1';

export async function loadPlants(): Promise<MyPlant[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isPlant).map(sanitize);
  } catch {
    return [];
  }
}

function isPlant(value: unknown): value is MyPlant {
  return typeof value === 'object' && value !== null && typeof (value as MyPlant).id === 'string';
}

/** Comble les champs manquants d'une entrée écrite par une ancienne version. */
function sanitize(plant: MyPlant): MyPlant {
  return {
    id: plant.id,
    nickname: typeof plant.nickname === 'string' ? plant.nickname : 'Ma plante',
    speciesId: typeof plant.speciesId === 'string' ? plant.speciesId : null,
    photoUri: typeof plant.photoUri === 'string' ? plant.photoUri : null,
    location: typeof plant.location === 'string' ? plant.location : '',
    notes: typeof plant.notes === 'string' ? plant.notes : '',
    createdAt: typeof plant.createdAt === 'string' ? plant.createdAt : new Date().toISOString(),
    lastWateredAt: typeof plant.lastWateredAt === 'string' ? plant.lastWateredAt : null,
    customWateringDays:
      typeof plant.customWateringDays === 'number' && plant.customWateringDays > 0 ? plant.customWateringDays : null,
  };
}

let pending: Promise<void> = Promise.resolve();

/** Les écritures sont enchaînées pour que la dernière version gagne toujours. */
export async function savePlants(plants: MyPlant[]): Promise<void> {
  const write = pending.then(() => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(plants)));
  pending = write.catch(() => {});
  await write;
}

export function createId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
