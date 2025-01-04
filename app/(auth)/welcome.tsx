import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";

export const onboarding = [
  {
    id: 1,
    title: "Find People for Your Next Event!",
    description:
      "Whether it's a hiking trip or a game night, connect with like-minded people to make it happen.",
    // image: images.onboarding1,
  },
  {
    id: 2,
    title: "Join Events and Create Lasting Memories",
    description:
      "Browse events near you and meet others who share your interests. It's easy to join and have fun!",
    // image: images.onboarding2,
  },
  {
    id: 3,
    title: "Organize Events, Invite Participants",
    description:
      "Host your own events, invite participants, and build an amazing community around your passions.",
    // image: images.onboarding3,
  },
];

const WelcomePage = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md border-b p-1">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-orange-500 rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5 ">
            <Image
              // source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg  text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-10/12 my-10 mb-6 p-3 bg-orange-500 text-white"
      />
    </SafeAreaView>
  );
};

export default WelcomePage;
