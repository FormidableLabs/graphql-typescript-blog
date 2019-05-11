import { tvSeries, TvSeries } from "../data/tv-series";

export const getById = (seriesId: string): TvSeries | void => {
  return tvSeries.find(tvSeries => tvSeries.id === seriesId);
};
