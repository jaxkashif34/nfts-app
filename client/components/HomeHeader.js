import { useQuery } from "@apollo/client";
import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectData, searchNFT } from "../store/Features";
import { GET_IMAGE } from "../utils";
export default function HomeHeader() {
  const { COLORS, SIZES, FONTS } = useSelector(selectData);
  const { data } = useQuery(GET_IMAGE);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: data?.images[0]?.logo }}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={{ uri: data?.images[0]?.person01 }}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={{ uri: data?.images[0]?.badge }}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hellow Victoria 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find masterpiece Art
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={{ uri: data?.images[0]?.search }}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={(e) => dispatch(searchNFT(e))}
          />
        </View>
      </View>
    </View>
  );
}
