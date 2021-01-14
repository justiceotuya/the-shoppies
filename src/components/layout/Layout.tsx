import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.main`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 700px){
        padding:2em;
    }
`
export const Layout: React.FC = ({children}) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}
