import React from 'react'
import { AppWrapper } from '../../styles/AppStyles'
import NavBar from '../NavBar/NavBar'

const App = ({ children }) => {
    console.log(children)
    return (
        <AppWrapper> 
            <NavBar/>
            {children} 
        </AppWrapper>
    )

}

export default App