import React, { SyntheticEvent } from "react";
import CharacterListItem from "./CharacterListItem";
import "./CharacterList.css";
import { CharacterListComponent } from "./gen-types";

interface Props {
  setSelectedCharacter: (characterId: number) => void;
}

const CharacterList: React.FC<Props> = ({ setSelectedCharacter }) => {
  return (
    <div className="CharacterList">
      <h2>All Characters</h2>
      <CharacterListComponent>
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
      </CharacterListComponent>
    </div>
  );
};

export default CharacterList;
