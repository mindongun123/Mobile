import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabsLayout() {

    return (
        <Stack>
            <Stack.Screen name="mapViewScreen" options={{ title: "MapViewScreen", headerShown: false }} />
        </Stack>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 10,
    }
});