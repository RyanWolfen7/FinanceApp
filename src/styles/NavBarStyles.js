import styled from 'styled-components'

export const NavContainer = styled.div`
    grid-area: 1 / 1 / span 1 / span 6;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    align-content: center;
    justify-items: center;
`