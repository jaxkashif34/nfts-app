const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { NFTs, Images } = require("./model");
const BidType = new GraphQLObjectType({
  name: "Bid",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    date: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const NftType = new GraphQLObjectType({
  name: "NFT",
  description: "NFT object",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    time: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    creator: { type: new GraphQLNonNull(GraphQLString) },
    bids: { type: new GraphQLList(BidType) },
  }),
});

const ImagesType = new GraphQLObjectType({
  name: "image",
  description: "a single image",
  fields: () => ({
    eth: { type: GraphQLString },
    heart: { type: GraphQLString },
    left: { type: GraphQLString },
    search: { type: GraphQLString },
    logo: { type: GraphQLString },
    person01: { type: GraphQLString },
    person02: { type: GraphQLString },
    person03: { type: GraphQLString },
    person04: { type: GraphQLString },
    badge: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Root query type",
  fields: () => ({
    nfts: {
      type: new GraphQLList(NftType),
      description: "list of all NFTs",
      resolve: () => NFTs.find(),
    },
    images: {
      type: new GraphQLList(ImagesType),
      description: "list of all images",
      resolve: () => Images.find(),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
