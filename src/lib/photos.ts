import { Directory, File, Paths } from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

const PICKER_OPTIONS: ImagePicker.ImagePickerOptions = {
  mediaTypes: ['images'],
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.7,
};

export type PhotoSource = 'camera' | 'library';

export type PhotoResult = { uri: string } | { error: string } | null;

/** Ouvre l'appareil photo ou la galerie. Renvoie null si l'utilisateur annule. */
export async function pickPhoto(source: PhotoSource): Promise<PhotoResult> {
  if (source === 'camera') {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      return { error: "L'accès à l'appareil photo a été refusé. Autorisez-le dans les réglages du téléphone." };
    }
  }
  const result =
    source === 'camera'
      ? await ImagePicker.launchCameraAsync(PICKER_OPTIONS)
      : await ImagePicker.launchImageLibraryAsync(PICKER_OPTIONS);
  if (result.canceled || result.assets.length === 0) return null;
  return { uri: persistPhoto(result.assets[0].uri) };
}

function photosDirectory(): Directory {
  const dir = new Directory(Paths.document, 'photos');
  dir.create({ idempotent: true, intermediates: true });
  return dir;
}

/**
 * Copie la photo dans le dossier documents de l'application : les fichiers
 * renvoyés par le sélecteur sont temporaires et peuvent être effacés.
 */
function persistPhoto(uri: string): string {
  if (Platform.OS === 'web') return uri;
  try {
    const extension = uri.split('.').pop()?.split('?')[0] || 'jpg';
    const target = new File(photosDirectory(), `${Date.now()}.${extension}`);
    new File(uri).copySync(target);
    return target.uri;
  } catch {
    return uri;
  }
}

/** Supprime une photo copiée par l'application. */
export function deletePhoto(uri: string | null): void {
  if (!uri || Platform.OS === 'web' || !uri.includes('/photos/')) return;
  try {
    const file = new File(uri);
    if (file.exists) file.delete();
  } catch {
    // La photo a déjà disparu : rien à faire.
  }
}
