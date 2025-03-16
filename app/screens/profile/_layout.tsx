import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen name="help" options={{ title: "Help", headerShown: true }} />
            <Stack.Screen name="notifycation" options={{ title: "Notification", headerShown: true }} />
        </Stack>
    );
}
