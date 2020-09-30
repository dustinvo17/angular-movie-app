

export class Movie {
    poster_path: string
    id: number 
    title: string
  
   
}
export class Genre {
    id: number
    name: string
}

export class Video {
    key: string
    name: string
}

export class MovieDetail {
    title: string
    overview: string
    backdrop_path: string
    vote_average: number
    release_date: string
    genres: Genre[]
    videos: {results: Video[]}
}