import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "🏠 Home", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: "👨‍✈️Profile", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="setting" options={{ title: " ⚙️ Settings", tabBarIcon: () => <></>, headerShown: false }} />
    </Tabs>
  )
}
