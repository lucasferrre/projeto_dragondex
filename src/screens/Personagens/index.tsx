import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { Character } from "../../types/api";
import { getCharacters } from "../../services/dragonBallApi";
import AppHeader from "../../components/AppHeader";
import SearchBox from "../../components/SearchBox";
import SectionSwitcher from "../../components/SectionSwitcher";
import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";
import { colors } from "../../utils/theme";
import {
  translateAffiliation,
  translateCharacterName,
  translateGender,
  translateRace,
} from "../../utils/translations";

type Props = NativeStackScreenProps<RootStackParamList, "PersonagensScreen">;

const suggestions = ["Goku", "Vegeta", "Gohan", "Freeza"];

export default function PersonagensScreen({ navigation }: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      setCharacters(await getCharacters());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  const filteredCharacters = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return characters;

    return characters.filter((character) => {
      const originalName = character.name.toLowerCase();
      const portugueseName = translateCharacterName(character.name).toLowerCase();

      return originalName.includes(search) || portugueseName.includes(search);
    });
  }, [characters, query]);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={filteredCharacters}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <AppHeader
              subtitle="Personagens e planetas de Dragon Ball"
              onHome={() => navigation.navigate("BoasVindasScreen")}
            />

            <View style={styles.pagePadding}>
              <SearchBox
                value={query}
                onChangeText={setQuery}
                placeholder="Pesquisar personagem..."
              />

              <SectionSwitcher
                active="characters"
                onCharacters={() => undefined}
                onPlanets={() => navigation.replace("PlanetasScreen")}
              />

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Sugestões</Text>
                <TouchableOpacity onPress={() => setQuery("")}>
                  <Text style={styles.showAll}>Ver todos</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.chips}>
                {suggestions.map((name) => (
                  <TouchableOpacity
                    key={name}
                    style={styles.chip}
                    onPress={() => setQuery(name)}
                  >
                    <Text style={styles.chipText}>{name}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {loading && <LoadingState label="Buscando personagens..." />}
              {error && <ErrorState message={error} onRetry={loadCharacters} />}

              {!loading && !error && filteredCharacters.length === 0 && (
                <Text style={styles.emptyText}>Nenhum personagem encontrado.</Text>
              )}
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.88}
              onPress={() =>
                navigation.navigate("PersonagemDetalhesScreen", {
                  characterId: item.id,
                })
              }
            >
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.name}>{translateCharacterName(item.name)}</Text>
                <Info label="Raça" value={translateRace(item.race)} />
                <Info label="Gênero" value={translateGender(item.gender)} />
                <Info label="Ki" value={item.ki} />
                <Info label="Afiliação" value={translateAffiliation(item.affiliation)} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 28,
  },
  pagePadding: {
    paddingHorizontal: 18,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 18,
  },
  showAll: {
    color: colors.blue,
    fontWeight: "700",
    fontSize: 13,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 8,
  },
  chip: {
    backgroundColor: colors.orangeLight,
    borderRadius: 16,
    paddingHorizontal: 13,
    paddingVertical: 7,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    color: colors.orangeDark,
    fontWeight: "700",
  },
  cardWrapper: {
    paddingHorizontal: 18,
    marginTop: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    flexDirection: "row",
    minHeight: 182,
  },
  imageBox: {
    width: 132,
    backgroundColor: colors.blueLight,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: 125,
    height: 170,
  },
  cardBody: {
    flex: 1,
    padding: 15,
  },
  name: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 21,
    marginBottom: 8,
  },
  infoRow: {
    marginBottom: 7,
  },
  infoLabel: {
    color: colors.textMuted,
    fontSize: 11,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  infoValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },
  emptyText: {
    textAlign: "center",
    color: colors.textMuted,
    paddingVertical: 40,
  },
});
