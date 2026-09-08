import { StyleSheet, Text, View } from "react-native";

export default function Order(){
    return(
        <View style={styles.container}> 
            <Text style={styles.title}> Itens do Pedido
            </ Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5e9d0" 
    },
    title:{
        fontSize: 22,
        fontWeight: "bold"
    }
})