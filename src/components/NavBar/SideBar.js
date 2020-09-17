import React from 'react'
import { SideNav, SideNavElement, CloseButton } from '../../styles/NavBarStyles'

const SideBar = props => {
    const { open, openSideBar, navLinks } = props
    const linksList = Object.entries(navLinks)

    const renderLinks = () => {
        return linksList.map( link => {
            const name = link[0]
            const address = link[1]

            return (
                <SideNavElement key={name}> <a href={address}> {name.toUpperCase()} </a> </SideNavElement>
            )
        })
    }

    return (
        <SideNav open={open}>
            <CloseButton> <div onClick={ () => { openSideBar()}}> &times; </div> </CloseButton>
            {renderLinks()}
        </SideNav>
    )
}

export default SideBar