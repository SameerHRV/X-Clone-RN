import SignOutButton from "@/components/SignOutButton";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>HomeScreen</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
