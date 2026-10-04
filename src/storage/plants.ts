import AsyncStorage from '@react-native-async-storage/async-storage';

import type { MyPlant } from '../types';

const STORAGE_KEY = 'mygarden:plants:v1';

export async function loadPlants(): Promise<MyPlant[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as MyPlant[]) : [];
  } catch {
    return [];
  }
}

export async function savePlants(plants: MyPlant[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
}

export function createId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
