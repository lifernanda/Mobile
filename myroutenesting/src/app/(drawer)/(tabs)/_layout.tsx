import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function LayoutTabs(){
    return (
         <Tabs screenOptions={{
            headerShown: false,
            tabBarLabelPosition: "beside-icon",
            tabBarStyle:{
                flexDirection: "row"
            }
         }}
         >
            <Tabs.Screen
            name="index"
            options={{
                tabBarLabel: "Produtos",
                tabBarIcon: ({color, size}) => <MaterialIcons 
                name="list" color={color} size={size}/>,
                tabBarItemStyle: {flex:1}
            }}
            />

            <Tabs.Screen
            name="order"
            options={{
                tabBarLabel: "Pedidos",
                tabBarIcon: ({color, size}) => <MaterialIcons 
                name="shopping-cart" color={color} size={size}/>,
                tabBarItemStyle: {flex:1}
            }}
            />

            <Tabs.Screen
            name="product"
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: {flex: 0}
            }}
            />
         </Tabs>
    ) 
}