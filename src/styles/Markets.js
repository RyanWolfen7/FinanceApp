import styled from 'styled-components'

export const MarketContainer = styled.div`
    grid-area: 2 / 1 / span 9 / span 5;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    grid-auto-rows: auto;
    grid-gap: 5em;
`

export const SummaryContainer = styled.div`
    grid-area: 1 / 1 / span 1 / span 5; 
    color: white;
    background: black;
    opacity: 0.7;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    display: grid;
    align-items: center;
    height: 4.5vh;
`

export const ExchangeContainer = styled.div`
    overflow-x: none;
    white-space: nowrap;
    align-items: center;
    transform: translateX(100vw);
    
    animation: ${props => {
        const timer = props.length * 3
        return `moveSlideshow ${timer}s linear infinite`
    }};
    @keyframes moveSlideshow {
        100% { 
            transform: translateX(-100%);  
        }
    }
    
`
export const ExchangeElement = styled.div`
    display: inline-block;
    align-self: center;
    margin-right: 4vw;
    margin-left: 1vw;
    span {
        color: ${ props => props.positive ? '#39ff14' : '#FF0000' };
        font-weight: 900;
        padding: 0 1vw 0;
    }
`

export const MoversContainer = styled.div`
    grid-column-start: 4;
    grid-column-end: 6;
    background: #E8A87C;
    border-radius: 5%;
    height: 100%;
`