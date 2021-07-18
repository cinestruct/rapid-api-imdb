
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
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string
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
    genres: Enumerator;
    releaseDate: string;
    plotOutline: {
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


