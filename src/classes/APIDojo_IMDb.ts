import RapidAPI from "./RapidAPI";
import { APIDojo_ImagesResponse, APIDojo_OverviewResponse, APIDojo_VideoPlaybackResponse, APIDojo_VideosResponse } from "../types/api_responses";

const BASE_URL = 'https://imdb8.p.rapidapi.com';

enum ENDPOINTS {
    base = '/',
    overview = '/title/get-overview-details',
    images = '/title/get-images',
    videos = '/title/get-videos',
    video_playback = '/title/get-video-playback',
    popular_movies = '/title/get-most-popular-movies',
    popular_shows = '/title/get-most-popular-tv-shows'
}
enum CURRENT_COUNTRY {
    US = 'US',
    AR = 'AR',
    AU = 'AU',
    CA = 'CA',
    CL = 'CL',
    ES = 'ES',
    DE = 'DE',
    IT = 'IT',
    MX = 'MX',
    NZ = 'NZ',
    PT = 'PT',
    GB = 'GB',
}


export class APIDojo_IMDb extends RapidAPI {

    constructor(apiKey: string | undefined){
        super(apiKey, BASE_URL);
    }

    async getOverview(params: {tconst: string, currentCountry?: CURRENT_COUNTRY}): Promise <APIDojo_OverviewResponse | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.overview,
            {
                params
            });

            if(!res){
                return null;
            }

            const data = res.data as APIDojo_OverviewResponse;
            return data;
        }catch(e){
            console.error('Error requesting data', e);
            return null;
        }  
    }

    async getPopularMovies(params: {homeCountry?: CURRENT_COUNTRY, currentCountry?: CURRENT_COUNTRY, purchaseCountry?: CURRENT_COUNTRY}): Promise <string[] | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.popular_movies,
            {
                params
            });
        

            if(!res){
                return null;
            }

            const data = res.data as string[];

            return data.map((title)=>title.split('title/')[1].split('/')[0]);
            
            
        } catch (e){
            console.error('Error requesting popular movie data', e);
            return null;
        }
    }

    async getPopularShows(params: {homeCountry?: CURRENT_COUNTRY, currentCountry?: CURRENT_COUNTRY, purchaseCountry?: CURRENT_COUNTRY}): Promise <string[] | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.popular_shows,
            {
                params
            });
        

            if(!res){
                return null;
            }

            const data = res.data as string[];

            return data.map((title)=>title.split('title/')[1].split('/')[0]);
            
            
        } catch (e){
            console.error('Error requesting popular movie data', e);
            return null;
        }
    }

    async getImages(params: {tconst: string, limit?: number}): Promise<APIDojo_ImagesResponse | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.images,
            {
                params
            });

            if(!res){
                return null;
            }

            const data = res.data as APIDojo_ImagesResponse;
            return data;
        }catch(e){
            console.error('Error requesting data', e);
            return null;
        }  
    }

    async getVideos(params: {tconst: string, limit?: number, region?: CURRENT_COUNTRY }): Promise<APIDojo_VideosResponse | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.videos,
            {
                params
            });

            if(!res){
                return null;
            }

            const data = res.data as APIDojo_VideosResponse;
            return data;
        }catch(e){
            console.error('Error requesting data', e);
            return null;
        }  
    }

    async getVideoPlayback(params: {viconst: string, region?: CURRENT_COUNTRY }): Promise<APIDojo_VideoPlaybackResponse | null>{
        try {
            const res = await this._api?.get(ENDPOINTS.video_playback,
            {
                params
            });

            if(!res){
                return null;
            }

            const data = res.data as APIDojo_VideoPlaybackResponse;
            return data;
        }catch(e){
            console.error('Error requesting data', e);
            return null;
        }  
    }
}