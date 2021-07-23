import {RA_IMDb} from "../classes/RA_IMDb";

const api = new RA_IMDb(process.env.RA_API_KEY);

it('return search results', async ()=> {

    const data = await api.search({s: 'Avengers Endgame'});

    expect(data).toBeTruthy();
});

it('return a movie', async ()=> {

    const data = await api.getOverview({i: 'tt4154796'});
    
    expect(data).toBeTruthy();
});

