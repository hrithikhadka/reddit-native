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

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <Feather name="bell" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
