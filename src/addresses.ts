const addresses = {
  morphoDao: {
    morphoToken: "0x9994e35db50125e0df82e4c2dde62496ce330999",
    rewardsDistributor: "0x3b14e5c73e0a56d607a8688098326fd4b4292135",
  },
  morphoCompound: {
    lens: "0x930f1b46e1d081ec1524efd95752be3ece51ef67",
    morpho: "0x8888882f8f843896699869179fb6e4f7e3b58888",
    rewardsManager: "0x78681e63b6f3ad81ecd64aecc404d765b529c80d", // only Morpho contract can write on the rewards manager. You can still read from it (users rewards indexes).
  },
  morphoAave: {
    morpho: "0x777777c9898d384f785ee44acfe945efdff5f3e0",
    lens: "0x507fa343d0a90786d86c7cd885f5c49263a91ff4",
  },
  morphoAaveV3: {
    pool: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
    addressesProvider: "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e",
    poolDataProvider: "0x7B4EB56E7CD4b454BA8ff71E4518426369a138a3",
  },
  permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
  multicall3: "0xcA11bde05977b3631167028862bE2a173976CA11" // Same address on all supported networks
};

export default addresses;
