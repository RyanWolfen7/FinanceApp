import styled from 'styled-components'

export const SummaryContainer = styled.div`
    grid-area: 2 / 1 / span 1 / span 5; 
    display: grid;
    color: white;
    background: black;
    opacity: 0.7;
    height: 50%;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    align-items: center;
`

export const ExchangeContainer = styled.div`
    overflow-x: auto;
    animation: moveSlideshow 12s linear infinite;

    @keyframes moveSlideshow {
        100% { 
            transform: translateX(-66.6666%);  
        }
    }
`
export const ExchangeElement = styled.span`

`