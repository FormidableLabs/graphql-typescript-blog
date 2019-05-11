import { Context } from "./";
import { Character } from "./data/characters";
import { TvSeries } from "./data/tv-series";
import { House } from "./data/houses";

export const resolvers = {
  Query: {
    getCharacters: (
      root: never,
      args: { sortDirection: "ASC" | "DESC" },
      ctx: Context
    ) => {
      return ctx.models.character.getAll();
    },
    getCharacter: (
      root: never,
      args: { characterId: string },
      ctx: Context
    ) => {
      return ctx.models.character.getById(parseInt(args.characterId));
    },
    getHouses: (
      root: never,
      args: { sortDirection: "ASC" | "DESC" },
      ctx: Context
    ) => {
      return ctx.models.house.getAll();
    },
    getHouse: (root: never, args: { houseId: string }, ctx: Context) => {
      return ctx.models.house.getById(parseInt(args.houseId));
    }
  },
  Character: {
    allegiances: (character: Character, args: never, ctx: Context) => {
      if (!character.allegiances) return null;
      return character.allegiances.map(allegianceId =>
        ctx.models.house.getById(allegianceId)
      );
    },
    appearedIn: (character: Character, args: never, ctx: Context) => {
      if (!character.tvSeries) return [];
      return character.tvSeries.map(seriesId =>
        ctx.models.tvSeries.getById(seriesId)
      );
    },
    isAlive: (character: Character, args: never, ctx: Context) => {
      return !character.died;
    },
    father: (character: Character, args: never, ctx: Context) => {
      if (!character.fatherId) return null;
      return ctx.models.character.getById(character.fatherId);
    },
    mother: (character: Character, args: never, ctx: Context) => {
      if (!character.motherId) return null;
      return ctx.models.character.getById(character.motherId);
    },
    spouse: (character: Character, args: never, ctx: Context) => {
      if (!character.spouseId) return null;
      return ctx.models.character.getById(character.spouseId);
    },
    children: (character: Character, args: never, ctx: Context) => {
      if (!character.childrenIds) return null;
      return character.childrenIds.map(childId =>
        ctx.models.character.getById(childId)
      );
    },
    playedBy: (character: Character, args: never, ctx: Context) => {
      if (!character.playedBy || character.playedBy.length === 0) return null;
      return character.playedBy[0];
    },
    books: (character: Character, args: never, ctx: Context) => {
      if (!character.bookIds) return null;
      return character.bookIds.map(bookId => ctx.models.book.getById(bookId));
    }
  },
  TvSeason: {
    name: (tvSeries: TvSeries, args: never, ctx: Context) => {
      return tvSeries.id;
    }
  },
  House: {
    members: (house: House, args: never, ctx: Context) => {
      return ctx.models.character.getByHouseId(house.id);
    },
    overlord: (house: House, args: never, ctx: Context) => {
      if (!house.overlordId) return null;
      return ctx.models.character.getById(house.overlordId);
    },
    currentLord: (house: House, args: never, ctx: Context) => {
      if (!house.currentLordId) return null;
      return ctx.models.character.getById(house.currentLordId);
    },
    founder: (house: House, args: never, ctx: Context) => {
      if (!house.founderId) return null;
      return ctx.models.character.getById(house.founderId);
    }
  }
};
