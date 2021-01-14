import React from 'react'
import { SearchIcon, StyledForm } from './Search.style'

export interface ISearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string,
    Btntype:string,
    disabled?: boolean;
    onClick: () => void,
}
export const Search:React.FC<ISearchProps & React.HTMLProps<HTMLInputElement>> = ({
    children, Btntype, onClick, disabled=false, ...props
}) => {
    return (
        <StyledForm
        Btntype={Btntype}
        onClick={onClick}
        disabled={disabled}
        >
            {children}
            {/* <SearchIcon/> */}
            </StyledForm>

    )
}
