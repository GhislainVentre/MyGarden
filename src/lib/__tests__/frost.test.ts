import { getSpecies } from '../../data/species';
import { coldAdvice, defaultPlacement, guessPlacement } from '../frost';

const citronnier = getSpecies('citronnier')!; // minC 2
const olivier = getSpecies('olivier')!; // minC -8
const buis = getSpecies('buis')!; // minC -20
const tomate = getSpecies('tomate')!; // minC 10
const aloe = getSpecies('aloe-vera')!;

describe('coldAdvice', () => {
  it('gives no advice for indoor plants', () => {
    expect(coldAdvice(citronnier, 'indoor', -5)).toBeNull();
  });

  it('tells to bring a tender potted plant inside when the night reaches its limit', () => {
    const advice = coldAdvice(citronnier, 'outdoor-pot', 2)!;
    expect(advice.level).toBe('urgent');
    expect(advice.title).toBe('Rentrez-la ce soir');
    expect(advice.actions.map((a) => a.icon)).toContain('home-outline');
  });

  it('warns a few degrees before the limit and stays quiet when it is mild', () => {
    expect(coldAdvice(citronnier, 'outdoor-pot', 4)!.level).toBe('act');
    expect(coldAdvice(citronnier, 'outdoor-pot', 7)!.level).toBe('watch');
    expect(coldAdvice(citronnier, 'outdoor-pot', 12)!.level).toBe('ok');
  });

  it('protects pots sooner than plants in the ground', () => {
    // Olivier : -8 °C en pleine terre, mais les racines en pot gèlent dès -3 °C.
    expect(coldAdvice(olivier, 'ground', -3)!.level).toBe('watch');
    const potted = coldAdvice(olivier, 'outdoor-pot', -3)!;
    expect(potted.level).toBe('urgent');
    expect(potted.actions[0].icon).toBe('cube-outline');
  });

  it('suggests a winter fleece and mulch near the limit in the ground', () => {
    const advice = coldAdvice(olivier, 'ground', -6)!;
    expect(advice.level).toBe('act');
    expect(advice.actions.map((a) => a.icon)).toEqual(expect.arrayContaining(['shield-outline', 'leaf-outline']));
  });

  it('leaves hardy plants alone at 3 °C', () => {
    const advice = coldAdvice(buis, 'ground', 3)!;
    expect(advice.level).toBe('ok');
    expect(advice.title).toBe('Rien à faire');
  });

  it('suggests harvesting annual vegetables rather than protecting them', () => {
    const advice = coldAdvice(tomate, 'ground', 3)!;
    expect(advice.level).toBe('urgent');
    expect(advice.title).toBe('Récoltez avant le froid');
  });

  it('adds morning watering and dry soil tips when it gets cold', () => {
    expect(coldAdvice(buis, 'outdoor-pot', 3)!.actions.map((a) => a.icon)).toContain('water-outline');
    expect(coldAdvice(getSpecies('agave-americana'), 'ground', 4)!.actions.map((a) => a.icon)).toContain('sunny-outline');
  });

  it('gives the threshold to watch without weather', () => {
    const advice = coldAdvice(aloe, 'outdoor-pot', null)!;
    expect(advice.title).toBe('Supporte jusqu’à 5 °C');
    expect(advice.actions[0].text).toContain('8 °C');
  });

  it('asks for the species when it is unknown', () => {
    expect(coldAdvice(undefined, 'ground', 10)!.actions[0].icon).toBe('search-outline');
    expect(coldAdvice(undefined, 'ground', -3)!.level).toBe('act');
  });
});

describe('placement', () => {
  it('guesses from the location text', () => {
    expect(guessPlacement('Balcon')).toBe('outdoor-pot');
    expect(guessPlacement('Massif du jardin')).toBe('ground');
    expect(guessPlacement('Jardin d’hiver')).toBe('indoor');
    expect(guessPlacement('Salon')).toBe('indoor');
    expect(guessPlacement('Chez mamie')).toBeNull();
  });

  it('defaults from the species category', () => {
    expect(defaultPlacement(getSpecies('monstera'))).toBe('indoor');
    expect(defaultPlacement(buis)).toBe('ground');
    expect(defaultPlacement(buis, true)).toBe('outdoor-pot');
    expect(defaultPlacement(getSpecies('basilic'))).toBe('outdoor-pot');
    expect(defaultPlacement(undefined)).toBe('indoor');
  });
});
