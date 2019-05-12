import gql from "graphql-tag";

export const CharacterListQuery = gql`
  {
    getCharacters(sortDirection: ASC) {
      id
      name
      playedBy
      culture
      allegiances {
        name
      }
      isAlive
    }
  }
`;
