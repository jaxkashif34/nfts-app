import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query getDATA {
    nfts {
      id
      name
      time
      creator
      price
      description
      image
      bids
    }
  }
`;
