import { router } from 'expo-router';

import { PlantForm } from '../../components/PlantForm';
import { useGarden } from '../../context/GardenContext';

export default function NewPlantScreen() {
  const { addPlant } = useGarden();
  return (
    <PlantForm
      submitLabel="Enregistrer la plante"
      onSubmit={(plant) => {
        const created = addPlant(plant);
        router.replace({ pathname: '/plant/[id]', params: { id: created.id } });
      }}
    />
  );
}
