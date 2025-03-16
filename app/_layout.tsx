import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(profile)" options={{ title: "👨‍✈️Profile", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="(settings)" options={{ title: " ⚙️ Settings", tabBarIcon: () => <></>, headerShown: false }} />
    </Tabs>
  )
}
