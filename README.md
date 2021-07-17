# RapidAPI IMDB API Wrappers

This package is a wrapper around IMDB APIs on [RapidAPI](https://rapidapi.com)

Right now has limited support for [API DOJO IMDb API](https://rapidapi.com/apidojo/api/imdb8/) and [RapidAPI's IMDb API](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/).

Uses axios as a dependency to make the api requests

Install

```bash
$ npm install rapid-api-imdb
```

### RapidAPI IMDB API

```ts
import {RA_IMDb} from 'rapid-api-imdb';

const api = new RA_IMDb(process.env.RA_API_KEY);

(async function(){
    const data = await api.search({s: 'Avengers Endgame'});

    console.log(data);
})();


```

### API Dojo IMDB API

```ts
import {APIDojo_IMDb} from 'rapid-api-imdb';

const api = new APIDojo_IMDb(process.env.API_DOJO_API_KEY);

(async function(){
const data = await api.getOverview({tconst: 'tt0944947'});

console.log(data);
})();

```

Not affiliated with RapidAPI.