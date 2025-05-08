import { router, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>APP HOTEL</Text>
      <Button title="Đăng nhập" onPress={() => router.push("/(tabs)/mapViewScreen")} />
      <Button title="Kiểm tra" onPress={() => router.push("/(check)/checkScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});