import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Product(){
    const {id} = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Produtos: {id}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f5f4c3"
    },
    title:{
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    }
})