import {  Stack } from "expo-router";

export default function RoomLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Index", headerShown: false }} />
      <Stack.Screen name="hello" options={{ title: "Hello", headerShown: false }} />
      <Stack.Screen name="room_search" options={{ title: "Search", headerShown: false }} />
    </Stack>
  )
}
