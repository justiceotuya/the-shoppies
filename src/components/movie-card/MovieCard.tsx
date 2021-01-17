import React from 'react'
import { StyledMovieCard } from './MovieCard.style'
import {IMoviesObjs} from '../../pages/home/interfaces'

import unavailable from '../../assets/images/unavailablePoster.jpeg'
import { Button } from '..'

interface IMovieCardProps {
    movieRating: string,
    movieID: string,
    movieTitle: string,
    movieYear: string,
    movieGenre: string,
    movieImage: string,
    isMovieNominated:boolean,
    handleClick: () => void,
    isNominatedList:boolean
}

export const MovieCard: React.FC<IMovieCardProps> = ({
    movieTitle,
    movieYear,
    movieImage,
    movieID,
    handleClick,
    isMovieNominated,
    isNominatedList
}: IMovieCardProps) => {

    const handleMovieTitle = (title: string) => {
        return title?.length > 22 ? `${title.substr(0, 22)}...` : title
    }

    const handleButtonText = () => {
        if(isMovieNominated){
            return 'Nominated'
        }else if(isNominatedList){
            return "remove"
        }else {
            return 'Nominate'
        }
    }



    return (
        <StyledMovieCard>
            <div className="card_imageContainer">
                <img src={movieImage === "N/A" ? unavailable : movieImage} alt={movieTitle} className="card_movie" loading="lazy" />
                {/* <span className="card_rating">{movieRating}</span> */}
            </div>

            <div className="card_detailsContainer">
                <p className="card_movie__title">{handleMovieTitle(movieTitle)}</p>
                <p className="card_movie__year">{movieYear}
                    {/* / <span className="card_movie__genre">
            {movieGenre}
            </span> */}
                </p>
                <div className="card_moviePlot">
                    <Button
                        onClick={handleClick}
                    disabled={isMovieNominated}
                    Btntype={isNominatedList ? 'secondary' : 'primary'}
                    >
                     {handleButtonText() }
</Button>
                </div>
            </div>

        </StyledMovieCard>
    )
}
