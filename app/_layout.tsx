import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import "../global.css";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "WorkSans-Bold": require("@/assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-ExtraBold": require("@/assets/fonts/WorkSans-ExtraBold.ttf"),
    "WorkSans-SemiBold": require("@/assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("@/assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-ExtraLight": require("@/assets/fonts/WorkSans-ExtraLight.ttf"),
    "WorkSans-Thin": require("@/assets/fonts/WorkSans-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
