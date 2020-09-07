import React from 'react'
import { SideNav, SideNavElement, CloseButton } from '../../styles/NavBarStyles'

const SideBar = props => {
    const { open, width, openSideBar, navLinks } = props
    const linksList = Object.entries(navLinks)

    const renderLinks = () => {
        // links list 0 is the name, 1 is the href
        return linksList.map( link => {
            return (
                <SideNavElement> <a href={link[1]}> {link[0].toUpperCase()} </a> </SideNavElement>
            )
        })
    }

    return (
        <SideNav width={ open ? width : null}>
            <CloseButton> <div onClick={ () => { openSideBar()}}> &times; </div> </CloseButton>
            {renderLinks()}
        </SideNav>
    )
}

export default SideBar