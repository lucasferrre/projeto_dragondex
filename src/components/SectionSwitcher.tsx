import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/theme";

type Props = {
  active: "characters" | "planets";
  onCharacters: () => void;
  onPlanets: () => void;
};

export default function SectionSwitcher({ active, onCharacters, onPlanets }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, active === "characters" && styles.activeButton]}
        onPress={onCharacters}
      >
        <Text style={[styles.text, active === "characters" && styles.activeText]}>
          Personagens
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, active === "planets" && styles.activeButton]}
        onPress={onPlanets}
      >
        <Text style={[styles.text, active === "planets" && styles.activeText]}>
          Planetas
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18,
  },
  button: {
    flex: 1,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeButton: {
    backgroundColor: colors.orange,
    borderColor: colors.orange,
  },
  text: {
    color: colors.textMuted,
    fontWeight: "700",
  },
  activeText: {
    color: "white",
  },
});
