import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="account" options={{ title: "Account", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="demo" options={{ title: " ⚙️ Demo", tabBarIcon: () => <></>, headerShown: false }} />
    </Tabs>
  )
}
