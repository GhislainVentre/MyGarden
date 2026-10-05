import { Directory, File, Paths } from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

const PICKER_OPTIONS: ImagePicker.ImagePickerOptions = {
  mediaTypes: ['images'],
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.7,
};

const PHOTOS_DIR = 'photos';

export type PhotoSource = 'camera' | 'library';

export type PhotoResult = { uri: string } | { error: string } | null;

/** Ouvre l'appareil photo ou la galerie. Renvoie null si l'utilisateur annule. */
export async function pickPhoto(source: PhotoSource): Promise<PhotoResult> {
  const permission =
    source === 'camera'
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted && !permission.canAskAgain) {
    return {
      error:
        source === 'camera'
          ? "L'accès à l'appareil photo a été refusé. Autorisez-le dans les réglages du téléphone."
          : "L'accès aux photos a été refusé. Autorisez-le dans les réglages du téléphone.",
    };
  }
  let result: ImagePicker.ImagePickerResult;
  try {
    result =
      source === 'camera'
        ? await ImagePicker.launchCameraAsync(PICKER_OPTIONS)
        : await ImagePicker.launchImageLibraryAsync(PICKER_OPTIONS);
  } catch {
    return { error: "Impossible d'ouvrir la photo. Réessayez." };
  }
  if (result.canceled || result.assets.length === 0) return null;
  return { uri: persistPhoto(result.assets[0].uri) };
}

function photosDirectory(): Directory {
  const dir = new Directory(Paths.document, PHOTOS_DIR);
  dir.create({ idempotent: true, intermediates: true });
  return dir;
}

/**
 * Copie la photo dans le dossier documents de l'application (les fichiers du
 * sélecteur sont temporaires) et renvoie un chemin relatif `photos/<nom>` :
 * le dossier documents peut changer d'emplacement à la mise à jour de l'app.
 */
function persistPhoto(uri: string): string {
  if (Platform.OS === 'web') return uri;
  try {
    const match = /\.(jpe?g|png|webp|heic|gif)$/i.exec(uri.split('?')[0]);
    const extension = match ? match[1].toLowerCase() : 'jpg';
    const name = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}.${extension}`;
    const target = new File(photosDirectory(), name);
    new File(uri).copySync(target);
    return `${PHOTOS_DIR}/${name}`;
  } catch {
    return uri;
  }
}

function isManaged(uri: string): boolean {
  return uri.startsWith(`${PHOTOS_DIR}/`) || uri.includes(`/${PHOTOS_DIR}/`);
}

/** Transforme le chemin enregistré en URI affichable par <Image>. */
export function resolvePhotoUri(uri: string | null): string | null {
  if (!uri) return null;
  if (Platform.OS === 'web' || !uri.startsWith(`${PHOTOS_DIR}/`)) return uri;
  try {
    return new File(Paths.document, uri).uri;
  } catch {
    return null;
  }
}

/** Supprime une photo copiée par l'application. */
export function deletePhoto(uri: string | null): void {
  if (!uri || Platform.OS === 'web' || !isManaged(uri)) return;
  try {
    const file = uri.startsWith(`${PHOTOS_DIR}/`) ? new File(Paths.document, uri) : new File(uri);
    if (file.exists) file.delete();
  } catch {
    // La photo a déjà disparu : rien à faire.
  }
}
