 interface IMoviesObjs {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export interface IMovieContainerProps {
    movies: [IMoviesObjs][]
}

export interface IHomeProps {
    error?: string,
    loading?: string,
}
export interface IScrollProps {
    handleScrollToTop: () => void
}
