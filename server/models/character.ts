import { characters, Character } from "../data/characters";

export const getAll = (): Character[] => {
  return characters;
};

export const getById = (characterId: number): Character | void => {
  return characters.find(character => character.id === characterId);
};

export const getByHouseId = (houseId: number): Character[] => {
  return characters.filter(character => {
    if (!character.allegiances) return false;
    return character.allegiances.includes(houseId);
  });
};
