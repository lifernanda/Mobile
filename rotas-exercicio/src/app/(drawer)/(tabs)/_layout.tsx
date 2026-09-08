import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="cantores"
        options={{
          title: "Cantores",
          tabBarLabel: "Cantores",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="music-video" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="musicas"
        options={{
          title: "Músicas",
          tabBarLabel: "Músicas",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons  name="library-music" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}