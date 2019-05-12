import gql from "graphql-tag";

export const CharacterDetailQuery = gql`
  query CharacterDetail($id: ID!) {
    getCharacter(characterId: $id) {
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
  }
`;
