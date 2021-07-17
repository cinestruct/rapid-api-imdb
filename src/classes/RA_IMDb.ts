import RapidAPI from "./RapidAPI";
import { RA_SearchResponse } from "../types/api_responses";

const BASE_URL = 'https://movie-database-imdb-alternative.p.rapidapi.com';

enum ENDPOINTS {
    base = '/'
}

export default class RA_IMDb extends RapidAPI {

    constructor(apiKey: string | undefined){
        super(apiKey, BASE_URL);
    }

    async search(params: {s: string, page?: string, r?: string}): Promise<RA_SearchResponse[] | null> {
        try {
            const res = await this._api?.get(ENDPOINTS.base,
            {
                params
            });

            if(!res){
                return null;
            }

            const data = res.data as RA_SearchResponse[];
            return data;
            
        }catch(e){
            console.error('Error requesting data', e);

            return null;
        }  
    }
}