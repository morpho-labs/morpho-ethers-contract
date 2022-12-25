
export interface TokenConfig {
    symbol: string;
    address: string;
    decimals: number;
    cToken?: string;
    aToken?: string;
    balanceOfStorageSlot?: number;
}

const tokens: Record<string, TokenConfig> = {
    dai: {
        symbol: "DAI",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        cToken: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
        aToken: "0x028171bca77440897b824ca71d1c56cac55b68a3",
        balanceOfStorageSlot: 2,
        decimals: 18,
    },
    usdc: {
        symbol: "USDC",
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        cToken: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
        aToken: "0xbcca60bb61934080951369a648fb03df4f96263c",
        balanceOfStorageSlot: 9,
        decimals: 6,
    },
    usdt: {
        symbol: "USDT",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        cToken: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
        aToken: "0x3ed3b47dd13ec9a98b44e6204a523e766b225811",
        balanceOfStorageSlot: 2,
        decimals: 6,
    },
    fei: {
        symbol: "FEI",
        address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
        cToken: "0x7713DD9Ca933848F6819F38B8352D9A15EA73F67",
        aToken: "",
        balanceOfStorageSlot: 0,
        decimals: 18,
    },
    wEth: {
        symbol: "WETH",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        cToken: "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
        aToken: "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
        decimals: 18,
        balanceOfStorageSlot: 3,
    },
    wBtc: {
        symbol: "WBTC",
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        cToken: "0xccf4429db6322d5c611ee964527d42e5d685dd6a",
        aToken: "0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656",
        decimals: 8,
        balanceOfStorageSlot: 0,
    },
    comp: {
        symbol: "COMP",
        address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
        cToken: "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4",
        aToken: "",
        decimals: 18,
        balanceOfStorageSlot: 1,
    },
    uni: {
        symbol: "UNI",
        address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        cToken: "0x35a18000230da775cac24873d00ff85bccded550",
        aToken: "",
        decimals: 18,
        balanceOfStorageSlot: 4,
    },
    crv: {
        symbol: "CRV",
        address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        aToken: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1",
        cToken: "",
        decimals: 18,
    },
    stEth: {
        symbol: "stETH",
        address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        aToken: "0x1982b2F5814301d4e9a8b0201555376e62F82428",
        cToken: "",
        decimals: 18,
    }
};

export default tokens;