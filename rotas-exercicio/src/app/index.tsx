import { router } from "expo-router";
import { Image,StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

   return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/fotoritacapa.jpg")}
        style={styles.background}
        resizeMode="cover"
      />

   <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.7}>
           <Text style={styles.title}>
            Conheça os principais nomes do MPB
            </Text>
        </TouchableOpacity>
      </View>

    <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.7}
        onPress={() => router.navigate("/(drawer)/(tabs)/cantores")}
        >
           <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "128%",
        height: "130%"
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
      content: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        transform: [{ translateY: 170 }]
    },
    title: {
        fontSize: 22,
        fontFamily: "CaacupeOne_400Regular",
        color: "#091279",
    },
     button: {
        fontSize: 22,
        fontFamily: "CaacupeOne_400Regular",
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: "#01455a",
        borderRadius: 14,
        color: "#94e7f1"
  }
      
});