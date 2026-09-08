import { Stack } from "expo-router";
import { useFonts } from "@expo-google-fonts/caacupe-one";
import { CaacupeOne_400Regular } from "@expo-google-fonts/caacupe-one";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    CaacupeOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}