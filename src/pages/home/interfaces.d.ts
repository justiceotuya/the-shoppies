 interface IMoviesObjs {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
    nominated:boolean
}

export interface IMovieContainerProps {
    movies: [IMoviesObjs][],
    handleClickCardButton: () => void
}

export interface IHomeProps {
    error?: string,
    loading?: string,
}
export interface IScrollProps {
    handleScrollToTop: () => void
}
