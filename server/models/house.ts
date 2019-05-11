import { houses, House } from "../data/houses";

export const getAll = (): House[] => {
  return houses;
};

export const getById = (houseId: number): House | void => {
  return houses.find(house => house.id === houseId);
};
