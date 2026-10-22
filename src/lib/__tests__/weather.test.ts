import { coldestNight, describeWhen, forecastUrl, isFresh, makePlace, parseForecast, parseGeocoding } from '../weather';

const place = makePlace(45.764043, 4.835659, 'Lyon');
const NOW = new Date(2026, 9, 9, 7, 30); // 9 octobre, 7 h 30

function hours(start: string, temps: number[]) {
  const base = new Date(`${start}:00`);
  return temps.map((tempC, i) => {
    const d = new Date(base.getTime() + i * 3600_000);
    const pad = (n: number) => String(n).padStart(2, '0');
    return { time: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`, tempC };
  });
}

describe('weather', () => {
  it('rounds the position before sending it', () => {
    expect(place).toEqual({ latitude: 45.76, longitude: 4.84, label: 'Lyon' });
    expect(forecastUrl(place)).toContain('latitude=45.76&longitude=4.84');
  });

  it('parses Open-Meteo hourly temperatures and rejects odd answers', () => {
    const json = { hourly: { time: ['2026-10-09T00:00', '2026-10-09T01:00'], temperature_2m: [4.2, null] } };
    expect(parseForecast(json, place, NOW)?.hours).toEqual([{ time: '2026-10-09T00:00', tempC: 4.2 }]);
    expect(parseForecast({ hourly: { time: [] } }, place, NOW)).toBeNull();
    expect(parseForecast(null, place, NOW)).toBeNull();
  });

  it('parses the first geocoding result', () => {
    expect(parseGeocoding({ results: [{ name: 'Annecy', latitude: 45.899, longitude: 6.129 }] })).toEqual({
      latitude: 45.9,
      longitude: 6.13,
      label: 'Annecy',
    });
    expect(parseGeocoding({})).toBeNull();
  });

  it('finds the coldest moment of the next 48 hours, ignoring the past', () => {
    // De 0 h le 9 à 23 h le 11 : 1 °C à 3 h le 9 (passé), 2 °C à 5 h le 10, -1 °C à 5 h le 12 (trop loin).
    const temps = Array.from({ length: 72 }, (_, i) => (i === 3 ? 1 : i === 29 ? 2 : 10));
    const forecast = { placeKey: '45.76,4.84', fetchedAt: NOW.toISOString(), hours: hours('2026-10-09T00:00', temps) };
    expect(coldestNight(forecast, NOW)).toEqual({ minC: 2, when: 'cette nuit' });
  });

  it('describes when it will be coldest', () => {
    expect(describeWhen(new Date(2026, 9, 10, 5), NOW)).toBe('cette nuit');
    expect(describeWhen(new Date(2026, 9, 9, 22), NOW)).toBe('cette nuit');
    expect(describeWhen(new Date(2026, 9, 9, 8), NOW)).toBe('ce matin');
    expect(describeWhen(new Date(2026, 9, 10, 15), NOW)).toBe('demain');
    expect(describeWhen(new Date(2026, 9, 11, 6), NOW)).toBe('demain soir');
  });

  it('refreshes forecasts older than three hours or for another place', () => {
    const forecast = { placeKey: '45.76,4.84', fetchedAt: new Date(NOW.getTime() - 3600_000).toISOString(), hours: [] };
    expect(isFresh(forecast, place, NOW)).toBe(true);
    expect(isFresh({ ...forecast, fetchedAt: new Date(NOW.getTime() - 4 * 3600_000).toISOString() }, place, NOW)).toBe(false);
    expect(isFresh(forecast, makePlace(48.85, 2.35, 'Paris'), NOW)).toBe(false);
  });
});
