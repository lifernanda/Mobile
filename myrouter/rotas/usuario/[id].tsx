import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { useLocalSearchParams, router} from "expo-router"

export default function Usuario(){
    const {id} = useLocalSearchParams()
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                ID do Usuario: {id}
            </Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.back()}
                >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#88c7ef",
        gap: 32
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color:"#110e44"
    },
    button:{
        backgroundColor:"#110e44",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 22,
        color:"#fff",
        fontWeight: "bold"
    }
})