import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from "react-native"

type ButtonProps = TouchableOpacityProps & {
    label: string
}

export function Button({label,...rest}: ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.8}
        {...rest}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:48,
        backgroundColor: "#9b8346e4",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    label:{
        color: "#fff",
        fontSize: 16,
        fontWeight: 600
    }
})