import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};




export type Account = {
  __typename?: 'Account';
  /**  Account address  */
  id: Scalars['ID'];
  portfolioTotal?: Maybe<Scalars['BigInt']>;
  portfolio24Change?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange?: Maybe<Scalars['BigInt']>;
  marginRatioAvg?: Maybe<Scalars['BigInt']>;
  leverageAvg?: Maybe<Scalars['BigInt']>;
  exposureTotal?: Maybe<Scalars['BigInt']>;
  positions?: Maybe<Array<Position>>;
};


export type AccountPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Position_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Position_Filter>;
};

export type Account_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  portfolioTotal?: Maybe<Scalars['BigInt']>;
  portfolioTotal_not?: Maybe<Scalars['BigInt']>;
  portfolioTotal_gt?: Maybe<Scalars['BigInt']>;
  portfolioTotal_lt?: Maybe<Scalars['BigInt']>;
  portfolioTotal_gte?: Maybe<Scalars['BigInt']>;
  portfolioTotal_lte?: Maybe<Scalars['BigInt']>;
  portfolioTotal_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolioTotal_not_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolio24Change?: Maybe<Scalars['BigInt']>;
  portfolio24Change_not?: Maybe<Scalars['BigInt']>;
  portfolio24Change_gt?: Maybe<Scalars['BigInt']>;
  portfolio24Change_lt?: Maybe<Scalars['BigInt']>;
  portfolio24Change_gte?: Maybe<Scalars['BigInt']>;
  portfolio24Change_lte?: Maybe<Scalars['BigInt']>;
  portfolio24Change_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolio24Change_not_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolioWeekChange?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange_not?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange_gt?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange_lt?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange_gte?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange_lte?: Maybe<Scalars['BigInt']>;
  portfolioWeekChange_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolioWeekChange_not_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolioMonthChange?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange_not?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange_gt?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange_lt?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange_gte?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange_lte?: Maybe<Scalars['BigInt']>;
  portfolioMonthChange_in?: Maybe<Array<Scalars['BigInt']>>;
  portfolioMonthChange_not_in?: Maybe<Array<Scalars['BigInt']>>;
  marginRatioAvg?: Maybe<Scalars['BigInt']>;
  marginRatioAvg_not?: Maybe<Scalars['BigInt']>;
  marginRatioAvg_gt?: Maybe<Scalars['BigInt']>;
  marginRatioAvg_lt?: Maybe<Scalars['BigInt']>;
  marginRatioAvg_gte?: Maybe<Scalars['BigInt']>;
  marginRatioAvg_lte?: Maybe<Scalars['BigInt']>;
  marginRatioAvg_in?: Maybe<Array<Scalars['BigInt']>>;
  marginRatioAvg_not_in?: Maybe<Array<Scalars['BigInt']>>;
  leverageAvg?: Maybe<Scalars['BigInt']>;
  leverageAvg_not?: Maybe<Scalars['BigInt']>;
  leverageAvg_gt?: Maybe<Scalars['BigInt']>;
  leverageAvg_lt?: Maybe<Scalars['BigInt']>;
  leverageAvg_gte?: Maybe<Scalars['BigInt']>;
  leverageAvg_lte?: Maybe<Scalars['BigInt']>;
  leverageAvg_in?: Maybe<Array<Scalars['BigInt']>>;
  leverageAvg_not_in?: Maybe<Array<Scalars['BigInt']>>;
  exposureTotal?: Maybe<Scalars['BigInt']>;
  exposureTotal_not?: Maybe<Scalars['BigInt']>;
  exposureTotal_gt?: Maybe<Scalars['BigInt']>;
  exposureTotal_lt?: Maybe<Scalars['BigInt']>;
  exposureTotal_gte?: Maybe<Scalars['BigInt']>;
  exposureTotal_lte?: Maybe<Scalars['BigInt']>;
  exposureTotal_in?: Maybe<Array<Scalars['BigInt']>>;
  exposureTotal_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Account_OrderBy {
  Id = 'id',
  PortfolioTotal = 'portfolioTotal',
  Portfolio24Change = 'portfolio24Change',
  PortfolioWeekChange = 'portfolioWeekChange',
  PortfolioMonthChange = 'portfolioMonthChange',
  MarginRatioAvg = 'marginRatioAvg',
  LeverageAvg = 'leverageAvg',
  ExposureTotal = 'exposureTotal',
  Positions = 'positions'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type Market = {
  __typename?: 'Market';
  id: Scalars['ID'];
  token: Token;
  name: Scalars['String'];
  assetSymbol: Scalars['String'];
  created: Scalars['BigInt'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTransaction: Scalars['Bytes'];
  initialPrice: Scalars['BigInt'];
  currentPrice?: Maybe<Scalars['BigInt']>;
  currentPrice24Change?: Maybe<Scalars['BigInt']>;
  oraclePrice?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change?: Maybe<Scalars['BigInt']>;
  turnover24?: Maybe<Scalars['BigInt']>;
  pool?: Maybe<MarketLiquidityPool>;
};

export type MarketLiquidityPool = {
  __typename?: 'MarketLiquidityPool';
  id: Scalars['ID'];
  stackedLiquidity: Scalars['BigInt'];
  unrealizedProfit: Scalars['BigInt'];
};

export type MarketLiquidityPool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  stackedLiquidity?: Maybe<Scalars['BigInt']>;
  stackedLiquidity_not?: Maybe<Scalars['BigInt']>;
  stackedLiquidity_gt?: Maybe<Scalars['BigInt']>;
  stackedLiquidity_lt?: Maybe<Scalars['BigInt']>;
  stackedLiquidity_gte?: Maybe<Scalars['BigInt']>;
  stackedLiquidity_lte?: Maybe<Scalars['BigInt']>;
  stackedLiquidity_in?: Maybe<Array<Scalars['BigInt']>>;
  stackedLiquidity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  unrealizedProfit?: Maybe<Scalars['BigInt']>;
  unrealizedProfit_not?: Maybe<Scalars['BigInt']>;
  unrealizedProfit_gt?: Maybe<Scalars['BigInt']>;
  unrealizedProfit_lt?: Maybe<Scalars['BigInt']>;
  unrealizedProfit_gte?: Maybe<Scalars['BigInt']>;
  unrealizedProfit_lte?: Maybe<Scalars['BigInt']>;
  unrealizedProfit_in?: Maybe<Array<Scalars['BigInt']>>;
  unrealizedProfit_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum MarketLiquidityPool_OrderBy {
  Id = 'id',
  StackedLiquidity = 'stackedLiquidity',
  UnrealizedProfit = 'unrealizedProfit'
}

export type Market_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  assetSymbol?: Maybe<Scalars['String']>;
  assetSymbol_not?: Maybe<Scalars['String']>;
  assetSymbol_gt?: Maybe<Scalars['String']>;
  assetSymbol_lt?: Maybe<Scalars['String']>;
  assetSymbol_gte?: Maybe<Scalars['String']>;
  assetSymbol_lte?: Maybe<Scalars['String']>;
  assetSymbol_in?: Maybe<Array<Scalars['String']>>;
  assetSymbol_not_in?: Maybe<Array<Scalars['String']>>;
  assetSymbol_contains?: Maybe<Scalars['String']>;
  assetSymbol_not_contains?: Maybe<Scalars['String']>;
  assetSymbol_starts_with?: Maybe<Scalars['String']>;
  assetSymbol_not_starts_with?: Maybe<Scalars['String']>;
  assetSymbol_ends_with?: Maybe<Scalars['String']>;
  assetSymbol_not_ends_with?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['BigInt']>;
  created_not?: Maybe<Scalars['BigInt']>;
  created_gt?: Maybe<Scalars['BigInt']>;
  created_lt?: Maybe<Scalars['BigInt']>;
  created_gte?: Maybe<Scalars['BigInt']>;
  created_lte?: Maybe<Scalars['BigInt']>;
  created_in?: Maybe<Array<Scalars['BigInt']>>;
  created_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlock?: Maybe<Scalars['BigInt']>;
  createdAtBlock_not?: Maybe<Scalars['BigInt']>;
  createdAtBlock_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlock_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlock_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlock_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTransaction?: Maybe<Scalars['Bytes']>;
  createdAtTransaction_not?: Maybe<Scalars['Bytes']>;
  createdAtTransaction_in?: Maybe<Array<Scalars['Bytes']>>;
  createdAtTransaction_not_in?: Maybe<Array<Scalars['Bytes']>>;
  createdAtTransaction_contains?: Maybe<Scalars['Bytes']>;
  createdAtTransaction_not_contains?: Maybe<Scalars['Bytes']>;
  initialPrice?: Maybe<Scalars['BigInt']>;
  initialPrice_not?: Maybe<Scalars['BigInt']>;
  initialPrice_gt?: Maybe<Scalars['BigInt']>;
  initialPrice_lt?: Maybe<Scalars['BigInt']>;
  initialPrice_gte?: Maybe<Scalars['BigInt']>;
  initialPrice_lte?: Maybe<Scalars['BigInt']>;
  initialPrice_in?: Maybe<Array<Scalars['BigInt']>>;
  initialPrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrice?: Maybe<Scalars['BigInt']>;
  currentPrice_not?: Maybe<Scalars['BigInt']>;
  currentPrice_gt?: Maybe<Scalars['BigInt']>;
  currentPrice_lt?: Maybe<Scalars['BigInt']>;
  currentPrice_gte?: Maybe<Scalars['BigInt']>;
  currentPrice_lte?: Maybe<Scalars['BigInt']>;
  currentPrice_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrice24Change?: Maybe<Scalars['BigInt']>;
  currentPrice24Change_not?: Maybe<Scalars['BigInt']>;
  currentPrice24Change_gt?: Maybe<Scalars['BigInt']>;
  currentPrice24Change_lt?: Maybe<Scalars['BigInt']>;
  currentPrice24Change_gte?: Maybe<Scalars['BigInt']>;
  currentPrice24Change_lte?: Maybe<Scalars['BigInt']>;
  currentPrice24Change_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrice24Change_not_in?: Maybe<Array<Scalars['BigInt']>>;
  oraclePrice?: Maybe<Scalars['BigInt']>;
  oraclePrice_not?: Maybe<Scalars['BigInt']>;
  oraclePrice_gt?: Maybe<Scalars['BigInt']>;
  oraclePrice_lt?: Maybe<Scalars['BigInt']>;
  oraclePrice_gte?: Maybe<Scalars['BigInt']>;
  oraclePrice_lte?: Maybe<Scalars['BigInt']>;
  oraclePrice_in?: Maybe<Array<Scalars['BigInt']>>;
  oraclePrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  oraclePrice24Change?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change_not?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change_gt?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change_lt?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change_gte?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change_lte?: Maybe<Scalars['BigInt']>;
  oraclePrice24Change_in?: Maybe<Array<Scalars['BigInt']>>;
  oraclePrice24Change_not_in?: Maybe<Array<Scalars['BigInt']>>;
  turnover24?: Maybe<Scalars['BigInt']>;
  turnover24_not?: Maybe<Scalars['BigInt']>;
  turnover24_gt?: Maybe<Scalars['BigInt']>;
  turnover24_lt?: Maybe<Scalars['BigInt']>;
  turnover24_gte?: Maybe<Scalars['BigInt']>;
  turnover24_lte?: Maybe<Scalars['BigInt']>;
  turnover24_in?: Maybe<Array<Scalars['BigInt']>>;
  turnover24_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Market_OrderBy {
  Id = 'id',
  Token = 'token',
  Name = 'name',
  AssetSymbol = 'assetSymbol',
  Created = 'created',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTransaction = 'createdAtTransaction',
  InitialPrice = 'initialPrice',
  CurrentPrice = 'currentPrice',
  CurrentPrice24Change = 'currentPrice24Change',
  OraclePrice = 'oraclePrice',
  OraclePrice24Change = 'oraclePrice24Change',
  Turnover24 = 'turnover24',
  Pool = 'pool'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Position = {
  __typename?: 'Position';
  /**  Equals to: <marketAddress>-<accountAddress>-<index>  */
  id: Scalars['ID'];
  market: Market;
  account: Account;
  positionType: PositionType;
  status: PositionStatus;
  created: Scalars['BigInt'];
  posIndex: Scalars['BigInt'];
  notional: Scalars['BigInt'];
  collateral: Scalars['BigInt'];
  leverage: Scalars['BigInt'];
  openPrice: Scalars['BigInt'];
  closePrice?: Maybe<Scalars['BigInt']>;
  currentPrice?: Maybe<Scalars['BigInt']>;
  oraclePrice?: Maybe<Scalars['BigInt']>;
  mratio?: Maybe<Scalars['BigInt']>;
  pnl?: Maybe<Scalars['BigInt']>;
};

export type PositionMonitor = {
  __typename?: 'PositionMonitor';
  /** Has only one value equal to event.address */
  id: Scalars['ID'];
  stripsAddress: Scalars['Bytes'];
  /** TODO: convert it to Map type */
  positions: Array<Scalars['String']>;
};

export type PositionMonitor_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  stripsAddress?: Maybe<Scalars['Bytes']>;
  stripsAddress_not?: Maybe<Scalars['Bytes']>;
  stripsAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  stripsAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  stripsAddress_contains?: Maybe<Scalars['Bytes']>;
  stripsAddress_not_contains?: Maybe<Scalars['Bytes']>;
  positions?: Maybe<Array<Scalars['String']>>;
  positions_not?: Maybe<Array<Scalars['String']>>;
  positions_contains?: Maybe<Array<Scalars['String']>>;
  positions_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum PositionMonitor_OrderBy {
  Id = 'id',
  StripsAddress = 'stripsAddress',
  Positions = 'positions'
}

export enum PositionStatus {
  Opened = 'Opened',
  Closed = 'Closed',
  Liquidated = 'Liquidated'
}

export enum PositionType {
  Long = 'Long',
  Short = 'Short'
}

export type Position_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  market?: Maybe<Scalars['String']>;
  market_not?: Maybe<Scalars['String']>;
  market_gt?: Maybe<Scalars['String']>;
  market_lt?: Maybe<Scalars['String']>;
  market_gte?: Maybe<Scalars['String']>;
  market_lte?: Maybe<Scalars['String']>;
  market_in?: Maybe<Array<Scalars['String']>>;
  market_not_in?: Maybe<Array<Scalars['String']>>;
  market_contains?: Maybe<Scalars['String']>;
  market_not_contains?: Maybe<Scalars['String']>;
  market_starts_with?: Maybe<Scalars['String']>;
  market_not_starts_with?: Maybe<Scalars['String']>;
  market_ends_with?: Maybe<Scalars['String']>;
  market_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  positionType?: Maybe<PositionType>;
  positionType_not?: Maybe<PositionType>;
  status?: Maybe<PositionStatus>;
  status_not?: Maybe<PositionStatus>;
  created?: Maybe<Scalars['BigInt']>;
  created_not?: Maybe<Scalars['BigInt']>;
  created_gt?: Maybe<Scalars['BigInt']>;
  created_lt?: Maybe<Scalars['BigInt']>;
  created_gte?: Maybe<Scalars['BigInt']>;
  created_lte?: Maybe<Scalars['BigInt']>;
  created_in?: Maybe<Array<Scalars['BigInt']>>;
  created_not_in?: Maybe<Array<Scalars['BigInt']>>;
  posIndex?: Maybe<Scalars['BigInt']>;
  posIndex_not?: Maybe<Scalars['BigInt']>;
  posIndex_gt?: Maybe<Scalars['BigInt']>;
  posIndex_lt?: Maybe<Scalars['BigInt']>;
  posIndex_gte?: Maybe<Scalars['BigInt']>;
  posIndex_lte?: Maybe<Scalars['BigInt']>;
  posIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  posIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  notional?: Maybe<Scalars['BigInt']>;
  notional_not?: Maybe<Scalars['BigInt']>;
  notional_gt?: Maybe<Scalars['BigInt']>;
  notional_lt?: Maybe<Scalars['BigInt']>;
  notional_gte?: Maybe<Scalars['BigInt']>;
  notional_lte?: Maybe<Scalars['BigInt']>;
  notional_in?: Maybe<Array<Scalars['BigInt']>>;
  notional_not_in?: Maybe<Array<Scalars['BigInt']>>;
  collateral?: Maybe<Scalars['BigInt']>;
  collateral_not?: Maybe<Scalars['BigInt']>;
  collateral_gt?: Maybe<Scalars['BigInt']>;
  collateral_lt?: Maybe<Scalars['BigInt']>;
  collateral_gte?: Maybe<Scalars['BigInt']>;
  collateral_lte?: Maybe<Scalars['BigInt']>;
  collateral_in?: Maybe<Array<Scalars['BigInt']>>;
  collateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  leverage?: Maybe<Scalars['BigInt']>;
  leverage_not?: Maybe<Scalars['BigInt']>;
  leverage_gt?: Maybe<Scalars['BigInt']>;
  leverage_lt?: Maybe<Scalars['BigInt']>;
  leverage_gte?: Maybe<Scalars['BigInt']>;
  leverage_lte?: Maybe<Scalars['BigInt']>;
  leverage_in?: Maybe<Array<Scalars['BigInt']>>;
  leverage_not_in?: Maybe<Array<Scalars['BigInt']>>;
  openPrice?: Maybe<Scalars['BigInt']>;
  openPrice_not?: Maybe<Scalars['BigInt']>;
  openPrice_gt?: Maybe<Scalars['BigInt']>;
  openPrice_lt?: Maybe<Scalars['BigInt']>;
  openPrice_gte?: Maybe<Scalars['BigInt']>;
  openPrice_lte?: Maybe<Scalars['BigInt']>;
  openPrice_in?: Maybe<Array<Scalars['BigInt']>>;
  openPrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  closePrice?: Maybe<Scalars['BigInt']>;
  closePrice_not?: Maybe<Scalars['BigInt']>;
  closePrice_gt?: Maybe<Scalars['BigInt']>;
  closePrice_lt?: Maybe<Scalars['BigInt']>;
  closePrice_gte?: Maybe<Scalars['BigInt']>;
  closePrice_lte?: Maybe<Scalars['BigInt']>;
  closePrice_in?: Maybe<Array<Scalars['BigInt']>>;
  closePrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrice?: Maybe<Scalars['BigInt']>;
  currentPrice_not?: Maybe<Scalars['BigInt']>;
  currentPrice_gt?: Maybe<Scalars['BigInt']>;
  currentPrice_lt?: Maybe<Scalars['BigInt']>;
  currentPrice_gte?: Maybe<Scalars['BigInt']>;
  currentPrice_lte?: Maybe<Scalars['BigInt']>;
  currentPrice_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  oraclePrice?: Maybe<Scalars['BigInt']>;
  oraclePrice_not?: Maybe<Scalars['BigInt']>;
  oraclePrice_gt?: Maybe<Scalars['BigInt']>;
  oraclePrice_lt?: Maybe<Scalars['BigInt']>;
  oraclePrice_gte?: Maybe<Scalars['BigInt']>;
  oraclePrice_lte?: Maybe<Scalars['BigInt']>;
  oraclePrice_in?: Maybe<Array<Scalars['BigInt']>>;
  oraclePrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  mratio?: Maybe<Scalars['BigInt']>;
  mratio_not?: Maybe<Scalars['BigInt']>;
  mratio_gt?: Maybe<Scalars['BigInt']>;
  mratio_lt?: Maybe<Scalars['BigInt']>;
  mratio_gte?: Maybe<Scalars['BigInt']>;
  mratio_lte?: Maybe<Scalars['BigInt']>;
  mratio_in?: Maybe<Array<Scalars['BigInt']>>;
  mratio_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pnl?: Maybe<Scalars['BigInt']>;
  pnl_not?: Maybe<Scalars['BigInt']>;
  pnl_gt?: Maybe<Scalars['BigInt']>;
  pnl_lt?: Maybe<Scalars['BigInt']>;
  pnl_gte?: Maybe<Scalars['BigInt']>;
  pnl_lte?: Maybe<Scalars['BigInt']>;
  pnl_in?: Maybe<Array<Scalars['BigInt']>>;
  pnl_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Position_OrderBy {
  Id = 'id',
  Market = 'market',
  Account = 'account',
  PositionType = 'positionType',
  Status = 'status',
  Created = 'created',
  PosIndex = 'posIndex',
  Notional = 'notional',
  Collateral = 'collateral',
  Leverage = 'leverage',
  OpenPrice = 'openPrice',
  ClosePrice = 'closePrice',
  CurrentPrice = 'currentPrice',
  OraclePrice = 'oraclePrice',
  Mratio = 'mratio',
  Pnl = 'pnl'
}

export type Query = {
  __typename?: 'Query';
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketLiquidityPool?: Maybe<MarketLiquidityPool>;
  marketLiquidityPools: Array<MarketLiquidityPool>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  positionMonitor?: Maybe<PositionMonitor>;
  positionMonitors: Array<PositionMonitor>;
  randomStore?: Maybe<RandomStore>;
  randomStores: Array<RandomStore>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryMarketArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMarketsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Market_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Market_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMarketLiquidityPoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMarketLiquidityPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MarketLiquidityPool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MarketLiquidityPool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPositionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Position_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Position_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPositionMonitorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPositionMonitorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PositionMonitor_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PositionMonitor_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRandomStoreArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRandomStoresArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomStore_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomStore_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type RandomStore = {
  __typename?: 'RandomStore';
  id: Scalars['ID'];
};

export type RandomStore_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum RandomStore_OrderBy {
  Id = 'id'
}

export type Subscription = {
  __typename?: 'Subscription';
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketLiquidityPool?: Maybe<MarketLiquidityPool>;
  marketLiquidityPools: Array<MarketLiquidityPool>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  positionMonitor?: Maybe<PositionMonitor>;
  positionMonitors: Array<PositionMonitor>;
  randomStore?: Maybe<RandomStore>;
  randomStores: Array<RandomStore>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionMarketArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMarketsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Market_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Market_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMarketLiquidityPoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMarketLiquidityPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MarketLiquidityPool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MarketLiquidityPool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPositionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Position_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Position_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPositionMonitorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPositionMonitorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PositionMonitor_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PositionMonitor_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomStoreArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomStoresArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomStore_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomStore_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Token = {
  __typename?: 'Token';
  /**  Token address  */
  id: Scalars['ID'];
  /**  Token address  */
  address: Scalars['Bytes'];
  /**  Number of decimals the token uses  */
  decimals: Scalars['Int'];
  /**  Human-readable name of the token  */
  name: Scalars['String'];
  /**  Symbol of the token  */
  symbol: Scalars['String'];
  /**  Associated market  */
  market: Market;
};

export type Token_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  market_not?: Maybe<Scalars['String']>;
  market_gt?: Maybe<Scalars['String']>;
  market_lt?: Maybe<Scalars['String']>;
  market_gte?: Maybe<Scalars['String']>;
  market_lte?: Maybe<Scalars['String']>;
  market_in?: Maybe<Array<Scalars['String']>>;
  market_not_in?: Maybe<Array<Scalars['String']>>;
  market_contains?: Maybe<Scalars['String']>;
  market_not_contains?: Maybe<Scalars['String']>;
  market_starts_with?: Maybe<Scalars['String']>;
  market_not_starts_with?: Maybe<Scalars['String']>;
  market_ends_with?: Maybe<Scalars['String']>;
  market_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Token_OrderBy {
  Id = 'id',
  Address = 'address',
  Decimals = 'decimals',
  Name = 'name',
  Symbol = 'symbol',
  Market = 'market'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type MarketsQueryVariables = Exact<{ [key: string]: never; }>;


export type MarketsQuery = (
  { __typename?: 'Query' }
  & { markets: Array<(
    { __typename?: 'Market' }
    & Pick<Market, 'name' | 'assetSymbol' | 'currentPrice' | 'currentPrice24Change' | 'oraclePrice' | 'oraclePrice24Change' | 'turnover24'>
    & { pool?: Maybe<(
      { __typename?: 'MarketLiquidityPool' }
      & Pick<MarketLiquidityPool, 'stackedLiquidity'>
    )> }
  )> }
);


export const MarketsDocument = gql`
    query markets {
  markets {
    name
    assetSymbol
    currentPrice
    currentPrice24Change
    oraclePrice
    oraclePrice24Change
    pool {
      stackedLiquidity
    }
    turnover24
  }
}
    `;

/**
 * __useMarketsQuery__
 *
 * To run a query within a React component, call `useMarketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMarketsQuery(baseOptions?: Apollo.QueryHookOptions<MarketsQuery, MarketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketsQuery, MarketsQueryVariables>(MarketsDocument, options);
      }
export function useMarketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketsQuery, MarketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketsQuery, MarketsQueryVariables>(MarketsDocument, options);
        }
export type MarketsQueryHookResult = ReturnType<typeof useMarketsQuery>;
export type MarketsLazyQueryHookResult = ReturnType<typeof useMarketsLazyQuery>;
export type MarketsQueryResult = Apollo.QueryResult<MarketsQuery, MarketsQueryVariables>;