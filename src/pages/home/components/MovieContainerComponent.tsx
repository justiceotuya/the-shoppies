import React from 'react'
import { MovieCard } from '../../../components'
import { IMovieContainerProps } from '../interfaces'

export const MovieContainerComponent: React.FC<IMovieContainerProps> = ({ movies }: any) => {
    return movies.map((item: any) => {
        const { Poster, Title, Year, imdbID } = item
        return (
            <MovieCard
                key={imdbID}
                movieRating="8.0"
                movieTitle={Title}
                movieYear={Year}
                movieGenre="Action, Thriller, Animation"
                movieImage={Poster}
            />
        )
    })
}
