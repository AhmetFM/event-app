import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const categories = [
  { id: 1, name: "All", icon: "grid-outline" },
  { id: 2, name: "Music", icon: "musical-notes-outline" },
  { id: 3, name: "Comedy", icon: "happy-outline" },
  { id: 4, name: "Business", icon: "briefcase-outline" },
];

const nearbyEvents = [
  {
    id: 1,
    title: "Neckdeep Tour 2022",
    date: "Nov 10 2022",
    time: "08:00 PM",
    image: require("@/assets/images/event1.jpeg"),
    attendees: 4,
    category: "Music",
  },
  {
    id: 2,
    title: "Dar Der Dor Stand Up",
    date: "Nov 12 2022",
    time: "08:00 PM",
    image: require("@/assets/images/event2.jpg"),
    attendees: 3,
    category: "Comedy",
  },
];

const popularEvents = [
  {
    id: 1,
    title: "Tribute to Didi Kempot",
    artist: "Danny Caknan",
    price: 20,
    date: "November 7 2022",
    image: require("@/assets/images/event3.jpg"),
    attendees: 4,
    category: "Music",
  },
];

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Search Bar */}
        <View className="bg-white rounded-2xl flex-row items-center px-4 py-3 mb-6 shadow-sm">
          <Ionicons name="search-outline" size={22} color="#666" />
          <TextInput
            placeholder="Search event, stand up..."
            className="flex-1 ml-3 text-base font-WorkSansMedium"
            placeholderTextColor="#666"
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-8"
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className={`mr-4 px-6 py-3 rounded-xl flex-row items-center shadow-sm ${
                category.name === "All"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600"
                  : "bg-white"
              }`}
              style={{
                elevation: 2,
              }}
            >
              <Ionicons
                name={category.icon as any}
                size={18}
                color={category.name === "All" ? "#fff" : "#666"}
              />
              <Text
                className={`ml-2 font-WorkSansMedium ${
                  category.name === "All" ? "text-white" : "text-gray-600"
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Nearby Events */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-WorkSansSemiBold text-gray-800">
              Nearby Event
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-blue-500 font-WorkSansMedium mr-1">
                See More
              </Text>
              <Ionicons name="arrow-forward" size={16} color="#3b82f6" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {nearbyEvents.map((event) => (
              <TouchableOpacity
                key={event.id}
                className="mr-4 w-[300px] rounded-2xl overflow-hidden bg-white shadow-md"
                style={{
                  elevation: 3,
                }}
              >
                <ImageBackground
                  source={event.image}
                  className="w-full h-[180px]"
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="absolute bottom-0 left-0 right-0 h-20 p-3"
                  >
                    <View className="flex-row items-center">
                      <View className="bg-blue-500 rounded-lg px-2 py-1">
                        <Text className="text-white text-xs font-WorkSansMedium">
                          {event.category}
                        </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </ImageBackground>
                <View className="p-4">
                  <Text className="text-lg font-WorkSansSemiBold mb-2 text-gray-800">
                    {event.title}
                  </Text>
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <Ionicons
                        name="calendar-outline"
                        size={14}
                        color="#666"
                      />
                      <Text className="text-gray-600 ml-2 font-WorkSansMedium">
                        {event.date}
                      </Text>
                    </View>
                    <View className="flex-row items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <Ionicons name="time-outline" size={14} color="#666" />
                      <Text className="text-gray-600 ml-2 font-WorkSansMedium">
                        {event.time}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Events */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-WorkSansSemiBold text-gray-800">
              Popular Event
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-blue-500 font-WorkSansMedium mr-1">
                See More
              </Text>
              <Ionicons name="arrow-forward" size={16} color="#3b82f6" />
            </TouchableOpacity>
          </View>

          {popularEvents.map((event) => (
            <TouchableOpacity
              key={event.id}
              className="mb-4 rounded-2xl overflow-hidden bg-white shadow-md"
              style={{
                elevation: 3,
              }}
            >
              <ImageBackground
                source={event.image}
                className="w-full h-[200px]"
                resizeMode="cover"
              >
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                  className="absolute bottom-0 left-0 right-0 h-24 p-4"
                >
                  <View className="flex-row justify-between items-end">
                    <View>
                      <View className="bg-blue-500 rounded-lg px-2 py-1 mb-2">
                        <Text className="text-white text-xs font-WorkSansMedium">
                          {event.category}
                        </Text>
                      </View>
                      <Text className="text-white text-xl font-WorkSansSemiBold">
                        {event.title}
                      </Text>
                      <Text className="text-gray-200 font-WorkSansMedium">
                        {event.artist}
                      </Text>
                    </View>
                    <View className="bg-white/90 px-4 py-2 rounded-xl">
                      <Text className="font-WorkSansSemiBold text-gray-800">
                        ${event.price}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
              <View className="p-4">
                <View className="flex-row items-center">
                  <View className="flex-row items-center bg-gray-50 px-3 py-1 rounded-lg">
                    <Ionicons name="calendar-outline" size={16} color="#666" />
                    <Text className="text-gray-600 ml-2 font-WorkSansMedium">
                      {event.date}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
