import {
  getAllLotrMovies,
  getOneLotrMovie,
  getQuotesByMovieId,
} from "@services/index";
import { LotrSDK } from "@core/setup";

export const examples = async () => {
  // Setup the SDK object
  const lotrSDK = new LotrSDK("<your-token>", "v2");
  // Get all movies, not pagenated
  let movies = await getAllLotrMovies(lotrSDK, null);
  console.info(movies);
  // Get movies pagenated
  let pagenatedMovieChunk = await getAllLotrMovies(lotrSDK, {
    limit: 10,
    page: 1,
    offset: 0,
  });
  console.info(pagenatedMovieChunk);

  // Get movies pagenated and sorted: asc or desc
  let pagenatedSortedMovieChunk = await getAllLotrMovies(lotrSDK, {
    limit: 10,
    page: 1,
    offset: 0,
    sort: "movie:asc",
  });
  console.info(pagenatedSortedMovieChunk);
  // Get one movie by id
  const id = 1;
  let oneMovie = await getOneLotrMovie(lotrSDK, id);
  console.info(oneMovie);

  // Get all movie quotes by movie id
  let movieQuotes = await getQuotesByMovieId(lotrSDK, id, null);
  console.info(movieQuotes);
};
