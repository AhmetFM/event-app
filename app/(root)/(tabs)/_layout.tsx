import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabIcon = ({
  focused,
  iconName,
}: {
  iconName: any;
  focused: boolean;
}) => {
  return (
    <View
      className={`flex-1 items-center justify-center ${
        focused ? "bg-orange-500" : ""
      } p-2 rounded-lg`}
    >
      <Ionicons name={iconName} size={16} color={focused ? "white" : "#666"} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#666",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          marginBottom: 25,
          marginHorizontal: 25,
          height: 60,
          borderRadius: 30,
          position: "absolute",
          borderTopWidth: 0,
          elevation: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="compass-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="create-event"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="add-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="person-outline" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
