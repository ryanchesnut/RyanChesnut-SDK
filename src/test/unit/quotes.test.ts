import { getQuotesByMovieId } from "../../services";
import { LotrSDK } from "../../core";
import { QuoteResponse } from "../../types/Quote";
import { get } from "../../utils/request";
import { baseUrl } from "../../constants/config";
import { mockQuote } from "./mockQuote";

jest.mock("../../utils/request");

describe("getQuotesByMovieId", () => {
  const mockApiKey = "my-api-key";
  const mockApiVersion = "v1";
  const mockMovieId = 123;
  const mockQueryParams = {
    limit: 10,
    page: 1,
    sort: "name:asc",
  };
  const mockSetup: LotrSDK = new LotrSDK("my-api-key", "v1");
  const mockResponse: QuoteResponse = mockQuote;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should make a GET request to the correct URL with the API key in the headers", async () => {
    (get as jest.MockedFunction<typeof get>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    await getQuotesByMovieId(mockSetup, mockMovieId, mockQueryParams);

    expect(get).toHaveBeenCalledWith({
      url: `${baseUrl}/${mockApiVersion}/movie/${mockMovieId}/quote?limit=${mockQueryParams.limit}&page=${mockQueryParams.page}&sort=${mockQueryParams.sort}`,
      headers: { Authorization: `Bearer ${mockApiKey}` },
    });
  });

  it("should make a GET request to the correct URL with only the movie ID if no query params are provided", async () => {
    (get as jest.MockedFunction<typeof get>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    await getQuotesByMovieId(mockSetup, mockMovieId, null);

    expect(get).toHaveBeenCalledWith({
      url: `${baseUrl}/${mockApiVersion}/movie/${mockMovieId}/quote`,
      headers: { Authorization: `Bearer ${mockApiKey}` },
    });
  });

  it("should throw an error if no setup is provided", async () => {
    await expect(
      getQuotesByMovieId(null, mockMovieId, mockQueryParams)
    ).rejects.toThrowError("No setup found");
  });
});
