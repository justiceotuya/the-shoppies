import styled from 'styled-components';
// import {ISearchProps} from './Search'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
export const StyledMovieCard = styled.div`

box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    border-radius: 10px;
    cursor: pointer;
    :hover {
        box-shadow:  0 25px 50px -12px rgba(0,0,0,0.25);
    }
.card_imageContainer{
    position: relative;
    height: 75%;
}
.card_movie {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
}
.card_rating {
    position: absolute;
    bottom: 30px;
    right: -10px;
    background-color: #F7B500;
    padding: 2px 10px;
    border-radius: 30px;
    font-weight: bold;
}
.card_detailsContainer{
    height: 25%;
    padding: 10px;
}
.card_movie__title{
    color: #545664;
    font-size: 14px;
    font-weight: 600;
}
.card_movie__year{
    color: #7e808c;
font-size: 12px;
}
.card_movie__genre{}
`;

// export const SearchIcon = styled(Search)`
// position: absolute;
//     z-index: 3;
//     left: 20px;
//     transform: translateY(-6px);

// `
