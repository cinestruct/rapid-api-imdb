
interface Image {
    height: number;
    width: number;
    url: string;
    id: string;
    caption?: string;
    createdOn?: string;
    source?: string;
    type?: string;
    relatedNames?: {
        id: string;
        legacyNameText: string;
        name: string;
        image: Image
    }[];
    relatedTitles?: {
        id: string;
        image: Image;
        title: string;
        titleType: 'tvSeries' | 'movie';
        year: number;
        episode?: number;
        season?: number
    }[];
}

export interface RA_SearchResponse {
    Search: {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string
    }[];
    totalResults: string;
    Response: string
}

export interface RA_OverViewResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

enum ContentType {
    Trailer = 'Trailer', 
    TV_Program= 'TV Program',
    Clip = 'Clip',
    Interview = 'Interview',
    Promotional = 'Promotional',
    Featurette = 'Featurette',
    Other = 'Other'
}

export interface Amerlrafie_CurrentBoxOfficeResponse {
    Total_results: string;
    results: number;
    status: string;
    status_message: string;
    movie_results: {
        title: string;
        year: string;
        imdb_id: string;
    }[]
}

export interface Amerlrafie_PopularTVShowsResponse {
    Total_results: string;
    results: number;
    status: string;
    status_message: string;
    tv_results: {
        title: string;
        year: string;
        imdb_id: string;
    }[]
}


export interface APIDojo_OverviewResponse {
    id: string;
    title: {
        '@type': string;
        id: string;
        image: Image
        runningTimeInMinutes: number;
        nextEpisode?: string;
        numberOfEpisodes?: number;
        seriesEndYear: number;
        seriesStartYear: number;
        title: string;
        titleType: 'tvSeries' | 'movie';
        year: number;
    };
    certificates?: {
        'US': {
            certificate: string;
            country: string;
            certificateNumber: number;
            ratingReason: string;
            ratingsBody: string;
        }[] | any;
    };
    ratings: {
        canRate: boolean;
        rating: number;
        ratingCount: number;
        topRank?: 78;
        otherRanks?: object[];
    }
    genres: string[];
    releaseDate: string;
    plotOutline?: {
        author?: string;
        id: string;
        text: string;
    },
    plotSummary: {
        author?: string;
        id: string;
        text: string;
    }
}

export interface APIDojo_ImagesResponse {
    '@type': string;
    images: Image[];
    totalImageCount: number;
}

export interface APIDojo_VideosResponse {
    "@meta": {
        operation: string;
        requestId: string;
        serviceTimeMs: number
    }
    resource: {
        "@type": string;
        id: string;
        image: Image,
        title: string;
        titleType: 'tvSeries' | 'movie';
        year: number;
        size: number;
        videoCounts: {
            contentType: ContentType;
            count: number;
        }[];
        videos: {
            audioLanguage: string;
            contentType: ContentType;
            description: string;
            durationInSeconds: number;
            id: string;
            image: Image;
            parentTitle?: {
                id: string;
                image: Image;
                title: string;
                titleType: 'tvSeries' | 'movie';
                year: number
            };
            primaryTitle?: {
                episode: number;
                id: string;
                image: Image;
                season: number;
                title: string;
                titleType: string;
                year: number
            }; 
            title: string;
        }[];
    }
}

export interface APIDojo_VideoPlaybackResponse {
    '@meta': {
        operation: string;
        requestId: string;
        serviceTimeMs: number
    };
    resource: {
        '@type': string;
        adUrl: string;
        encodings: {
            definition: 'AUTO' | '1080p' | '720p' | '480p' | 'SD';
            mimeType: 'string';
            playUrl: string
        }[];
        id: string;
        previews: {
            definition: 'AUTO' | '1080p' | '720p' | '480p' | 'SD';
            mimeType: 'string';
            playUrl: string
        }[];
    }
}


export interface APIDojo_FindTitleV2Response {
    
    "@meta": Meta;
    "@type": string;
    "query": string;
    "results": Result[];
    "types"?: string[];
    "totalMatches": number;
  }
  
  interface Meta {
    "operation": string;
    "requestId": string;
    "serviceTimeMs": number;
  }
  
  interface Result {
    "id": string;
    "image"?: Image;
    "runningTimeInMinutes"?: number;
    "nextEpisode"?: string;
    "numberOfEpisodes"?: number;
    "seriesEndYear"?: number;
    "seriesStartYear"?: number;
    "title": string;
    "titleType": string;
    "year": number;
    "principals"?: Principal[];
  }
  
  interface Image {
    "height": number;
    "id": string;
    "url": string;
    "width": number;
  }
  
  interface Principal {
    "id": string;
    "legacyNameText": string;
    "name": string;
    "category": string;
    "characters": string[];
    "endYear"?: number;
    "episodeCount"?: number;
    "roles": Role[];
    "startYear"?: number;
    "billing"?: number;
    "attr"?: string[];
    "disambiguation"?: string;
    "as"?: string;
  }
  
  interface Role {
    "character"?: string;
    "characterId"?: string;
  }
  

