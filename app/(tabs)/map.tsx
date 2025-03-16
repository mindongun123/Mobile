import { router, useNavigation } from "expo-router";
import { View, Button, StyleSheet, Text } from "react-native";

export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button title="Thông báo" onPress={() => router.push("/screens/profile/notification")} />
            <Text>Trợ giúp</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 20, fontWeight: "bold" },
});
