import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const BinocularsIcon = ({ color, focused }) => {
    return <FontAwesome name="binoculars" size={24} color={color} />;
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Nest",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Identify"
        options={{
          title: "Identify",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"map"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Sightings"
        options={{
          title: "Sightings",
          tabBarIcon: ({ color, focused }) => (
            <BinocularsIcon color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
