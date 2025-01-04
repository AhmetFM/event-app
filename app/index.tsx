import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const isSignedIn = true;

  if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  return <Redirect href="/(auth)/welcome" />;
}
