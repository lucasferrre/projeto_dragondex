import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { PlanetDetails } from "../../types/api";
import { getPlanet } from "../../services/dragonBallApi";
import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";
import { colors } from "../../utils/theme";
import {
  destroyedLabel,
  translateCharacterName,
  translatePlanetName,
} from "../../utils/translations";
import { getPlanetDescriptionPt } from "../../utils/descriptions.pt";

type Props = NativeStackScreenProps<RootStackParamList, "PlanetaDetalhesScreen">;

export default function PlanetaDetalhesScreen({ route, navigation }: Props) {
  const [planet, setPlanet] = useState<PlanetDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPlanet = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      setPlanet(await getPlanet(route.params.planetId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }, [route.params.planetId]);

  useEffect(() => {
    loadPlanet();
  }, [loadPlanet]);

  if (loading) {
    return <LoadingState label="Carregando planeta..." />;
  }

  if (error || !planet) {
    return (
      <View style={styles.feedback}>
        <ErrorState
          message={error ?? "Planeta não encontrado."}
          onRetry={loadPlanet}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={{ uri: planet.image }} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.card}>
        <Text style={styles.name}>{translatePlanetName(planet.name)}</Text>
        <Text
          style={[
            styles.status,
            { color: planet.isDestroyed ? colors.danger : colors.success },
          ]}
        >
          {destroyedLabel(planet.isDestroyed)}
        </Text>

        <Text style={styles.description}>
          {getPlanetDescriptionPt(planet, planet.description)}
        </Text>
      </View>

      {!!planet.characters?.length && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personagens relacionados</Text>

          {planet.characters.map((character) => (
            <TouchableOpacity
              key={character.id}
              style={styles.characterRow}
              onPress={() =>
                navigation.navigate("PersonagemDetalhesScreen", {
                  characterId: character.id,
                })
              }
            >
              <Image
                source={{ uri: character.image }}
                style={styles.characterImage}
                resizeMode="contain"
              />
              <Text style={styles.characterName}>
                {translateCharacterName(character.name)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 18,
    paddingBottom: 30,
  },
  feedback: {
    flex: 1,
    justifyContent: "center",
    padding: 18,
    backgroundColor: colors.background,
  },
  heroImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    backgroundColor: colors.blueLight,
    marginBottom: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
    marginBottom: 12,
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
  },
  status: {
    fontWeight: "800",
    marginTop: 5,
  },
  description: {
    color: colors.textMuted,
    lineHeight: 21,
    marginTop: 12,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 8,
  },
  characterRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F0F2F5",
    paddingVertical: 8,
  },
  characterImage: {
    width: 52,
    height: 60,
  },
  characterName: {
    color: colors.text,
    fontWeight: "700",
    marginLeft: 10,
  },
});
