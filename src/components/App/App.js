import React from 'react'
import { AppWrapper } from '../../styles/AppStyles'
import NavBar from '../NavBar/NavBar'
import Schema from './Schema'

const App = ({ children }) => {
    return (
        <AppWrapper> 
            <NavBar navLinks={Schema.navLinks}/>
            {children} 
        </AppWrapper>
    )

}

export default App