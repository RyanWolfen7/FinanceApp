import styled from 'styled-components'

export const SummaryContainer = styled.div`
    grid-area: 2 / 1 / span 1 / span 5; 
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`