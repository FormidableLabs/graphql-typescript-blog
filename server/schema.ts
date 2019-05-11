import gql from "graphql-tag";

export const schema = gql`
  type Query {
    getCharacters(sortDirection: SortDirection): [Character!]!
    getCharacter(characterId: ID!): Character
    getHouses(sortDirection: SortDirection): [House!]!
    getHouse(houseId: ID!): House
  }

  type Character {
    id: ID!
    name: String!
    culture: String
    titles: [String!]
    aliases: [String!]
    born: String
    died: String
    father: Character
    mother: Character
    spouse: Character
    children: [Character!]
    allegiances: [House!]
    appearedIn: [TvSeason!]!
    isAlive: Boolean!
    playedBy: String
    books: [Book!]
  }

  type TvSeason {
    id: ID!
    startDate: String!
    endDate: String!
    name: String!
    characters: [Character!]!
  }

  type House {
    id: ID!
    name: String!
    titles: [String!]
    members: [Character!]!
    slogan: String
    overlord: Character
    currentLord: Character
    founder: Character
    ancestralWeapons: [String!]
    coatOfArms: String
    seats: [String!]
  }

  type Book {
    id: ID!
    name: String!
    releaseDate: String!
  }

  enum SortDirection {
    ASC
    DESC
  }
`;
