import { characters, Character } from "../data/characters";

export const getAll = (
  sortDirection: "ASC" | "DESC" | null = "ASC"
): Character[] => {
  return characters
    .filter(character => character.name !== "")
    .sort((characterA, characterB) => {
      let sortModifier = 1;
      if (sortDirection === "DESC") sortModifier = -1;
      if (characterA.name < characterB.name) return -1 * sortModifier;
      if (characterA.name > characterB.name) return 1 * sortModifier;

      return 0;
    });
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
