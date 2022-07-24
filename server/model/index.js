const { Schema, model } = require("mongoose");

const BidsModel = new Schema({
  id: { type: String, required: true },
  name: { type: String },
  price: { type: Number },
  image: { type: String },
  date: { type: String },
});
const NFTsModel = new Schema({
  name: { type: String },
  time: { type: String },
  creator: { type: String },
  price: { type: Number },
  description: { type: String },
  image: { type: String },
  bids: { type: [BidsModel] },
});

const ImagesModel = new Schema({
  eth: { type: String, required: true },
  heart: { type: String, required: true },
  left: { type: String, required: true },
  search: { type: String, required: true },
  logo: { type: String, required: true },
  person01: { type: String, required: true },
  person02: { type: String, required: true },
  person03: { type: String, required: true },
  person04: { type: String, required: true },
  badge: { type: String, required: true },
});
const NFTs = model("NFTs", NFTsModel);
const Images = model("Images", ImagesModel);
module.exports = { NFTs, Images };
