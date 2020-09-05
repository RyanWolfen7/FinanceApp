import React from 'react'
import { NavContainer, Title, Hamburger } from '../../styles/NavBarStyles'

const NavBar = props => {

    return (
        <NavContainer>
            <Hamburger />
            <Title> Finance 4 U </Title>
        </NavContainer>
    )
}

export default NavBar