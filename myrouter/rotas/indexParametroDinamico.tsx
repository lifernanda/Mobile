import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {Link, router } from "expo-router"


export default function Index(){
    function signUp(){
        router.navigate("/sign-up")
    }
    return(
        <View style={styles.container}>  
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={signUp}
            >
            <Text style={styles.title}>Entrar</Text>
            </TouchableOpacity>

            <Link href={{ pathname: "/usuario/[id]", params: {name: "Livia", id:4}}}style={styles.parametro}>
                Enviar Parâmetro
            </Link>

        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#88c7ef",
        gap: 40,

    },
    title:{
        fontSize:32,
        fontWeight: "bold",
        color: "#ffffff"

    },
    button:{
        backgroundColor:"#110e44",
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10
    },
    parametro:{
        fontSize: 22,
        color:"#fff",
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor:"#110e44",

    }
})

