import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#800aa0",
        drawerInactiveTintColor: "#666",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Cantores",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="music-note" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="sobre"
        options={{
          drawerLabel: "Sobre",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="info-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}