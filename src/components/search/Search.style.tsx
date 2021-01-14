import styled from 'styled-components';
import {ISearchProps} from './Search'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
export const StyledForm = styled.form<ISearchProps>`
 background: #fff;
    border-radius: 5px;
    position: relative;
    height: 132px;
    /* padding: 20px 10px 20px 52px; */
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 2;
    flex-direction: column;

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
    padding-top: 20px;
    height: 42px;
}
`;

export const SearchIcon = styled(Search)`
position: absolute;
    z-index: 3;
    left: 20px;
    transform: translateY(-20px);
    width: 20px;
    height: 20px;
`
