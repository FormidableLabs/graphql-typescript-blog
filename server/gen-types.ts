export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  id: Scalars["ID"];
  name: Scalars["String"];
  releaseDate: Scalars["String"];
};

export type Character = {
  id: Scalars["ID"];
  name: Scalars["String"];
  culture?: Maybe<Scalars["String"]>;
  titles?: Maybe<Array<Scalars["String"]>>;
  aliases?: Maybe<Array<Scalars["String"]>>;
  born?: Maybe<Scalars["String"]>;
  died?: Maybe<Scalars["String"]>;
  father?: Maybe<Character>;
  mother?: Maybe<Character>;
  spouse?: Maybe<Character>;
  children?: Maybe<Array<Character>>;
  allegiances?: Maybe<Array<House>>;
  appearedIn: Array<TvSeason>;
  isAlive: Scalars["Boolean"];
  playedBy?: Maybe<Scalars["String"]>;
  books?: Maybe<Array<Book>>;
};

export type House = {
  id: Scalars["ID"];
  name: Scalars["String"];
  titles?: Maybe<Array<Scalars["String"]>>;
  members: Array<Character>;
  slogan?: Maybe<Scalars["String"]>;
  overlord?: Maybe<Character>;
  currentLord?: Maybe<Character>;
  founder?: Maybe<Character>;
  ancestralWeapons?: Maybe<Array<Scalars["String"]>>;
  coatOfArms?: Maybe<Scalars["String"]>;
  seats?: Maybe<Array<Scalars["String"]>>;
};

export type Query = {
  getCharacters: Array<Character>;
  getCharacter?: Maybe<Character>;
  getHouses: Array<House>;
  getHouse?: Maybe<House>;
};

export type QueryGetCharactersArgs = {
  sortDirection?: Maybe<SortDirection>;
};

export type QueryGetCharacterArgs = {
  characterId: Scalars["ID"];
};

export type QueryGetHousesArgs = {
  sortDirection?: Maybe<SortDirection>;
};

export type QueryGetHouseArgs = {
  houseId: Scalars["ID"];
};

export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC"
}

export type TvSeason = {
  id: Scalars["ID"];
  startDate: Scalars["String"];
  endDate: Scalars["String"];
  name: Scalars["String"];
  characters: Array<Character>;
};
import { Context } from "./";

import { GraphQLResolveInfo } from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  SortDirection: any;
  Character: any;
  ID: any;
  String: any;
  House: any;
  TvSeason: any;
  Boolean: any;
  Book: any;
};

export type BookResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Book"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type CharacterResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Character"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  culture?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  titles?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  aliases?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  born?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  died?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  father?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  mother?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  spouse?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  children?: Resolver<
    Maybe<Array<ResolversTypes["Character"]>>,
    ParentType,
    ContextType
  >;
  allegiances?: Resolver<
    Maybe<Array<ResolversTypes["House"]>>,
    ParentType,
    ContextType
  >;
  appearedIn?: Resolver<
    Array<ResolversTypes["TvSeason"]>,
    ParentType,
    ContextType
  >;
  isAlive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  playedBy?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  books?: Resolver<
    Maybe<Array<ResolversTypes["Book"]>>,
    ParentType,
    ContextType
  >;
};

export type HouseResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["House"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  titles?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  members?: Resolver<
    Array<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  slogan?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  overlord?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  currentLord?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  founder?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  ancestralWeapons?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  coatOfArms?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  seats?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Query"]
> = {
  getCharacters?: Resolver<
    Array<ResolversTypes["Character"]>,
    ParentType,
    ContextType,
    QueryGetCharactersArgs
  >;
  getCharacter?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType,
    QueryGetCharacterArgs
  >;
  getHouses?: Resolver<
    Array<ResolversTypes["House"]>,
    ParentType,
    ContextType,
    QueryGetHousesArgs
  >;
  getHouse?: Resolver<
    Maybe<ResolversTypes["House"]>,
    ParentType,
    ContextType,
    QueryGetHouseArgs
  >;
};

export type TvSeasonResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["TvSeason"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  characters?: Resolver<
    Array<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = Context> = {
  Book?: BookResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  House?: HouseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TvSeason?: TvSeasonResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
