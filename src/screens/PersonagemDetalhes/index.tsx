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
import { CharacterDetails } from "../../types/api";
import { getCharacter } from "../../services/dragonBallApi";
import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";
import { colors } from "../../utils/theme";
import { getCharacterDescriptionPt } from "../../utils/descriptions.pt";
import {
  translateAffiliation,
  translateCharacterName,
  translateGender,
  translatePlanetName,
  translateRace,
} from "../../utils/translations";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "PersonagemDetalhesScreen"
>;

export default function PersonagemDetalhesScreen({ route, navigation }: Props) {
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCharacter = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      setCharacter(await getCharacter(route.params.characterId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }, [route.params.characterId]);

  useEffect(() => {
    loadCharacter();
  }, [loadCharacter]);

  if (loading) {
    return <LoadingState label="Carregando personagem..." />;
  }

  if (error || !character) {
    return (
      <View style={styles.feedback}>
        <ErrorState
          message={error ?? "Personagem não encontrado."}
          onRetry={loadCharacter}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.mainCard}>
        <Image
          source={{ uri: character.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>
          {translateCharacterName(character.name)}
        </Text>
        <Text style={styles.race}>{translateRace(character.race)}</Text>
      </View>

      <View style={styles.infoCard}>
        <Info label="Gênero" value={translateGender(character.gender)} />
        <Info label="Ki" value={character.ki} />
        <Info label="Ki máximo" value={character.maxKi} />
        <Info
          label="Afiliação"
          value={translateAffiliation(character.affiliation)}
        />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>
          {getCharacterDescriptionPt(character, character.description)}
        </Text>
      </View>

      {character.originPlanet && (
        <TouchableOpacity
          style={styles.infoCard}
          onPress={() =>
            navigation.navigate("PlanetaDetalhesScreen", {
              planetId: character.originPlanet!.id,
            })
          }
        >
          <Text style={styles.sectionTitle}>Planeta de origem</Text>
          <View style={styles.planetRow}>
            <Image
              source={{ uri: character.originPlanet.image }}
              style={styles.planetImage}
            />
            <View style={styles.planetText}>
              <Text style={styles.planetName}>
                {translatePlanetName(character.originPlanet.name)}
              </Text>
              <Text style={styles.linkText}>Ver planeta</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
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
  mainCard: {
    backgroundColor: colors.blue,
    borderRadius: 14,
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 18,
    marginBottom: 12,
  },
  image: {
    width: 220,
    height: 260,
  },
  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
  },
  race: {
    color: "#DCE8F8",
    marginTop: 4,
    fontWeight: "700",
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F2F5",
  },
  infoLabel: {
    color: colors.textMuted,
    fontWeight: "700",
  },
  infoValue: {
    color: colors.text,
    fontWeight: "800",
    maxWidth: "60%",
    textAlign: "right",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 9,
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  planetRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  planetImage: {
    width: 65,
    height: 65,
    borderRadius: 8,
    backgroundColor: colors.blueLight,
  },
  planetText: {
    marginLeft: 12,
  },
  planetName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
  },
  linkText: {
    color: colors.orange,
    marginTop: 3,
    fontSize: 12,
    fontWeight: "700",
  },
});
