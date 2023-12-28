

type TitleType = 'movie'|'tvSeries'|'short'|'tvEpisode'|'tvMiniSeries'|'tvMovie'|'tvSpecial'|'tvShort'|'videoGame'|'video'|'musicVideo'|'podcastSeries'|'podcastEpisode';
type SortArg = 'moviemeter,asc'| 'moviemeter,desc'|'alpha,asc'|'alpha,desc'|'user_rating,asc'|'user_rating,desc'|'num_votes,asc'|'num_votes,desc'|'boxoffice_gross_us,asc'|'boxoffice_gross_us,desc'|'runtime,asc'|'runtime,desc'|'year,asc'|'year,desc'|'release_date,asc'|'release_date,desc';
type Genre = 'comedy'|'horror'|'romance'|'thriller'|'sci-fi'|'drama'|'action'|'adventure'|'animation'|'biography'|'crime'|'documentary'|'family'|'fantasy'|'film-noir'|'game-show'|'history'|'music'|'musical'|'mystery'|'news'|'reality-tv'|'sport'|'talk-show'|'war'|'western'
type ReleaseDate = string;
type WatchOption = 'has_video_prime_instant_video_us'|'has_video_amazon_instant_video_us'|'has_video_freedive_us';
type KeywordOptions = 'action hero'|'alien invasion'|'alternate history'|'anime'|'avant garde'|'b-movie'|'bank robbery'|'based on comic book'|'based on novel'|'based on play'|'based on true story'|'bechdel test passed'|'black comedy'|'chick flick'|'coming of age'|'criminal mastermind'|'cult film'|'dark fantasy'|'dc comics'|'dystopia'|'epic'|'experimental film'|'f rated'|'femme fatale'|'good versus evil'|'haunting'|'heist'|'high school'|'independent film'|'kidnapping'|'kung fu'|'magical realism'|'marvel comics'|'mockumentary'|'one man army'|'parallel world'|'paranormal'|'post apocalypse'|'sequel'|'space travel'|'spaghetti western'|'spoof'|'steampunk'|'superhero'|'supernatural'|'time travel'|'triple f rated'|'vampire'|'zombie';
type Group = 'best_director_winner'|'best_picture_winner'|'oscar_winner'|'globes_winner'|'emmys_winner'|'oscar_nominee'|'globes_nominee'|'emmys_nomiee';
type PrimaryLanguage = 'ab'|'qac'|'guq'|'qam'|'af'|'qas'|'ak'|'sq'|'alg'|'ase'|'am'|'grc'|'apa'|'ar'|'an'|'arc'|'arp'|'hy'|'as'|'aii'|'ast'|'ath'|'asf'|'awa'|'ay'|'az'|'qbd'|'ban'|'bm'|'bn'|'eu'|'bsc'|'be'|'bem'|'ber'|'bho'|'qbi'|'qbh'|'bs'|'bzs'|'br'|'bfi'|'bg'|'my'|'yue'|'ca'|'ccp'|'qax'|'ce'|'chr'|'chy'|'hne'|'zh'|'kw'|'co'|'cr'|'mus'|'qal'|'crp'|'hr'|'cro'|'cs'|'da'|'prs'|'dso'|'din'|'qaw'|'doi'|'nl'|'dyu'|'dz'|'qbc'|'frs'|'egy'|'en'|'eo'|'et'|'ee'|'qbg'|'fo'|'fil'|'fi'|'qbn'|'fon'|'fr'|'fsl'|'ff'|'fvr'|'gl'|'ka'|'de'|'gsg'|'grb'|'el'|'gn'|'gu'|'gnn'|'gup'|'hai'|'ht'|'hak'|'bgc'|'qav'|'ha'|'haw'|'he'|'hi'|'hmn'|'qab'|'hop'|'hu'|'iba'|'qag'|'is'|'icl'|'ins'|'id'|'iu'|'ik'|'ga'|'iru'|'it'|'ja'|'jsl'|'dyo'|'ktz'|'qbf'|'kea'|'kab'|'kl'|'xal'|'kn'|'kpj'|'mjw'|'kar'|'kk'|'kca'|'kha'|'km'|'ki'|'rw'|'qar'|'tlh'|'kfa'|'kok'|'ko'|'kvk'|'khe'|'qaq'|'kro'|'kyw'|'qbb'|'ku'|'kwk'|'ky'|'lbj'|'lad'|'lo'|'la'|'lv'|'lif'|'ln'|'lt'|'nds'|'lb'|'mk'|'qbm'|'mag'|'mai'|'mg'|'ms'|'ml'|'pqm'|'qap'|'mt'|'mnc'|'cmn'|'man'|'mni'|'mi'|'arn'|'mr'|'mh'|'mas'|'mls'|'myn'|'men'|'mic'|'enm'|'nan'|'min'|'mwl'|'qmt'|'lus'|'moh'|'mn'|'moe'|'qaf'|'mfe'|'qbl'|'nah'|'qba'|'nv'|'nbf'|'nap'|'yrk'|'ne'|'ncg'|'zxx'|'nai'|'nd'|'no'|'qbk'|'nyk'|'ny'|'oc'|'or'|'oj'|'qaz'|'ang'|'non'|'pap'|'qaj'|'ps'|'paw'|'fa'|'qai'|'pl'|'qah'|'pt'|'fuf'|'pa'|'tsz'|'qu'|'qya'|'raj'|'qbj'|'xrr'|'ro'|'rm'|'rom'|'rtm'|'ru'|'rsl'|'qao'|'qae'|'sah'|'sm'|'sa'|'sc'|'qay'|'gd'|'sr'|'qbo'|'srr'|'qad'|'qau'|'sn'|'shh'|'scn'|'sjn'|'sd'|'si'|'sio'|'sk'|'sl'|'so'|'son'|'snk'|'wen'|'qbe'|'st'|'es'|'ssp'|'srn'|'sw'|'sv'|'gsw'|'syl'|'tl'|'tg'|'tmh'|'ta'|'tac'|'tt'|'te'|'qak'|'th'|'bo'|'qan'|'tli'|'tpi'|'to'|'ts'|'tsc'|'tn'|'tcy'|'tup'|'tr'|'tk'|'tyv'|'tzo'|'uk'|'ukl'|'qat'|'ur'|'uz'|'vi'|'qaa'|'was'|'cy'|'wo'|'xh'|'yap'|'yi'|'yo'|'zu'
type primaryCountry = 'af'|'ax'|'al'|'dz'|'as'|'ad'|'ao'|'ai'|'aq'|'ag'|'ar'|'am'|'aw'|'au'|'at'|'az'|'bs'|'bh'|'bd'|'bb'|'by'|'be'|'bz'|'bj'|'bm'|'bt'|'bo'|'ba'|'bw'|'bv'|'br'|'io'|'vg'|'bn'|'bg'|'bf'|'bumm'|'bi'|'kh'|'cm'|'ca'|'cv'|'bq'|'ky'|'cf'|'td'|'cl'|'cn'|'cx'|'cc'|'co'|'km'|'cg'|'cd'|'ck'|'cr'|'ci'|'hr'|'cu'|'an'|'cy'|'cz'|'cshh'|'dk'|'dj'|'dm'|'do'|'ddde'|'ec'|'eg'|'sv'|'gq'|'er'|'ee'|'et'|'fk'|'fo'|'yucs'|'fj'|'fi'|'fr'|'gf'|'pf'|'tf'|'ga'|'gm'|'ge'|'de'|'gh'|'gi'|'gr'|'gl'|'gd'|'gp'|'gu'|'gt'|'gg'|'gn'|'gw'|'gy'|'ht'|'hm'|'hn'|'hk'|'hu'|'is'|'in'|'id'|'ir'|'iq'|'ie'|'im'|'il'|'it'|'jm'|'jp'|'je'|'jo'|'kz'|'ke'|'xyu'|'ki'|'xko'|'xkv'|'kw'|'kg'|'la'|'lv'|'lb'|'ls'|'lr'|'ly'|'li'|'lt'|'lu'|'mo'|'mk'|'mg'|'mw'|'my'|'mv'|'ml'|'mt'|'mh'|'mq'|'mr'|'mu'|'yt'|'mx'|'fm'|'md'|'mc'|'mn'|'me'|'ms'|'ma'|'mz'|'mm'|'na'|'nr'|'np'|'nl'|'nc'|'nz'|'ni'|'ne'|'ng'|'nu'|'nf'|'kp'|'vdvn'|'mp'|'no'|'om'|'pk'|'pw'|'xpi'|'pa'|'pg'|'py'|'pe'|'ph'|'pn'|'pl'|'pt'|'pr'|'qa'|'re'|'ro'|'ru'|'rw'|'ws'|'sm'|'st'|'sa'|'sn'|'rs'|'csxx'|'sc'|'xsi'|'sl'|'sg'|'sk'|'si'|'sb'|'so'|'za'|'gs'|'kr'|'suhh'|'es'|'lk'|'bl'|'sh'|'kn'|'lc'|'mf'|'pm'|'vc'|'sd'|'sr'|'sj'|'sz'|'se'|'ch'|'sy'|'tw'|'tj'|'tz'|'th'|'tl'|'tg'|'tk'|'to'|'tt'|'tn'|'tr'|'tm'|'tc'|'tv'|'um'|'vi'|'ug'|'ua'|'ae'|'gb'|'us'|'uy'|'uz'|'vu'|'va'|'ve'|'vn'|'wf'|'xwg'|'eh'|'ye'|'zrcd'|'zm'|'zw'

export interface APIDojo_FindTitleV2Attributes {
    /**
     * Anything that you are familiar with, such as : name of title, album, song, etc…
     */
    title: string;
     /**
     * One or an Array of the following : movie|tvSeries|short|tvEpisode|tvMiniSeries|tvMovie|tvSpecial|tvShort|videoGame|video|musicVideo|podcastSeries|podcastEpisode.
     */
    titleType?: TitleType | TitleType[];
    /**
     * One of the following : 6.0|7.0|8.0|9.0
     */
    userRatingMin?: 6.0 | 7.0 | 8.0 | 9.0;
     /**
     * Number of items per response, for paging purpose. Maximum is 20
     */
    limit?: number;
    /**
     * The page index, for paging purpose
     */
    paginationKey?: number;
    /**
     * One of the following : moviemeter,asc|moviemeter,desc|alpha,asc|alpha,desc|user_rating,asc|user_rating,desc|num_votes,asc|num_votes,desc|boxoffice_gross_us,asc|boxoffice_gross_us,desc|runtime,asc|runtime,desc|year,asc|year,desc|release_date,asc|release_date,desc
     */
    sortArg?: SortArg;
    /**
     * One or an Array of the following : comedy|horror|romance|thriller|sci-fi|drama|action|adventure|animation|biography|crime|documentary|family|fantasy|film-noir|game-show|history|music|musical|mystery|news|reality-tv|sport|talk-show|war|western.
     */
    genre?: Genre | Genre[];
    /**
     * The format is yyyy-MM-dd. Ex : 2002-01-01
     */
    releaseDateMin?: ReleaseDate;
    /**
     * The format is yyyy-MM-dd. Ex : 2002-01-01
     */
    releaseDateMax?: ReleaseDate;
    /**
     * One or an Array of the following : has_video_prime_instant_video_us|has_video_amazon_instant_video_us|has_video_freedive_us.
     */
    watchOption?: WatchOption | WatchOption[];
    /**
     * One or an Array of the following : action hero,alien invasion,alternate history,anime,avant garde,b-movie,bank robbery,based on comic book,based on novel,based on play,based on true story,bechdel test passed,black comedy,chick flick,coming of age,criminal mastermind,cult film,dark fantasy,dc comics,dystopia,epic,experimental film,f rated,femme fatale,good versus evil,haunting,heist,high school,independent film,kidnapping,kung fu,magical realism,marvel comics,mockumentary,one man army,parallel world,paranormal,post apocalypse,sequel,space travel,spaghetti western,spoof,steampunk,superhero,supernatural,time travel,triple f rated,vampire,zombie.
     */
    keyword?: KeywordOptions | KeywordOptions[];
    /**
     * One or an Array of the following : best_director_winner,best_picture_winner,oscar_winner,globes_winner,emmys_winner,oscar_nominee,globes_nominee,emmys_nomiee
     */
    group?: Group | Group[];
    /**
     * In minutes. Ex : 60
     */
    runtimeMin?: number;
    /**
     * In minutes. Ex : 180
     */
    runtimeMax?: number;
    /**
     * One of the following : 1000|10000|100000|1000000
     */
    numVotesMin?: 1000 | 10000 | 100000 | 1000000;
    /**
     * One or an Array of the following : ab|qac|guq|qam|af|qas|ak|sq|alg|ase|am|grc|apa|ar|an|arc|arp|hy|as|aii|ast|ath|asf|awa|ay|az|qbd|ban|bm|bn|eu|bsc|be|bem|ber|bho|qbi|qbh|bs|bzs|br|bfi|bg|my|yue|ca|ccp|qax|ce|chr|chy|hne|zh|kw|co|cr|mus|qal|crp|hr|cro|cs|da|prs|dso|din|qaw|doi|nl|dyu|dz|qbc|frs|egy|en|eo|et|ee|qbg|fo|fil|fi|qbn|fon|fr|fsl|ff|fvr|gl|ka|de|gsg|grb|el|gn|gu|gnn|gup|hai|ht|hak|bgc|qav|ha|haw|he|hi|hmn|qab|hop|hu|iba|qag|is|icl|ins|id|iu|ik|ga|iru|it|ja|jsl|dyo|ktz|qbf|kea|kab|kl|xal|kn|kpj|mjw|kar|kk|kca|kha|km|ki|rw|qar|tlh|kfa|kok|ko|kvk|khe|qaq|kro|kyw|qbb|ku|kwk|ky|lbj|lad|lo|la|lv|lif|ln|lt|nds|lb|mk|qbm|mag|mai|mg|ms|ml|pqm|qap|mt|mnc|cmn|man|mni|mi|arn|mr|mh|mas|mls|myn|men|mic|enm|nan|min|mwl|qmt|lus|moh|mn|moe|qaf|mfe|qbl|nah|qba|nv|nbf|nap|yrk|ne|ncg|zxx|nai|nd|no|qbk|nyk|ny|oc|or|oj|qaz|ang|non|pap|qaj|ps|paw|fa|qai|pl|qah|pt|fuf|pa|tsz|qu|qya|raj|qbj|xrr|ro|rm|rom|rtm|ru|rsl|qao|qae|sah|sm|sa|sc|qay|gd|sr|qbo|srr|qad|qau|sn|shh|scn|sjn|sd|si|sio|sk|sl|so|son|snk|wen|qbe|st|es|ssp|srn|sw|sv|gsw|syl|tl|tg|tmh|ta|tac|tt|te|qak|th|bo|qan|tli|tpi|to|ts|tsc|tn|tcy|tup|tr|tk|tyv|tzo|uk|ukl|qat|ur|uz|vi|qaa|was|cy|wo|xh|yap|yi|yo|zu
     */
    primaryLanguage?: PrimaryLanguage | PrimaryLanguage[];
    /**
     * One or an Array of the following : af|ax|al|dz|as|ad|ao|ai|aq|ag|ar|am|aw|au|at|az|bs|bh|bd|bb|by|be|bz|bj|bm|bt|bo|ba|bw|bv|br|io|vg|bn|bg|bf|bumm|bi|kh|cm|ca|cv|bq|ky|cf|td|cl|cn|cx|cc|co|km|cg|cd|ck|cr|ci|hr|cu|an|cy|cz|cshh|dk|dj|dm|do|ddde|ec|eg|sv|gq|er|ee|et|fk|fo|yucs|fj|fi|fr|gf|pf|tf|ga|gm|ge|de|gh|gi|gr|gl|gd|gp|gu|gt|gg|gn|gw|gy|ht|hm|hn|hk|hu|is|in|id|ir|iq|ie|im|il|it|jm|jp|je|jo|kz|ke|xyu|ki|xko|xkv|kw|kg|la|lv|lb|ls|lr|ly|li|lt|lu|mo|mk|mg|mw|my|mv|ml|mt|mh|mq|mr|mu|yt|mx|fm|md|mc|mn|me|ms|ma|mz|mm|na|nr|np|nl|nc|nz|ni|ne|ng|nu|nf|kp|vdvn|mp|no|om|pk|pw|xpi|pa|pg|py|pe|ph|pn|pl|pt|pr|qa|re|ro|ru|rw|ws|sm|st|sa|sn|rs|csxx|sc|xsi|sl|sg|sk|si|sb|so|za|gs|kr|suhh|es|lk|bl|sh|kn|lc|mf|pm|vc|sd|sr|sj|sz|se|ch|sy|tw|tj|tz|th|tl|tg|tk|to|tt|tn|tr|tm|tc|tv|um|vi|ug|ua|ae|gb|us|uy|uz|vu|va|ve|vn|wf|xwg|eh|ye|zrcd|zm|zw
     */
    primaryCountry?: primaryCountry | primaryCountry[];
    
}