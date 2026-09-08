import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    function signUp() {
    router.navigate("/sign-up");
  }

  function singIn(){
    router.navigate('/(drawer)/(tabs)')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
       style={styles.button} 
       activeOpacity={0.7} 
       onPress={singIn}
       >
        <Text style={styles.title}>
            Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
       style={styles.button}
       activeOpacity={0.7}
        onPress={signUp}>
        <Text style={styles.title}>
            Criar Conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    backgroundColor: "#c21f4e" 
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color:  "#f5e9d0"
  },
  button: {
    backgroundColor: "#da6c84",
    borderRadius: 10,
    paddingHorizontal: 32,
    paddingVertical: 10
  }
});

"#c21f4e" 
 "#f5e9d0"
 "#da6c84"