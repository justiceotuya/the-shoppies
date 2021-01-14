import styled from 'styled-components';

export const StyledHome = styled.section`

.movies_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2em;
    margin: 2em;
}
.fullPage {
    height: calc(100vh - 290px);
    display: grid;
    place-content: center;
    text-align: center;
}
`
