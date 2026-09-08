import { Stack } from "expo-router"
import { Background } from "expo-router/build/react-navigation"

export default function Layout(){
    return (<Stack screenOptions={{}}>
        <Stack.Screen
            name="index"
            options={{title: "Entrar", headerShown: false}}
        />
        <Stack.Screen
            name="sign-up"
            options={{title:"Criar Conta", headerStyle: {backgroundColor:"#8dcceb"}}}
        />
    </Stack>
    
    )

}