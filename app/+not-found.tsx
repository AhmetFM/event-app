import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>This screen doesn't exist.</Text>
        <Link href="/">Go to home screen!</Link>
      </View>
    </>
  );
}
