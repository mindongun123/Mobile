import { router } from "expo-router";
import { View, Button, StyleSheet } from "react-native";

function Profile() {
    return (
                <View style={styles.container}>
        
            <Button title="🌭 Breakfast" onPress={() => router.push("/components/breakfast")} />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
