import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Hello() {
  return (
    <View style={styles.container}>
            <Button title="Index" onPress={() => router.push("/indexs")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
