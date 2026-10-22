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

/** Comment arroser une espèce et combien d'eau lui donner. */
export interface WateringGuide {
  /** Geste d'arrosage : où, comment, avec quelle eau. */
  method: string;
  /** Quantité d'eau par arrosage, en pot et en pleine terre si utile. */
  amount: string;
  /** Part du volume du pot à verser à chaque arrosage (0,2 = un cinquième), ou null si cela ne s'applique pas. */
  potShare: number | null;
}

/** Où vit la plante : à l'intérieur, dehors en pot ou en pleine terre. */
export type Placement = 'indoor' | 'outdoor-pot' | 'ground';

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
  /** Diamètre du pot en centimètres, pour calculer la quantité d'eau ; null en pleine terre ou si inconnu. */
  potDiameterCm: number | null;
  /** Où vit la plante ; décide des conseils contre le froid. */
  placement: Placement;
}

export type NewPlant = Omit<MyPlant, 'id' | 'createdAt'>;
