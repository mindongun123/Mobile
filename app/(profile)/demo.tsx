import { View, Button, StyleSheet, Text } from "react-native";

function Demo() {
  return (
    <View style={styles.container}>
      <Text>Demo</Text>
    </View>
  );
}

export default Demo;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
