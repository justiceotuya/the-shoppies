import styled from 'styled-components';
import {ISearchProps} from './Search'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
export const StyledForm = styled.form<ISearchProps>`
/* border: none;
cursor: pointer; */
background: #EEEEEE;
border-radius: 5px;
color: #fff;
position: relative;
height: 29px;
padding: 20px 10px 20px 52px;

.searchInput {
    top:0;
    right:0;
    left:0;
    position: absolute;
    height: 100%;
    width: 100%;
    border: none;
background: #EEEEEE;
border: none;
    padding-left: 52px;
}
`;

export const SearchIcon = styled(Search)`
position: absolute;
    z-index: 3;
    left: 20px;
    transform: translateY(-6px);

`
