import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";

export default function SignUp() {
  function back() {
    if (!router.canGoBack()){
        Alert.alert("Não é possivel voltar!")
    }
    router.back();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5e9d0"
  },
  title: {
    fontSize: 32,
    color: "#c21f4e" ,
    fontWeight: "bold"
  },
  back: {
    fontSize: 20,
    fontWeight: "bold",
    color:  "#da6c84"
  }
});