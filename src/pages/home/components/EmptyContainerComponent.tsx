import React from 'react'
import { FullPageComponent } from './FullPageComponent'

interface IEmptyProps {
    description:string
}
export const EmptyContainerComponent: React.FC<IEmptyProps> = ({description}:IEmptyProps) => {
    return (
        <FullPageComponent>
            <h1> No Movies Available</h1>
            <p>{description}</p>
        </FullPageComponent>
    )
}
