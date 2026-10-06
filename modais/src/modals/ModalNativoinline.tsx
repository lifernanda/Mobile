import { BotaoCustomizado } from "@/components/BotaoCustomizado";
import { Modal, StyleSheet, View, Text } from "react-native";

interface ModalNativoInlineProps{
    visivel: boolean;
    aoFechar: () => void;
}

export function ModalNativoInline({visivel, aoFechar}: ModalNativoInlineProps){ 
    return(
        <Modal 
            animationType="fade"
            transparent={true}
            visible={visivel}
            onRequestClose={aoFechar}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Modal Nativo Inline</Text>
                    <Text style={styles.modalText}>
                       Controlado por estado local
                       <Text style={{fontWeight: "bold"}}>useState.</Text>
                        Ótimo para diálogos de confirmação rápidos
                    </Text>

                    <BotaoCustomizado
                        title="Fechar Modal"
                        corFundo="#050a65"
                        onPress={aoFechar}
                    />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20
    },
    modalContent:{
        backgroundColor: "#f1f39f",
        padding: 24,
        borderRadius: 16,
        alignItems: "center",
        width: "100%"
    },
    modalTitle:{
        fontSize: 20,
        marginBottom: 8,
        color: "#000000"
    },
    modalText:{
        fontSize: 14,
        color: "#6b7280",
        textAlign: "center",
        marginBottom: 20,
    },

})