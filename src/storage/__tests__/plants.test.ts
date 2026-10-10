import AsyncStorage from '@react-native-async-storage/async-storage';

import { loadPlants, savePlants } from '../plants';
import type { MyPlant } from '../../types';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
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
  potDiameterCm: null,
  placement: 'indoor',
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
    expect(loaded[0]).toMatchObject({
      id: 'b',
      nickname: 'Monstie',
      location: '',
      photoUri: null,
      customWateringDays: null,
      potDiameterCm: null,
    });
  });
});

describe('loadPlants migrations', () => {
  it('rewrites old absolute photo paths to relative ones and drops duplicate ids', async () => {
    await AsyncStorage.setItem(
      'mygarden:plants:v1',
      JSON.stringify([
        { ...plant, photoUri: 'file:///data/user/0/com.app/files/photos/123.jpg' },
        { ...plant, nickname: 'Doublon' },
        { ...plant, id: 'web', photoUri: 'blob:http://localhost/abc' },
      ]),
    );
    const loaded = await loadPlants();
    expect(loaded.map((p) => p.id)).toEqual(['a', 'web']);
    expect(loaded[0].photoUri).toBe('photos/123.jpg');
    expect(loaded[1].photoUri).toBe('blob:http://localhost/abc');
  });

  it('backs up unreadable storage before starting empty', async () => {
    await AsyncStorage.setItem('mygarden:plants:v1', '{not json');
    await loadPlants();
    expect(await AsyncStorage.getItem('mygarden:plants:corrupt')).toBe('{not json');
  });
});

describe('savePlants', () => {
  it('keeps the last write when several saves overlap', async () => {
    await Promise.all([savePlants([plant]), savePlants([]), savePlants([plant, { ...plant, id: 'c' }])]);
    expect(await loadPlants()).toHaveLength(2);
  });
});

describe('loadPlants placement', () => {
  it('guesses where older plants live', async () => {
    await AsyncStorage.setItem(
      'mygarden:plants:v1',
      JSON.stringify([
        { id: 'a', nickname: 'Citron', speciesId: 'citronnier', location: 'Balcon' },
        { id: 'b', nickname: 'Buis', speciesId: 'buis', location: '' },
        { id: 'c', nickname: 'Buis du perron', speciesId: 'buis', location: '', potDiameterCm: 40 },
        { id: 'd', nickname: 'Monstie', speciesId: 'monstera', location: 'Salon', placement: 'outdoor-pot' },
        { id: 'e', nickname: 'Inconnue', speciesId: null, location: '' },
      ]),
    );
    expect((await loadPlants()).map((p) => p.placement)).toEqual(['outdoor-pot', 'ground', 'outdoor-pot', 'outdoor-pot', 'indoor']);
  });
});
