import { View, Text } from "react-native";
import React from "react";

export default function NotConnected() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Device is not Connected with the internet make sure device is connected
      </Text>
    </View>
  );
}
