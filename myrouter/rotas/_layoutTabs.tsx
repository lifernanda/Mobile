import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons"

export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelPosition: "beside-icon",
            tabBarActiveTintColor: "#064c7f",
            tabBarInactiveTintColor: "#00acf5"
        }}>
        <Tabs.Screen
            name="index" 
            options={{
                tabBarIcon:({color})=><MaterialIcons name="home" size={30} color={color} />
            }} 
            
        />
        <Tabs.Screen 
            name="sign-up" 
            options={{
                tabBarIcon: ({color, size})=> <MaterialIcons name="person-add" size={size} color={color} />
            }}
        />
        <Tabs.Screen 
            name="settings" 
            options={{
                tabBarIcon: ({color, size})=> <MaterialIcons name="settings" size={size} color={color} />
            }}
            />
        </Tabs>
  );
}