import { DefaultTheme } from "@react-navigation/native";
import { gql } from "@apollo/client";

const theme = {
  ...DefaultTheme, // inherit DefaultTheme
  colors: {
    ...DefaultTheme.colors, // inherit DefaultTheme.colors
    background: "transparent", // override DefaultTheme.colors.background
  },
};
const fonts = {
  InterBold: require("../assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
  InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
  InterLight: require("../assets/fonts/Inter-Light.ttf"),
};

const GET_DATA = gql`
  query getDATA {
    nfts {
      id
      name
      time
      creator
      price
      description
      image
      bids {
        id
        name
        price
        image
        date
      }
    }
  }
`;

const GET_IMAGE = gql`
  query getImages {
    images {
      eth
      heart
      left
      search
      logo
      person01
      person02
      person03
      person04
      badge
    }
  }
`;

export { fonts, theme, GET_DATA, GET_IMAGE };
