import React, { SyntheticEvent } from "react";
import { CharacterInfoFragment } from "./gen-types";

interface Props {
  character: CharacterInfoFragment;
  select: (e: SyntheticEvent) => void;
}

const CharacterListItem: React.FC<Props> = ({ character, select }) => {
  return (
    <li>
      <strong>
        <a href="#" onClick={select}>
          {character.name}
        </a>
        {character.culture && ` (${character.culture})`}
      </strong>
      <div>{character.playedBy && `Played by ${character.playedBy}`}</div>
      <div>
        {character.allegiances &&
          character.allegiances.length > 0 &&
          `Loyal to ${character.allegiances
            .map(allegiance => allegiance.name)
            .join(", ")}`}
      </div>
      <div>{character.isAlive ? "Living" : "Dead"}</div>
    </li>
  );
};

export default CharacterListItem;
