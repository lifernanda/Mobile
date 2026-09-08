import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import {router, useLocalSearchParams} from "expo-router"

export default function SignUp(){
    const {name, id} = useLocalSearchParams()

    function back(){
        if(!router.canGoBack()){
            return Alert.alert("Não é possivel voltar!")
        }
        router.back();
    }
    return(
        <View style={styles.container}>
            <Text style={styles.parametro}>{id} - {name}</Text>
            <Text style={styles.title}>Criar Conta</Text>
            <TouchableOpacity onPress={back}>
                <Text>voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a0d4f5"
    },
    parametro:{
        fontSize: 28,
        color:"#fff",
        fontWeight: "bold"
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        color:"#110e44"
    },
    back:{
        fontSize: 20,
    }
  
})