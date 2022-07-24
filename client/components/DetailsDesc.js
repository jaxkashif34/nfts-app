import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { useSelector, useDispatch } from "react-redux";
import { selectData, setReadMore, setText } from "../store/Features";

export default function DetailsDesc({ data }) {
  const { SIZES, FONTS, COLORS, readMore, text } = useSelector(selectData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!readMore) {
      dispatch(setText(data.description.slice(0, 100)));
    } else {
      dispatch(setText(data.description));
    }
  }, []);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  dispatch(setText(data.description));
                  dispatch(setReadMore(true));
                } else {
                  dispatch(setText(data.description.slice(0, 100)));
                  dispatch(setReadMore(false));
                }
              }}
            >
              {!readMore ? " Read more" : " Read less"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
