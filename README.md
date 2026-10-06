# MyGarden 🌱

Application mobile (iOS, Android et web) pour enregistrer ses plantes avec une photo et retrouver toutes les informations nécessaires à leur entretien.

## Fonctionnalités

- **Mes plantes** : liste de vos plantes avec photo, emplacement et état de l’arrosage, triée pour afficher en premier celles qui ont soif.
- **Ajout d’une plante** : photo prise avec l’appareil ou choisie dans la galerie, espèce choisie dans l’encyclopédie, nom, emplacement, date du dernier arrosage, fréquence personnalisée et notes.
- **Fiche de la plante** : suivi de l’arrosage (bouton « J’ai arrosé aujourd’hui »), prochaine échéance calculée selon la saison, et fiche d’entretien complète.
- **Encyclopédie** : plus de 500 plantes (intérieur et tropicales, bananiers et palmiers, succulentes, aromatiques, jardin, potager et fruitiers) avec arrosage été/hiver, lumière, température, humidité, terre, engrais, rempotage, taille, toxicité pour les animaux et problèmes fréquents.

Les données restent sur le téléphone (AsyncStorage) et les photos sont copiées dans le dossier de l’application.

## Design

- Palette « jardin » : fond sable (`#F5F1E8`), vert forêt (`#2B5A3C`), touches d’eau, de soleil et de terre cuite pour les états d’arrosage.
- Typographies : **Fraunces** pour les titres, **Nunito** pour le texte (chargées via `expo-font`).
- Icônes Ionicons (`@expo/vector-icons`), dégradés `expo-linear-gradient`, icône et écran de démarrage dessinés dans `assets/`.
- Les couleurs, espacements, rayons, ombres et styles de texte sont centralisés dans `src/theme.ts` ; les briques réutilisables (boutons, pastilles, champ de recherche, photo, badge d’arrosage) sont dans `src/components/`.

## Démarrer

```bash
npm install
npm start        # puis scanner le QR code avec Expo Go, ou touche a / i / w
```

## Vérifications

```bash
npm run lint
npm run typecheck
npm test
```

## Structure

- `src/app/` : écrans (Expo Router)
- `src/components/` : composants d’interface (fiche d’entretien, formulaire, sélecteur d’espèce…)
- `src/data/species.ts` : base d’entretien des plantes
- `src/lib/care.ts` : calcul des arrosages et recherche
- `src/lib/photos.ts` : prise et stockage des photos
- `src/context/GardenContext.tsx` et `src/storage/` : état et persistance des plantes

## Installer l’APK Android

Chaque push sur `main` (et chaque PR) lance le workflow **Android APK**, qui compile l’application et publie l’APK comme artefact `MyGarden-apk` dans l’onglet *Actions* de GitHub. Téléchargez-le, décompressez le zip et ouvrez le fichier `.apk` sur le téléphone (autoriser l’installation d’applications de sources inconnues).

L’APK est signé avec une clé de debug : il convient pour tester, pas pour une publication sur le Play Store.
