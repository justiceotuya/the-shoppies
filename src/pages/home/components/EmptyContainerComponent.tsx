import React from 'react'
import { FullPageComponent } from './FullPageComponent'

export const EmptyContainerComponent: React.FC = () => {
    return (
        <FullPageComponent>
            <h1> No Movies Available</h1>
            <p>Search for movie to nominate your favourite</p>
        </FullPageComponent>
    )
}
