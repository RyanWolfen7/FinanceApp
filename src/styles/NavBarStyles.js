import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'


export const NavContainer = styled.div`
    background-color: #C38D9E;
    background: #C38D9E -webkit-gradient(linear, left top, left bottom, from(#1E8D7D, 10%), to(#C38D9E, 100%)) no-repeat;
    background: #C38D9E -moz-linear-gradient(top, #1E8D7D, #C38D9E) no-repeat;
    filter: progid:DXImageTransforme.Microsoft.gradient(startColorstr=#1E8D7D, endColorstr=#C38D9E) no-repeat;
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#B34151, endColorstr=#B34151)" no-repeat;
    grid-area: 1 / 1 / span 1 / span 6;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    align-content: center;
    justify-items: center;
`

export const Title = styled.div`
    grid-area: 1 / 2 / span 1 / span 2;
    align-self: center;
    font-size: 5vw;
`

export const Hamburger = styled(GiHamburgerMenu)`
    align-self: center;
    font-size: 3vw;

    &hover: {

    }
`