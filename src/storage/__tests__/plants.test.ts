import AsyncStorage from '@react-native-async-storage/async-storage';

import { loadPlants, savePlants } from '../plants';
import type { MyPlant } from '../../types';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const plant: MyPlant = {
  id: 'a',
  nickname: 'Pilou',
  speciesId: 'pilea',
  photoUri: null,
  location: 'Bureau',
  notes: '',
  createdAt: '2026-10-05T10:00:00.000Z',
  lastWateredAt: null,
  customWateringDays: null,
};

beforeEach(() => AsyncStorage.clear());

describe('loadPlants', () => {
  it('returns an empty garden when nothing is stored', async () => {
    expect(await loadPlants()).toEqual([]);
  });

  it('ignores corrupt storage instead of crashing', async () => {
    await AsyncStorage.setItem('mygarden:plants:v1', '{not json');
    expect(await loadPlants()).toEqual([]);
  });

  it('drops invalid entries and fills missing fields', async () => {
    await AsyncStorage.setItem(
      'mygarden:plants:v1',
      JSON.stringify([{ id: 'b', nickname: 'Monstie', customWateringDays: 0 }, null, 'x', { nickname: 'sans id' }]),
    );
    const loaded = await loadPlants();
    expect(loaded).toHaveLength(1);
    expect(loaded[0]).toMatchObject({ id: 'b', nickname: 'Monstie', location: '', photoUri: null, customWateringDays: null });
  });
});

describe('savePlants', () => {
  it('keeps the last write when several saves overlap', async () => {
    await Promise.all([savePlants([plant]), savePlants([]), savePlants([plant, { ...plant, id: 'c' }])]);
    expect(await loadPlants()).toHaveLength(2);
  });
});
