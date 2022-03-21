import {APIDojo_IMDb} from "../classes/APIDojo_IMDb";

const api = new APIDojo_IMDb(process.env.API_DOJO_API_KEY);

it('return overview results', async ()=> {
   
    const data = await api.getOverview({tconst: 'tt0944947'});

    expect(data).toBeTruthy();
});

it('return video playback results', async ()=> {

    const data = await api.getVideoPlayback({viconst: 'vi1015463705'});

    expect(data).toBeTruthy();
});

it('return title images', async ()=> {

    const data = await api.getImages({tconst: 'tt0944947'});

    expect(data).toBeTruthy();
});

it('return videos', async ()=> {

    const data = await api.getVideos({tconst: 'tt0944947'});

    expect(data).toBeTruthy();
});

it('return popular movies', async ()=> {

    const data = await api.getPopularMovies({});

    expect(data![0]).toBeTruthy();
});

it('return popular shows', async ()=> {

    const data = await api.getPopularShows({});

    expect(data![0]).toBeTruthy();
});