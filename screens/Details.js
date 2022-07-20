import { View, FlatList, Image, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { useSelector } from "react-redux";
import { selectData } from "../store/Features";
import { RectButton, CircleButton } from "../components/Button";
import { DetailsBid, DetailsDesc } from "../components";
import { SubInfo } from "../components/SubInfo";
export default function Details({ route: { params } }) {
  const { SIZES, SHADOWS } = useSelector(selectData);
  const { data } = params;
  return (
    <View style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} />
            <SubInfo time={data.time} />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </>
        )}
      />
    </View>
  );
}

const DetailsHeader = ({ data }) => {
  const { assets } = useSelector(selectData);
  const navigation = useNavigation();
  const StatusBarHight = StatusBar.currentHeight + 10;
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        left={15}
        top={StatusBarHight}
        onPress={() => navigation.goBack()}
      />
      <CircleButton imgUrl={assets.heart} right={15} top={StatusBarHight} />
    </View>
  );
};
