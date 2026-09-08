import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function LayoutDrawer() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{title: 'Navegador'}}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Inicio",
            drawerIcon: ({ color, size }) =>
              <MaterialIcons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen 
        name="configs"
        options={{
            drawerLabel: "Configurações",
            drawerIcon: ({color, size}) => <MaterialIcons name="settings" color={color} size={size}/>
        }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}