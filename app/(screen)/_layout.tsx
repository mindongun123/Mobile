import { Stack } from "expo-router";
import React from "react";

export default function ScreenLayout() {

    return (
        <Stack>
            <Stack.Screen name="mapDirectionsScreen" options={{ title: "MapDirectionsScreen", headerShown: false }} />
        </Stack>
    )
}