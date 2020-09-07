import React, { useState } from 'react'
import { NavContainer, Title, Hamburger } from '../../styles/NavBarStyles'
import SideBar from './SideBar'

const NavBar = props => {
    const [sideBar, setSideBar ] = useState({ open: false, width: '25vw'})

    const openSideBar = () => { setSideBar({...sideBar, open: !sideBar.open})}

    return (
        <NavContainer>
            <Hamburger onClick={() => openSideBar()}/>
            <Title> Finance 4 U </Title>
            <SideBar {...sideBar} openSideBar={openSideBar} />
        </NavContainer>
    )
}

export default NavBar