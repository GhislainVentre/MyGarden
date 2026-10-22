import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../components/Button';
import { PlantForm } from '../../../components/PlantForm';
import { useGarden } from '../../../context/GardenContext';
import { goBack } from '../../../lib/navigation';
import { colors, spacing, type } from '../../../theme';

export default function EditPlantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { plants, loading, updatePlant } = useGarden();
  const plant = plants.find((p) => p.id === id);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  if (!plant) {
    return (
      <View style={styles.center}>
        <Text style={type.body}>Cette plante n’existe plus.</Text>
        <Button label="Retour au jardin" icon="arrow-back" variant="secondary" onPress={goBack} />
      </View>
    );
  }

  return (
    <PlantForm
      initial={plant}
      submitLabel="Enregistrer les modifications"
      onSubmit={(changes) => {
        updatePlant(plant.id, changes);
        goBack();
      }}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.lg, padding: spacing.xl },
});
