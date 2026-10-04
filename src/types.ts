export type Category = 'interieur' | 'exterieur' | 'succulente' | 'aromatique' | 'potager';

export type LightLevel = 'faible' | 'moyenne' | 'vive-indirecte' | 'plein-soleil';

/** Fiche d'entretien d'une espèce, issue de la base embarquée. */
export interface PlantSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  otherNames?: string[];
  family: string;
  category: Category;
  description: string;
  difficulty: 'facile' | 'moyenne' | 'difficile';
  watering: {
    /** Intervalle conseillé entre deux arrosages au printemps et en été, en jours. */
    summerDays: number;
    /** Intervalle conseillé en automne et en hiver, en jours. */
    winterDays: number;
    advice: string;
  };
  light: {
    level: LightLevel;
    advice: string;
  };
  temperature: {
    minC: number;
    idealMinC: number;
    idealMaxC: number;
  };
  humidity: 'faible' | 'moyenne' | 'elevee';
  soil: string;
  fertilizing: string;
  repotting: string;
  pruning: string;
  toxicity: string;
  commonProblems: string[];
}

/** Plante enregistrée par l'utilisateur. */
export interface MyPlant {
  id: string;
  nickname: string;
  speciesId: string | null;
  photoUri: string | null;
  location: string;
  notes: string;
  createdAt: string;
  /** Date ISO du dernier arrosage, ou null si inconnue. */
  lastWateredAt: string | null;
  /** Intervalle d'arrosage personnalisé en jours ; remplace la valeur de l'espèce. */
  customWateringDays: number | null;
}

export type NewPlant = Omit<MyPlant, 'id' | 'createdAt'>;
