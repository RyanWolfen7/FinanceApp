import styled from 'styled-components'

export const MarketContainer = styled.div`
    grid-area: 2 / 1 / span 9 / span 5;
    display: grid;
    grid-gap: 3em;
    margin: 0;
`

export const MarketBody = styled.div`
    grid-template-columns: repeat( 2, minmax(0, 1fr));
    display: grid;
    grid-gap: .5em;

`

export const SummaryContainer = styled.div`
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
    min-width: fit-content;
    place-self: end;
    background: #E8A87C;
    border-radius: 2%;
    display: grid;
    transition: .5s, 1s;
`

export const MoversHeader = styled.h1`
    margin: .5rem;
    display: grid;
    place-items: center;
    border-radius: 2%;
    color: white;
`

export const MoversBody = styled.div`
    background: #CFFEF8;
    margin: .5rem;
    border-radius: 2%;
    display: grid;
    place-items: center;
    padding: 0 .5rem 0;
`

export const MoverContainer = styled.div`
    background: #C38D9E;
    border-radius: 2%;
    display: grid;
    margin: .5rem;
    width: 100%;
    max-height: 100%;
`

export const MoverHeader = styled.h3`
    margin: 0rem;
    display: grid;
    place-items: center;
    border-radius: 5%;
    color: white;
    cursor: pointer;

    :hover {
        background: #E27D60;
    }
`

export const MoverBody = styled.div`
    background: #CFFEF8;
    margin: ${props => props.hidden ? '0' : '.25rem' };
    border-radius: 2%;
    display: grid;
    place-items: center;
    padding: ${props => props.hidden ? '0' : '0 .5rem 0' };
    opacity: ${props => props.hidden ? '0' : '1' };
    max-height: ${props => props.hidden ? '0' : '100%'};
    overflow: hidden;
    transition: ${props => props.hidden ? '.3s ease' : '1s ease'};
    grid-template-columns: repeat( 2, minmax(0, 1fr));
    place-items: center; 
`

export const MoverDiscriptor = styled.div`
    display: grid;
    margin: 1rem;
`

export const MoverDescription = styled.div`
    display: grid;
    margin: 1rem;
`

export const MoverItem = styled.div`
    min-width: max-content; 
`