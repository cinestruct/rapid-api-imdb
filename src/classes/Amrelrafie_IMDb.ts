import RapidAPI from "./RapidAPI";
import { Amerlrafie_CurrentBoxOfficeResponse, Amerlrafie_PopularTVShowsResponse } from "../types/api_responses";

const BASE_URL = 'https://movies-tvshows-data-imdb.p.rapidapi.com';

enum ENDPOINTS {
    base = '/'
}


export class Amrelrafie_IMDb extends RapidAPI {

    constructor(apiKey: string | undefined){
        super(apiKey, BASE_URL);
    }

    async getCurrentBoxOfficeMovies(params?: {page?: number}): Promise <Amerlrafie_CurrentBoxOfficeResponse | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.base,
            {
                params: {
                    type: 'get-boxoffice-movies',
                    ...params
                }
            });

            if(!res){
                return null;
            }

            const data = res.data as Amerlrafie_CurrentBoxOfficeResponse;
            return data;
        }catch(e){
            console.error('Error requesting data', e);
            return null;
        }  
    }

    async getPopularTVShows(params?: {year?: number, page?: number}): Promise <Amerlrafie_PopularTVShowsResponse | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.base,
            {
                params: {
                    type: 'get-popular-shows',
                    ...params
                }
            });

            if(!res){
                return null;
            }

            const data = res.data as Amerlrafie_PopularTVShowsResponse;
            return data;
        }catch(e){
            console.error('Error requesting data', e);
            return null;
        }  
    }

}