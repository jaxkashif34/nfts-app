const moment = require("moment");
// get random hours and minutes
const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * max - min) + min;
const getRandomTime = () => {
  return `${moment()
    .add(getRandomNumber(12, 7) >= 0 ? getRandomNumber(12, 7) : null, "hours")
    .hours()}h ${moment().add(getRandomNumber(60, 1), "minutes").minutes()}m`;
};

const getImage = (img) => {
  return `http://192.168.124.86:3000/images/${img}`;
};

const ImagesData = {
  eth: getImage("eth.png"),
  heart: getImage("heart.png"),
  left: getImage("left.png"),
  search: getImage("search.png"),
  logo: getImage("logo.png"),
  person01: getImage("person01.png"),
  badge: getImage("badge.png"),
};
const NFTData = [
  {
    id: "NFT-01",
    name: "Abstracto #312",
    time: getRandomTime(),
    creator: "Putri Intan",
    price: 4.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    // image: assets.nft01,
    image: getImage("nft01.png"),
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        // image: assets.person03,
        image: getImage("person03.png"),
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        // image: assets.person04,
        image: getImage("person04.png"),
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Green Coins",
    time: getRandomTime(),
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    // image: assets.nft02,
    image: getImage("nft02.jpeg"),
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        // image: assets.person04,
        image: getImage("person04.png"),
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "NFT coins race",
    time: getRandomTime(),
    creator: "Elisabeth aho",
    price: 95.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    // image: assets.nft03,
    image: getImage("nft03.jpeg"),
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        // image: assets.person03,
        image: getImage("person03.png"),
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Nifty NFT",
    time: getRandomTime(),
    creator: "Putri Intan",
    price: 54.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    // image: assets.nft04,
    image: getImage("nft04.jpeg"),
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        // image: assets.person03,
        image: getImage("person03.png"),
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        // image: assets.person04,
        image: getImage("person04.png"),
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Colorful circles",
    time: getRandomTime(),
    creator: "David doe",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    // image: assets.nft05,
    image: getImage("nft05.jpeg"),
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "Black box model",
    time: getRandomTime(),
    creator: "Leo Messi",
    price: 20.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    // image: assets.nft06,
    image: getImage("nft06.jpeg"),
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        // image: assets.person03,
        image: getImage("person03.png"),
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        // image: assets.person04,
        image: getImage("person04.png"),
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        // image: assets.person02,
        image: getImage("person02.png"),
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Abstracto soulful art",
    time: getRandomTime(),
    creator: "Victor de la Cruz",
    price: 18.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    // image: assets.nft07,
    image: getImage("nft07.jpeg"),
    bids: [],
  },
];
module.exports = { NFTData, ImagesData };