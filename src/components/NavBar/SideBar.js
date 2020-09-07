import React from 'react'
import { SideNav, CloseButton } from '../../styles/NavBarStyles'

const SideBar = props => {
    const { open, width, openSideBar } = props

    return (
        <SideNav width={ open ? width : null}>
            <CloseButton> <a href={null} onClick={ () => { openSideBar()}}> &times; </a> </CloseButton>
        </SideNav>
    )
}

export default SideBar