import { router } from 'expo-router';
import { useEffect, useRef } from 'react';

import { useGarden } from '../context/GardenContext';
import { getSpecies } from '../data/species';
import { onReminderOpened, scheduleWateringReminders } from '../lib/notifications';
import { planWateringReminders } from '../lib/reminders';
import type { MyPlant } from '../types';

/** Programme les rappels d'arrosage silencieux et ouvre la plante quand on touche un rappel. */
export function WateringReminders() {
  const { plants, loading } = useGarden();
  const state = useRef<{ plants: MyPlant[]; loading: boolean }>({ plants, loading });
  // Rappel touché avant la fin du chargement des plantes.
  const pending = useRef<string[] | null>(null);

  const openPending = useRef(() => {
    const ids = pending.current;
    if (!ids || state.current.loading) return;
    pending.current = null;
    if (ids.length === 1 && state.current.plants.some((p) => p.id === ids[0])) {
      router.push({ pathname: '/plant/[id]', params: { id: ids[0] } });
    } else {
      router.navigate('/');
    }
  });

  useEffect(() => {
    state.current = { plants, loading };
    openPending.current();
    if (loading) return;
    // Petit délai pour regrouper les modifications rapprochées.
    const timer = setTimeout(() => {
      scheduleWateringReminders(planWateringReminders(plants, getSpecies)).catch(() => {});
    }, 800);
    return () => clearTimeout(timer);
  }, [plants, loading]);

  useEffect(
    () =>
      onReminderOpened((ids) => {
        pending.current = ids;
        openPending.current();
      }),
    [],
  );

  return null;
}
