import { forwardRef, useMemo } from "react";
import  BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet"
import { Text, StyleSheet } from "react-native";
import { BotaoCustomizado } from "@/components/BotaoCustomizado"
import { Color } from "expo-router";

interface ModalBottomSheetsProps{
    aoFechar: () => void;
}

export const ModalBottomSheet = forwardRef<BottomSheet,ModalBottomSheetsProps>(({aoFechar}, ref) =>{
    const snapPoints = useMemo(() => ['25%, 50%'], []);

    return(
        <BottomSheet
            ref={ref}
            index={-1} //Começa fechado
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={(index) => {
                if (index === -1) aoFechar()
            }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.title}>Bottom Sheet - Modal Biblioteca Externa</Text>
                <Text style={styles.text}>
                    Desliza colado na parte inferior da tela responde a gestos táteis de arrastar e Fechar
                    <Text style={{fontWeight: "bold"}}>Swipe to Dismiss</Text>
                </Text>
                <BotaoCustomizado
                    title="Fechar Painel"
                   corFundo="#050a65"
                    onPress={aoFechar}
                />
            </BottomSheetView>
        </BottomSheet>
    )
})

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
    title:{
        fontSize: 18,
        color: "#111827",
        marginBottom: 8,
    },
    text:{
        fontSize: 14,
        color: "#4b5563",
        textAlign: "center",
        marginBottom: 20,
    }
})