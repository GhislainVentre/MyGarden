import { SPECIES, getSpecies } from '../../data/species';
import {
  DEFAULT_WATERING_DAYS,
  compareUrgency,
  daysUntilWatering,
  formatEvery,
  isGrowingSeason,
  searchSpecies,
  wateringIntervalDays,
  wateringLabel,
} from '../care';

const monstera = getSpecies('monstera')!;
const JULY = new Date(2026, 6, 15, 10);
const JANUARY = new Date(2026, 0, 15, 10);

describe('wateringIntervalDays', () => {
  it('uses the summer interval during the growing season', () => {
    expect(isGrowingSeason(JULY)).toBe(true);
    expect(wateringIntervalDays({ customWateringDays: null }, monstera, JULY)).toBe(monstera.watering.summerDays);
  });

  it('uses the winter interval outside the growing season', () => {
    expect(isGrowingSeason(JANUARY)).toBe(false);
    expect(wateringIntervalDays({ customWateringDays: null }, monstera, JANUARY)).toBe(monstera.watering.winterDays);
  });

  it('prefers a custom interval', () => {
    expect(wateringIntervalDays({ customWateringDays: 3 }, monstera, JULY)).toBe(3);
  });

  it('falls back to the default for unknown species', () => {
    expect(wateringIntervalDays({ customWateringDays: null }, undefined, JULY)).toBe(DEFAULT_WATERING_DAYS);
  });
});

describe('daysUntilWatering', () => {
  it('returns null when the last watering is unknown', () => {
    expect(daysUntilWatering({ customWateringDays: null, lastWateredAt: null }, monstera, JULY)).toBeNull();
  });

  it('counts calendar days regardless of the time of day', () => {
    const lastWateredAt = new Date(2026, 6, 12, 23, 30).toISOString();
    expect(daysUntilWatering({ customWateringDays: 7, lastWateredAt }, undefined, JULY)).toBe(4);
  });

  it('is zero on the due day and negative when late', () => {
    const lastWateredAt = new Date(2026, 6, 8, 9).toISOString();
    expect(daysUntilWatering({ customWateringDays: 7, lastWateredAt }, undefined, JULY)).toBe(0);
    expect(daysUntilWatering({ customWateringDays: 5, lastWateredAt }, undefined, JULY)).toBe(-2);
  });
});

describe('labels', () => {
  it('describes the watering status in French', () => {
    expect(wateringLabel(null)).toBe('Arrosage : date inconnue');
    expect(wateringLabel(-3)).toBe('À arroser (3 jours de retard)');
    expect(wateringLabel(0)).toBe("À arroser aujourd'hui");
    expect(wateringLabel(1)).toBe('Arrosage demain');
    expect(wateringLabel(5)).toBe('Arrosage dans 5 jours');
  });

  it('formats frequencies', () => {
    expect(formatEvery(1)).toBe('tous les jours');
    expect(formatEvery(7)).toBe('toutes les semaines');
    expect(formatEvery(14)).toBe('toutes les 2 semaines');
    expect(formatEvery(10)).toBe('tous les 10 jours');
  });
});

describe('searchSpecies', () => {
  it('finds the Pilea by common or alternative name', () => {
    expect(searchSpecies(SPECIES, 'pilea pepero').map((s) => s.id)).toEqual(['pilea']);
    expect(searchSpecies(SPECIES, 'monnaie chinoise').map((s) => s.id)).toEqual(['pilea']);
  });

  it('ignores case and accents and matches alternative names', () => {
    expect(searchSpecies(SPECIES, 'SANSEVIERE').map((s) => s.id)).toContain('sansevieria');
    expect(searchSpecies(SPECIES, 'langue de belle').map((s) => s.id)).toContain('sansevieria');
    expect(searchSpecies(SPECIES, 'ocimum').map((s) => s.id)).toEqual(expect.arrayContaining(['basilic', 'basilic-thai']));
  });

  it('returns every species sorted by name for an empty query', () => {
    const all = searchSpecies(SPECIES, '  ');
    expect(all).toHaveLength(SPECIES.length);
    expect(all[0].commonName.localeCompare(all[1].commonName, 'fr')).toBeLessThanOrEqual(0);
  });
});

describe('species database', () => {
  it('has unique ids and coherent care values', () => {
    const ids = new Set(SPECIES.map((s) => s.id));
    expect(ids.size).toBe(SPECIES.length);
    for (const s of SPECIES) {
      expect(s.watering.summerDays).toBeGreaterThan(0);
      expect(s.watering.winterDays).toBeGreaterThan(0);
      expect(s.temperature.idealMinC).toBeLessThanOrEqual(s.temperature.idealMaxC);
      expect(s.temperature.minC).toBeLessThanOrEqual(s.temperature.idealMinC);
      expect(s.commonProblems.length).toBeGreaterThan(0);
    }
  });
});

describe('daysUntilWatering edge cases', () => {
  it('returns null for an unparsable date', () => {
    expect(daysUntilWatering({ customWateringDays: null, lastWateredAt: 'pas-une-date' }, monstera, JULY)).toBeNull();
  });

  it('counts calendar days, not elapsed hours', () => {
    const lateEvening = new Date(2026, 6, 14, 23, 50).toISOString();
    const earlyMorning = new Date(2026, 6, 15, 0, 10);
    expect(daysUntilWatering({ customWateringDays: 1, lastWateredAt: lateEvening }, monstera, earlyMorning)).toBe(0);
  });
});

describe('searchSpecies with apostrophes and ligatures', () => {
  it("matches a keyboard apostrophe against a typographic one", () => {
    expect(searchSpecies(SPECIES, "jasmin d'interieur").map((s) => s.id)).toEqual(
      searchSpecies(SPECIES, 'jasmin d’intérieur').map((s) => s.id),
    );
  });

  it('matches "coeur" against "cœur"', () => {
    expect(searchSpecies(SPECIES, 'chaine des coeurs').length).toBeGreaterThan(0);
  });
});

describe('compareUrgency', () => {
  it('sorts overdue first and unknown dates last', () => {
    const days = [3, null, -2, 0, null, 10];
    expect([...days].sort(compareUrgency)).toEqual([-2, 0, 3, 10, null, null]);
  });
});
