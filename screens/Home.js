import React from "react";
import { View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusedStatusBar, NFTCard } from "../components";
import { useSelector } from "react-redux";
import { HomeHeader } from "../components";
import { GET_DATA } from "../query";
import { useQuery } from "@apollo/client";
export default function Home() {
  const { loading, error, data } = useQuery(GET_DATA);
  console.log(error);
  const { COLORS, NFTData } = useSelector((state) => state.styleSlice);
  return (
    <SafeAreaView>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      {!loading && !error && console.log(data)}
      <View>
        <FlatList
          data={NFTData}
          renderItem={({ item }) => <NFTCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader />}
        />

        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
