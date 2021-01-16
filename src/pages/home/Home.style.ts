import styled from 'styled-components';

export const StyledHome = styled.section`
@media screen and (max-width: 699px){
    padding-left: 1em;
    padding-right: 1em;
}

.movies_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 350px;
    grid-gap: 2em;
    margin: 2em;
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
    border:none;
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
`
