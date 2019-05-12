import { Context } from "./";
import { Character } from "./data/characters";
import { TvSeries } from "./data/tv-series";
import { House } from "./data/houses";

type ResolverFn = (parent: any, args: any, ctx: Context) => any;
interface ResolverMap {
  [field: string]: ResolverFn;
}
interface Resolvers {
  Query: ResolverMap;
  Character: ResolverMap;
  TvSeason: ResolverMap;
  House: ResolverMap;
}

export const resolvers: Resolvers = {
  Query: {
    getCharacters: (root, args: { sortDirection: "ASC" | "DESC" }, ctx) => {
      return ctx.models.character.getAll(args.sortDirection);
    },
    getCharacter: (root, args: { characterId: string }, ctx) => {
      return ctx.models.character.getById(parseInt(args.characterId));
    },
    getHouses: (root, args: { sortDirection: "ASC" | "DESC" }, ctx) => {
      return ctx.models.house.getAll(args.sortDirection);
    },
    getHouse: (root, args: { houseId: string }, ctx) => {
      return ctx.models.house.getById(parseInt(args.houseId));
    }
  },
  Character: {
    allegiances: (character: Character, args, ctx) => {
      if (!character.allegiances) return null;
      return character.allegiances.map(allegianceId =>
        ctx.models.house.getById(allegianceId)
      );
    },
    appearedIn: (character: Character, args, ctx) => {
      if (!character.tvSeries) return [];
      return character.tvSeries.map(seriesId =>
        ctx.models.tvSeries.getById(seriesId)
      );
    },
    isAlive: (character: Character, args, ctx) => {
      return !character.died;
    },
    father: (character: Character, args, ctx) => {
      if (!character.fatherId) return null;
      return ctx.models.character.getById(character.fatherId);
    },
    mother: (character: Character, args, ctx) => {
      if (!character.motherId) return null;
      return ctx.models.character.getById(character.motherId);
    },
    spouse: (character: Character, args, ctx) => {
      if (!character.spouseId) return null;
      return ctx.models.character.getById(character.spouseId);
    },
    children: (character: Character, args, ctx) => {
      if (!character.childrenIds) return null;
      return character.childrenIds.map(childId =>
        ctx.models.character.getById(childId)
      );
    },
    playedBy: (character: Character, args, ctx) => {
      if (!character.playedBy || character.playedBy.length === 0) return null;
      return character.playedBy[0];
    },
    books: (character: Character, args, ctx) => {
      if (!character.bookIds) return null;
      return character.bookIds.map(bookId => ctx.models.book.getById(bookId));
    }
  },
  TvSeason: {
    name: (tvSeries: TvSeries, args, ctx) => {
      return tvSeries.id;
    }
  },
  House: {
    members: (house: House, args, ctx) => {
      return ctx.models.character.getByHouseId(house.id);
    },
    overlord: (house: House, args, ctx) => {
      if (!house.overlordId) return null;
      return ctx.models.character.getById(house.overlordId);
    },
    currentLord: (house: House, args, ctx) => {
      if (!house.currentLordId) return null;
      return ctx.models.character.getById(house.currentLordId);
    },
    founder: (house: House, args, ctx) => {
      if (!house.founderId) return null;
      return ctx.models.character.getById(house.founderId);
    }
  }
};
