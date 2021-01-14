import React from 'react'
import { SearchIcon, StyledForm } from './Search.style'

export interface ISearchProps {
    onSubmit: (event:React.FormEvent<HTMLInputElement>, data: string|undefined) => void

}
export const Search:React.FC<ISearchProps & React.HTMLProps<HTMLInputElement>> = ({
    onSubmit, ...props
}) => {

    const inputRef = React.useRef<HTMLInputElement>(null)
//     const handleSubmit = (e:any, data:string| undefined) => {
//         e.preventDefault()
// console.log({data})
//     }

    return (
        <StyledForm
      onSubmit={(e:any) => onSubmit(e, inputRef?.current?.value)}
        // onSubmit={()=>onSubmit}
        >
            <SearchIcon/>
            <input
            type="text"
            ref={inputRef}
            className="searchInput"
            placeholder="Search Movies"
            />
            </StyledForm>

    )
}
