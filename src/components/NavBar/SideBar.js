import React from 'react'
import { SideNav } from '../../styles/NavBarStyles'

const SideBar = props => {
    const { open, width } = props

    return (
        <SideNav width={ open ? width : null}>
            <h1>Works </h1>
        </SideNav>
    )
}

export default SideBar