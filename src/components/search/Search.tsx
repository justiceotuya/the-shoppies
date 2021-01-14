import React from 'react'
import { debounce } from '../../utils'
import { SearchIcon, StyledForm } from './Search.style'

export interface ISearchProps {
    onSubmit: (event:React.FormEvent<HTMLInputElement>, data: string|undefined) => void
    getData:(data:string|undefined)=>void

}
export const Search:React.FC<ISearchProps & React.HTMLProps<HTMLInputElement>> = ({
    onSubmit,getData, ...props
}) => {

    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleChange = () => {
        return getData(inputRef?.current?.value)
    }
//     const handleSubmit = (e:any, data:string| undefined) => {
//         e.preventDefault()
// console.log({data})
//     }

    return (
        <StyledForm
      onSubmit={(e:any) => onSubmit(e, inputRef?.current?.value)}
        // onSubmit={()=>onSubmit}
        getData={getData}
        >
            <SearchIcon/>
            <input
            type="text"
            ref={inputRef}
            onChange={debounce(handleChange, 1000)}
            className="searchInput"
            placeholder="Search Movies"
            />

 <h1 className="searchResult">{inputRef && inputRef?.current?.value   && `Search result for ${inputRef?.current?.value}`}</h1>
            </StyledForm>

    )
}
