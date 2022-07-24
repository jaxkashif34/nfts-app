import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/Features";
export function CircleButton({ imgUrl, onPress, ...props }) {
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
      onPress={onPress}
    >
      <Image
        source={{ uri: imgUrl }}
        
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
}

export function RectButton({
  minWidth,
  fontSize,
  data,
  handlePress,
  ...props
}) {
  const { SIZES, COLORS, FONTS } = useSelector(selectData);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
}
