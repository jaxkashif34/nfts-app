import React from "react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { fonts, theme } from "./utils";
import { Provider } from "react-redux";
import MainApp from "./screens";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import NotConnected from "./components/NotConnected";
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        nfts: {
          merge: (existing, incoming) => {
            return incoming;
          },
        },
      },
    },
  },
});
const wifiIP = "192.168.10.8";
const mobileIP = "192.168.124.86";
export default function App() {
  const netInfo = useNetInfo();
  const IP = netInfo.type === "cellular" ? mobileIP : wifiIP;
  const client = new ApolloClient({
    uri: `http://${IP}:3000/graphql`,
    cache,
  });
  const [loaded] = useFonts(fonts);
  if (!loaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading data...</Text>
      </View>
    );
  } // if fonts not loaded yet, return null
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          {netInfo?.isConnected === true ? <MainApp /> : <NotConnected />}
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
