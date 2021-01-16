import React from 'react'
import { SearchIcon, StyledForm } from './Search.style'

export interface ISearchProps {
    // onSubmit: (event:React.FormEvent<HTMLInputElement>, data: string|undefined) => void
    getData:(data:string|undefined)=>void

}
export const Search:React.FC<ISearchProps & React.HTMLProps<HTMLInputElement>> = ({
    onSubmit,getData, ...props
}) => {

    const [inputValue, setInputValue] = React.useState('')
    const handleChange = (e:any) => {
        getData(e.target.value)
        setInputValue(e.target.value)
    }
//     const handleSubmit = (e:any, data:string| undefined) => {
//         e.preventDefault()
// console.log({data})
//     }

    return (
        <StyledForm
    //   onSubmit={(e:any) => onSubmit(e, inputRef?.current?.value)}
        // onSubmit={()=>onSubmit}
        getData={getData}
        >
            <h1 className="header">The Shoppies</h1>
            <div className="input__container">
            <SearchIcon/>
            <label htmlFor="search">Search</label>
            <input
            type="text"
            id="search"
            value={inputValue}
            onChange={handleChange}
            className="searchInput"
            placeholder="Search Movies"
            />
</div>
 <h1 className="searchResult">{inputValue    && `Search result for ${inputValue}`}</h1>
            </StyledForm>

    )
}
