import { normalize } from './care';
import type { Placement, PlantSpecies } from '../types';

export const PLACEMENT_LABELS: Record<Placement, string> = {
  indoor: 'À l’intérieur',
  'outdoor-pot': 'Dehors en pot',
  ground: 'En pleine terre',
};

/** En pot, les racines gèlent bien avant celles d'une plante en pleine terre : on protège plus tôt. */
export const POT_MARGIN_C = 5;

/** Où vit d'habitude une plante de cette espèce, faute d'autre indice. */
export function defaultPlacement(species: PlantSpecies | undefined, potted = false): Placement {
  switch (species?.category) {
    case 'exterieur':
    case 'potager':
      return potted ? 'outdoor-pot' : 'ground';
    case 'aromatique':
      return 'outdoor-pot';
    default:
      return 'indoor';
  }
}

const INDOOR_WORDS = ['veranda', 'jardin d hiver', 'serre', 'salon', 'chambre', 'cuisine', 'bureau', 'salle de bain', 'entree'];
const GROUND_WORDS = ['jardin', 'potager', 'massif', 'haie', 'pelouse', 'verger', 'allee', 'bordure', 'rocaille', 'pleine terre', 'parterre', 'cour'];
// « Dehors » ou « extérieur » ne disent pas si c'est en pot : l'espèce décide alors.
const POT_WORDS = ['balcon', 'terrasse', 'rebord', 'patio', 'loggia', 'perron', 'jardiniere', 'bac', 'pot'];

/** Devine l'emplacement à partir du texte saisi (« Balcon », « Massif du jardin »…), ou null. */
export function guessPlacement(location: string): Placement | null {
  const text = ` ${normalize(location).replace(/[^a-z0-9]+/g, ' ')} `;
  const has = (words: string[]) => words.some((word) => text.includes(` ${word} `));
  if (has(INDOOR_WORDS)) return 'indoor';
  if (has(POT_WORDS)) return 'outdoor-pot';
  if (has(GROUND_WORDS)) return 'ground';
  return null;
}

export type ColdLevel = 'ok' | 'watch' | 'act' | 'urgent';

export type ColdIcon =
  | 'home-outline'
  | 'bug-outline'
  | 'shield-outline'
  | 'leaf-outline'
  | 'cube-outline'
  | 'basket-outline'
  | 'water-outline'
  | 'sunny-outline'
  | 'search-outline'
  | 'checkmark-circle-outline';

export interface ColdAction {
  icon: ColdIcon;
  text: string;
}

export interface ColdAdvice {
  level: ColdLevel;
  title: string;
  actions: ColdAction[];
}

/** « 3 °C », « -2 °C » (espace insécable). */
export function formatTemp(celsius: number): string {
  return `${Math.round(celsius)} °C`;
}

const LEVEL_RANK: Record<ColdLevel, number> = { ok: 0, watch: 1, act: 2, urgent: 3 };

export function compareColdLevel(a: ColdLevel, b: ColdLevel): number {
  return LEVEL_RANK[b] - LEVEL_RANK[a];
}

/**
 * Conseils contre le froid pour une plante d'extérieur, selon la température la plus basse
 * des prochaines nuits (`nightMinC`, null sans météo) et la rusticité de son espèce.
 * Renvoie null pour une plante d'intérieur.
 */
export function coldAdvice(
  species: PlantSpecies | undefined,
  placement: Placement,
  nightMinC: number | null,
): ColdAdvice | null {
  if (placement === 'indoor') return null;
  const potted = placement === 'outdoor-pot';
  if (!species) return unknownSpeciesAdvice(potted, nightMinC);

  const { minC } = species.temperature;
  const tender = minC >= 0;
  // Basilic, tomate… : plantes annuelles que le froid arrête ; on récolte plutôt qu'on protège.
  const annual = tender && (species.category === 'potager' || species.category === 'aromatique');
  const limit = potted && !tender ? minC + POT_MARGIN_C : minC;

  if (nightMinC === null) return staticAdvice({ minC, limit, tender, annual, potted });

  const margin = nightMinC - limit;
  const level: ColdLevel = margin <= 0 ? 'urgent' : margin <= 3 ? 'act' : margin <= 6 ? 'watch' : 'ok';
  const actions: ColdAction[] = [];
  let title: string;
  let bringingIn = false;

  if (level === 'ok') {
    title = 'Rien à faire';
    actions.push({ icon: 'checkmark-circle-outline', text: `Elle supporte jusqu’à ${formatTemp(minC)} : pas besoin de la protéger pour l’instant.` });
  } else if (annual) {
    title = level === 'watch' ? 'Fin de saison proche' : 'Récoltez avant le froid';
    actions.push({
      icon: 'basket-outline',
      text:
        level === 'watch'
          ? `Profitez des dernières récoltes : la plante dépérit sous ${formatTemp(minC)}.`
          : `Récoltez ce qui reste : sous ${formatTemp(minC)}, la plante dépérit.`,
    });
    if (level === 'act') actions.push({ icon: 'shield-outline', text: 'Un voile d’hivernage posé le soir peut prolonger la récolte de quelques jours.' });
    if (potted) actions.push({ icon: 'home-outline', text: 'En pot, vous pouvez aussi la rentrer près d’une fenêtre bien lumineuse.' });
  } else if (tender && potted) {
    title = level === 'urgent' ? 'Rentrez-la ce soir' : level === 'act' ? 'Rentrez-la bientôt' : 'Le froid approche';
    if (level === 'watch') {
      actions.push({
        icon: 'home-outline',
        text: `Préparez-lui une place lumineuse à l’intérieur : elle devra rentrer quand les nuits passeront sous ${formatTemp(minC + 3)}.`,
      });
    } else {
      bringingIn = true;
      actions.push({ icon: 'home-outline', text: `Rentrez-la dans une pièce lumineuse où il fait au moins ${formatTemp(Math.max(minC + 3, 5))}.` });
      actions.push({ icon: 'bug-outline', text: 'Avant de la rentrer, vérifiez qu’aucun insecte ne se cache sous les feuilles ou dans la soucoupe.' });
      actions.push({ icon: 'water-outline', text: 'Une fois à l’intérieur, espacez les arrosages : elle pousse beaucoup moins en hiver.' });
    }
  } else if (tender) {
    title = level === 'watch' ? 'Le froid approche' : 'Protégez-la cette nuit';
    if (level === 'watch') {
      actions.push({ icon: 'leaf-outline', text: 'Paillez le pied (feuilles mortes, paille) et gardez un voile d’hivernage sous la main.' });
    } else {
      actions.push({
        icon: 'shield-outline',
        text: level === 'urgent' ? 'Couvrez-la d’un double voile d’hivernage dès ce soir.' : 'Posez un voile d’hivernage le soir, les nuits froides.',
      });
      actions.push({ icon: 'leaf-outline', text: 'Paillez épais le pied, sur 15 à 20 cm (feuilles mortes, paille).' });
      if (level === 'urgent') {
        actions.push({
          icon: 'shield-outline',
          text: `Elle ne supporte pas moins de ${formatTemp(minC)} : laissez le voile en place tant que les nuits restent aussi froides.`,
        });
      }
    }
  } else if (potted) {
    title = level === 'urgent' ? 'Mettez le pot à l’abri' : level === 'act' ? 'Protégez le pot du gel' : 'Le froid approche';
    if (level === 'urgent') {
      actions.push({
        icon: 'cube-outline',
        text: 'Mettez le pot à l’abri du gel (garage, véranda, cave claire) ou emballez-le entièrement : en pot, les racines gèlent bien avant la plante.',
      });
    } else if (level === 'act') {
      actions.push({ icon: 'cube-outline', text: 'Protégez le pot : collez-le contre un mur, surélevez-le et entourez-le de papier bulle ou de jute.' });
    } else {
      actions.push({ icon: 'cube-outline', text: 'Préparez la protection du pot : un coin contre un mur, des cales et du papier bulle ou de la jute.' });
    }
    if (nightMinC <= minC + 3) actions.push({ icon: 'shield-outline', text: 'Couvrez aussi le feuillage d’un voile d’hivernage les nuits de gel.' });
  } else {
    title = level === 'urgent' ? 'Voile d’hivernage cette nuit' : level === 'act' ? 'Protégez-la du gel' : 'Le froid approche';
    if (level === 'watch') {
      actions.push({ icon: 'leaf-outline', text: 'Paillez le pied avant les premières gelées (feuilles mortes, paille, écorces).' });
    } else {
      actions.push({
        icon: 'shield-outline',
        text: level === 'urgent' ? 'Couvrez-la d’un voile d’hivernage cette nuit, en double si possible.' : 'Posez un voile d’hivernage les nuits de gel.',
      });
      actions.push({ icon: 'leaf-outline', text: 'Paillez épais le pied, sur 15 à 20 cm (feuilles mortes, paille).' });
    }
  }

  if (nightMinC <= 5 && !bringingIn && !annual) {
    actions.push({
      icon: 'water-outline',
      text: potted
        ? 'Arrosez moins et le matin, et videz les soucoupes pour que l’eau ne gèle pas.'
        : 'Espacez les arrosages et arrosez le matin plutôt que le soir.',
    });
  }
  if (nightMinC <= 8 && species.category === 'succulente' && !bringingIn) {
    actions.push({ icon: 'sunny-outline', text: 'Gardez-la au sec : le froid humide la fait pourrir bien plus vite que le froid sec.' });
  }
  return { level, title, actions };
}

/** Sans météo : les seuils à surveiller pour cette plante. */
function staticAdvice({
  minC,
  limit,
  tender,
  annual,
  potted,
}: {
  minC: number;
  limit: number;
  tender: boolean;
  annual: boolean;
  potted: boolean;
}): ColdAdvice {
  const title = `Supporte jusqu’à ${formatTemp(minC)}`;
  let action: ColdAction;
  if (annual) {
    action = { icon: 'basket-outline', text: `Récoltez avant que les nuits descendent sous ${formatTemp(minC)} : le froid arrête la plante.` };
  } else if (tender && potted) {
    action = { icon: 'home-outline', text: `Rentrez-la à l’abri dès que les nuits descendent sous ${formatTemp(minC + 3)}.` };
  } else if (tender) {
    action = { icon: 'shield-outline', text: `Couvrez-la d’un voile d’hivernage dès que les nuits descendent sous ${formatTemp(minC + 3)}.` };
  } else if (potted) {
    action = { icon: 'cube-outline', text: `En pot, protégez-le dès qu’il gèle à ${formatTemp(limit + 3)} ou moins.` };
  } else if (minC <= -15) {
    action = { icon: 'checkmark-circle-outline', text: 'Très rustique en pleine terre : rien à faire en hiver sous un climat français habituel.' };
  } else {
    action = { icon: 'shield-outline', text: `Posez un voile d’hivernage quand les nuits descendent sous ${formatTemp(minC + 3)}.` };
  }
  return { level: 'ok', title, actions: [action] };
}

function unknownSpeciesAdvice(potted: boolean, nightMinC: number | null): ColdAdvice {
  const search: ColdAction = { icon: 'search-outline', text: 'Renseignez son espèce pour savoir à partir de quelle température la protéger.' };
  if (nightMinC === null || nightMinC > 2) return { level: 'ok', title: 'Espèce non renseignée', actions: [search] };
  return {
    level: nightMinC <= -2 ? 'act' : 'watch',
    title: nightMinC <= 0 ? 'Gel possible' : 'Le froid approche',
    actions: [
      potted
        ? { icon: 'cube-outline', text: 'Si elle est frileuse, rentrez-la ; sinon protégez le pot contre un mur, surélevé, dans du papier bulle.' }
        : { icon: 'shield-outline', text: 'Si elle est frileuse, couvrez-la d’un voile d’hivernage la nuit et paillez le pied.' },
      search,
    ],
  };
}
