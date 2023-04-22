# LOTR SDK README

Welcome to the LOTR SDK! This SDK provides a simple and convenient way to interact with the the-one-api api using javascript.

### Installation

To install the Node SDK, simply run the following command:
`npm install rchesnut-lotr-sdk `
or
`yarn add rchesnut-lotr-sdk`

### Getting Started

To use the SDK in your project, import the SDK and create a new instance with your API key:

```
import {
  LotrSDK,
} from "rchesnut-lotr-sdk";

let setup = new LotrSDK("<your-api-key>", "v2");
```

With the SDK initialized, you can now use the various methods available to interact with our API by passing the setup object.
For example:

```
const allMovies = await getAllLotrMovies(setup);
console.log(allMovies);
```

### Methods

### The SDK provides the following methods:

Retrieves all the LOTR movies.

```
  const allMovies = await getAllLotrMovies(setup);
  console.log(allMovies);
```

Retrieves one LOTR movie.

```
  const oneMovie = await getOneLotrMovie(setup, "5cd95395de30eff6ebccde5a");
  console.log(oneMovie);
```

Retrieves all quotes from one LOTR movie.
Note: you can pass limit, offset, page, sort, and filter to any of the functions

```
 const movieQuotes = await getQuotesByMovieId(
    setup,
    "5cd95395de30eff6ebccde5c",
    { limit: 1 }
  );
  console.log(movieQuotes);
```

Please the API docs for more information
https://the-one-api.dev/documentation

Support
If you encounter any issues while using this SDK, please contact us for assistance.
