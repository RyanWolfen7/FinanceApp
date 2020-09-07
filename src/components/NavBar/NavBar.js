import React, { useState } from 'react'
import { NavContainer, Title, Hamburger } from '../../styles/NavBarStyles'

const NavBar = props => {
    const [navBar, setNavBar ] = useState(false)

    return (
        <NavContainer>
            <Hamburger />
            <Title> Finance 4 U </Title>
        </NavContainer>
    )
}

export default NavBar