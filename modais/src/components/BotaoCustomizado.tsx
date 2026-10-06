import { Pressable, StyleSheet, Text } from "react-native";

interface BotaoCustomizadoProps{
    title: string;
    corFundo: string;
    onPress: () => void;
}

export function BotaoCustomizado({title, corFundo='#eaf58f', onPress}
    :BotaoCustomizadoProps){
    return(
        <Pressable 
            style={[styles.button, {backgroundColor: corFundo}]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        marginVertical: 6
    },
    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
})