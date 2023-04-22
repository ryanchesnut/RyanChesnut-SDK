import { get } from "../utils/request";
import { LotrSDK } from "../core/setup";
import { baseUrl } from "../constants/config";
import { MovieListResponse } from "../types/Movie";

export const getOneLotrMovie = async (
  setup: LotrSDK,
  movieId: number
): Promise<MovieListResponse> => {
  if (!setup || Object.keys(setup).length < 0) {
    throw Error("No setup found");
  }
  const url = `${baseUrl}/${setup.getApiVersion()}/movie/${movieId}`;

  return get({
    url,
    headers: { Authorization: `Bearer ${setup.getApiKey()}` },
  }) as Promise<MovieListResponse>;
};
