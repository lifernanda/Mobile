import {Slot} from "expo-router"
import { StyleSheet, View } from "react-native"

export default function Layout(){
    return(
         <View style={styles.container}>
            <View style={styles.header}/>
             <Slot />
             <View style={styles.footer}></View>
         </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width: "100%",
        height: 80,
        backgroundColor: "#8dcceb"
    },
    footer:{
        width: "100%",
        height: 50,
        backgroundColor: "#8dcceb"
    }
})