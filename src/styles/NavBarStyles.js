import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'


export const NavContainer = styled.div`
    background-color: #C38D9E;
    background: #C38D9E -webkit-gradient(linear, left top, left bottom, from(#1E8D7D, 10%), to(#C38D9E, 100%)) no-repeat;
    background: #C38D9E -moz-linear-gradient(top, #1E8D7D, #C38D9E) no-repeat;
    filter: progid:DXImageTransforme.Microsoft.gradient(startColorstr=#1E8D7D, endColorstr=#C38D9E) no-repeat;
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#B34151, endColorstr=#B34151)" no-repeat;
    color: #FFFFFF;
    grid-area: 1 / 1 / span 1 / span 6;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    align-content: center;
    justify-items: center;
`

export const Title = styled.div`
    grid-area: 1 / 2 / span 1 / span 2;
    align-self: center;
    font-size: 5vh;
    cursor: pointer;
    transition: .5s, 1s;

    :hover {
        opacty: .8;
        background-color: #FFFFFF;
        color: #C38D9E;
        padding: auto;
        border-radius: 2%;
    }
`

export const Hamburger = styled(GiHamburgerMenu)`
    align-self: center;
    font-size: 5vh;
    cursor: pointer;
    transition: .5s, 1s;

    :hover {
        opacty: .8;
        background-color: #FFFFFF;
        color: #C38D9E;
        padding: auto;
        border-radius: 5%;
    }
`

export const SideNav = styled.div`
    height: 100%;
    transition: 4s;
    width: ${props => props.width ? props.width : '0' };
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #E27D60;
    overflow-x: hidden;
    dispay: grid;
    place-items: center;
`

export const CloseButton = styled.div`
    display: grid;
    color: #FFFFFF;
    align-items: center;
    justify-items: end;
    padding-right: 2vw;
    
    div {
        cursor: pointer;
        text-decoration: none;
        font-size: 3rem;
        transition: 0.3s;
    }

    div:hover {
        opacty: .8;
        color: black;
        padding: auto;
        border-radius: 5%;
    }
`

export const SideNavElement = styled.div`
    display: grid;
    place-items: center;
    margin: 1rem;

    a {
        cursor: pointer;
        color: white;
        text-decoration: none;
        font-size: 2rem;
        transition: ease 0.3s;
    }

    a:hover {
        color: #CFFFF8;
        background: #41B3A3;
        padding: auto;
        border-radius: 35%;
    }

`