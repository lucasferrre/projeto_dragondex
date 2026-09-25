import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { colors } from "../../utils/theme";

type Props = NativeStackScreenProps<RootStackParamList, "BoasVindasScreen">;

export default function BoasVindasScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require("../../../assets/sunset_goku.gif")}
        style={styles.header}
        imageStyle={styles.headerImage}
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.logo}>
            Dragon<Text style={styles.logoOrange}>Dex</Text>
          </Text>

          <Text style={styles.title}>Bem-vindo!</Text>

          <Text style={styles.subtitle}>
            Um aplicativo simples para consultar informações do universo Dragon
            Ball.
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>O que você pode fazer?</Text>

        <View style={styles.item}>
          <Ionicons name="people" size={26} color={colors.orange} />

          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Ver personagens</Text>

            <Text style={styles.itemDescription}>
              Consulte imagem, raça, gênero, Ki, afiliação e descrição.
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Ionicons name="planet" size={26} color={colors.blue} />

          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Conhecer planetas</Text>

            <Text style={styles.itemDescription}>
              Veja os planetas, suas descrições e se foram destruídos.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("PersonagensScreen")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    overflow: "hidden",
  },

  headerImage: {
    resizeMode: "cover",
  },

  headerOverlay: {
    backgroundColor: "rgba(20, 70, 150, 0.70)",
    paddingHorizontal: 24,
    paddingTop: 38,
    paddingBottom: 40,
  },

  logo: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
  },

  logoOrange: {
    color: colors.orange,
  },

  title: {
    color: "white",
    fontSize: 27,
    fontWeight: "800",
    marginTop: 28,
  },

  subtitle: {
    color: "#DCE8F8",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  content: {
    flex: 1,
    padding: 22,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 18,
  },

  item: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  itemText: {
    flex: 1,
    marginLeft: 14,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
  },

  itemDescription: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 3,
  },

  button: {
    backgroundColor: colors.orange,
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 18,
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
  },
});
