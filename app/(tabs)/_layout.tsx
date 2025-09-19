import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
