import styled from 'styled-components'

export const SummaryContainer = styled.div`
    grid-area: 2 / 1 / span 1 / span 5; 
    color: white;
    background: black;
    opacity: 0.7;
    height: 50%;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    display: flex;
    align-items: center;
`

export const ExchangeContainer = styled.div`
    display: flex;
    overflow-x: none;
    white-space: nowrap;
    align-items: center;
    transform:${ props => { return props.firstStart ? 'translateX(101vw)' : 'none' }};
    
    animation: moveSlideshow 25s linear infinite;
    @keyframes moveSlideshow {
        100% { 
            transform: translateX(-85%);  
        }
    }
    
`
export const ExchangeElement = styled.div`
    display: inline-block;
    align-self: center;

    span {
        color: ${ props => { return props.findIncrease ? 'green' : 'red'}};
    }
`

// animation: moveSlideshow 1s linear infinite;
// @keyframes moveSlideshow {
//     100% { 
//         transform: translateX(-50%);  
//     }
// }