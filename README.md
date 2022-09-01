# Morpho Ethers Contract

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> ⚡🚀 Call multiple view functions, from multiple Smart Contracts, in a single RPC query!

This package aims to facilitate the integration around morpho with ethers-v5. Instead of importing ABIs,
finding implementations, and guessing which functions to call, this package gives you typed classes by using
[typechain](https://github.com/dethcrypto/TypeChain), and mainnet addresses of deployed contracts.

NB: for security reasons, we invite you to always check the addresses of the contracts used, and check whether they are indeed those of Morpho.

You will find more information on the integration of Morpho in the [developer documentation](https://developers.morpho.xyz/get-started).
## Install

```bash
npm install @morpho-labs/morpho-ethers-contract
```

```bash
yarn add @morpho-labs/morpho-ethers-contract
```

## Usage

```typescript
import { providers, Wallet } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils";

import { MorphoAaveV2Lens__factory, addresses, MorphoAaveV2__factory, ERC20__factory } from "@morpho-labs/morpho-ethers-contract/lib";

(async () => {
    const provider = new providers.StaticJsonRpcProvider(process.env.RPC, "mainnet");

    const morphoAaveLens = MorphoAaveV2Lens__factory.connect(addresses.morphoAave.lens, provider);

    // now you have autocompletion for morpho contract
    const morphoAaveMarkets = await morphoAaveLens.getAllMarkets();

    // For example, you can easily supply on Morpho

    const signer = new Wallet(process.env.PRIVATE_KEY!, provider);

    const morphoAaveV2 = MorphoAaveV2__factory.connect(addresses.morphoAave.morpho, provider);

    const toSupply = parseUnits("10"); // 10 DAI
    const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
    const aDaiAddress = "0x028171bCA77440897B824Ca71D1c56caC55b68A3";
    // We first need to approve the amount to supply through the ERC20 token
    const DAI = ERC20__factory.connect(daiAddress, signer);
    const approvalTransaction = await DAI.approve(morphoAaveV2.address, toSupply);

    console.log(`Approval transaction: https://etherscan.io/tx/${approvalTransaction.hash}`);

    await approvalTransaction.wait(); // wait until transaction was mined

    console.log(`${formatUnits(toSupply)} DAI approved`);

    const supplyTransaction = await morphoAaveV2["supply(address,address,uint256)"](
        aDaiAddress, // poolToken aka aToken for aave
        signer.address, // onBehalf of the signer
        toSupply // amount to supply in WEI units
    );

    console.log(
        `Supply on Morpho-AaveV2 transaction: https://etherscan.io/tx/${supplyTransaction.hash}`
    );

    const receipt = await supplyTransaction.wait();

    console.log(
        `You have successfully supplied ${formatUnits(
            toSupply
        )} DAI on Morpho Aave, with a gas consuption of ${formatUnits(receipt.gasUsed, "gwei")} gWei`
    );
})();

```

[build-img]: https://github.com/morpho-labs/morpho-ethers-contract/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/morpho-labs/morpho-ethers-contract/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@morpho-labs/morpho-ethers-contract
[downloads-url]: https://www.npmtrends.com/@morpho-labs/morpho-ethers-contract
[npm-img]: https://img.shields.io/npm/v/@morpho-labs/morpho-ethers-contract
[npm-url]: https://www.npmjs.com/package/@morpho-labs/morpho-ethers-contract
[issues-img]: https://img.shields.io/github/issues/morpho-labs/morpho-ethers-contract
[issues-url]: https://github.com/morpho-labs/morpho-ethers-contract/issues
[codecov-img]: https://codecov.io/gh/morpho-labs/morpho-ethers-contract/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/morpho-labs/morpho-ethers-contract
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
