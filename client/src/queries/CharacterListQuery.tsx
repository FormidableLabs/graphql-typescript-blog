import gql from "graphql-tag";

export const CharacterListQuery = gql`
  query CharacterList {
    getCharacters(sortDirection: ASC) {
      ...CharacterInfo
    }
  }
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
