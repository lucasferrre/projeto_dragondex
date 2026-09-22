import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/theme";

export default function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Não foi possível carregar</Text>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#FFF5F5", borderColor: "#F3CACA", borderWidth: 1, borderRadius: 16, padding: 18, gap: 8 },
  title: { color: colors.danger, fontWeight: "800", fontSize: 16 },
  text: { color: colors.textMuted, lineHeight: 20 },
  button: { alignSelf: "flex-start", marginTop: 4, backgroundColor: colors.danger, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10 },
  buttonText: { color: "white", fontWeight: "700" },
});
