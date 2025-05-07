import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CheckScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Screen</Text>
      <Button title="Bản đồ" onPress={() => {
        router.push("/(tabs)/mapViewScreen")
        console.log("Bản đồ button pressed")
      }} />
      {/* <Button title="Kiểm tra" onPress={() => router.push("/(check)/checkScreen")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


