import React from 'react'
import { MovieCard } from '../../../components'
import { IMovieContainerProps, IMoviesObjs } from '../interfaces'

export const MovieContainerComponent = (props:any) => {
    const {movies, handleClickCardButton, isNominatedList} = props

    // const handleDisableButton = (movieID:string) => {
    //     let nominatedList:any = localStorage.getItem('nominatedList')
    //     nominatedList = JSON.parse(nominatedList)
    //     return nominatedList.some((item:IMoviesObjs) => item.imdbID.includes(movieID))
    // }

    return movies && movies.map((item: any) => {
        const { Poster, Title, Year, imdbID, nominated } = item
        return (
            <MovieCard
                key={imdbID}
                movieID={imdbID}
                movieRating="8.0"
                movieTitle={Title}
                movieYear={Year}
                movieGenre="Action, Thriller, Animation"
                movieImage={Poster}
                handleClick={() => handleClickCardButton(item)}
                isMovieNominated={nominated}
                isNominatedList={isNominatedList}
            />
        )
    })
}
