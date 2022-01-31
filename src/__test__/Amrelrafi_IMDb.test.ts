import { Amrelrafie_IMDb } from "../classes/Amrelrafie_IMDb";


const api = new Amrelrafie_IMDb(process.env.AMRELRAFI_IMDB_KEY);

it('return box office movies', async ()=> {

    const data = await api.getCurrentBoxOfficeMovies();

    expect(data).toBeTruthy();
});

it('return popular shows', async ()=> {

    const data = await api.getPopularTVShows();
    
    expect(data).toBeTruthy();
});

