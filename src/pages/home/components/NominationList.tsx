import React from 'react'
import { BackIcon, StyledNominationContainer } from '../Home.style'
import { EmptyContainerComponent } from './EmptyContainerComponent'
import { MovieContainerComponent } from './MovieContainerComponent'

interface isNominatedListProps {
    isNominatedPageOpen: boolean,
    handleToggleNominatedPage:()=>void,
    nominatedList:any
    handleRemoveMovieFromNominatedList:(item:any)=>void
}
export const NominationList = ({isNominatedPageOpen,handleToggleNominatedPage, nominatedList, handleRemoveMovieFromNominatedList}:isNominatedListProps) => {
    return (
        <StyledNominationContainer
        isNominatedPageOpen={isNominatedPageOpen}
    >
        <header className="header">
            <BackIcon onClick={handleToggleNominatedPage} />
            <p>Nominated List</p>
        </header>
        <div>
            {
                (!nominatedList )|| (nominatedList && nominatedList.length === 0) ?
                    <EmptyContainerComponent
                        description="Select Your Favourite Movies to Nominate Them"
                    />
                    :
                    <div className="movies_container">
                        <MovieContainerComponent
                            movies={nominatedList}
                            handleClickCardButton={handleRemoveMovieFromNominatedList}
                            isNominatedList={true}
                        />
                    </div>
            }
        </div>
    </StyledNominationContainer>

    )
}
