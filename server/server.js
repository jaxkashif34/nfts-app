require("colors");
require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const coeentDB = require("./config");
const app = express();
const path = require("path");
const schema = require("./schema");

coeentDB(); // connect to database

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}/graphql`);
});
