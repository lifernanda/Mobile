import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface HeroCardProps {
  nome: string;
  classe: string;
}

export default function HeroCard({ nome, classe }: HeroCardProps) {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  return (
    <View style={styles.card}>
        <Image
        source={require("../app/assets/djavan.png")}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.classe}>Classe: {classe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#a7e0e8",
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#16576a",
    borderLeftWidth: 5,
    borderLeftColor: "#160f73",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5
  },

  nome: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#3b7cd7"
  },

  classe: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    marginTop: 5,
    color: "#146464"
  },

   avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#2430b7",
    marginRight: 14
  }
});