import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "../utils/theme";

type Props = {
  subtitle: string;
  onHome: () => void;
};

export default function AppHeader({ subtitle, onHome }: Props) {
  return (
    <ImageBackground
      source={require("../../assets/goku_transformation.gif")}
      style={styles.header}
      imageStyle={styles.headerImage}
    >
      <View style={styles.overlay}>
        <View style={styles.topRow}>
          <Text style={styles.logo}>
            Dragon<Text style={styles.logoOrange}>Dex</Text>
          </Text>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={onHome}
            activeOpacity={0.8}
          >
            <Ionicons name="home" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },

  headerImage: {
    resizeMode: "cover",
  },

  overlay: {
    backgroundColor: "rgba(20, 70, 150, 0.75)",
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
  },

  logoOrange: {
    color: colors.orange,
  },

  homeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  subtitle: {
    color: "#DCE8F8",
    fontSize: 13,
    marginTop: 8,
  },
});