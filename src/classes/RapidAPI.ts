import axios, { AxiosInstance } from 'axios';

export default abstract class RapidAPI {

    protected _api?: AxiosInstance;

    constructor(api_key: string | undefined, baseURL: string){

        //configure axios
        let instance = axios.create({
            baseURL
        });

        instance.interceptors.request.use(
            
            async config => {
                config.headers['x-rapidapi-key'] = api_key;
                config.headers['x-rapidapi-host'] = baseURL!.split('://')[1];

                return config;
            },
            err => {
                return Promise.reject(err);
            }
        );

        this._api = instance;
    }

}