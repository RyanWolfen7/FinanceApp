import React, { useState } from 'react'
import { NavContainer, Title, Hamburger } from '../../styles/NavBarStyles'
import SideBar from './SideBar'

const NavBar = props => {
    const { navLinks } = props
    const [sideBar, setSideBar ] = useState({ open: true, width: '25vw'})

    const openSideBar = () => { setSideBar({...sideBar, open: !sideBar.open})}

    return (
        <NavContainer>
            <Hamburger onClick={() => openSideBar()}/>
            <Title> Finance 4 U </Title>
            <SideBar {...sideBar} openSideBar={openSideBar} navLinks={navLinks} />
        </NavContainer>
    )
}

export default NavBar