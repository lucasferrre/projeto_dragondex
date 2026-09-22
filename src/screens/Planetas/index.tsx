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
import { Planet } from "../../types/api";
import { getPlanets } from "../../services/dragonBallApi";
import AppHeader from "../../components/AppHeader";
import SearchBox from "../../components/SearchBox";
import SectionSwitcher from "../../components/SectionSwitcher";
import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";
import { colors } from "../../utils/theme";
import {
  destroyedLabel,
  translatePlanetName,
} from "../../utils/translations";
import { getPlanetDescriptionPt } from "../../utils/descriptions.pt";

type Props = NativeStackScreenProps<RootStackParamList, "PlanetasScreen">;

export default function PlanetasScreen({ navigation }: Props) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPlanets = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      setPlanets(await getPlanets());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPlanets();
  }, [loadPlanets]);

  const filteredPlanets = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return planets;

    return planets.filter((planet) => {
      const originalName = planet.name.toLowerCase();
      const portugueseName = translatePlanetName(planet.name).toLowerCase();

      return originalName.includes(search) || portugueseName.includes(search);
    });
  }, [planets, query]);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={filteredPlanets}
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
                placeholder="Pesquisar planeta..."
              />

              <SectionSwitcher
                active="planets"
                onCharacters={() => navigation.replace("PersonagensScreen")}
                onPlanets={() => undefined}
              />

              <Text style={styles.title}>Planetas</Text>

              {loading && <LoadingState label="Buscando planetas..." />}
              {error && <ErrorState message={error} onRetry={loadPlanets} />}

              {!loading && !error && filteredPlanets.length === 0 && (
                <Text style={styles.empty}>Nenhum planeta encontrado.</Text>
              )}
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("PlanetaDetalhesScreen", {
                planetId: item.id,
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

            <View style={styles.cardText}>
              <Text style={styles.name}>{translatePlanetName(item.name)}</Text>
              <Text style={styles.description} numberOfLines={3}>
                {getPlanetDescriptionPt(item, item.description)}
              </Text>
              <Text
                style={[
                  styles.status,
                  { color: item.isDestroyed ? colors.danger : colors.success },
                ]}
              >
                {destroyedLabel(item.isDestroyed)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
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
  title: {
    color: colors.text,
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 4,
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    marginHorizontal: 18,
    marginTop: 12,
    overflow: "hidden",
    flexDirection: "row",
  },
  image: {
    width: 120,
    minHeight: 135,
    backgroundColor: colors.blueLight,
  },
  cardText: {
    flex: 1,
    padding: 13,
  },
  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800",
  },
  description: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 6,
  },
  status: {
    fontSize: 12,
    fontWeight: "800",
    marginTop: 10,
  },
  empty: {
    textAlign: "center",
    color: colors.textMuted,
    paddingVertical: 40,
  },
});
