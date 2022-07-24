import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusedStatusBar, NFTCard } from "../components";
import { useSelector } from "react-redux";
import { HomeHeader } from "../components";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../utils";
export default function Home() {
  const { COLORS } = useSelector((state) => state.styleSlice);
  const { data } = useQuery(GET_DATA);
  return (
    <SafeAreaView>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View>
        <FlatList
          data={data?.nfts}
          renderItem={({ item }) => <NFTCard CardData={item} />}
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
