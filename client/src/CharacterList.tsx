import React, { SyntheticEvent } from "react";
import { Query } from "react-apollo";
import { CharacterListQuery } from "./queries/CharacterListQuery";
import CharacterListItem from "./CharacterListItem";
import "./CharacterList.css";

interface Props {
  setSelectedCharacter: (characterId: number) => void;
}

export interface Character {
  id: string;
  name: string;
  playedBy: string;
  culture?: string;
  allegiances?: Array<{ name: string }>;
  isAlive: boolean;
}

interface Data {
  getCharacters: Character[];
}

const CharacterList: React.FC<Props> = ({ setSelectedCharacter }) => {
  return (
    <div className="CharacterList">
      <h2>All Characters</h2>
      <Query<Data> query={CharacterListQuery}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error || !data) return `Error!`;

          return (
            <ul>
              {data.getCharacters.map(character => (
                <CharacterListItem
                  key={character.id}
                  character={character}
                  select={(e: SyntheticEvent) => {
                    e.preventDefault();
                    setSelectedCharacter(parseInt(character.id));
                    window.scrollTo(0, 0);
                  }}
                />
              ))}
            </ul>
          );
        }}
      </Query>
    </div>
  );
};

export default CharacterList;
