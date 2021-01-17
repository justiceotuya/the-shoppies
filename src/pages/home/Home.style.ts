import styled from 'styled-components';
import {ReactComponent as Back} from '../../assets/icons/back.svg'

export const StyledHome = styled.section`

.movies_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 350px;
    grid-gap: 2em;
    margin: 2em;
    /* align-items: center */
}
.fullPage {
    height: calc(100vh - 290px);
    display: grid;
    place-content: center;
    text-align: center;
}

.scrollToTop {
    position: fixed;
    right: 50px;
    bottom: 30px;
    background: black;
    border-radius: 50%;
    border:2px solid #F7B500;
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
    cursor: pointer;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  transform: translateY(0px);
transition: transform .2s ease-in-out;

  :active {
transform: translateY(3px);
transition: transform .2s ease-in-out;
  }
}

.scrollToTop p {
     display: inline;
    color: white;
    border-radius: 100%;
    text-transform: uppercase;
    font-weight: bold;
}

@media screen and (max-width: 699px){
    padding-left: 1em;
    padding-right: 1em;
.scrollToTop {
right: 20px;
}
}
`

interface INominatedProps {
    isNominatedPageOpen: boolean
}
export const StyledNominationContainer = styled(StyledHome)<INominatedProps>`
    position: fixed;
    top: ${props => props.isNominatedPageOpen === true ? '68px' : '100vh'};
    position: fixed;
    transition: top .2s ease-in-out;
    bottom: 0;
    width: 100%;
    z-index: 2;
    padding: 0 2em 2em 2em;
    background: #ffffff;
    right: 0;
    overflow: auto;
    border-radius: 25px 25px 0 0;
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
    max-width:320px;

    @media screen and (min-width: 577px){
        top:0;
        right: ${props => props.isNominatedPageOpen === true ? '0px' : '-100vh'};
        transition: right .2s ease-in-out;
        border-radius: 0;
    }

    .movies_container{
        margin: 2em auto;
    max-width: 700px;
    }

    .header {
      position:relative;
      display: grid;
    place-content: center;
    height: 50px
    }

    .header p {
        font-size: 16px;
        font-weight:600
    }
`;

export const BackIcon = styled(Back)`
    position: absolute;
    z-index: 3;
    left: -15px;
    top: 16px;
    width: 20px;
    height: 20px;
    fill:#b9b9b9;
    transform: translateY(0px) scale(1);
        transition: transform .2s ease-in;
        cursor:pointer;

        :active {
            transform: translateY(3px) scale(0.8);
            transition: transform .2s ease-in
        }
`
