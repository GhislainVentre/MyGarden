import { formatVolume, potVolumeLitres, wateringAmountMl } from '../watering';

describe('watering amounts', () => {
  it('estimates the volume of common pots', () => {
    expect(potVolumeLitres(12)).toBeCloseTo(0.78, 1);
    expect(potVolumeLitres(20)).toBeCloseTo(3.6, 1);
  });

  it('computes the amount for a pot and rounds it', () => {
    const guide = { method: '', amount: '', potShare: 0.25 };
    expect(wateringAmountMl(guide, 14)).toBe(310);
    expect(wateringAmountMl(guide, 30)).toBe(3050);
    expect(wateringAmountMl(guide, null)).toBeNull();
    expect(wateringAmountMl({ ...guide, potShare: null }, 14)).toBeNull();
  });

  it('formats millilitres and litres in French', () => {
    expect(formatVolume(310)).toBe('310 ml');
    expect(formatVolume(3050)).toBe('3,1 L');
  });
});
