import styled from 'styled-components';
import {ISearchProps} from './Search'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
export const StyledForm = styled.form<ISearchProps>`
border: none;
cursor: pointer;
background: ${props => props.Btntype === 'secondary' ? '#000000' : '#F7B500'};
border-radius: 5px;
color: #fff;
transform:translateY(0);
transition: transform .2s ease-out;
font-size: 10px;
padding: 8px 17px;
line-height: 6px;

 :hover {
    opacity: .8
}
:active {
    transform:translateY(3px);
    transition: transform .2s ease-out;
}

:disabled {
    background: #B9B8BC;
    cursor: not-allowed;
    opacity:1;
}
`;

export const SearchIcon = styled(Search)`
fill: green
`
