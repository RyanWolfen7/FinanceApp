import styled from 'styled-components'

export const SummaryContainer = styled.div`
    grid-area: 2 / 1 / span 1 / span 5; 
    color: white;
    background: black;
    opacity: 0.7;
    height: 50%;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    display: grid;
    align-items: center;
`

export const ExchangeContainer = styled.div`
    overflow-x: none;
    white-space: nowrap;
    align-items: center;
    transform:${ props => { return props.firstStart ? 'translateX(100vw)' : 'none' }};
    
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
        color: ${ props => { return props.positive ? 'green' : 'red' }};
        padding: 0 1vw 0;
    }
`

// animation: moveSlideshow 1s linear infinite;
// @keyframes moveSlideshow {
//     100% { 
//         transform: translateX(-50%);  
//     }
// }