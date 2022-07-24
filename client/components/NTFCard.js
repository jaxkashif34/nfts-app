import { View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { CircleButton, RectButton } from "../components/Button";
import { NFTTitle, SubInfo, EthPrice } from "./SubInfo";
import { useNavigation } from "@react-navigation/native";
import { GET_IMAGE } from "../utils";
import { useQuery } from "@apollo/client";
export default function NTFCard({ CardData }) {
  const { COLORS, SIZES, SHADOWS } = useSelector((state) => state.styleSlice);
  const { data } = useQuery(GET_IMAGE);
  const navigation = useNavigation();
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
          source={{ uri: CardData.image }}
          resizeMode="cover"
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={data?.images[0]?.heart} right={10} top={10} />
      </View>

      <SubInfo time={CardData.time} />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={CardData.name}
          subtitle={CardData.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={CardData.price} />
          <RectButton
            data={CardData}
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { CardData })}
          />
        </View>
      </View>
    </View>
  );
}
