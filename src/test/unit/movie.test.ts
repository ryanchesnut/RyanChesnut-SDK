// getAllLotrMovies.test.ts

// import { get } from "@utils/index";
// import { LotrSDK } from "@core/setup";
// import { baseUrl } from "@constants/config";
// import { getAllLotrMovies } from "@services/index";

jest.mock("@utils/index");

// describe("getAllLotrMovies", () => {
//   const apiKey = "testApiKey";
//   const version = "v2";
//   const setup = new LotrSDK(apiKey, version);

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should call request.get with the correct URL and headers", async () => {
//     const mockGet = jest
//       .spyOn(request, "get")
//       .mockResolvedValueOnce({ data: [] });
//     const queryParams = { limit: 10, page: 1 };
//     const expectedUrl = `${baseUrl}/${version}/movies?limit=${queryParams.limit}&page=${queryParams.page}`;

//     await getAllLotrMovies(setup, queryParams);

//     expect(mockGet).toHaveBeenCalledWith({
//       url: expectedUrl,
//       headers: { Authorization: `Bearer ${apiKey}` },
//     });
//   });

//   it("should call request.get with the correct URL and headers when queryParams is null", async () => {
//     const mockGet = jest
//       .spyOn(request, "get")
//       .mockResolvedValueOnce({ data: [] });
//     const queryParams = null;
//     const expectedUrl = `${baseUrl}/${version}/movies`;

//     await getAllLotrMovies(setup, queryParams);

//     expect(mockGet).toHaveBeenCalledWith({
//       url: expectedUrl,
//       headers: { Authorization: `Bearer ${apiKey}` },
//     });
//   });
// });
