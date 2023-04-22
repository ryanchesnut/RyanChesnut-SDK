import { get } from "../utils/request";
import { LotrSDK } from "../core/setup";
import { baseUrl } from "../constants/config";
import { QuoteResponse } from "../types/Quote";

type QueryParams = {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: string;
  filter?: string;
};

export const getQuotesByMovieId = async (
  setup: LotrSDK,
  movieId: number,
  queryParams: QueryParams | null | undefined
): Promise<QuoteResponse> => {
  if (!setup || Object.keys(setup).length < 0) {
    throw Error("No setup found");
  }

  let url = `${baseUrl}/${setup.getApiVersion()}/movie/${movieId}/quote`;
  if (queryParams && Object.keys(queryParams).length > 0) {
    for (const key in queryParams) {
      switch (key) {
        case "limit":
          url += `?limit=${queryParams[key]}`;
          break;
        case "page":
          url += `&page=${queryParams[key]}`;
          break;
        case "offset":
          url += `&offset=${queryParams[key]}`;
          break;
        case "sort":
          url += `&sort=${queryParams[key]}`;
          break;
        case "filter":
          url += `&filter=${queryParams[key]}`;
          break;
        default:
          break;
      }
    }
  }

  return get({
    url,
    headers: { Authorization: `Bearer ${setup.getApiKey()}` },
  }) as Promise<QuoteResponse>;
};
