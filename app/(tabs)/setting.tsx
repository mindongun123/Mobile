import { router } from "expo-router";
import { View, Button, StyleSheet } from "react-native";

function Setting() {
    return (
        <View style={styles.container}>
            <Button title="🌭 Notification" onPress={() => router.push("/components/notification")} />
            <Button title="🌭 Help" onPress={() => router.push("/components/help")} />
        </View>
    );
}

export default Setting;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
