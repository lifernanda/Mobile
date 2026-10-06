import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SplashScreen } from "expo-router";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (nome: string, classe: string) => void;
}

export default function CustomModal({
  visible,
  onClose,
  onSave,
}: CustomModalProps) {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");

  const [loaded, error] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    useEffect(() => {
        if( error ) throw error;
    }, [error])

    useEffect(() => {
        if(loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded])

  function salvar() {
    if (nome.trim() === "" || classe.trim() === "") {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha o nome e a classe do herói."
      );
      return;
    }

    onSave(nome, classe);

    setNome("");
    setClasse("");
  }

  function fechar() {
    setNome("");
    setClasse("");
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={fechar}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          
          <Text style={styles.titulo}>Criar Herói</Text>

          <Image
            source={require("../app/assets/djavan.png")}
            style={styles.avatar}
          />

          <Text style={styles.label}>Nome do Herói</Text>

          <TextInput
          placeholderTextColor="#ffe9e6"
            style={styles.input}
            placeholder="Digite o nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Classe</Text>

          <TextInput
           placeholderTextColor="#ffe9e6"
            style={styles.input}
            placeholder="Ex: Guerreiro"
            value={classe}
            onChangeText={setClasse}
          />

          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={salvar}
          >
            <Text style={styles.textoBotao}>Salvar Herói</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCancelar}
            onPress={fechar}
          >
            <Text style={styles.textoCancelar}>Cancelar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#C8D9E6",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    width: "85%",
     backgroundColor: "#daf5f0",
    borderRadius: 24,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#169bd9",
    shadowColor: "#82d6eb",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12
  },

  titulo: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    marginBottom: 15,
    color: "#259dd5",
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: "#07095c",
    marginBottom: 20,
  },

  label: {
    width: "100%",
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    marginBottom: 5,
    color: "#296a7c"
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#a4e5f5",
    backgroundColor: "#567C8D",
    color: "#ffe9e6",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: "Poppins_400Regular",
    marginBottom: 15
  },
  

  botaoSalvar: {
    width: "100%",
    backgroundColor: "#164564",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#ebd6e6",
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
  },

  botaoCancelar: {
    marginTop: 15,
  },

  textoCancelar: {
    fontFamily: "Poppins_400Regular",
    color: "#196e6a",
  },
});