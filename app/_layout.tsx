import { Stack } from "expo-router";
import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: true}} />
      <Stack.Screen name="(screen)" options={{ headerShown: true }} />
      <Stack.Screen name="(check)" options={{ headerShown: true }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  )
}
