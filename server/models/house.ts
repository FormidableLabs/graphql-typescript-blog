import { houses, House } from "../data/houses";

export const getAll = (
  sortDirection: "ASC" | "DESC" | null = "ASC"
): House[] => {
  return houses.sort((houseA, houseB) => {
    let sortModifier = 1;
    if (sortDirection === "DESC") sortModifier = -1;
    if (houseA.name < houseB.name) return -1 * sortModifier;
    if (houseA.name > houseB.name) return 1 * sortModifier;

    return 0;
  });
};

export const getById = (houseId: number): House | void => {
  return houses.find(house => house.id === houseId);
};
