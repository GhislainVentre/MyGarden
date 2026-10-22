import { Platform, type TextStyle, type ViewStyle } from 'react-native';

import type { Category, LightLevel, PlantSpecies } from './types';

/** Palette « jardin » : sable chaud, vert forêt, touches de terre cuite et d'eau. */
export const colors = {
  background: '#F5F1E8',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF3E9',
  primary: '#2B5A3C',
  primaryDark: '#1E4029',
  primaryLight: '#DCEBD9',
  leaf: '#6BA368',
  text: '#1F2A22',
  muted: '#6A7568',
  border: '#E4E0D5',
  danger: '#B3372F',
  dangerLight: '#F8E1DE',
  warning: '#C8673B',
  warningLight: '#F7E3D8',
  water: '#3C7FB5',
  waterLight: '#DDEBF6',
  sun: '#D9A441',
  sunLight: '#FBF0D6',
  overlay: 'rgba(31, 42, 34, 0.55)',
  onPrimary: '#FFFFFF',
};

export const fonts = {
  display: 'Fraunces_600SemiBold',
  displayBold: 'Fraunces_700Bold',
  body: 'Nunito_400Regular',
  bodyMedium: 'Nunito_600SemiBold',
  bodyBold: 'Nunito_700Bold',
  bodyBlack: 'Nunito_800ExtraBold',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };

export const radius = { sm: 10, md: 16, lg: 22, xl: 28, round: 999 };

/** Styles de texte réutilisables. */
export const type = {
  hero: { fontFamily: fonts.displayBold, fontSize: 32, lineHeight: 38, color: colors.text } as TextStyle,
  title: { fontFamily: fonts.display, fontSize: 24, lineHeight: 30, color: colors.text } as TextStyle,
  heading: { fontFamily: fonts.display, fontSize: 19, lineHeight: 24, color: colors.text } as TextStyle,
  label: {
    fontFamily: fonts.bodyBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.muted,
  } as TextStyle,
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.text } as TextStyle,
  bodyStrong: { fontFamily: fonts.bodyBold, fontSize: 15, lineHeight: 23, color: colors.text } as TextStyle,
  caption: { fontFamily: fonts.bodyMedium, fontSize: 13, lineHeight: 18, color: colors.muted } as TextStyle,
};

/** Ombre douce, identique sur iOS, Android et web. */
export const shadow: ViewStyle = Platform.select({
  web: { boxShadow: '0 6px 18px rgba(31, 42, 34, 0.08)' } as ViewStyle,
  default: {
    shadowColor: '#1F2A22',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
}) as ViewStyle;

export const card: ViewStyle = {
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  ...shadow,
};

export interface Tone {
  bg: string;
  fg: string;
}

export const CATEGORY_TONES: Record<Category, Tone> = {
  interieur: { bg: colors.primaryLight, fg: colors.primaryDark },
  exterieur: { bg: colors.sunLight, fg: '#8A6413' },
  succulente: { bg: colors.warningLight, fg: '#8F4620' },
  aromatique: { bg: '#E6F0F7', fg: '#2F5E85' },
  potager: { bg: '#F4E4EE', fg: '#7E3B68' },
};

export const DIFFICULTY_TONES: Record<PlantSpecies['difficulty'], Tone> = {
  facile: { bg: colors.primaryLight, fg: colors.primaryDark },
  moyenne: { bg: colors.sunLight, fg: '#8A6413' },
  difficile: { bg: colors.warningLight, fg: '#8F4620' },
};

export const LIGHT_ICONS: Record<LightLevel, 'cloud-outline' | 'partly-sunny-outline' | 'sunny-outline' | 'sunny'> = {
  faible: 'cloud-outline',
  moyenne: 'partly-sunny-outline',
  'vive-indirecte': 'sunny-outline',
  'plein-soleil': 'sunny',
};
