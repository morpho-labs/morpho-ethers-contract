/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface AavePriceOracleInterface extends utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "getAssetPrice(address)": FunctionFragment;
    "getAssetsPrices(address[])": FunctionFragment;
    "getFallbackOracle()": FunctionFragment;
    "getSourceOfAsset(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAssetSources(address[],address[])": FunctionFragment;
    "setFallbackOracle(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH"
      | "getAssetPrice"
      | "getAssetsPrices"
      | "getFallbackOracle"
      | "getSourceOfAsset"
      | "owner"
      | "renounceOwnership"
      | "setAssetSources"
      | "setFallbackOracle"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetsPrices",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFallbackOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSourceOfAsset",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetSources",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackOracle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetsPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSourceOfAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetSources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AssetSourceUpdated(address,address)": EventFragment;
    "FallbackOracleUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "WethSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetSourceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WethSet"): EventFragment;
}

export interface AssetSourceUpdatedEventObject {
  asset: string;
  source: string;
}
export type AssetSourceUpdatedEvent = TypedEvent<
  [string, string],
  AssetSourceUpdatedEventObject
>;

export type AssetSourceUpdatedEventFilter =
  TypedEventFilter<AssetSourceUpdatedEvent>;

export interface FallbackOracleUpdatedEventObject {
  fallbackOracle: string;
}
export type FallbackOracleUpdatedEvent = TypedEvent<
  [string],
  FallbackOracleUpdatedEventObject
>;

export type FallbackOracleUpdatedEventFilter =
  TypedEventFilter<FallbackOracleUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface WethSetEventObject {
  weth: string;
}
export type WethSetEvent = TypedEvent<[string], WethSetEventObject>;

export type WethSetEventFilter = TypedEventFilter<WethSetEvent>;

export interface AavePriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AavePriceOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    getAssetPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAssetsPrices(
      assets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFallbackOracle(overrides?: CallOverrides): Promise<[string]>;

    getSourceOfAsset(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAssetSources(
      assets: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFallbackOracle(
      fallbackOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  getAssetPrice(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAssetsPrices(
    assets: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFallbackOracle(overrides?: CallOverrides): Promise<string>;

  getSourceOfAsset(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAssetSources(
    assets: PromiseOrValue<string>[],
    sources: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFallbackOracle(
    fallbackOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    getAssetPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetsPrices(
      assets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFallbackOracle(overrides?: CallOverrides): Promise<string>;

    getSourceOfAsset(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAssetSources(
      assets: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setFallbackOracle(
      fallbackOracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetSourceUpdated(address,address)"(
      asset?: PromiseOrValue<string> | null,
      source?: PromiseOrValue<string> | null
    ): AssetSourceUpdatedEventFilter;
    AssetSourceUpdated(
      asset?: PromiseOrValue<string> | null,
      source?: PromiseOrValue<string> | null
    ): AssetSourceUpdatedEventFilter;

    "FallbackOracleUpdated(address)"(
      fallbackOracle?: PromiseOrValue<string> | null
    ): FallbackOracleUpdatedEventFilter;
    FallbackOracleUpdated(
      fallbackOracle?: PromiseOrValue<string> | null
    ): FallbackOracleUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "WethSet(address)"(
      weth?: PromiseOrValue<string> | null
    ): WethSetEventFilter;
    WethSet(weth?: PromiseOrValue<string> | null): WethSetEventFilter;
  };

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetsPrices(
      assets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFallbackOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getSourceOfAsset(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAssetSources(
      assets: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFallbackOracle(
      fallbackOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAssetPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetsPrices(
      assets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFallbackOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSourceOfAsset(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAssetSources(
      assets: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFallbackOracle(
      fallbackOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}