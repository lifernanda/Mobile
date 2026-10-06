import { BotaoCustomizado } from "@/components/BotaoCustomizado";
import { useRouter } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function ModalCadadtroScreen(){
    const router = useRouter()
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Rota Modal</Text>
            <Text style={styles.subTitle}>Esta tela é tratada pelo Expo Router como uma pilha
             modal deslizante graças ao parâmetro le RootLayout
            </Text>

                <BotaoCustomizado
                title="Salvar e Fechar"
                corFundo="#03b1dc"
                onPress={() => router.back()}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050e2b",
        padding: 24
    },
    title:{
        fontSize: 26,
        color: "#FFF2B2",
        marginBottom: 4,
        textAlign: "center"
    },
    subTitle:{
        fontSize: 15,
        color: "#f8fafd",
        marginBottom: 32,
        textAlign: "center"
    }
})