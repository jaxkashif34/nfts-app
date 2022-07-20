import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/Features";
import moment from "moment";
export function SubInfo() {
  const { SIZES } = useSelector(selectData);
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
}

const ImgCmp = ({ imgUrl, index }) => {
  const { SIZES } = useSelector(selectData);
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

const People = () => {
  const { assets } = useSelector(selectData);
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (item, index) => (
          <ImgCmp imgUrl={item} index={index} key={`person-${index}`} />
        )
      )}
    </View>
  );
};
// get random hours and minutes
const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * max - min) + min;
const getRandomTime = () => {
  return `${moment().add(getRandomNumber(12, 7), "hours").hours()}h ${moment()
    .add(getRandomNumber(60, 1), "minutes")
    .minutes()}m`;
};
const EndDate = () => {
  const { SIZES, COLORS, SHADOWS, FONTS } = useSelector(selectData);
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.font,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        // maxWidth:"50%"
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {getRandomTime()}
      </Text>
    </View>
  );
};

export const NFTTitle = ({ title, subtitle }) => {
  const { SIZES, COLORS, FONTS } = useSelector(selectData);
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        by {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  const { assets, FONTS, COLORS } = useSelector(selectData);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: FONTS.font,
          color: COLORS.primary,
        }}
      >
        {price}$
      </Text>
    </View>
  );
};
