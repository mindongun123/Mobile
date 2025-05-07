import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function CheckLayout() {

    return (
        <Stack>
            <Stack.Screen name="checkScreen" options={{ title: "CheckScreen", headerShown: false }} />
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