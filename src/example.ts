import { providers, Wallet } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils";

import addresses from "./addresses";
import { ERC20__factory } from "./factories";
import { MorphoAaveV2__factory, MorphoAaveV2Lens__factory } from "./factories/aave-v2/mainnet";

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
