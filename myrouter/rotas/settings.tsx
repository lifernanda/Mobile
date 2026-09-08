import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagina de Configurações</Text>
        </View>
        
  )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a0d4f5"
    },
    title:{
        fontSize: 36,
        color: "#110e44"
    }
})