import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SplashScreen } from "expo-router";
import CustomModal from "../components/CustomModal";
import HeroCard from "../components/HeroCard";

interface Hero {
  id: string;
  nome: string;
  classe: string;
}

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const [herois, setHerois] = useState<Hero[]>([]);

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

  function adicionarHeroi(nome: string, classe: string) {
    const novoHeroi: Hero = {
      id: Date.now().toString(),
      nome: nome,
      classe: classe,
    };

    setHerois((listaAtual) => [...listaAtual, novoHeroi]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criador de Heróis</Text>

      <View style={styles.cardFixo}>
  <Image
    source={require("../app/assets/fundo.jpg")}
    style={styles.imagemCard}
  />

  <Text style={styles.tituloCard}>
    Está Prepadado(a)?!
  </Text>
  <Text style={styles.textoCard}>
    Recrute seus heróis e monte seu time.
  </Text>

</View>

      {herois.length === 0 ? (
        <Text style={styles.vazio}>Nenhum herói cadastrado ainda.</Text>
      ) : (
        <FlatList
        style={styles.lista}
          data={herois}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HeroCard nome={item.nome} classe={item.classe} />
          )}
        />
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textoBotao}>Criar Herói</Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={adicionarHeroi}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#a4c6de"
  },

  titulo: {
    fontFamily: "Poppins_700Bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 25,
    color: "#2F4156"
  },

  vazio: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginTop: 30,
    color: "#8A176E"
  },

  botao: {
    backgroundColor: "#162364",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 14,
    shadowColor: "#162364",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8
  },

  textoBotao: {
    color: "#fffbfe",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    letterSpacing: 0.5
  },
  lista: {
   flexGrow: 0,
  maxHeight: 250
},

  cardFixo: {
  backgroundColor: "#C8D9E6",
  borderRadius: 18,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "#162364",
  borderBottomWidth: 3,
  borderBottomColor: "#297b83",
  shadowColor: "#f2ced2",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 12,
  elevation: 6,
},

imagemCard: {
  width: "100%",
  height: 130,
},

cardTexto: {
  padding: 16,
  alignItems: "center",
},

tituloCard: {
  fontFamily: "Poppins_700Bold",
  fontSize: 25,
  marginTop: 8,
  color: "#4969c8",
  textAlign: "center",
},

textoCard: {
  fontFamily: "Poppins",
  fontSize: 16,
  color: "#62a3e9",
  textAlign: "center",
  marginTop: 2,
  paddingBottom: 20,
},


});