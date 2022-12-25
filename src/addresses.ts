const addresses = {
    morphoDao: {
        morphoToken: "0x9994e35db50125e0df82e4c2dde62496ce330999",
        rewardsDistributor: "0x3b14e5c73e0a56d607a8688098326fd4b4292135",
    },
    morphoCompound: {
        lens: "0x930f1b46e1d081ec1524efd95752be3ece51ef67",
        morpho: "0x8888882f8f843896699869179fb6e4f7e3b58888",
        rewardsManager: "0x78681e63b6f3ad81ecd64aecc404d765b529c80d", // only Morpho contract can call rewards manager
        implementations: {
            morpho: "0xbbb011b923f382543a94e67e1d0c88d9763356e5",
            positionsManager: "0x309a4505d79fcc59affaba205fdcb880d400ef39", // Morpho delegates call to positions manager
            interestRatesManager: "0x3e483225666871d192b686c42e6834e217a9871c", // Morpho delegates coll to irm
            lens: "0xe54dde06d245fadcba50dd786f717d44c341f81b",
            rewardsManager: "0x78681e63b6f3ad81ecd64aecc404d765b529c80d",
        },
    },
    morphoAave: {
        morpho: "0x777777c9898d384f785ee44acfe945efdff5f3e0",
        lens: "0x507fa343d0a90786d86c7cd885f5c49263a91ff4",
        implementations: {
            interestRatesManager: "0x4f54235e17eb8dcdfc941a77e7734a537f7bed86", // Morpho delegates call to positions manager
            lens: "0xce23e457fb01454b8c59e31f4f72e4bd3d29b5eb",
            morpho: "0x206a1609a484db5129ca118f138e5a8abb9c61e0",
            entryPositionsManager: "0x2a46cad23484c15f60663ece368395b3a249632a", // Morpho delegates call to positions manager
            exitPositionsManager: "0xfa652aa169c23277a941cf2d23d2d707fda60ed9", // Morpho delegates call to positions manager
        },
    },

};

export default addresses;