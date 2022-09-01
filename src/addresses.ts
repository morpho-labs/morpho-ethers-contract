export default {
    morphoCompound: {
        lens: "0x930f1b46e1d081ec1524efd95752be3ece51ef67",
        morpho: "0x8888882f8f843896699869179fb6e4f7e3b58888",
        rewardsManager: "0x78681e63b6f3ad81ecd64aecc404d765b529c80d", // only Morpho contract can call rewards manager
        implementations: {
            morpho: "0xd5ae0dabb7fc3bdb7d11d6aa13e7b5e01db4866a",
            positionsManager: "0x082bf6702e718483c85423bd279088c215a21302", // Morpho delegates call to positions manager
            interestRatesManager: "0xe3556899a0f9faffc20cfbc6f926e2a377a1e5f3", // Morpho delegates coll to irm
            lens: "0xb496c112acfdfc2f6493866b5a10074cfe62cf73",
            rewardsManager: "0x70c59877f5358d8d6f2fc90f53813eb2b2698ab7"
        }
    },
    morphoAave: {
        morpho: "0x777777c9898d384f785ee44acfe945efdff5f3e0",
        lens: "0x507fa343d0a90786d86c7cd885f5c49263a91ff4",
        implementations: {
            interestRatesManager: "0x91b23044d4a8089670309852c7f0a93e5ca8efb7", // Morpho delegates call to positions manager
            lens: "0x558d0794e8e0598c2aca4789e40dd985ce055bdf",
            morpho: "0x299ff2534c6f11624d6a65463b8b40c958ab668f",
            entryPositionsManager: "0xdf93cf1ca3acf96bc26783e6fab89400d362d0b4", // Morpho delegates call to positions manager
            exitPositionsManager: "0xf6998f72b92b81c8f683d30ed8678d348fe9754b" // Morpho delegates call to positions manager
        }
    }
}