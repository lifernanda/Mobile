import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { router } from "expo-router"
import { DrawerToggleButton } from "expo-router/drawer"


export default function Index(){
    function signUp(){
        router.navigate("/sign-up")
    }
    return(
        <View style={styles.container}>  
            <View style={styles.header}>
                <DrawerToggleButton />
            </View>
            <View style={styles.containerBotao}>
                <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={signUp}
            >
            <Text style={styles.title}>Entrar</Text>
            </TouchableOpacity>

            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        backgroundColor: "#a0d4f5",
        gap: 40,
        padding: 40
    },
    header:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end"
    },
    containerBotao:{
        flex: 1,
        justifyContent: "center"
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
        borderRadius: 10,
    },
   
})

