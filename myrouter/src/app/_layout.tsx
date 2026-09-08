import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#4fcfe9",
          drawerInactiveTintColor: "#2fa2e4"
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerIcon: ({size, color}) => <MaterialIcons name="home" size={size} color={color} />,
            title: "Home",
            drawerLabel: "Entrar",
          }}
        />
        <Drawer.Screen
          name="sign-up"
          options={{
            drawerIcon: ({size, color}) => <MaterialIcons name="person" size={size} color={color} />,
            title: "Cadastro",
            drawerLabel: "Criar conta"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});