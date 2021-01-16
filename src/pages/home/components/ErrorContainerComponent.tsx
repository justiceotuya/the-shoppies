import React from 'react'
import { FullPageComponent } from './FullPageComponent'
import { IHomeProps } from '../interfaces'

export const ErrorContainerComponent: React.FC<IHomeProps> = ({ error }: IHomeProps) => {
    return (
        <FullPageComponent>
            <h1> Error: {error}</h1>
            <p>Please retry searching</p>
        </FullPageComponent>)
}
