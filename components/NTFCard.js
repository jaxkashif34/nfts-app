import { View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { CircleButton, RectButton } from "../components/Button";
import { NFTTitle, SubInfo, EthPrice } from "./SubInfo";
export default function NTFCard({ data }) {
  const { COLORS, SIZES, SHADOWS, assets } = useSelector(
    (state) => state.styleSlice
  );
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle title={data.name} subtitle={data.creator} />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton data={data} />
        </View>
      </View>
    </View>
  );
}
