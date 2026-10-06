import { BotaoCustomizado } from "@/components/BotaoCustomizado";
import { Modal, StyleSheet, View, Text } from "react-native";

interface ModalNativoProps{
    visivel: boolean;
    aoFechar: () => void;
}

export function ModalNativo({visivel, aoFechar}: ModalNativoProps){ 
    return(
        <Modal 
            animationType="slide"
            transparent={true}
            visible={visivel}
            onRequestClose={aoFechar}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Modal Nativo Isolado</Text>
                    <Text style={styles.modalText}>
                        Este componente encapsula a lógica de exibição
                        de um modal padrão do React Native
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
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent:{
        backgroundColor: "#f1f39f",
        padding: 24,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        minHeight: 220,
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