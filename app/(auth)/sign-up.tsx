import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { icons } from "@/constants";

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log(formData);
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/images/auth-background.jpeg")}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center px-6">
          <View className="w-full max-w-[400px] bg-white/75 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
            <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
              Create Account
            </Text>

            <View className="space-y-4">
              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  Full Name
                </Text>
                <TextInput
                  className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3"
                  placeholder="John Doe"
                  value={formData.name}
                  onChangeText={(text) =>
                    setFormData({ ...formData, name: text })
                  }
                />
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">Email</Text>
                <TextInput
                  className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3"
                  placeholder="john@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(text) =>
                    setFormData({ ...formData, email: text })
                  }
                />
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">Password</Text>
                <TextInput
                  className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3"
                  placeholder="••••••••"
                  secureTextEntry
                  value={formData.password}
                  onChangeText={(text) =>
                    setFormData({ ...formData, password: text })
                  }
                />
              </View>

              <CustomButton
                title="Sign Up"
                onPress={handleSignUp}
                className="bg-orange-600 py-3 rounded-xl mt-4"
                textVariant="default"
              />

              <View className="flex-row items-center my-4">
                <View className="flex-1 h-[1px] bg-gray-300" />
                <Text className="mx-4 text-gray-500">or</Text>
                <View className="flex-1 h-[1px] bg-gray-300" />
              </View>

              <CustomButton
                title="Continue with Google"
                onPress={() => {}}
                bgVariant="outline"
                textVariant="primary"
                className="py-3 rounded-xl"
                IconLeft={() => (
                  <Image
                    source={icons.google}
                    className="w-6 h-6 mx-2"
                    resizeMode="contain"
                  />
                )}
              />

              <View className="flex-row justify-center mt-6">
                <Text className="text-gray-600">Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/sign-in")}
                >
                  <Text className="text-orange-600 font-semibold ml-1">
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpPage;
