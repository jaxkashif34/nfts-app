import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/Features";
import { EthPrice } from "./SubInfo";
export default function DetailsBid({ bid }) {
  const { SIZES, FONTS, COLORS } = useSelector(selectData);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
      }}
      key={bid.id}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View
        style={{ flex: 1, alignItems: "center", paddingHorizontal: SIZES.base }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
}
