import { View, Text, StyleSheet } from "react-native"

export default function Configs() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Configurações
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:   "#f5e9d0"
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        color: "#c21f4e"
    }
})