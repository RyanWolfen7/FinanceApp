import styled from 'styled-components'

export const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    grid-template-rows: repeat( 10, minmax(0, 1fr));
    align-content: stretch;
    margin: 0 2vw 0;
    height: 100vh;
`