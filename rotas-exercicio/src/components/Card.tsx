import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { ImageSourcePropType } from "react-native";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

type CardProps = {
  nome: string;
  imagem: ImageSourcePropType;
  showPlay?: boolean;
  audio?: any;
};

export default function Card({
  nome,
  imagem,
  showPlay = false,
  audio,
}: CardProps) {

  const player = useAudioPlayer(audio);
  const status = useAudioPlayerStatus(player);

  function tocarMusica() {
    if (status.playing) {
      player.pause();
    } else {
      player.play();
    }
  }

  return (
    <View style={styles.card}>

      <View style={styles.areaInfo}>

        <Text style={styles.nome}>
          {nome}
        </Text>

        {showPlay && (
          <View style={styles.icones}>
            <Pressable onPress={tocarMusica}>
              <MaterialIcons
                name={status.playing ? "pause" : "play-arrow"}
                size={30}
                color="#ecebff"
              />
            </Pressable>
          </View>
        )}

      </View>

      <Image
        source={imagem}
        style={styles.imagem}
        resizeMode="cover"
      />

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    width: "100%",
    height: 180,
    backgroundColor: "#000000",
    borderRadius: 12,
    flexDirection: "row",
    overflow: "hidden",
  },

  areaInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },

  nome: {
    color: "#efefff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  icones: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },

  imagem: {
    width: "45%",
    height: "100%",
  },

});