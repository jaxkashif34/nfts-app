import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/Features";
import { useNavigation } from "@react-navigation/native";
export function CircleButton({ imgUrl, ...props }) {
  const { SIZES, COLORS, SHADOWS } = useSelector(selectData);
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
}

export function RectButton({ data, ...props }) {
  const navigation = useNavigation();
  const { SIZES, COLORS, FONTS } = useSelector(selectData);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: 120,
        ...props,
      }}
      onPress={() => navigation.navigate("Details", { data })}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          textAlign:"center"
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
}
