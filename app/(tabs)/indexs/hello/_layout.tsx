import {  Stack } from "expo-router";

export default function RoomLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Index", headerShown: false }} />
    </Stack>
  )
}
