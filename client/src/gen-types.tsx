/* eslint-disable */

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
export type CharacterDetailQueryVariables = {
  id: Scalars["ID"];
};

export type CharacterDetailQuery = { __typename?: "Query" } & {
  getCharacter: Maybe<
    { __typename?: "Character" } & CharacterDetailFieldsFragment
  >;
};

export type CharacterDetailFieldsFragment = { __typename?: "Character" } & Pick<
  Character,
  | "name"
  | "playedBy"
  | "culture"
  | "titles"
  | "aliases"
  | "born"
  | "died"
  | "isAlive"
> & {
    allegiances: Maybe<Array<{ __typename?: "House" } & Pick<House, "name">>>;
    father: Maybe<
      { __typename?: "Character" } & Pick<Character, "id" | "name">
    >;
    mother: Maybe<
      { __typename?: "Character" } & Pick<Character, "id" | "name">
    >;
    spouse: Maybe<
      { __typename?: "Character" } & Pick<Character, "id" | "name">
    >;
    children: Maybe<
      Array<{ __typename?: "Character" } & Pick<Character, "id" | "name">>
    >;
    appearedIn: Array<{ __typename?: "TvSeason" } & Pick<TvSeason, "name">>;
    books: Maybe<Array<{ __typename?: "Book" } & Pick<Book, "id" | "name">>>;
  };

export type CharacterListQueryVariables = {};

export type CharacterListQuery = { __typename?: "Query" } & {
  getCharacters: Array<{ __typename?: "Character" } & CharacterInfoFragment>;
};

export type CharacterInfoFragment = { __typename?: "Character" } & Pick<
  Character,
  "id" | "name" | "playedBy" | "culture" | "isAlive"
> & {
    allegiances: Maybe<Array<{ __typename?: "House" } & Pick<House, "name">>>;
  };

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const CharacterDetailFieldsFragmentDoc = gql`
  fragment CharacterDetailFields on Character {
    name
    playedBy
    culture
    titles
    aliases
    born
    died
    allegiances {
      name
    }
    isAlive
    father {
      id
      name
    }
    mother {
      id
      name
    }
    spouse {
      id
      name
    }
    children {
      id
      name
    }
    appearedIn {
      name
    }
    books {
      id
      name
    }
  }
`;
export const CharacterInfoFragmentDoc = gql`
  fragment CharacterInfo on Character {
    id
    name
    playedBy
    culture
    allegiances {
      name
    }
    isAlive
  }
`;
export const CharacterDetailDocument = gql`
  query CharacterDetail($id: ID!) {
    getCharacter(characterId: $id) {
      ...CharacterDetailFields
    }
  }
  ${CharacterDetailFieldsFragmentDoc}
`;

export const CharacterDetailComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<
        CharacterDetailQuery,
        CharacterDetailQueryVariables
      >,
      "query"
    >,
    "variables"
  > & { variables: CharacterDetailQueryVariables }
) => (
  <ReactApollo.Query<CharacterDetailQuery, CharacterDetailQueryVariables>
    query={CharacterDetailDocument}
    {...props}
  />
);

export type CharacterDetailProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CharacterDetailQuery, CharacterDetailQueryVariables>
> &
  TChildProps;
export function withCharacterDetail<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CharacterDetailQuery,
    CharacterDetailQueryVariables,
    CharacterDetailProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CharacterDetailQuery,
    CharacterDetailQueryVariables,
    CharacterDetailProps<TChildProps>
  >(CharacterDetailDocument, {
    alias: "withCharacterDetail",
    ...operationOptions
  });
}
export const CharacterListDocument = gql`
  query CharacterList {
    getCharacters(sortDirection: ASC) {
      ...CharacterInfo
    }
  }
  ${CharacterInfoFragmentDoc}
`;

export const CharacterListComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<CharacterListQuery, CharacterListQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: CharacterListQueryVariables }
) => (
  <ReactApollo.Query<CharacterListQuery, CharacterListQueryVariables>
    query={CharacterListDocument}
    {...props}
  />
);

export type CharacterListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CharacterListQuery, CharacterListQueryVariables>
> &
  TChildProps;
export function withCharacterList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CharacterListQuery,
    CharacterListQueryVariables,
    CharacterListProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CharacterListQuery,
    CharacterListQueryVariables,
    CharacterListProps<TChildProps>
  >(CharacterListDocument, {
    alias: "withCharacterList",
    ...operationOptions
  });
}
