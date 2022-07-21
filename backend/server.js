const data = require("./dummny");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const app = express();
const path = require("path");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const BidType = new GraphQLObjectType({
  name: "Bid",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    date: { type: GraphQLString },
  }),
});

const NftType = new GraphQLObjectType({
  name: "NFT",
  description: "NFT object",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    time: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: new GraphQLNonNull(GraphQLInt) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    bids: { type: new GraphQLList(BidType) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Root query type",
  fields: () => ({
    nfts: {
      type: new GraphQLList(NftType),
      description: "list of all NFTs",
      resolve: () => data,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});
app.use(cors());
app.use("/imgs", express.static(path.join(__dirname, "assets")));
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
