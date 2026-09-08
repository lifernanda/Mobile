import { ScrollView, StyleSheet, View } from "react-native";
import Card from "@/components/Card";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Musicas() {

  const musicas = [
    {
      nome: "Mania de Você",
      imagem: require("@/assets/images/musica1.png"),
      audio: require("@/assets/audios/maniadevoce.mp3"),
    },

    {
      nome: "Como Nossos Pais",
      imagem: require("@/assets/images/musica2.png"),
      audio: require("@/assets/audios/comonossospais.mp3"),
    },

    {
      nome: "Samurai",
      imagem: require("@/assets/images/musica3.png"),
      audio: require("@/assets/audios/samurai.mp3"),
    },

    {
      nome: "Aliança",
      imagem: require("@/assets/images/musica4.png"),
      audio: require("@/assets/audios/alianca.mp3"),
    },
    {
      nome: "Sozinho",
      imagem: require("@/assets/images/musica5.png"),
      audio: require("@/assets/audios/sozinho.mp3"),
    },
    {
      nome: "O Tempo Não Para",
      imagem: require("@/assets/images/musica6.png"),
      audio: require("@/assets/audios/otemponaopara.mp3"),
    },
    {
      nome: "All Star",
      imagem: require("@/assets/images/musica7.png"),
      audio: require("@/assets/audios/all-star.mp3"),
    },
    {
      nome: "Palavras no Corpo",
      imagem: require("@/assets/images/musica8.png"),
      audio: require("@/assets/audios/palavrasnocorpo.mp3"),
    },
    {
      nome: "João e Maria",
      imagem: require("@/assets/images/musica9.png"),
      audio: require("@/assets/audios/joaoEmaria.mp3"),
    },
    {
      nome: "Tudo O Que Você Podia Ser",
      imagem: require("@/assets/images/musica10.png"),
      audio: require("@/assets/audios/tudooquevocepodiaser.mp3"),
    },
    {
      nome: "Olha",
      imagem: require("@/assets/images/musica11.png"),
      audio: require("@/assets/audios/olha.mp3"),
    },
    {
      nome: "Palco",
      imagem: require("@/assets/images/musica12.png"),
      audio: require("@/assets/audios/palco.mp3"),
    },
    {
      nome: "Geracao Coca-Cola",
      imagem: require("@/assets/images/musica13.png"),
      audio: require("@/assets/audios/geracaocolacola.mp3")
    }
 ];

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.lista}>

          {musicas.map((musica, index) => (
            <Card
              key={index}
              nome={musica.nome}
              imagem={musica.imagem}
              audio={musica.audio}
              showPlay={true}
            />
          ))}

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
     backgroundColor: "#f8f5b7",
  },

  scroll: {
    flexGrow: 1,
  },

  lista: {
    padding: 20,
    gap: 12,
  },

});