import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
export default function Home() {
  return (
    <SafeAreaView>
      <FocusedStatusBar />
    </SafeAreaView>
  );
}
