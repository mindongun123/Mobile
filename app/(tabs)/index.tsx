import { router, Stack } from "expo-router";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Đây là tab Phòng</Text>
      {/* <Button title="Chuyển sang Room" onPress={() => router.push("/room")} /> */}
      <TouchableOpacity
        onPress={() => router.push("/map")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Xem bản đồ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
