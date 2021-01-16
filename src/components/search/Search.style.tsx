import styled from 'styled-components';
import {ISearchProps} from './Search'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
export const StyledForm = styled.form<ISearchProps>`
    background: #fff;
    border-radius: 5px;
    position: relative;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 2;
    flex-direction: column;

.header {
    font-size: 30px;
    margin: 12px 0 16px 0;
}
.input__container{
    position: relative;
}
.searchInput {
    top:0;
    right:0;
    left:0;
    border-radius: 5px;
    height: 29px;
    width: 100%;
    border: none;
background: #EEEEEE;
border: none;
    padding-left: 52px;
    padding: 20px 10px 20px 52px;
}

.searchResult {
    padding: 20px;
    /* height: 42px; */
}
label[for="search"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
`;

export const SearchIcon = styled(Search)`
    position: absolute;
    z-index: 3;
    left: 20px;
    top: 10px;
    width: 20px;
    height: 20px;
`
