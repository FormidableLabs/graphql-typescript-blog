import { ApolloServer } from "apollo-server";
import * as bookModel from "./models/book";
import * as characterModel from "./models/character";
import * as houseModel from "./models/house";
import * as tvSeriesModel from "./models/tv-series";
import { resolvers } from "./resolvers";
import { schema } from "./schema";

export interface Context {
  models: {
    character: typeof characterModel;
    house: typeof houseModel;
    tvSeries: typeof tvSeriesModel;
    book: typeof bookModel;
  };
}

const context: Context = {
  models: {
    character: characterModel,
    house: houseModel,
    tvSeries: tvSeriesModel,
    book: bookModel
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers as any,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
