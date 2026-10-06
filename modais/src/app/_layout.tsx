import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useFonts, Inter_400Regular, Inter_700Bold} from "@expo-google-fonts/inter"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"

export default function RootLayout(){

   const [loaded, error] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded])

    if(!loaded){
        return null
    }

    return(
        <GestureHandlerRootView>
            <Stack>
                <Stack.Screen
                name="index"
                options={{headerShown: false}}
                />
                <Stack.Screen
                name= "modal-cadastro"
                options={{
                    presentation: "transparentModal",
                    title: "Novo Registro"
                }}
                />
            </Stack>
        </GestureHandlerRootView>
    )
}
