import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {router} from 'expo-router'
export default function Produtos(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Produtos</Text>
            <TouchableOpacity style={styles.button} 
               onPress={() => router.back()}
               >
                <Text style = {styles.textButton}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
               onPress={() => router.navigate ({pathname: '/product/[id]',
               params: {id: 1}})}
               >
             <Text style = {styles.textButton}>Abrir o Produto</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:   "#f5e9d0",
        gap: 32
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        color: "rgb(254, 85, 113)"
    },
    button: {
        backgroundColor: "rgb(247, 190, 210)",
        borderRadius:10,
        paddingHorizontal: 20,
        paddingVertical:10
    },
    textButton:{
       color: "rgb(241, 110, 132)",
       fontSize: 18,
       fontWeight: "bold"
    }

})