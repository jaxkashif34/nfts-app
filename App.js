import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./store";
import Details from "./screens/Details";
import Home from "./screens/Home";
import { View, Text, StyleSheet } from "react-native";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
const Stack = createNativeStackNavigator(); // or createNativeStackNavigator
const theme = {
  ...DefaultTheme, // inherit DefaultTheme
  colors: {
    ...DefaultTheme.colors, // inherit DefaultTheme.colors
    background: "transparent", // override DefaultTheme.colors.background
  },
};

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        nfts: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

export default function index() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) {
    return (
      <View style={style.loading}>
        <Text>Loading Data</Text>
      </View>
    );
  } // if fonts not loaded yet, return null
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache,
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}

const style = StyleSheet.create({
  loading: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});
