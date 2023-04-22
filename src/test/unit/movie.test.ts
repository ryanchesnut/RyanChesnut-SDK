import { getAllLotrMovies, getOneLotrMovie } from "../../services/index";
import { LotrSDK } from "../../core/setup";
import { MovieListResponse } from "../../types/Movie";
import { get } from "../../utils/request";
import { mockMovies } from "./mockMovie";

jest.mock("../../utils/request");

describe("getAllLotrMovies", () => {
  const setup: LotrSDK = new LotrSDK("my-api-key", "v1");

  it("should throw an error if no setup is provided", async () => {
    await expect(getAllLotrMovies(undefined, null)).rejects.toThrowError(
      "No setup found"
    );
  });

  it("should call get with the correct URL and headers", async () => {
    const queryParams = { limit: 10, page: 1 };
    const expectedUrl = "https://the-one-api.dev/v1/movie?limit=10&page=1";
    const expectedHeaders = { Authorization: "Bearer my-api-key" };
    const expectedResponse: MovieListResponse = mockMovies as MovieListResponse;
    (get as jest.MockedFunction<typeof get>).mockResolvedValue(
      expectedResponse
    );

    const result = await getAllLotrMovies(setup, queryParams);

    expect(get).toHaveBeenCalledWith({
      url: expectedUrl,
      headers: expectedHeaders,
    });
    expect(result).toEqual(expectedResponse);
  });
});

describe("getOneLotrMovie", () => {
  const mockMovieId = "5cd95395de30eff6ebccde5a";
  (global as any).fetch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw an error if no setup object is provided", async () => {
    await expect(getOneLotrMovie(undefined, mockMovieId)).rejects.toThrow(
      "No setup found"
    );
  });
});
