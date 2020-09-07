import React from 'react'
import { SideNav, CloseButton } from '../../styles/NavBarStyles'

const SideBar = props => {
    const { open, width } = props
    console.log(props)

    return (
        <SideNav width={ open ? width : null}>
            <CloseButton> <a href={null}> &times; </a> </CloseButton>
        </SideNav>
    )
}

export default SideBar