import { ScrollView, StyleSheet, View } from "react-native";
import Card from "@/components/Card";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cantores() {
  const cantores = [
    {
      nome: "Rita Lee",
      imagem: require("@/assets/images/cantor1.png"),
    },
    {
      nome: "Elis Regina",
      imagem: require("@/assets/images/cantor2.png"),
    },
    {
      nome: "Djavan",
      imagem: require("@/assets/images/cantor3.png"),
    },
    {
      nome: "Tribalistas",
      imagem: require("@/assets/images/cantor4.png"),
    },
    {
      nome: "Caetano Veloso",
      imagem: require("@/assets/images/cantor5.png"),
    },
    {
      nome: "Cazuza",
      imagem: require("@/assets/images/cantor6.png"),
    },
    {
      nome: "Cassia Eller",
      imagem: require("@/assets/images/cantor7.png"),
    },
    {
      nome: "Gal Costa",
      imagem: require("@/assets/images/cantor8.png"),
    },
    {
      nome: "Chico Buarque",
      imagem: require("@/assets/images/cantor9.png"),
    },
    {
      nome: "Milton Nascimento",
      imagem: require("@/assets/images/cantor10.png"),
    },
    {
      nome: "Maria Bethania",
      imagem: require("@/assets/images/cantor11.png"),
    },
    {
      nome: "Gilberto Gil",
      imagem: require("@/assets/images/cantor12.png"),
    },
    {
      nome: "Legiao Urbana",
      imagem: require("@/assets/images/cantor13.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.container}>
          <View style={styles.lista}>
            {cantores.map((cantor, index) => (
              <Card
                key={index}
                nome={cantor.nome}
                imagem={cantor.imagem}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#f8f5b7",
  },

  lista: {
    padding: 20,
    gap: 12,
  },
});