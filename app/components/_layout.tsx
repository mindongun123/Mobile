import { Stack } from "expo-router";

export default function ScenesLayout() {
    return (
        <Stack>
            <Stack.Screen name="notification" options={{ title: "🔔 Notifications", headerShown: true }} />
            <Stack.Screen name="help" options={{ title: "❓ Help", headerShown: true }} />
            <Stack.Screen name="breakfast" options={{ title: "❓ Breakfast", headerShown: true }} />
        </Stack>
    );
}
