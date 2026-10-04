import { router, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

import { PlantForm } from '../../../components/PlantForm';
import { useGarden } from '../../../context/GardenContext';

export default function EditPlantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { plants, updatePlant } = useGarden();
  const plant = plants.find((p) => p.id === id);

  if (!plant) return <Text style={{ padding: 24 }}>Plante introuvable.</Text>;

  return (
    <PlantForm
      initial={plant}
      submitLabel="Enregistrer les modifications"
      onSubmit={(changes) => {
        updatePlant(plant.id, changes);
        router.back();
      }}
    />
  );
}
