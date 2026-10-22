import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import { deletePhoto } from '../lib/photos';
import { createId, loadPlants, savePlants } from '../storage/plants';
import type { MyPlant, NewPlant } from '../types';

interface GardenContextValue {
  plants: MyPlant[];
  loading: boolean;
  addPlant: (plant: NewPlant) => MyPlant;
  updatePlant: (id: string, changes: Partial<NewPlant>) => void;
  removePlant: (id: string) => void;
  markWatered: (id: string, date?: Date) => void;
}

const GardenContext = createContext<GardenContextValue | null>(null);

export function GardenProvider({ children }: { children: ReactNode }) {
  const [plants, setPlants] = useState<MyPlant[]>([]);
  const [loading, setLoading] = useState(true);
  const plantsRef = useRef<MyPlant[]>([]);
  const loadedRef = useRef(false);
  // Modifications faites avant la fin du chargement (lien profond vers « Nouvelle plante »).
  const earlyUpdates = useRef<((current: MyPlant[]) => MyPlant[])[]>([]);

  useEffect(() => {
    let active = true;
    loadPlants()
      .catch(() => [] as MyPlant[])
      .then((loaded) => {
        if (!active) return;
        const merged = earlyUpdates.current.reduce((current, update) => update(current), loaded);
        loadedRef.current = true;
        plantsRef.current = merged;
        setPlants(merged);
        if (earlyUpdates.current.length > 0) savePlants(merged).catch(() => {});
        earlyUpdates.current = [];
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const commit = useCallback((update: (current: MyPlant[]) => MyPlant[]) => {
    const next = update(plantsRef.current);
    plantsRef.current = next;
    setPlants(next);
    if (!loadedRef.current) {
      // On rejouera la modification sur les données chargées, sans écraser le stockage.
      earlyUpdates.current.push(update);
      return;
    }
    savePlants(next).catch(() => {});
  }, []);

  const addPlant = useCallback(
    (plant: NewPlant) => {
      const created: MyPlant = { ...plant, id: createId(), createdAt: new Date().toISOString() };
      commit((current) => [created, ...current]);
      return created;
    },
    [commit],
  );

  const updatePlant = useCallback(
    (id: string, changes: Partial<NewPlant>) => {
      commit((current) =>
        current.map((p) => {
          if (p.id !== id) return p;
          if ('photoUri' in changes && changes.photoUri !== p.photoUri) deletePhoto(p.photoUri);
          return { ...p, ...changes };
        }),
      );
    },
    [commit],
  );

  const removePlant = useCallback(
    (id: string) => {
      commit((current) => {
        deletePhoto(current.find((p) => p.id === id)?.photoUri ?? null);
        return current.filter((p) => p.id !== id);
      });
    },
    [commit],
  );

  const markWatered = useCallback(
    (id: string, date: Date = new Date()) => {
      commit((current) => current.map((p) => (p.id === id ? { ...p, lastWateredAt: date.toISOString() } : p)));
    },
    [commit],
  );

  const value = useMemo(
    () => ({ plants, loading, addPlant, updatePlant, removePlant, markWatered }),
    [plants, loading, addPlant, updatePlant, removePlant, markWatered],
  );

  return <GardenContext.Provider value={value}>{children}</GardenContext.Provider>;
}

export function useGarden(): GardenContextValue {
  const ctx = useContext(GardenContext);
  if (!ctx) throw new Error('useGarden doit être utilisé dans un GardenProvider');
  return ctx;
}
