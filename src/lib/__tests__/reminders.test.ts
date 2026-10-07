import { getSpecies } from '../../data/species';
import type { MyPlant } from '../../types';
import { MAX_REMINDERS, REMINDER_HOUR, planWateringReminders } from '../reminders';

const NOW = new Date(2026, 6, 15, 10); // 15 juillet, 10 h

function plant(id: string, nickname: string, lastWateredDaysAgo: number | null, every = 7): MyPlant {
  return {
    id,
    nickname,
    speciesId: null,
    photoUri: null,
    location: '',
    notes: '',
    createdAt: NOW.toISOString(),
    lastWateredAt:
      lastWateredDaysAgo === null
        ? null
        : new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() - lastWateredDaysAgo, 8).toISOString(),
    customWateringDays: every,
    potDiameterCm: null,
  };
}

describe('planWateringReminders', () => {
  it('schedules one reminder at the reminder hour on the watering day', () => {
    const [reminder, ...rest] = planWateringReminders([plant('a', 'Monstera', 4)], getSpecies, NOW);
    expect(rest).toEqual([]);
    expect(reminder.date).toEqual(new Date(2026, 6, 18, REMINDER_HOUR));
    expect(reminder.plantIds).toEqual(['a']);
    expect(reminder.title).toBe('Monstera a soif');
  });

  it('groups plants due the same day into one reminder', () => {
    const reminders = planWateringReminders(
      [plant('a', 'Monstera', 4), plant('b', 'Pilea', 1, 4), plant('c', 'Ficus', 0, 3)],
      getSpecies,
      NOW,
    );
    expect(reminders).toHaveLength(1);
    expect(reminders[0].plantIds).toEqual(['a', 'b', 'c']);
    expect(reminders[0].title).toBe('3 plantes ont soif');
    expect(reminders[0].body).toBe('Pensez à arroser Monstera, Pilea et Ficus.');
  });

  it('sorts reminders by date', () => {
    const reminders = planWateringReminders([plant('late', 'B', 0, 10), plant('soon', 'A', 0, 2)], getSpecies, NOW);
    expect(reminders.map((r) => r.plantIds[0])).toEqual(['soon', 'late']);
  });

  it('skips past or unknown due dates', () => {
    const reminders = planWateringReminders(
      [plant('overdue', 'A', 10), plant('today', 'B', 7), plant('unknown', 'C', null)],
      getSpecies,
      NOW,
    );
    expect(reminders).toEqual([]);
  });

  it('keeps a reminder for later today', () => {
    const early = new Date(2026, 6, 15, 7);
    const [reminder] = planWateringReminders([plant('today', 'B', 7)], getSpecies, early);
    expect(reminder.date).toEqual(new Date(2026, 6, 15, REMINDER_HOUR));
  });

  it('stays under the iOS limit', () => {
    const plants = Array.from({ length: 80 }, (_, i) => plant(`p${i}`, `Plante ${i}`, 0, i + 1));
    expect(planWateringReminders(plants, getSpecies, NOW)).toHaveLength(MAX_REMINDERS);
  });
});
