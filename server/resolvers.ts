import {
  QueryResolvers,
  CharacterResolvers,
  TvSeasonResolvers,
  HouseResolvers
} from "./gen-types";

interface Resolvers {
  Query: QueryResolvers;
  Character: CharacterResolvers;
  TvSeason: TvSeasonResolvers;
  House: HouseResolvers;
}

export const resolvers: Resolvers = {
  Query: {
    getCharacters: (root, args, ctx) => {
      return ctx.models.character.getAll(args.sortDirection);
    },
    getCharacter: (root, args, ctx) => {
      return ctx.models.character.getById(parseInt(args.characterId));
    },
    getHouses: (root, args, ctx) => {
      return ctx.models.house.getAll(args.sortDirection);
    },
    getHouse: (root, args, ctx) => {
      return ctx.models.house.getById(parseInt(args.houseId));
    }
  },
  Character: {
    allegiances: (character, args, ctx) => {
      if (!character.allegiances) return null;
      return character.allegiances.map((allegianceId: number) =>
        ctx.models.house.getById(allegianceId)
      );
    },
    appearedIn: (character, args, ctx) => {
      if (!character.tvSeries) return [];
      return character.tvSeries.map((seriesId: string) =>
        ctx.models.tvSeries.getById(seriesId)
      );
    },
    isAlive: (character, args, ctx) => {
      return !character.died;
    },
    father: (character, args, ctx) => {
      if (!character.fatherId) return null;
      return ctx.models.character.getById(character.fatherId);
    },
    mother: (character, args, ctx) => {
      if (!character.motherId) return null;
      return ctx.models.character.getById(character.motherId);
    },
    spouse: (character, args, ctx) => {
      if (!character.spouseId) return null;
      return ctx.models.character.getById(character.spouseId);
    },
    children: (character, args, ctx) => {
      if (!character.childrenIds) return null;
      return character.childrenIds.map((childId: number) =>
        ctx.models.character.getById(childId)
      );
    },
    playedBy: (character, args, ctx) => {
      if (!character.playedBy || character.playedBy.length === 0) return null;
      return character.playedBy[0];
    },
    books: (character, args, ctx) => {
      if (!character.bookIds) return null;
      return character.bookIds.map((bookId: number) =>
        ctx.models.book.getById(bookId)
      );
    }
  },
  TvSeason: {
    name: (tvSeries, args, ctx) => {
      return tvSeries.id;
    }
  },
  House: {
    members: (house, args, ctx) => {
      return ctx.models.character.getByHouseId(house.id);
    },
    overlord: (house, args, ctx) => {
      if (!house.overlordId) return null;
      return ctx.models.character.getById(house.overlordId);
    },
    currentLord: (house, args, ctx) => {
      if (!house.currentLordId) return null;
      return ctx.models.character.getById(house.currentLordId);
    },
    founder: (house, args, ctx) => {
      if (!house.founderId) return null;
      return ctx.models.character.getById(house.founderId);
    }
  }
};
