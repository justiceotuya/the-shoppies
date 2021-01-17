import React from 'react'
import { SearchIcon, StyledForm,NominatedIcon } from './Search.style'

export interface ISearchProps {
    // onSubmit: (event:React.FormEvent<HTMLInputElement>, data: string|undefined) => void
    getData:(data:string|undefined)=>void,
    nominatedListCount: number;
    handleClickNominatedIcon?:()=>void
}
export const Search:React.FC<ISearchProps & React.HTMLProps<HTMLInputElement>> = ({
    getData, nominatedListCount,handleClickNominatedIcon,...props
}) => {

    const [inputValue, setInputValue] = React.useState('')
    const handleChange = (e:any) => {
        getData(e.target.value)
        setInputValue(e.target.value)
    }



    return (
        <StyledForm
        nominatedListCount={nominatedListCount}
        getData={getData}
        >
            <header className="headerContainer">
            <h1 className="header">The Shoppies</h1>
            <button className="nominatedIconButton" type="button" onClick={handleClickNominatedIcon}>
            <NominatedIcon/>
            <span><p>{nominatedListCount}</p></span>
            </button>
            </header>
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
